import { ImageWithFallback } from './ImageWithFallback';
import { Phone, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden bg-[#f7f1e6]">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1765338915553-6e02fe63ff4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYW4lMjBmb29kJTIwaW5qZXJhfGVufDF8fHx8MTc3NzAwMjA2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Ethiopian food platter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3b2416]/88 via-[#3b2416]/72 to-[#3b2416]/55"></div>
        <img
          src="/gursha-logo.png"
          alt="Gursha Kitchen watermark"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 w-[min(82vw,520px)] -translate-x-1/2 -translate-y-1/2 opacity-10 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-7xl flex-col px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex-1 flex flex-col justify-center items-center text-center text-white max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-amber-100/90 backdrop-blur-sm sm:text-sm">
            Traditional Ethiopian dining
          </div>
          <h2 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6">
            Experience Authentic Ethiopian and Continental Cuisine
          </h2>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl text-white/90">
            Traditional coffee ceremony • Fresh injera • Family-friendly atmosphere
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#menu"
              className="rounded-full bg-[#d4a017] px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-amber-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#c58f13]"
            >
              View Menu
            </a>
            <a
              href="tel:+251"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white/20"
            >
              <Phone className="w-5 h-5" />
              Order Now
            </a>
          </div>
          <div className="mt-8 flex items-center gap-2 text-white/90">
            <MapPin className="w-5 h-5" />
            <span>Near Debre Birhan Main Roundabout</span>
          </div>
        </div>
      </div>
    </section>
  );
}