import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { WHATSAPP_LINK } from '@/data';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="topbar">
      <Link className="brand" to="/" onClick={closeMenu} aria-label="Lee's Beauty Lounge home">
        <span className="brand-mark">L</span>
        <span className="brand-copy">
          <strong>LEE’S</strong>
          <span>Beauty Lounge</span>
        </span>
      </Link>

      <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
        {menuOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            onClick={closeMenu}
            className={isActive(link.to) ? 'nav-link active' : 'nav-link'}
          >
            {link.label}
          </Link>
        ))}
        <a className="nav-cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" onClick={closeMenu}>
          <Phone size={15} /> Book now
        </a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer section-pad">
      <Link className="brand" to="/">
        <span className="brand-mark">L</span>
        <span className="brand-copy">
          <strong>LEE’S</strong>
          <span>Beauty Lounge</span>
        </span>
      </Link>
      <p>Beauty that feels like you.</p>
      <span>© 2024 Lee’s Beauty Lounge</span>
    </footer>
  );
}
