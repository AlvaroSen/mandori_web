import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const SHOW_TESTIMONIALS = (() => {
  // Lee Vite env: VITE_SHOW_TESTIMONIALS=true|false
  const flag = import.meta.env?.VITE_SHOW_TESTIMONIALS;
  // Si no hay env, elige el default aquí (false = apagado)
  const DEFAULT = false;
  return flag !== undefined ? String(flag).toLowerCase() === 'true' : DEFAULT;
})();

function App() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Mandori - Tu Empresa de Turismo y Viajes de Confianza</title>
        <meta name="description" content="Descubre el mundo con Mandori. Ofrecemos viajes internacionales, turismo de aventura, tours fotográficos y viajes grupales personalizados. ¡Tu próxima aventura te espera!" />
        <meta property="og:title" content="Mandori - Tu Empresa de Turismo y Viajes de Confianza" />
        <meta property="og:description" content="Descubre el mundo con Mandori. Ofrecemos viajes internacionales, turismo de aventura, tours fotográficos y viajes grupales personalizados. ¡Tu próxima aventura te espera!" />
      </Helmet>

      <Header />
      <HeroSection />
      <ServicesSection />
      {/* Opción B (si prefieres forzarlo a mano): */}
      <TestimonialsSection active={false} />

      <ContactSection />
      <Footer />

      <Toaster />
    </div>
  );
}

export default App;
