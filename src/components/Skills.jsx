const skillGroups = [
  {
    label: 'DEVELOPMENT',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'C'],
  },
  {
    label: 'AI & SOFTWARE',
    items: [
      'AI Applications',
      'LLM APIs',
      'AI Tools',
      'Automation',
      'Software Prototyping',
    ],
  },
  {
    label: 'DESIGN & TOOLS',
    items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Blender'],
  },
  {
    label: 'PRODUCT & WORK',
    items: [
      'UI/UX',
      'Problem Solving',
      'Project Planning',
      'Team Collaboration',
      'Presentation',
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <div className="section-header reveal-item">
          <p
            className="eyebrow section-eyebrow text-mask"
            style={{ '--delay': '100ms' }}
          >
            <span>SKILLS & TOOLS</span>
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.label}
              className="skill-group reveal-item"
              style={{ '--delay': `${180 + groupIndex * 100}ms` }}
            >
              <p
                className="skill-label text-mask"
                style={{ '--delay': `${groupIndex * 80}ms` }}
              >
                <span>{group.label}</span>
              </p>

              <ul className="skill-list">
                {group.items.map((item, index) => (
                  <li
                    key={item}
                    className="text-mask"
                    style={{
                      '--delay': `${(groupIndex + 1) * 90 + index * 70}ms`,
                    }}
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;