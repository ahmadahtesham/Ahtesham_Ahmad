import nodemailer from 'nodemailer';

let transporter = null;

function initTransporter() {
  if (transporter) return transporter;
  
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
  
  return transporter;
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'All fields are required.' 
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Please provide a valid email address.' 
    });
  }

  // Initialize transporter
  const mail = initTransporter();

  // Fallback: if email credentials aren't configured, log and return success
  if (!mail) {
    console.log('--- New contact form submission (email not configured — logging only) ---');
    console.log({ name, email, subject, message, receivedAt: new Date().toISOString() });
    return res.json({
      success: true,
      note: 'Email is not configured on the server yet, so this was logged instead of sent. Configure EMAIL_USER and EMAIL_PASS in Vercel environment variables.',
    });
  }

  try {
    await mail.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.TO_EMAIL || process.env.EMAIL_USER,
      subject: `[Portfolio] ${subject}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return res.json({ success: true });
  } catch (err) {
    console.error('Failed to send contact email:', err.message);
    return res.status(500).json({ 
      success: false, 
      error: 'Failed to send message. Please try again later.' 
    });
  }
}
