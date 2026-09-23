'use client'
import { useState } from 'react'
import { site } from '../data/site'

// Shared submit behaviour for the contact and join forms: shows progress,
// reports real success only, and on any failure tells the visitor how to
// reach Vishal directly so nothing is lost.
export default function LeadForm({ endpoint, submitLabel, successText, children }) {
  const [state, setState] = useState({ status: 'idle', message: '' })

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setState({ status: 'sending', message: '' })
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(body.error || 'send_failed')
      form.reset()
      setState({ status: 'sent', message: successText })
    } catch (err) {
      setState({
        status: 'error',
        message: err.message && err.message !== 'send_failed'
          ? err.message
          : `That didn’t go through. Please email ${site.email} or WhatsApp ${site.phone}.`,
      })
    }
  }

  const sending = state.status === 'sending'
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
      {/* Hidden from people; bots fill it in and get quietly ignored. */}
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${endpoint}-website`}>Website</label>
        <input id={`${endpoint}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div>
        <button type="submit" className="btn btn-primary" disabled={sending} aria-busy={sending}>
          {sending ? 'Sending…' : submitLabel}
        </button>
      </div>
      <div aria-live="polite">
        {state.status === 'sent' && <p className="notice notice-ok">{state.message}</p>}
        {state.status === 'error' && <p className="notice notice-err">{state.message}</p>}
      </div>
    </form>
  )
}
