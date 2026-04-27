export function Footer() {
  return (
    <footer className="bg-[#2f1d13] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-center">
          <a href="#home" className="group inline-flex flex-col items-center gap-3 transition-transform duration-200 hover:scale-[1.02]">
            <img
              src="/gursha-logo.png"
              alt="Gursha Kitchen logo"
              className="h-20 w-auto object-contain transition duration-200 group-hover:brightness-110 sm:h-24"
            />
            <span className="text-center text-sm uppercase tracking-[0.28em] text-amber-100/90">
              Gursha Kitchen
            </span>
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div>
            <h3 className="mb-3 text-xl font-bold">Gursha Kitchen</h3>
            <p className="text-sm text-amber-50/70">
              Authentic Ethiopian and continental cuisine in the heart of Debre Birhan since 2020.
            </p>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-amber-50/70">
              <li><a href="#about" className="transition hover:text-amber-200">About Us</a></li>
              <li><a href="#menu" className="transition hover:text-amber-200">Menu</a></li>
              <li><a href="#services" className="transition hover:text-amber-200">Services</a></li>
              <li><a href="#contact" className="transition hover:text-amber-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Why Choose Us?</h4>
            <ul className="space-y-2 text-sm text-amber-50/70">
              <li>Free WiFi</li>
              <li>Family-friendly environment</li>
              <li>Affordable prices</li>
              <li>Fast delivery service</li>
              <li>Free parking</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-amber-50/60">
          <p>&copy; 2026 Gursha Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}