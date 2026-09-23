import { NextResponse } from 'next/server'

/**
 * Every form on this site delivers into the CustomeAI lead system: saved to
 * its database, emailed to Vishal, visible in its admin dashboard, and
 * covered by its uptime monitor. (The original contact route only
 * console.logged, so every enquiry before Sep 2026 was lost.)
 *
 * Server to server: no API keys live in this project and no CORS is needed.
 * Only a real success is reported as success; anything else tells the
 * visitor how to reach Vishal directly, so nothing is silently dropped.
 */
const LEADS_API = 'https://customeai.tech/api/consultation'

export const clean = (v, max) => String(v ?? '').trim().slice(0, max)

export async function forwardLead(request, { name, contact, business, message }) {
  try {
    const res = await fetch(LEADS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'vishal-tiwari.me form',
        // Passed along for the lead API's logs. Its rate limit (5 a minute)
        // may still count all portfolio submissions together; plenty here.
        'X-Forwarded-For': request.headers.get('x-forwarded-for') ?? '',
        // Monitoring: the lead API validates a probe and stops before saving
        // or emailing, so the whole path can be checked without a fake lead.
        ...(request.headers.get('x-health-probe') === '1' ? { 'X-Health-Probe': '1' } : {}),
      },
      body: JSON.stringify({ name, contact, business, message }),
      signal: AbortSignal.timeout(12000),
    })
    if (res.status === 429) {
      return NextResponse.json({ error: 'Too many messages in a minute. Please wait a moment and try again.' }, { status: 429 })
    }
    if (!res.ok) {
      console.error('forms: lead API answered', res.status)
      return NextResponse.json({ error: null }, { status: 502 })
    }
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('forms: lead API unreachable', err?.name, err?.message)
    return NextResponse.json({ error: null }, { status: 502 })
  }
}

export async function readJson(request) {
  try {
    return await request.json()
  } catch {
    return null
  }
}
