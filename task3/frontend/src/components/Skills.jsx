const skillGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express']
  },
  {
    title: 'Database',
    items: ['MongoDB', 'MySQL']
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code']
  }
];

function Skills() {
  return (
    <section id="skills" className="mx-auto mt-14 w-[92%] max-w-6xl">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">Skills</p>
        <h2 className="display-font mt-2 text-2xl font-bold sm:text-4xl">What I Work With</h2>
      </div>

      <div className="glass p-6 sm:p-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
              <h3 className="display-font text-lg font-semibold text-slate-900 dark:text-slate-100">{group.title}</h3>
              <ul className="mt-4 grid gap-3 text-sm text-slate-700 dark:text-slate-300">
                {group.items.map((skill) => (
                  <li key={skill} className="rounded-xl bg-slate-100 px-3 py-2 dark:bg-slate-800">
                    {skill}
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
