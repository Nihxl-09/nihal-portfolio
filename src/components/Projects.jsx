import ProjectCard from './ProjectCard';

const projects = [
  {
    number: 'PROJECT 01',
    title: 'NIHAL PORTFOLIO',
    description:
      'A personal developer portfolio presenting my work, technical interests, education and experience through a refined interactive interface.',
    features: [
      'Responsive portfolio experience',
      'Animated section transitions',
      'Interactive navigation',
      'Project showcase',
      'Professional developer presentation',
    ],
    technology: 'React, JavaScript, CSS, Vite',
    contribution:
      'Designed and developed the portfolio experience, refined the visual system and built the interactive sections.',
    status: 'Live',
    shortLabel: 'Portfolio',
    variant: 'one',
    link: 'https://nihxl-09.github.io/nihal-portfolio/',
  },
  {
    number: 'PROJECT 02',
    title: 'SPENDLY',
    description:
      'A focused expense-tracking application designed to help users organize spending and maintain a clearer view of their finances.',
    features: [
      'Expense tracking',
      'Category organization',
      'Transaction management',
      'Clean dashboard experience',
      'Responsive interface',
    ],
    technology: 'HTML, CSS, JavaScript',
    contribution:
      'Designed and developed the application interface and implemented the core expense-management experience.',
    status: 'Live',
    shortLabel: 'Finance',
    variant: 'two',
    link: 'https://nihxl-09.github.io/student-expense-tracker/',
  },
  {
    number: 'PROJECT 03',
    title: 'TASKFLOW',
    description:
      'A personal productivity workspace focused on organizing tasks, monitoring progress and creating a clearer daily workflow.',
    features: [
      'Task management',
      'Progress tracking',
      'Productivity dashboard',
      'Task organization',
      'Responsive workspace',
    ],
    technology: 'React, JavaScript, CSS, Vite',
    contribution:
      'Designed and developed the productivity interface, task workflows and interactive progress experience.',
    status: 'Live',
    shortLabel: 'Productivity',
    variant: 'three',
    link: 'https://nihxl-09.github.io/taskflow/',
  },
  {
    number: 'PROJECT 04',
    title: 'FORMCRAFT',
    description:
      'A professional form and survey builder concept designed around creating structured digital forms through a clear and accessible interface.',
    features: [
      'Form creation',
      'Question management',
      'Structured layouts',
      'Survey-focused workflows',
      'Responsive interface',
    ],
    technology: 'React, JavaScript, CSS, Vite',
    contribution:
      'Designed and developed the application interface and created the core form-building experience.',
    status: 'Live',
    shortLabel: 'Forms',
    variant: 'one',
    link: 'https://nihxl-09.github.io/formcraft/',
  },
  {
    number: 'PROJECT 05',
    title: 'MONARCH HOUSE',
    description:
      'A premium hospitality website concept built around presenting a refined property experience through editorial-style visual design.',
    features: [
      'Premium property presentation',
      'Responsive layout',
      'Editorial visual direction',
      'Interactive sections',
      'Hospitality-focused experience',
    ],
    technology: 'HTML, CSS, JavaScript',
    contribution:
      'Designed and developed the website experience with a focus on premium presentation, layout and interaction.',
    status: 'Live',
    shortLabel: 'Hospitality',
    variant: 'two',
    link: 'https://nihxl-09.github.io/monarch-house/',
  },
  {
    number: 'PROJECT 06',
    title: 'ATELIER',
    description:
      'A refined creative studio website designed to present services, visual identity and selected work through a modern editorial experience.',
    features: [
      'Creative studio presentation',
      'Service sections',
      'Editorial layout',
      'Responsive experience',
      'Interactive navigation',
    ],
    technology: 'HTML, CSS, JavaScript',
    contribution:
      'Designed and developed the complete website experience, visual hierarchy and interactive presentation.',
    status: 'Live',
    shortLabel: 'Studio',
    variant: 'three',
    link: 'https://nihxl-09.github.io/atelier/',
  },
];

function Projects() {
  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <div className="section-header reveal-item">
          <p className="eyebrow section-eyebrow">
            <span>SELECTED WORK</span>
          </p>
        </div>

        <div className="projects-stack">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;