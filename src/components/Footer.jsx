function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer reveal-item">
      <div className="container footer-shell">
        <div>
          <p className="footer-name">Muhammad Nihal</p>
          <p className="footer-role">
            Computer Science Student · Developer · Founder of BuiltByNix&Co
          </p>
        </div>

        <p className="footer-location">Mangaluru, India</p>

        <p className="footer-meta">
          © {currentYear} Muhammad Nihal
        </p>
      </div>
    </footer>
  );
}

export default Footer;