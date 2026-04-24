import { FiMoon, FiSun } from 'react-icons/fi';

function Navbar({ isDarkMode, onToggleDarkMode }) {
  return (
    <header className="sticky top-0 z-30">
      <nav className="glass mx-auto mt-4 flex w-[92%] max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#home" className="display-font text-lg font-bold tracking-tight sm:text-xl">
          Habtamu Shewamene
        </a>
        <div className="flex items-center gap-3 sm:gap-5">
          <a href="#about" className="text-sm font-medium text-slate-700 transition hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400">
            About
          </a>
          <a href="#projects" className="text-sm font-medium text-slate-700 transition hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400">
            Projects
          </a>
          <a href="#skills" className="text-sm font-medium text-slate-700 transition hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400">
            Skills
          </a>
          <a href="#contact" className="text-sm font-medium text-slate-700 transition hover:text-emerald-600 dark:text-slate-200 dark:hover:text-emerald-400">
            Contact
          </a>
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="rounded-full border border-slate-300/80 bg-white p-2 text-slate-700 transition hover:scale-105 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle dark mode"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
