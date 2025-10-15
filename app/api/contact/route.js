// /app/api/contact/route.js

import { Resend } from 'resend';



const resend = new Resend('re_LEVRjEjP_EcnHXuobyaLYSDWg8eo7biDU');

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    // Sanitize input (basic)
    const clean = (text) => text.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // ✅ 1. Send to Admin
    const adminEmail = await resend.emails.send({
      from: 'support@alpha-wealth.in', // Must be verified in Resend
      to: ['adityaddn07@gmail.com'],   // Replace with your admin email(s)
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Message from Evolve Technologies</h2>
        <p><strong>Name:</strong> ${clean(name)}</p>
        <p><strong>Email:</strong> ${clean(email)}</p>
        <p><strong>Phone:</strong> ${clean(phone)}</p>
        <p><strong>Message:</strong><br/>${clean(message)}</p>
      `,
    });

    // ✅ 2. Auto-reply to User
    const userReply = await resend.emails.send({
      from: 'support@alpha-wealth.in',
      to: [email],
      subject: 'Thanks for contacting Evolve Technologies!',
      html: `
        <p>Hi ${clean(name)},</p>
        <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
        <hr/>
        <p><strong>Your Message:</strong><br/>${clean(message)}</p>
        <p style="color: #888;">- Evolve Technologies Team</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, admin: adminEmail.id, user: userReply.id }), { status: 200 });

  } catch (error) {
    console.error('Resend error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
