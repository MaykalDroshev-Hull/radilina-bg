import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, message, locale = 'bg' } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get email credentials from environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        { error: 'Email configuration missing' },
        { status: 500 }
      );
    }

    // Create transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email content
    const subject = locale === 'bg' 
      ? `Нов запитване от ${name} - Radilina`
      : locale === 'en'
      ? `New inquiry from ${name} - Radilina`
      : `Nouă cerere de la ${name} - Radilina`;

    const emailBody = `
      <h2>${locale === 'bg' ? 'Ново запитване' : locale === 'en' ? 'New Inquiry' : 'Nouă cerere'}</h2>
      <p><strong>${locale === 'bg' ? 'Име' : locale === 'en' ? 'Name' : 'Nume'}:</strong> ${name}</p>
      <p><strong>${locale === 'bg' ? 'Телефон' : locale === 'en' ? 'Phone' : 'Telefon'}:</strong> ${phone}</p>
      <p><strong>${locale === 'bg' ? 'Съобщение' : locale === 'en' ? 'Message' : 'Mesaj'}:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: emailUser,
      to: 'info.radilina@gmail.com',
      subject: subject,
      html: emailBody,
    });

    return NextResponse.json(
      { 
        success: true, 
        messageId: info.messageId,
        message: locale === 'bg' 
          ? 'Съобщението е изпратено успешно!'
          : locale === 'en'
          ? 'Message sent successfully!'
          : 'Mesajul a fost trimis cu succes!'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
