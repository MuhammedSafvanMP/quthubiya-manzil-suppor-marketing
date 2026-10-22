import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="container">
        <p>© 2026 Quthubiya Manzil · Zorrow Tech. All rights reserved.</p>
        <p className="footer-links" style={{ marginTop: '12px' }}>
          <Link to="/privacy">Privacy Policy</Link> |{' '}
          <a href="#">Terms of Use</a> |{' '}
          <Link to="/">Support</Link> |{' '}
          <Link to="/marketing">Marketing</Link>
        </p>
        <p
          style={{
            marginTop: '16px',
            fontSize: '0.85rem',
            color: '#88b39a',
          }}
        >
          Built with{' '}
          <i className="fas fa-heart" style={{ color: 'var(--accent-gold)' }}></i>{' '}
          for the Ummah
        </p>
      </div>
    </footer>
  );
}