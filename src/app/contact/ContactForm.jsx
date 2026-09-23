'use client'
import { useState } from 'react'
import { site } from '../data/site'

export default function ContactForm() {
  const [state, setState] = useState({ status: 'idle', message: '' })

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setState({ status: 'sending', message: '' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || 'send_failed')
      form.reset()
      setState({ status: 'sent', message: 'Sent. I’ll reply within 24 hours.' })
    } catch (err) {
      setState({
        status: 'error',
        message: err.message && err.message !== 'send_failed'
          ? err.message
          : `Your message didn’t go through. Please email ${site.email} or WhatsApp ${site.phone}.`,
      })
    }
  }

  const sending = state.status === 'sending'

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="cf-name">Your name</label>
        <input id="cf-name" name="name" autoComplete="name" required maxLength={100} />
      </div>
      <div className="field">
        <label htmlFor="cf-contact">Email or phone number</label>
        <input id="cf-contact" name="contact" autoComplete="email" required maxLength={100} />
        <span className="hint">However you&apos;d like me to reply.</span>
      </div>
      <div className="field">
        <label htmlFor="cf-business">Business name <span className="muted">(optional)</span></label>
        <input id="cf-business" name="business" autoComplete="organization" maxLength={150} />
      </div>
      <div className="field">
        <label htmlFor="cf-message">What do you need?</label>
        <textarea id="cf-message" name="message" required maxLength={4000}
          placeholder="For example: we take bookings on WhatsApp and lose track of who has paid." />
      </div>
      {/* Hidden from people; bots fill it in and get quietly ignored. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-website">Website</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <button type="submit" className="btn btn-primary" disabled={sending} aria-busy={sending}>
          {sending ? 'Sending…' : 'Send message'}
        </button>
      </div>
      <div aria-live="polite">
        {state.status === 'sent' && <p className="notice notice-ok">{state.message}</p>}
        {state.status === 'error' && <p className="notice notice-err">{state.message}</p>}
      </div>
    </form>
  )
}
