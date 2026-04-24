import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Visit Us</h2>
            <p className="text-xl text-gray-300 mb-8">
              We are located in the heart of Debre Birhan, easily accessible from anywhere in the city.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">Near Debre Birhan Main Roundabout</p>
                  <p className="text-gray-300">Debre Birhan, Ethiopia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-600 p-3 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Working Hours</h3>
                  <p className="text-gray-300">Monday - Saturday: 8:00 AM - 10:00 PM</p>
                  <p className="text-gray-300">Sunday: 10:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Call to Order</h3>
                  <a href="tel:+251" className="text-gray-300 hover:text-yellow-400 transition">
                    +251 XX XXX XXXX
                  </a>
                  <p className="text-sm text-gray-400 mt-1">For reservations and delivery</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Email</h3>
                  <a href="mailto:info@debrebirhanrestaurant.com" className="text-gray-300 hover:text-yellow-400 transition">
                    info@debrebirhanrestaurant.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-gray-800 rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-4">Google Maps</h3>
              <div className="bg-gray-700 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-yellow-600" />
                  <p className="text-gray-400">Embed your Google Maps location here</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Add your actual Google Maps iframe code
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <h4 className="font-semibold text-lg">Quick Order</h4>
                <a
                  href="tel:+251"
                  className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white text-center py-3 rounded-lg font-semibold transition"
                >
                  Call Now to Order
                </a>
                <p className="text-sm text-gray-400 text-center">
                  Delivery within 30 minutes • 5km radius
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}