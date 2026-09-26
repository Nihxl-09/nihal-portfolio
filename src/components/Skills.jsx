const skillGroups = [
  {
    label: 'DEVELOPMENT',
    items: ['HTML', 'CSS', 'JavaScript', 'Python', 'C', 'Lua'],
  },
  {
    label: 'AI & SOFTWARE',
    items: ['Artificial Intelligence', 'AI API Integration', 'Automation', 'Software Prototyping'],
  },
  {
    label: 'TOOLS',
    items: ['Git', 'GitHub', 'Roblox Studio'],
  },
  {
    label: 'WORKING SKILLS',
    items: ['Problem Solving', 'Teamwork', 'Presentation', 'Project Management'],
  },
];

function Skills() {
  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <div className="section-header reveal-item">
          <p className="eyebrow section-eyebrow text-mask" style={{ '--delay': '100ms' }}>
            <span>SKILLS & TOOLS</span>
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <div key={group.label} className="skill-group reveal-item" style={{ '--delay': `${180 + groupIndex * 100}ms` }}>
              <p className="skill-label text-mask" style={{ '--delay': `${groupIndex * 80}ms` }}>
                <span>{group.label}</span>
              </p>
              <ul className="skill-list">
                {group.items.map((item, index) => (
                  <li key={item} className="text-mask" style={{ '--delay': `${(groupIndex + 1) * 90 + index * 70}ms` }}>
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
