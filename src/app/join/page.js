import LeadForm from '../components/LeadForm.jsx'
import { site } from '../data/site'
import { talentAreas } from '../data/services'

export const metadata = {
  title: 'Join us',
  description: `Good at development, design, AI, content or sales? Show ${site.name} your work and build with ${site.studio.name}.`,
  alternates: { canonical: '/join' },
}

const whatMatters = [
  ['Real work beats a resume', 'A live site, a GitHub repo, a design file, a video you edited. Show me something you made.'],
  ['Freshers are welcome', 'Low marks, a gap year or no job yet don’t matter here. What you can build does.'],
  ['Care about the details', 'We build things small businesses rely on every day. Finishing properly matters more than finishing fast.'],
  ['Honest communication', 'Say when you’re stuck, say when something won’t work. That’s how we keep promises to clients.'],
]

export default function JoinPage() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <span className="label">Join us · {site.studio.name}</span>
          <h1>Good at something? Build with us.</h1>
          <p className="lede">
            {site.studio.name}{' '}is a small studio growing project by project. When a project needs skills I don&apos;t
            have in-house, I want to call people I already know are good. If that could be you, show me your work.
          </p>
        </div>
      </header>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap two-col" style={{ gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)' }}>
          <LeadForm endpoint="/api/join" submitLabel="Send my work" successText="Received. I read every one myself and will reply within a few days.">
            <div className="field">
              <label htmlFor="jf-name">Your name</label>
              <input id="jf-name" name="name" autoComplete="name" required maxLength={100} />
            </div>
            <div className="field">
              <label htmlFor="jf-contact">Email or phone number</label>
              <input id="jf-contact" name="contact" autoComplete="email" required maxLength={100} />
            </div>
            <div className="field">
              <label htmlFor="jf-area">What are you best at?</label>
              <select id="jf-area" name="area" required defaultValue="">
                <option value="" disabled>Choose one</option>
                {talentAreas.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
            <div className="field">
              <label htmlFor="jf-work">Link to your work <span className="muted">(optional, but it helps)</span></label>
              <input id="jf-work" name="work" type="url" inputMode="url" placeholder="https://" maxLength={300} />
              <span className="hint">Portfolio, GitHub, Behance, Drive folder, YouTube, anything.</span>
            </div>
            <div className="field">
              <label htmlFor="jf-about">Tell me about yourself</label>
              <textarea id="jf-about" name="about" required maxLength={3000}
                placeholder="What have you built or made? What do you want to get better at?" />
            </div>
          </LeadForm>
          <aside>
            <span className="label">What matters here</span>
            <ul className="rows">
              {whatMatters.map(([t, d]) => (
                <li key={t}><span><span className="r-title">{t}</span><br /><span className="r-sub">{d}</span></span></li>
              ))}
            </ul>
            <p className="muted" style={{ marginTop: 18, fontSize: '0.95rem' }}>
              No open job listings right now: this is how I meet people before a project needs them. I reply to everyone.
            </p>
          </aside>
        </div>
      </section>
    </>
  )
}
