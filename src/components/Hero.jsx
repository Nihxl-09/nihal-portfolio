const focusAreas = ['WEB APPLICATIONS', 'AI APPLICATIONS', 'GAME SYSTEMS'];

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
              <span className="eyebrow-text">COMPUTER SCIENCE STUDENT</span>
            </p>
          </div>

          <h1 className="hero-name" aria-label="Muhammad Nihal">
            <span className="hero-line">
              <span className="word reveal-word" style={{ '--delay': '120ms' }}>Muhammad</span>
            </span>
            <span className="hero-line">
              <span className="word reveal-word" style={{ '--delay': '260ms' }}>Nihal.</span>
            </span>
          </h1>

          <p className="hero-lead hero-text-reveal">
            <span className="reveal-line"><span className="reveal-word" style={{ '--delay': '440ms' }}>I build practical software,</span></span>
            <span className="reveal-line"><span className="reveal-word" style={{ '--delay': '560ms' }}>AI applications and games.</span></span>
          </p>

          <p className="hero-description hero-text-reveal">
            <span className="reveal-line"><span className="reveal-word" style={{ '--delay': '700ms' }}>I build practical web, AI and game-development projects while improving my programming skills through</span></span>
            <span className="reveal-line"><span className="reveal-word" style={{ '--delay': '820ms' }}>hands-on learning and hackathons.</span></span>
          </p>

          <div className="hero-actions hero-text-reveal">
            <a className="button button-primary reveal-button" href="#projects" style={{ '--delay': '980ms' }}>
              VIEW PROJECTS
            </a>
            <a className="button button-secondary reveal-button" href="#contact" style={{ '--delay': '1040ms' }}>
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
