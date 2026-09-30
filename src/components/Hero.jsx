const focusAreas = ['WEB DEVELOPMENT', 'AI APPLICATIONS', 'DIGITAL PRODUCTS'];

function Hero() {
  return (
    <section id="home" className="section hero-section reveal">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow-group">
            <p className="eyebrow eyebrow-reveal">
              <span className="eyebrow-text">MANGALURU, INDIA</span>
            </p>

            <p className="eyebrow eyebrow-reveal">
              <span className="eyebrow-text">COMPUTER SCIENCE • DEVELOPMENT • PRODUCT BUILDING</span>
            </p>

            <p className="eyebrow eyebrow-reveal">
              <span className="eyebrow-text">FOUNDER — BUILTBYNIX&CO</span>
            </p>
          </div>

          <h1 className="hero-name" aria-label="Muhammad Nihal">
            <span className="hero-line">
              <span
                className="word reveal-word"
                style={{ '--delay': '120ms' }}
              >
                Muhammad
              </span>
            </span>

            <span className="hero-line">
              <span
                className="word reveal-word"
                style={{ '--delay': '260ms' }}
              >
                Nihal.
              </span>
            </span>
          </h1>

          <p className="hero-lead hero-text-reveal">
            <span className="reveal-line">
              <span
                className="reveal-word"
                style={{ '--delay': '440ms' }}
              >
                Turning ideas into
              </span>
            </span>

            <span className="reveal-line">
              <span
                className="reveal-word"
                style={{ '--delay': '560ms' }}
              >
                practical digital products.
              </span>
            </span>
          </p>

          <p className="hero-description hero-text-reveal">
            <span className="reveal-line">
              <span
                className="reveal-word"
                style={{ '--delay': '700ms' }}
              >
                I design and build web experiences, software projects and
              </span>
            </span>

            <span className="reveal-line">
              <span
                className="reveal-word"
                style={{ '--delay': '820ms' }}
              >
                AI-powered applications with a focus on usability and detail.
              </span>
            </span>
          </p>

          <div className="hero-actions hero-text-reveal">
            <a
              className="button button-primary reveal-button"
              href="#projects"
              style={{ '--delay': '980ms' }}
            >
              VIEW PROJECTS
            </a>

            <a
              className="button button-secondary reveal-button"
              href="#contact"
              style={{ '--delay': '1040ms' }}
            >
              CONTACT ME
            </a>
          </div>
        </div>

        <div className="hero-side" aria-label="Core focus areas">
          <div className="focus-stack">
            {focusAreas.map((item, index) => (
              <span
                key={item}
                className={`focus-label focus-label-${index + 1}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;