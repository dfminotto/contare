import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Plans from './components/Plans';
import Cta from './components/Cta';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Plans />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
