import { useRef, useState } from 'react';
import { profile } from '../data/portfolioData.js';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(null); // { type: 'ok' | 'err', text: string }
  const [submitting, setSubmitting] = useState(false);
  const abortControllerRef = useRef(null);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({ type: 'err', text: 'Please fill out all fields.' });
      return;
    }

    // Prevent double submission
    if (submitting) return;

    setSubmitting(true);
    setStatus(null);
    
    // Cancel previous request if still pending
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    abortControllerRef.current = new AbortController();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        signal: abortControllerRef.current.signal,
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: 'ok', text: data.note || 'Message sent — thanks for reaching out!' });
        setForm(initialForm);
      } else {
        setStatus({ type: 'err', text: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        setStatus({
          type: 'err',
          text: 'Could not reach the server. Is the backend running on port 5000?',
        });
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head">
          <h2>Contact</h2>
          <p>Have an opening or a project in mind? Send a message.</p>
        </div>
        <div className="contact-grid">
          <div>
            <div className="contact-info-item"><div className="ic">📍</div><div><b>Location</b><br /><span>{profile.location}</span></div></div>
            <div className="contact-info-item"><div className="ic">✉</div><div><b>Email</b><br /><span>{profile.email}</span></div></div>
            <div className="contact-info-item"><div className="ic">☎</div><div><b>Phone</b><br /><span>{profile.phone}</span></div></div>
            <div className="contact-info-item"><div className="ic">in</div><div><b>LinkedIn</b><br /><span>linkedin.com/in/ahtesham-ahmad</span></div></div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" placeholder="Your name" value={form.name} onChange={update('name')} required />
              <input type="email" placeholder="Your email" value={form.email} onChange={update('email')} required />
            </div>
            <input type="text" placeholder="Subject" value={form.subject} onChange={update('subject')} required />
            <textarea placeholder="Your message" value={form.message} onChange={update('message')} required />
            <p className="form-note">
              This form posts to a live Node.js backend — no email client popup, it sends for real
              once the server's email credentials are configured.
            </p>
            <button type="submit" className="btn primary" style={{ alignSelf: 'flex-start' }} disabled={submitting}>
              {submitting ? 'Sending…' : 'Send message'}
            </button>
            {status && (
              <div className={`form-status show ${status.type === 'ok' ? 'ok' : 'err'}`}>
                {status.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}