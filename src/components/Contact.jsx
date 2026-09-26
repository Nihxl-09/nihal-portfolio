function Contact() {
  return (
    <section id="contact" className="section reveal">
      <div className="container contact-wrap">
        <div className="section-header contact-header reveal-item">
          <p className="eyebrow section-eyebrow text-mask" style={{ '--delay': '100ms' }}>
            <span>LET'S BUILD SOMETHING</span>
          </p>
        </div>

        <div className="contact-grid">
          <p className="contact-intro reveal-item text-mask" style={{ '--delay': '180ms' }}>
            <span>I am interested in collaborating on web-development, AI and student hackathon projects.</span>
          </p>

          <div className="contact-details reveal-item">
            <div className="contact-row text-mask" style={{ '--delay': '260ms' }}>
              <span className="contact-label">Email</span>
              <a href="mailto:nihxl09@gmail.com">nihxl09@gmail.com</a>
            </div>
            <div className="contact-row text-mask" style={{ '--delay': '320ms' }}>
              <span className="contact-label">LinkedIn</span>
              <a href="https://www.linkedin.com/in/muhammad-nihal-706071389" target="_blank" rel="noreferrer">
                https://www.linkedin.com/in/muhammad-nihal-706071389
              </a>
            </div>
            <div className="contact-row text-mask" style={{ '--delay': '380ms' }}>
              <span className="contact-label">GitHub</span>
              <a href="https://github.com/Nihxl-09" target="_blank" rel="noreferrer">
                https://github.com/Nihxl-09
              </a>
            </div>
            <div className="contact-row text-mask" style={{ '--delay': '440ms' }}>
              <span className="contact-label">Location</span>
              <span>Mangaluru, Karnataka, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
