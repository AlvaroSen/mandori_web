import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="inicio" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Descubre el
              <span className="text-inicio"> Mundo</span> con
              <span className="text-inicio"> Mandori</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Tu empresa de confianza para vivir experiencias únicas e inolvidables.
              Creamos viajes personalizados que superan tus expectativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="button-inicio"
                onClick={() => document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar Servicios
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="button-inicio"
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              >
                Contactar Ahora
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="floating-element">
              <img
                alt="Viajeros explorando destino exótico"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                src="/img/imagen_inicio.jpg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;