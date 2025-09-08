import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsSection = ({ active }) => {
  // 1) Prioridad: prop `active`
  // 2) Si no hay prop, lee variable de entorno Vite
  // 3) Fallback por defecto: false (desactivado)
  const DEFAULT_ACTIVE = false;
  const envFlag = typeof import.meta !== 'undefined'
    ? import.meta.env?.VITE_SHOW_TESTIMONIALS
    : undefined;

  const isActive = typeof active === 'boolean'
    ? active
    : (envFlag !== undefined ? String(envFlag).toLowerCase() === 'true' : DEFAULT_ACTIVE);

  if (!isActive) return null;

  const testimonials = [
    {
      name: "María González",
      location: "Madrid, España",
      rating: 5,
      comment:
        "¡Increíble experiencia! Mandori hizo que nuestro viaje a Perú fuera inolvidable. La atención al detalle y el servicio personalizado superaron todas nuestras expectativas.",
      image: "Mujer sonriente con sombrero en Machu Picchu",
    },
    {
      name: "Carlos Rodríguez",
      location: "Buenos Aires, Argentina",
      rating: 5,
      comment:
        "El tour fotográfico por Patagonia fue espectacular. Los guías conocían los mejores spots y el equipo profesional nos ayudó a capturar momentos únicos.",
      image: "Hombre con cámara en paisaje patagónico",
    },
    {
      name: "Ana Martínez",
      location: "México DF, México",
      rating: 5,
      comment:
        "Viajamos en grupo familiar y todo estuvo perfectamente organizado. Desde el primer día hasta el último, cada detalle fue cuidado con profesionalismo.",
      image: "Familia feliz en playa tropical",
    },
  ];

  return (
    <section id="experiencias" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Experiencias de Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre lo que dicen nuestros viajeros sobre sus aventuras con Mandori.
            Cada testimonio refleja nuestro compromiso con la excelencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="testimonial-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  alt={`Foto de ${testimonial.name}`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  src="https://images.unsplash.com/photo-1644424235476-295f24d503d9"
                />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 italic">"{testimonial.comment}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
