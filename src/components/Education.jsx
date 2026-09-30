const educationHistory = [
  {
    institution: 'P. A. College of Engineering, Mangaluru',
    program: 'B.E. Computer Science & Engineering',
    period: '2025 — 2029',
    status: 'Currently in 2nd Year',
  },
  {
    institution: 'Prestige International School and College',
    program: 'Higher Secondary Education',
    period: '2022 — 2024',
    status: 'Completed',
  },
];

const interests = [
  'Software Development',
  'Web Development',
  'Artificial Intelligence',
  'Digital Products',
  'UI/UX & Product Design',
  'Hackathons & Project Building',
];

function Education() {
  return (
    <section id="education" className="section reveal">
      <div className="container">
        <div className="section-header reveal-item">
          <p
            className="eyebrow section-eyebrow text-mask"
            style={{ '--delay': '100ms' }}
          >
            <span>EDUCATION</span>
          </p>
        </div>

        <div className="education-wrap">
          {educationHistory.map((education, index) => (
            <div
              key={education.institution}
              className="education-card reveal-item"
              style={{ '--delay': `${160 + index * 120}ms` }}
            >
              <div className="education-meta">
                <span
                  className="education-institution text-mask"
                  style={{ '--delay': `${180 + index * 120}ms` }}
                >
                  <span>{education.institution}</span>
                </span>

                <span
                  className="education-program text-mask"
                  style={{ '--delay': `${240 + index * 120}ms` }}
                >
                  <span>{education.program}</span>
                </span>

                <span
                  className="education-program text-mask"
                  style={{ '--delay': `${300 + index * 120}ms` }}
                >
                  <span>{education.period}</span>
                </span>

                <span
                  className="education-program text-mask"
                  style={{ '--delay': `${340 + index * 120}ms` }}
                >
                  <span>{education.status}</span>
                </span>
              </div>
            </div>
          ))}

          <div className="education-card reveal-item">
            <div className="education-interests">
              <p
                className="text-mask"
                style={{ '--delay': '420ms' }}
              >
                <span>AREAS OF INTEREST</span>
              </p>

              <ul>
                {interests.map((item, index) => (
                  <li
                    key={item}
                    className="text-mask"
                    style={{ '--delay': `${460 + index * 60}ms` }}
                  >
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