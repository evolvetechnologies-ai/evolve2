const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serves HTML, CSS, JS from /public

// POST route for form submission
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sales@evolvetechnologies.co.in',       // your email (admin)
      pass: 'evolve@1998',           // Gmail app password
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,        // Shows user’s name/email in inbox
    to: 'adityaddn07@gmail.com',           // where you (admin) receive the message
    subject: `New Contact Form Submission`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send message.');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
