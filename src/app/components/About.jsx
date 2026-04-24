import { ImageWithFallback } from './ImageWithFallback';
import { Wifi, Car, Clock, Coffee } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Our Restaurant</h2>
            <p className="text-lg text-gray-700 mb-4">
              We are a local restaurant serving authentic Ethiopian and continental dishes in the heart of Debre Birhan.
              Our specialty is traditional Ethiopian coffee ceremony and injera with various wat dishes.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether you are looking for a family-friendly dining experience, quick takeaway, or catering for your special event,
              we provide quality meals in a clean and welcoming environment.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-yellow-600 p-2 rounded-lg">
                  <Wifi className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Free WiFi</h3>
                  <p className="text-sm text-gray-600">First in Debre Birhan</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-600 p-2 rounded-lg">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Free Parking</h3>
                  <p className="text-sm text-gray-600">Ample space</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-600 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">Within 30 minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-yellow-600 p-2 rounded-lg">
                  <Coffee className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Coffee Ceremony</h3>
                  <p className="text-sm text-gray-600">Traditional experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1682495889756-9229b479faaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxldGhpb3BpYW4lMjBmb29kJTIwaW5qZXJhfGVufDF8fHx8MTc3NzAwMjA2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Ethiopian food"
              className="w-full h-64 object-cover rounded-lg"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1630861413071-a424a4d6d155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpb3BpYW4lMjBjb2ZmZWUlMjBjZXJlbW9ueXxlbnwxfHx8fDE3NzcwMTg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Coffee ceremony"
              className="w-full h-64 object-cover rounded-lg mt-8"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1765099271664-614c541196ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxyZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc3NzAxODkzMnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Restaurant interior"
              className="w-full h-64 object-cover rounded-lg"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1628690570354-2e04dc6b141c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxldGhpb3BpYW4lMjBmb29kJTIwaW5qZXJhfGVufDF8fHx8MTc3NzAwMjA2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Ethiopian dish"
              className="w-full h-64 object-cover rounded-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}