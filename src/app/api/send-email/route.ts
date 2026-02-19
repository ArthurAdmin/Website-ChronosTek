import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Create transporter using Gmail SMTP
    // Note: You need to use an App Password, not your regular Gmail password
    // To create an App Password: https://support.google.com/accounts/answer/185833
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'chronostecch@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD, // App Password from Google
      },
    });

    const mailOptions = {
      from: '"ChronosTech Site" <chronostecch@gmail.com>',
      to: 'chronostecch@gmail.com',
      replyTo: email,
      subject: `Nova mensagem de ${name} - ChronosTech`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #2563eb;">Nova mensagem do site ChronosTech</h2>
          
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone}</p>
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #374151;">Mensagem:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    
    // Check if it's a authentication error (wrong password)
    const errorMessage = error instanceof Error ? error.message : String(error);
    if (errorMessage.includes('Invalid login') || errorMessage.includes('535')) {
      return NextResponse.json(
        { message: 'Erro de autenticação. Verifique a configuração do email.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { message: 'Erro ao enviar email. Tente novamente.' },
      { status: 500 }
    );
  }
}
