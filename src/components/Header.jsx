import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <img
              src="img\mandori_logo.png"
              alt="Logo de Mandori - Turismo & Viajes"
              className="h-10 w-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#experiencias" className="text-gray-700 hover:text-blue-600 transition-colors">Experiencias</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition-colors">Contacto</a>
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Header;