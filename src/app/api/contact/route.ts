import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Send the email
    const response = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'aaayushi971@gmail.com',
      subject: `New message from ${name}: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 15px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, response });
    } catch (error: unknown) {
        const err = error as Error;
        console.error('[Email Error]', err.message);
        return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
        );
    }

}
