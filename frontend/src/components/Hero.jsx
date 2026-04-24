import { useEffect, useMemo, useState } from 'react';

const roles = ['Full Stack Web Developer', 'React Developer', 'Problem Solver'];

function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = useMemo(() => roles[roleIndex % roles.length], [roleIndex]);

  useEffect(() => {
    const typeSpeed = isDeleting ? 55 : 95;
    const pauseAtEnd = 1200;

    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
          return;
        }

        if (!isDeleting && displayedText.length === currentRole.length) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && displayedText.length > 0) {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
          return;
        }

        setIsDeleting(false);
        setRoleIndex((prev) => prev + 1);
      },
      !isDeleting && displayedText.length === currentRole.length ? pauseAtEnd : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentRole, displayedText, isDeleting]);

  return (
    <section id="home" className="hero-bg relative mx-auto mt-8 w-[92%] max-w-6xl overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 px-5 py-14 shadow-2xl backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 sm:px-10 sm:py-20">
      <div className="absolute -left-20 top-12 h-48 w-48 rounded-full bg-emerald-300/25 blur-3xl dark:bg-emerald-500/15" />
      <div className="absolute -right-20 bottom-10 h-48 w-48 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-500/15" />

      <div className="relative z-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
          Welcome to my portfolio
        </p>
        <h1 className="display-font text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Full Stack Web Developer
          <span className="block text-slate-700 dark:text-slate-200">{displayedText}<span className="animate-pulse">|</span></span>
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-700 dark:text-slate-300 sm:text-base">
          I build responsive, reliable, and user-friendly web applications using modern frontend and backend tools. I focus on clean design, practical functionality, and solutions that help businesses and users.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-500"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
