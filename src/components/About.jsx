const learningTracks = [
  'Full-stack web development',
  'AI API integration',
  'Git and GitHub',
  'Team-based software development',
  'Problem solving',
  'Project presentation',
];

function About() {
  return (
    <section id="about" className="section reveal">
      <div className="container">
        <div className="section-header reveal-item">
          <p className="eyebrow section-eyebrow text-mask" style={{ '--delay': '100ms' }}>
            <span>ABOUT ME</span>
          </p>
        </div>

        <div className="about-grid reveal-item">
          <div className="about-copy">
            <p className="text-mask" style={{ '--delay': '180ms' }}><span>I am a Computer Science student from Mangaluru interested in web development, artificial intelligence and software project building.</span></p>
            <p className="text-mask" style={{ '--delay': '260ms' }}><span>I am developing my skills in C programming, Python, HTML, CSS, JavaScript, GitHub, AI tools and Lua Script. I enjoy turning ideas into practical prototypes and learning through hands-on projects and hackathons.</span></p>
            <p className="text-mask" style={{ '--delay': '340ms' }}><span>My current interests include AI-powered websites, automation tools, game development and real-world solutions for students and local communities.</span></p>
            <p className="text-mask" style={{ '--delay': '420ms' }}><span>I am currently looking to improve my development skills, collaborate with other builders and participate in student hackathons where I can contribute to meaningful projects.</span></p>
          </div>

          <aside className="learning-panel reveal-item" aria-labelledby="learning-title">
            <p id="learning-title" className="learning-title text-mask" style={{ '--delay': '150ms' }}><span>CURRENTLY LEARNING</span></p>
            <ul className="learning-list">
              {learningTracks.map((item, index) => (
                <li key={item} className="text-mask" style={{ '--delay': `${200 + index * 70}ms` }}>
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
