import { useEffect, useRef, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Navbar({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    const nav = navRef.current;
    const indicator = indicatorRef.current;
    const activeLink = linkRefs.current[activeSection];

    if (!nav || !indicator || !activeLink) {
      return;
    }

    const navRect = nav.getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();
    indicator.style.transform = `translateX(${linkRect.left - navRect.left}px)`;
    indicator.style.width = `${linkRect.width}px`;
  }, [activeSection]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <a
          className="brand"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('home');
          }}
          aria-label="Muhammad Nihal home"
        >
          <span className="brand-mark">MN</span>
          <span className="brand-text">Muhammad Nihal</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav ref={navRef} className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <span ref={indicatorRef} className="nav-indicator" aria-hidden="true" />
          {navItems.map((item) => (
            <a
              key={item.label}
              ref={(node) => {
                if (node) {
                  linkRefs.current[item.href.replace('#', '')] = node;
                }
              }}
              href={item.href}
              className={activeSection === item.href.replace('#', '') ? 'nav-link active' : 'nav-link'}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.href.replace('#', ''));
                handleLinkClick();
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
