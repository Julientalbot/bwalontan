import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      )
    }

    // Ici, vous pouvez intégrer un service d'envoi d'email comme:
    // - SendGrid
    // - Mailgun
    // - Resend
    // - AWS SES
    
    // Pour l'instant, on simule l'envoi
    console.log('Nouveau message de contact:', { name, email, message })

    // Dans un cas réel, vous enverriez l'email ici
    // await sendEmail({ to: 'contact@bwalontan.re', from: email, subject: `Contact de ${name}`, body: message })

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    )
  }
}