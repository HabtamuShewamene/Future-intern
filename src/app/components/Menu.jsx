import { ImageWithFallback } from './ImageWithFallback';

const menuCategories = [
  {
    title: 'Ethiopian Dishes',
    image: 'https://images.unsplash.com/photo-1742281095661-29de44440bb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxldGhpb3BpYW4lMjBmb29kJTIwaW5qZXJhfGVufDF8fHx8MTc3NzAwMjA2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    items: [
      { name: 'Doro Wat', description: 'Spicy chicken stew with hard-boiled egg', price: '120 Birr' },
      { name: 'Tibs', description: 'Sauteed meat with vegetables and spices', price: '110 Birr' },
      { name: 'Kitfo', description: 'Minced raw beef with spices and butter', price: '130 Birr' },
      { name: 'Shiro Wat', description: 'Chickpea flour stew (vegetarian)', price: '60 Birr' },
      { name: 'Gomen', description: 'Collard greens with garlic and ginger', price: '50 Birr' },
      { name: 'Beyaynetu', description: 'Mixed vegetarian platter', price: '90 Birr' }
    ]
  },
  {
    title: 'Continental Dishes',
    image: 'https://images.unsplash.com/photo-1593252719532-53f183016149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxldGhpb3BpYW4lMjBmb29kJTIwaW5qZXJhfGVufDF8fHx8MTc3NzAwMjA2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    items: [
      { name: 'Grilled Chicken', description: 'With rice and vegetables', price: '100 Birr' },
      { name: 'Beef Steak', description: 'With mashed potatoes', price: '140 Birr' },
      { name: 'Fish Fillet', description: 'Grilled or fried with sides', price: '120 Birr' },
      { name: 'Pasta Bolognese', description: 'Italian pasta with meat sauce', price: '80 Birr' },
      { name: 'Club Sandwich', description: 'With fries', price: '70 Birr' }
    ]
  },
  {
    title: 'Breakfast & Beverages',
    image: 'https://images.unsplash.com/photo-1630861412229-67e2acb44b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxldGhpb3BpYW4lMjBjb2ZmZWUlMjBjZXJlbW9ueXxlbnwxfHx8fDE3NzcwMTg5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    items: [
      { name: 'Ful Medames', description: 'Fava beans with bread', price: '50 Birr' },
      { name: 'Firfir', description: 'Shredded injera with sauce', price: '60 Birr' },
      { name: 'Scrambled Eggs', description: 'With bread and vegetables', price: '55 Birr' },
      { name: 'Ethiopian Coffee', description: 'Traditional coffee ceremony', price: '30 Birr' },
      { name: 'Fresh Juice', description: 'Orange, mango, or avocado', price: '35 Birr' },
      { name: 'Tea / Espresso', description: 'Various options', price: '20 Birr' }
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h2>
          <p className="text-xl text-gray-600">Authentic flavors at affordable prices</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b border-gray-200 pb-3 last:border-0">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold">{item.name}</h4>
                        <span className="text-yellow-600 font-semibold whitespace-nowrap ml-2">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700">
            All meals are prepared fresh daily with quality ingredients
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Prices range from 50-150 Birr • Special group discounts available
          </p>
        </div>
      </div>
    </section>
  );
}