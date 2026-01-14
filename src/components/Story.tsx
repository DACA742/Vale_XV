import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function Story() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.section
      className="max-w-2xl mx-auto p-8 bg-antiflash-white/80 backdrop-blur-sm rounded-lg shadow-lg"
    >
      {/* Content Container */}
      <div className="text-center">
        {/* Decorative Top Element */}
        <motion.div
          custom={0}
          variants={textVariants}
          className="mb-8 flex justify-center items-center gap-4"
        >
          <div className="h-[1px] w-16 bg-antiflash-white/70" />
          <Heart className="w-6 h-6 text-jet" />
          <div className="h-[1px] w-16 bg-antiflash-white/70" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          custom={1}
          variants={textVariants}
          className="font-script text-6xl md:text-8xl mb-6 text-jet"
        >
          En Compañía de:
        </motion.h1>

        {/* Parents of the Bride */}
        <motion.div
          custom={2}
          variants={textVariants}
          className="space-y-4 mb-8"
        >
          {/* Padrinos de Velación */}
          <p className="font-serif text-2xl md:text-3xl text-jet mt-8">
            Padrinos de Velación:
          </p>
          <div className="text-xl text-dim-gray">
            <p>Rafael Romo Barba </p> {/* Reemplaza con el nombre real */}
            <p>Esperanza Chávez Martínez</p> {/* Reemplaza con el nombre real */}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
