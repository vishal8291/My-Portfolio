import { NextResponse } from 'next/server'

/**
 * Portfolio enquiries go into the same lead system as customeai.tech: saved to
 * its database, emailed to Vishal, visible in its admin dashboard, and covered
 * by its uptime monitor. This route used to only console.log the message, so
 * every enquiry sent from this site was lost.
 *
 * Server to server, so no API keys live in this project and no CORS is needed.
 * Only a real success is reported as success; anything else tells the visitor
 * how to reach Vishal directly, so an enquiry is never silently dropped.
 */
const LEADS_API = 'https://customeai.tech/api/consultation'

const clean = (v, max) => String(v ?? '').trim().slice(0, max)

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Please fill in the form and try again.' }, { status: 400 })
  }

  // Honeypot: people never see this field. Pretend success so bots move on.
  if (clean(body.website, 200)) return NextResponse.json({ success: true })

  const name = clean(body.name, 100)
  const contact = clean(body.contact, 100)
  const business = clean(body.business, 150)
  const message = clean(body.message, 4000)

  if (!name || !contact || !message) {
    return NextResponse.json({ error: 'Please add your name, a way to reply, and a line about what you need.' }, { status: 400 })
  }

  try {
    const res = await fetch(LEADS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'vishal-tiwari.me contact form',
        // Passed along for the lead API's logs. Its rate limit (5 a minute) may
        // still count all portfolio enquiries together, which is plenty here.
        'X-Forwarded-For': request.headers.get('x-forwarded-for') ?? '',
        // Monitoring: the lead API validates a probe and stops before saving
        // or emailing, so the whole path can be checked without a fake lead.
        ...(request.headers.get('x-health-probe') === '1' ? { 'X-Health-Probe': '1' } : {}),
      },
      body: JSON.stringify({
        name,
        contact,
        business: `${business || 'Not given'} · via vishal-tiwari.me`,
        message,
      }),
      signal: AbortSignal.timeout(12000),
    })

    if (res.status === 429) {
      return NextResponse.json({ error: 'Too many messages in a minute. Please wait a moment and try again.' }, { status: 429 })
    }
    if (!res.ok) {
      console.error('contact: lead API answered', res.status)
      return NextResponse.json({ error: null }, { status: 502 })
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('contact: lead API unreachable', err?.name, err?.message)
    return NextResponse.json({ error: null }, { status: 502 })
  }
}
