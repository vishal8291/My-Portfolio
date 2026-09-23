import { ImageResponse } from 'next/og'

// The picture WhatsApp, LinkedIn and X show when someone shares the site.
export const alt = 'Vishal Tiwari, founder of CustomeAI'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff', padding: '72px 80px', fontFamily: 'sans-serif' }}>
        <div style={{ display: 'flex', fontSize: 26, letterSpacing: 4, color: '#0f5c45', textTransform: 'uppercase' }}>
          Founder, CustomeAI · Mumbai
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, color: '#161514', lineHeight: 1.05, letterSpacing: -2 }}>Software small businesses</div>
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            <span style={{ color: '#161514' }}>can&nbsp;</span><span style={{ color: '#0f5c45' }}>trust with real work</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #dfdad7', paddingTop: 28 }}>
          <div style={{ fontSize: 40, fontWeight: 700, color: '#161514' }}>Vishal Tiwari.</div>
          <div style={{ fontSize: 30, color: '#6b6661' }}>vishal-tiwari.me</div>
        </div>
      </div>
    ),
    size,
  )
}
