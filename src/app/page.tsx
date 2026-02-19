import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <Header />
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
