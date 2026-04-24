const sampleProjects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description:
      'A clean and modern portfolio website that presents my skills, projects, and contact information in a professional way.',
    features: ['Responsive design', 'Dark mode', 'Typing animation', 'Contact form', 'Smooth section navigation'],
    stack: ['React', 'Tailwind CSS', 'Vite'],
    link: '#'
  },
  {
    id: 2,
    title: 'Mini CRM - Client Lead Management System',
    description:
      'A simple CRM system for tracking client leads, managing updates, and keeping notes in one place.',
    features: ['Lead tracking', 'Status updates', 'Notes and follow-up management', 'Search and filtering'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: '#'
  },
  {
    id: 3,
    title: 'Business Website',
    description:
      'A professional website for a café, gym, or small business to show services and connect with customers.',
    features: ['Services section', 'Contact details', 'Location information', 'Fully responsive layout'],
    stack: ['React', 'Tailwind CSS', 'Node.js'],
    link: '#'
  }
];

function Projects() {
  return (
    <section id="projects" className="mx-auto mt-14 w-[92%] max-w-6xl">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">Projects</p>
        <h2 className="display-font mt-2 text-2xl font-bold sm:text-4xl">Selected Projects</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sampleProjects.map((project) => (
          <article key={project.id} className="glass group p-5 transition hover:-translate-y-1">
            <h3 className="display-font text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">{project.description}</p>
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Features</p>
              <ul className="mt-2 grid gap-2 text-sm text-slate-700 dark:text-slate-300">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={`${project.id}-${tech}`}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="mt-5 inline-flex text-sm font-semibold text-emerald-600 transition group-hover:text-emerald-500 dark:text-emerald-400"
            >
              View Project {'->'}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
