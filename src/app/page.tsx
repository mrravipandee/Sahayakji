import Hero from './components/hero';
import Services from './components/services';
import HowItWorks from './components/how-it-works';
import Trust from './components/trust';
import CTA from './components/cta';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
