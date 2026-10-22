import { useEffect } from 'react';

const features = [
  {
    icon: 'fa-clock',
    title: 'Accurate prayer times',
    desc: 'Get precise Salah times based on your location, with multiple calculation methods and notifications.',
  },
  {
    icon: 'fa-compass',
    title: 'Qibla compass',
    desc: 'Find the direction of the Kaaba effortlessly with our smooth, calibrated Qibla compass.',
  },
  {
    icon: 'fa-book-open',
    title: 'Quran & Duas',
    desc: 'Read the Quran, browse daily supplications, and listen to beautiful recitations.',
  },
  {
    icon: 'fa-bell',
    title: 'Smart adhan alerts',
    desc: 'Customisable notifications for each prayer, so you never miss a moment of worship.',
  },
];

export default function Marketing() {
  useEffect(() => {
    document.title = 'Marketing · Quthubiya Manzil';
  }, []);

  return (
    <div id="marketing-page">
      <div className="marketing-hero">
        <div className="hero-text">
          <h1>
            <i className="fas fa-mosque"></i> Quthubiya Manzil
          </h1>
          <p>
            Your daily companion for Islamic prayer times, Qibla, and spiritual
            growth – designed with peace and simplicity.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="#"
              className="btn-primary"
              style={{ background: 'var(--primary)' }}
            >
              <i className="fab fa-apple"></i> Download on App Store
            </a>
            <a
              href="#"
              className="btn-primary"
              style={{ background: '#2a8e55' }}
            >
              <i className="fab fa-google-play"></i> Get it on Google Play
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <i className="fas fa-mobile-alt"></i>
          <div className="badge">
            <i className="fas fa-star"></i> 4.9 ★ · 10k+ downloads
          </div>
        </div>
      </div>

      <h2 className="section-title" style={{ marginTop: '20px' }}>
        Key features
      </h2>
      <p className="subhead">
        Everything you need to stay connected to your faith, beautifully
        organised.
      </p>
      <div className="card-grid">
        {features.map((f) => (
          <div className="feature-card" key={f.title}>
            <div className="feature-icon">
              <i className={`fas ${f.icon}`}></i>
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          background: 'var(--primary-soft)',
          borderRadius: '40px',
          padding: '40px 48px',
          margin: '50px 0 20px',
          textAlign: 'center',
          border: '1px solid #cbe0d2',
        }}
      >
        <h3
          style={{
            fontSize: '2rem',
            color: 'var(--dark)',
            fontWeight: 700,
          }}
        >
          Begin your spiritual journey
        </h3>
        <p
          style={{
            fontSize: '1.2rem',
            maxWidth: '600px',
            margin: '16px auto 28px',
            color: '#1e4a2e',
          }}
        >
          Quthubiya Manzil is free to download and use. Experience a calmer,
          more connected daily routine.
        </p>
        <a
          href="#"
          className="btn-primary"
          style={{
            background: 'var(--primary)',
            fontSize: '1.2rem',
            padding: '18px 48px',
          }}
        >
          <i className="fas fa-download"></i> Install now
        </a>
      </div>
    </div>
  );
}