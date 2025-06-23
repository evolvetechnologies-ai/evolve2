import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, phone, message } = req.body; // ✅ Use description

  console.log("✅ Received data:", { name, email, phone, message });

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "Missing required fields." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",      // Replace with real Gmail
      pass: "your-app-password",         // Replace with real App Password
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "your-email@gmail.com",          // Receiver's email
    subject: "New Contact Form Submission",
    html: `
      <h2>Contact Form Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p> <!-- ✅ FIXED -->
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully");
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
