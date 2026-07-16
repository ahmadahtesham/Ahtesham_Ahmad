import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173').split(',');

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

// Initialize email transporter once at startup
let transporter = null;
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

// Simple health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Serves the profile data too, so the frontend *could* fetch it from here
// instead of a local file — useful if you want a CMS-like setup later.
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Ahtesham Ahmad',
    title: 'Testing Lead & Quality Analyst',
    email: 'ahmad.ahtesham.12.12@gmail.com',
    phone: '+91-7860148524',
    location: 'New Delhi, India',
    linkedin: 'https://linkedin.com/in/ahtesham-ahmad',
    github: 'https://github.com/Github15687555',
  });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
  }

  // Dev fallback: if email credentials aren't configured yet, just log the submission
  if (!transporter) {
    console.log('--- New contact form submission (email not configured — logging only) ---');
    console.log({ name, email, subject, message, receivedAt: new Date().toISOString() });
    return res.json({
      success: true,
      note: 'Email is not configured on the server yet, so this was logged instead of sent. See server/.env.example.',
    });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.TO_EMAIL || process.env.EMAIL_USER,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('Failed to send contact email:', err.message);
    res.status(500).json({ success: false, error: 'Failed to send message. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio API running on http://localhost:${PORT}`);
});
