import ProjectCard from './ProjectCard';

const projects = [
  {
    number: 'PROJECT 01',
    title: 'CAREERROAD AI',
    description:
      'AI-powered platform helping students create personalized 90-day career-learning roadmaps based on target role, current skills and learning goals.',
    features: [
      'Career goal input',
      'Skill-gap analysis',
      'Personalized learning roadmap',
      'Recommended learning resources',
      'Student-focused career planning',
    ],
    technology: 'HTML, CSS, JavaScript, AI tools, AI API integration',
    contribution:
      'Planned the user flow, designed the interface, defined MVP features and worked on the AI-powered roadmap concept.',
    status: 'Prototype in progress',
    shortLabel: 'Roadmap',
    variant: 'one',
  },
  {
    number: 'PROJECT 02',
    title: 'NEIGHBGIG',
    description:
      'A hyperlocal platform connecting students, workers and local users with nearby short-term gigs and everyday tasks.',
    features: [
      'Nearby job discovery',
      'Skill-based matching',
      'Distance and price filters',
      'Worker profiles',
      'Ratings / proof of work',
      'Student-friendly opportunities',
    ],
    technology: 'HTML, CSS, JavaScript, Web Development, AI tools',
    contribution:
      'Defined the problem, planned platform features, designed the matching concept and prepared the project as a hackathon MVP.',
    status: 'Hackathon prototype',
    shortLabel: 'Local gigs',
    variant: 'two',
  },
  {
    number: 'PROJECT 03',
    title: 'SHA',
    description:
      'A desktop AI assistant designed to interact with applications, windows and the user\'s computer through natural language.',
    features: [
      'Desktop AI assistant interface',
      'Application interaction',
      'Window management',
      'Screen understanding',
      'Natural-language computer control',
      'AI-powered computer interaction',
    ],
    technology: 'Electron, React, JavaScript / TypeScript, OpenAI API, Python',
    contribution:
      'Designed and developed the assistant concept, UI and computer-interaction systems, and tested practical AI-assisted desktop workflows.',
    status: 'Prototype in progress',
    shortLabel: 'Desktop AI',
    variant: 'three',
  },
];

function Projects() {
  return (
    <section id="projects" className="section reveal">
      <div className="container">
        <div className="section-header reveal-item">
          <p className="eyebrow section-eyebrow">SELECTED WORK</p>
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
