function About() {
  return (
    <section id="about" className="mx-auto mt-14 w-[92%] max-w-6xl">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">About Me</p>
        <h2 className="display-font mt-2 text-2xl font-bold sm:text-4xl">A short introduction</h2>
      </div>

      <div className="glass p-6 sm:p-8">
        <p className="max-w-4xl text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">
          I am Habtamu Shewamene, a software engineering student with a strong interest in web development and problem-solving. I enjoy building real-world digital solutions and learning new technologies that improve my work. My goal is to grow as a full-stack developer, find a good job, and also take on freelance opportunities that help me create value for clients.
        </p>
      </div>
    </section>
  );
}

export default About;