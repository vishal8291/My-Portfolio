import { NextResponse } from 'next/server'
import { clean, forwardLead, readJson } from '../../lib/leads'

// Project enquiries. Delivered into the CustomeAI lead system (see lib/leads.js).
export async function POST(request) {
  const body = await readJson(request)
  if (!body) return NextResponse.json({ error: 'Please fill in the form and try again.' }, { status: 400 })

  // Honeypot: people never see this field. Pretend success so bots move on.
  if (clean(body.website, 200)) return NextResponse.json({ success: true })

  const name = clean(body.name, 100)
  const contact = clean(body.contact, 100)
  const business = clean(body.business, 150)
  const message = clean(body.message, 4000)
  if (!name || !contact || !message) {
    return NextResponse.json({ error: 'Please add your name, a way to reply, and a line about what you need.' }, { status: 400 })
  }

  return forwardLead(request, {
    name,
    contact,
    business: `${business || 'Not given'} · via vishal-tiwari.me`,
    message,
  })
}
