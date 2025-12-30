import { useEffect } from 'react';
import Hero from './components/hero/Hero';
import Imagine from './components/imagine/Imagine';
import Gallery from './components/gallery/Gallery';
import Benefits from './components/benefits/Benefits';
import Testimonials from './components/testimonials/Testimonials';
import Security from './components/security/Security';
import Timer from './components/timer/Timer';
import Offer from './components/offer/Offer';
import FAQ from './components/faq/FAQ';
import Guarantee from './components/guarantee/Guarantee';
import FAQCTA from './components/faqcta/FAQCTA';
import Footer from './components/footer/Footer';
import PurchaseNotification from './components/purchasenotification/PurchaseNotification';
import { getUTMParams } from './utils/utm';

function App() {
  // Captura UTMs da URL no carregamento inicial e salva no localStorage
  useEffect(() => {
    getUTMParams();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Imagine />
      <Benefits />
      <Gallery />
      <Testimonials />
      <Security />
      <Timer />
      <Offer />
      <FAQ />
      <Guarantee />
      <FAQCTA />
      <Footer />
      <PurchaseNotification />
    </div>
  );
}

export default App;
