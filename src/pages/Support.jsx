import { useEffect, useState } from 'react';

export default function Support() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = 'Support · Quthubiya Manzil';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.target.reset();
  };

  return (
    <div id="support-page">
      <div className="support-hero">
        <h2 className="section-title">We're here to help</h2>
        <p className="subhead" style={{ marginBottom: 0 }}>
          Need assistance with Quthubiya Manzil? Our support team is ready to
          help you with any questions, technical issues, or feedback about the
          app.
        </p>
      </div>

      <div className="contact-methods">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <div>
            <h4>Email support</h4>
            <p>
              <a href="mailto:zorrowtech@gmail.com">zorrowtech@gmail.com</a>
            </p>
            <p style={{ fontSize: '0.9rem', color: '#4a6b58' }}>
              We reply within 24 hours
            </p>
          </div>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <div>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919400517720">+91 9400517720</a>
            </p>
            <p style={{ fontSize: '0.9rem', color: '#4a6b58' }}>
              Mon–Fri, 9am–6pm (IST)
            </p>
          </div>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h4>Zorrow Tech IT Solutions PVT LTD</h4>
            <p>Malappuram, Kerala, India 676505</p>
          </div>
        </div>
      </div>

      <div className="simple-form">
        <h3
          style={{
            fontSize: '1.6rem',
            color: 'var(--dark)',
            marginBottom: '8px',
          }}
        >
          Send us a message
        </h3>
        <p style={{ color: '#4a6b58', marginBottom: '28px' }}>
          Fill the form and we'll get back to you.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Your name</label>
            <input type="text" placeholder="e.g., Ahmed Khan" required />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="you@example.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Describe your issue or question..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">
            <i className="fas fa-paper-plane"></i> Send message
          </button>
          {sent && (
            <p
              style={{
                marginTop: '16px',
                color: 'var(--primary)',
                fontWeight: 600,
              }}
            >
              <i className="fas fa-check-circle"></i> Thank you! Your message
              has been sent (demo).
            </p>
          )}
        </form>
      </div>

      <div
        style={{
          marginTop: '48px',
          background: '#ffffffd6',
          borderRadius: '28px',
          padding: '24px 30px',
          border: '1px solid #d7e8dc',
        }}
      >
        <h3
          style={{
            fontSize: '1.3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <i
            className="fas fa-question-circle"
            style={{ color: 'var(--primary)' }}
          ></i>{' '}
          Quick answers
        </h3>
        <p style={{ marginTop: '8px' }}>
          Check our{' '}
          <a
            href="/faq"
            style={{ color: 'var(--primary)', fontWeight: 500 }}
          >
            FAQ page
          </a>{' '}
          or the in-app help center for instant solutions.
        </p>
      </div>
    </div>
  );
}