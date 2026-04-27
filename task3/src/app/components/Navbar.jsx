const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.05] bg-white/90 shadow-sm backdrop-blur-[8px]">
      <div className="px-[5%]">
        <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between">
          <a href="#home" className="group inline-flex items-center">
            <img
              src="/gursha-logo.png"
              alt="Gursha Kitchen logo"
              className="h-[50px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.05] group-hover:brightness-110"
            />
          </a>

          <nav className="flex h-full items-center gap-4 sm:gap-6 md:gap-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative inline-flex h-full items-center text-xs font-medium uppercase tracking-[0.08em] text-slate-800 transition-colors duration-200 hover:text-amber-700 after:absolute after:bottom-5 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-amber-700 after:transition-all after:duration-300 hover:after:w-8 sm:text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}