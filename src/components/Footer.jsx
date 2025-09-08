import React from 'react';
import { Compass, Award, Heart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Facebook, Instagram } from 'lucide-react';

// Icono de TikTok personalizado (estilo Lucide)
const TikTok = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

const Footer = () => {
  const handleSocialClick = (platform) => {
    const socialLinks = {
      Facebook: 'https://www.facebook.com/profile.php?id=61579619273966',
      Instagram: 'https://www.instagram.com/mandoriturismoyviajes_oficial',
      TikTok: 'https://www.tiktok.com/@mandori.turismo'
    };
    
    window.open(socialLinks[platform], '_blank');
  };

  return (
    <footer className="footer-custom text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="img/mandori_logo_letras_blancas.png"
                alt="Logo de Mandori - Turismo & Viajes"
                className="h- w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Tu compañía de confianza para explorar el mundo y vivir experiencias inolvidables.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('Facebook')}
                className="text-gray-300 hover:text-white hover:bg-blue-600"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('Instagram')}
                className="text-gray-300 hover:text-white hover:bg-pink-600"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('TikTok')}
                className="text-gray-300 hover:text-white hover:bg-black"
              >
                <TikTok className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Servicios</span>
            <ul className="space-y-2 text-gray-300">
              <li>Viajes Internacionales</li>
              <li>Turismo de Aventura</li>
              <li>Tours Fotográficos</li>
              <li>Viajes Grupales</li>
            </ul>
          </div>

          <div>
            <span className="text-lg font-semibold mb-4 block">Destinos Populares</span>
            <ul className="space-y-2 text-gray-300">
              <li>Machu Picchu, Perú</li>
              <li>Patagonia, Argentina</li>
              <li>Costa Rica</li>
              <li>Islas Galápagos</li>
            </ul>
          </div>

          {/*<div>
            <span className="text-lg font-semibold mb-4 block">Información</span>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Empresa Certificada
              </li>
              <li className="flex items-center">
                <Heart className="w-4 h-4 mr-2" />
                +1000 Clientes Satisfechos
              </li>
              <li className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                50+ Destinos Disponibles
              </li>
            </ul>
          </div>*/}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Mandori. Todos los derechos reservados. | Licencia de Turismo: MT-2024-001
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;