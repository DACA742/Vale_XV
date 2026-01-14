import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';

export function Welcome() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: 'url("img/hero3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.9)',
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-eerie-black/30 via-transparent to-eerie-black/30" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Decorative Top Element */}
          <motion.div
            custom={0}
            variants={textVariants}
            className="mb-8 flex justify-center items-center gap-4"
          >
            <div className="h-[1px] w-16 bg-antiflash-white/70" />
            <Heart className="w-6 h-6 text-antiflash-white" />
            <div className="h-[1px] w-16 bg-antiflash-white/70" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            custom={1}
            variants={textVariants}
            className="font-script text-6xl md:text-8xl mb-6 text-antiflash-white"
          >
            Vale
          </motion.h1>

          {/* Thank You Message */}
          <motion.div
            custom={4}
            variants={textVariants}
            className="mt-0"
          >
            <div className="max-w-2xl mx-auto px-6 py-0 backdrop-blur-sm bg-antiflash-white/10 rounded-lg border border-antiflash-white/20">
              <p className="text-lg text-antiflash-white/90 font-serif">
                Acompañame a celebrar la primavera más hermosa de mi vida.
              </p>
            </div>
          </motion.div>
        </motion.div>     
      </div>

      {/* Scroll Indicator - Now positioned at the bottom with margin */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="relative z-10 mt-auto mb-8"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-antiflash-white/70">Desliza hacia abajo</p>
          <div className="w-[1px] h-8 bg-gradient-to-b from-antiflash-white/70 to-transparent" />
        </div>
      </motion.div>
    </motion.section>
  );
}