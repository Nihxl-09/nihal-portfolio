const interests = [
  'Programming',
  'Web Development',
  'Artificial Intelligence',
  'Software Projects',
  'Hackathons',
  'Game Development',
];

function Education() {
  return (
    <section id="education" className="section reveal">
      <div className="container">
        <div className="section-header reveal-item">
          <p className="eyebrow section-eyebrow text-mask" style={{ '--delay': '100ms' }}>
            <span>EDUCATION</span>
          </p>
        </div>

        <div className="education-wrap">
          <div className="education-card reveal-item">
            <div className="education-meta">
              <span className="education-institution text-mask" style={{ '--delay': '180ms' }}><span>P. A. College of Engineering, Mangaluru</span></span>
              <span className="education-program text-mask" style={{ '--delay': '240ms' }}><span>Computer Science Student</span></span>
            </div>

            <div className="education-interests">
              <p className="text-mask" style={{ '--delay': '300ms' }}><span>Relevant interests:</span></p>
              <ul>
                {interests.map((item, index) => (
                  <li key={item} className="text-mask" style={{ '--delay': `${340 + index * 60}ms` }}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
