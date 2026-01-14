import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const locations = [
  {
    name: "Cómo Llegar a Ceremonia",
    address: "Parroquia De Cristo Redentor",
    coords: {
      lat: 21.87697723378219,
      lng: -102.31801235767206
    }
  },
  {
    name: "Cómo Llegar a Recepción",
    address: "Salón Jardín Quinta San Ignacio",
    coords: {
      lat: 21.90149818578937,
      lng: -102.34047819999999
    }
  }
];

export function LocationMap() {
  const handleGetDirections = (coords: { lat: number; lng: number }) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}`);
  };

  return (
    <section className="max-w-4xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {locations.map((location, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-antiflash-white/90 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-6 bg-gradient-elegant">
              <h2 className="font-serif text-3xl mb-4 text-antiflash-white flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                {location.name}
              </h2>
              <p className="text-antiflash-white/90 mb-2">
                {location.address}
              </p>
              <p className="text-antiflash-white/90 mb-6 font-medium">
                {location.time}
              </p>
              <button
                onClick={() => handleGetDirections(location.coords)}
                className="inline-flex items-center px-4 py-2 bg-antiflash-white text-onyx rounded-md hover:bg-antiflash-white/90 transition-colors duration-300"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Obtener Direcciones
              </button>
            </div>
            <div className="w-full h-[300px] bg-gray-100 relative">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d925.2714403442384!2d${location.coords.lng}!3d${location.coords.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1ses-419!2smx!4v1737420799131!5m2!1ses-419!2smx`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}