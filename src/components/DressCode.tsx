import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Sparkles, Palette } from 'lucide-react';

const dressCodeItems = [
  {
    icon: <Shirt className="w-6 h-6" />,
    title: "Formal",
    description: "Vestimenta elegante y formal",
    details: "Trajes, vestidos, zapatos formales"
  },
  /*
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Colores Sugeridos",
    description: "Tonos que complementan nuestra paleta",
    details: "Azul marino, gris, beige, rosa pálido, lavanda"
  },
  */
];

export function DressCode() {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-3xl mb-4 text-jet">Código de Vestimenta</h2>
        <p className="text-dim-gray">Ayúdanos a crear un ambiente elegante y armonioso</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {dressCodeItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-elegant" />
            
            <div className="p-6">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-antiflash-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(item.icon as React.ReactElement, {
                    className: "w-6 h-6 text-onyx"
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="font-serif text-xl text-jet group-hover:text-onyx transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-dim-gray font-medium">
                  {item.description}
                </p>
                <p className="text-sm text-dim-gray/80">
                  {item.details}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}