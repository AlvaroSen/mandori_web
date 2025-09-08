import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Mountain, Camera, Users, Star } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Viajes Internacionales",
      description: "Descubre destinos increíbles alrededor del mundo con nuestros paquetes personalizados",
      features: ["Vuelos incluidos", "Hoteles 4-5 estrellas", "Guías especializados"]
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Turismo de Aventura",
      description: "Vive experiencias únicas con actividades de adrenalina y naturaleza",
      features: ["Senderismo", "Escalada", "Deportes extremos"]
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Tours Fotográficos",
      description: "Captura los momentos más hermosos con nuestros tours especializados",
      features: ["Equipo profesional", "Locaciones únicas", "Edición incluida"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Viajes Grupales",
      description: "Organiza tu viaje perfecto con familia, amigos o compañeros de trabajo",
      features: ["Grupos personalizados", "Descuentos especiales", "Coordinación completa"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nuestros Servicios Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios turísticos diseñados para crear
            experiencias memorables y adaptadas a tus necesidades específicas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="service-card rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-blue-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;