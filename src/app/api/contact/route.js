import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    // Log submission (visible in Vercel Function logs)
    console.log('📬 New contact form submission:', {
      name,
      email,
      subject,
      message: message.substring(0, 100) + (message.length > 100 ? '...' : ''),
      timestamp: new Date().toISOString(),
    })

    // Respond with success — integrate Resend/Nodemailer here when ready
    return NextResponse.json(
      { success: true, message: 'Message received! I will get back to you soon.' },
      { status: 200 }
    )
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
