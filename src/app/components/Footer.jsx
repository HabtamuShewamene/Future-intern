export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Debre Birhan Restaurant</h3>
            <p className="text-gray-400 text-sm">
              Authentic Ethiopian and continental cuisine in the heart of Debre Birhan since 2020.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="#menu" className="hover:text-yellow-400 transition">Menu</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
              <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Why Choose Us?</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Free WiFi</li>
              <li>Family-friendly environment</li>
              <li>Affordable prices</li>
              <li>Fast delivery service</li>
              <li>Free parking</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2026 Debre Birhan Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}