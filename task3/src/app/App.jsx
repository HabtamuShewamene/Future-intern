import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}