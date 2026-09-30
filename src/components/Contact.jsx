function Contact() {
  return (
    <section id="contact" className="section reveal">
      <div className="container contact-wrap">
        <div className="section-header contact-header reveal-item">
          <p
            className="eyebrow section-eyebrow text-mask"
            style={{ '--delay': '100ms' }}
          >
            <span>LET'S CONNECT</span>
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-intro reveal-item text-mask" style={{ '--delay': '180ms' }}>
            <span>
              Have an idea, project or opportunity in mind? I am open to
              meaningful collaborations, software projects and conversations
              around building useful digital products.
            </span>
          </div>

          <div className="contact-details reveal-item">
            <div className="contact-row text-mask" style={{ '--delay': '260ms' }}>
              <span className="contact-label">Email</span>
              <a href="mailto:nihxl09@gmail.com">nihxl09@gmail.com</a>
            </div>

            <div className="contact-row text-mask" style={{ '--delay': '320ms' }}>
              <span className="contact-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/muhammad-nihal-706071389"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile ↗
              </a>
            </div>

            <div className="contact-row text-mask" style={{ '--delay': '380ms' }}>
              <span className="contact-label">GitHub</span>
              <a
                href="https://github.com/Nihxl-09"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Nihxl-09 ↗
              </a>
            </div>

            <div className="contact-row text-mask" style={{ '--delay': '440ms' }}>
              <span className="contact-label">BuiltByNix&Co</span>
              <a
                href="https://nihxl-09.github.io/builtbynix-co/"
                target="_blank"
                rel="noreferrer"
              >
                Web Services & Digital Products ↗
              </a>
            </div>

            <div className="contact-row text-mask" style={{ '--delay': '500ms' }}>
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