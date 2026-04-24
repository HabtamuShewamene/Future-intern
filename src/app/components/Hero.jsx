import { ImageWithFallback } from './ImageWithFallback';
import { Phone, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1765338915553-6e02fe63ff4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYW4lMjBmb29kJTIwaW5qZXJhfGVufDF8fHx8MTc3NzAwMjA2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Ethiopian food platter"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col">
        <nav className="flex justify-between items-center py-6">
          <div className="text-white">
            <h1 className="text-2xl md:text-3xl font-bold">Debre Birhan Restaurant</h1>
            <p className="text-sm text-white/90">Authentic Ethiopian Cuisine</p>
          </div>
          <div className="hidden md:flex gap-8 text-white">
            <a href="#about" className="hover:text-yellow-400 transition">About</a>
            <a href="#menu" className="hover:text-yellow-400 transition">Menu</a>
            <a href="#services" className="hover:text-yellow-400 transition">Services</a>
            <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          </div>
        </nav>

        <div className="flex-1 flex flex-col justify-center items-center text-center text-white max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Experience Authentic Ethiopian and Continental Cuisine
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Traditional coffee ceremony • Fresh injera • Family-friendly atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg transition"
            >
              View Menu
            </a>
            <a
              href="tel:+251"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 transition"
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
    </div>
  );
}