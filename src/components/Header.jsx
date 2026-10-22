import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="app-header">
      <div className="container header-inner">
        <Link to="/" className="logo-area">
          <div className="logo-icon">
            <img src="./logo.png" alt="Quthubiya Manzil logo" />
          </div>
          <div className="app-name">
            Quthubiya <span>Manzil</span>
          </div>
        </Link>
        <nav className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <i className="fas fa-life-ring"></i> Support
          </NavLink>
          <NavLink
            to="/marketing"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <i className="fas fa-star"></i> Marketing
          </NavLink>
          <NavLink
            to="/privacy"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <i className="fas fa-shield-alt"></i> Privacy
          </NavLink>
        </nav>
      </div>
    </header>
  );
}