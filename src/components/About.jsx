const learningTracks = [
  'Full-stack web development',
  'AI & LLM integrations',
  'Product-focused UI/UX',
  'Modern JavaScript & React',
  'Software architecture',
  'Real-world product development',
];

function About() {
  return (
    <section id="about" className="section reveal">
      <div className="container">
        <div className="section-header reveal-item">
          <p
            className="eyebrow section-eyebrow text-mask"
            style={{ '--delay': '100ms' }}
          >
            <span>ABOUT ME</span>
          </p>
        </div>

        <div className="about-grid reveal-item">
          <div className="about-copy">
            <p className="text-mask" style={{ '--delay': '180ms' }}>
              <span>
                I am a Computer Science student from Mangaluru focused on
                building practical software, web experiences and digital
                products.
              </span>
            </p>

            <p className="text-mask" style={{ '--delay': '260ms' }}>
              <span>
                My work combines development, design and AI to turn ideas into
                functional products with a strong focus on usability, clarity
                and detail.
              </span>
            </p>

            <p className="text-mask" style={{ '--delay': '340ms' }}>
              <span>
                I work with technologies including Python, C, JavaScript,
                React, Node.js and AI/LLM tools, while continuously expanding
                my understanding of modern software development.
              </span>
            </p>

            <p className="text-mask" style={{ '--delay': '420ms' }}>
              <span>
                Alongside my studies, I am building real-world projects and
                developing BuiltByNix&Co, a web services company focused on
                creating purposeful digital experiences for clients.
              </span>
            </p>
          </div>

          <aside
            className="learning-panel reveal-item"
            aria-labelledby="learning-title"
          >
            <p
              id="learning-title"
              className="learning-title text-mask"
              style={{ '--delay': '150ms' }}
            >
              <span>CURRENTLY EXPLORING</span>
            </p>

            <ul className="learning-list">
              {learningTracks.map((item, index) => (
                <li
                  key={item}
                  className="text-mask"
                  style={{ '--delay': `${200 + index * 70}ms` }}
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;