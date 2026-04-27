const navigationLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-950/10 bg-[#f7f1e6]/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]">
          <img
            src="/gursha-logo.png"
            alt="Gursha Kitchen logo"
            className="h-11 w-auto object-contain drop-shadow-sm transition duration-200 group-hover:brightness-110 sm:h-12 md:h-14"
          />
          <div className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-amber-900/80">
              Gursha Kitchen
            </span>
            <span className="block text-xs text-amber-950/70">
              Taste of Ethiopia
            </span>
          </div>
        </a>

        <nav className="flex items-center gap-3 sm:gap-5">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-amber-950/80 transition hover:text-amber-700 hover:underline underline-offset-4 md:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}