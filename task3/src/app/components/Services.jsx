import { UtensilsCrossed, ShoppingBag, Truck, Users } from 'lucide-react';

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Dine-In',
    description: 'Enjoy our family-friendly atmosphere with free WiFi and comfortable seating. Perfect for breakfast, lunch, and dinner.',
    features: ['Clean environment', 'Free WiFi', 'Air conditioning', 'Parking available']
  },
  {
    icon: ShoppingBag,
    title: 'Takeaway',
    description: 'Quick and convenient takeaway service. Call ahead to have your order ready when you arrive.',
    features: ['Fast preparation', 'Quality packaging', 'Phone orders', 'Pickup at counter']
  },
  {
    icon: Truck,
    title: 'Delivery',
    description: 'Fast delivery within 5km radius of Debre Birhan city center. Hot meals delivered to your doorstep.',
    features: ['30-minute delivery', '5km radius', 'Hot & fresh', 'Minimal delivery fee']
  },
  {
    icon: Users,
    title: 'Catering',
    description: 'Professional catering services for events, parties, and business meetings. Customizable menus available.',
    features: ['Event catering', 'Office lunches', 'Party packages', 'Private dining']
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Multiple ways to enjoy our delicious food</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className="text-center p-6 rounded-lg hover:shadow-xl transition">
                <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  {service.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}