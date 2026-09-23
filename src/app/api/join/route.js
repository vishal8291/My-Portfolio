import { NextResponse } from 'next/server'
import { clean, forwardLead, readJson } from '../../lib/leads'
import { talentAreas } from '../../data/services'

// "Join us" applications. They go into the same CustomeAI lead system as
// project enquiries, clearly marked TALENT so they can't be mistaken for a
// client, and Vishal gets the same email alert.
export async function POST(request) {
  const body = await readJson(request)
  if (!body) return NextResponse.json({ error: 'Please fill in the form and try again.' }, { status: 400 })
  if (clean(body.website, 200)) return NextResponse.json({ success: true }) // honeypot

  const name = clean(body.name, 100)
  const contact = clean(body.contact, 100)
  const area = talentAreas.includes(body.area) ? body.area : ''
  const work = clean(body.work, 300)
  const about = clean(body.about, 3000)

  if (!name || !contact || !area || !about) {
    return NextResponse.json({ error: 'Please add your name, a way to reply, your area and a few lines about yourself.' }, { status: 400 })
  }
  if (work && !/^https?:\/\/\S+$/i.test(work)) {
    return NextResponse.json({ error: 'Your work link should start with http:// or https://' }, { status: 400 })
  }

  return forwardLead(request, {
    name,
    contact,
    business: `TALENT · ${area} · via vishal-tiwari.me`,
    message: `Wants to join CustomeAI.\nArea: ${area}\nWork: ${work || 'no link given'}\n\n${about}`,
  })
}
