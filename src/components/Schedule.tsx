import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Church, Martini, Music, Camera, Cake, Wine, UtensilsCrossed, Users, Frown, Heart} from 'lucide-react';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const events: TimelineEvent[] = [
  {
    time: "13:30",
    title: "Ceremonia Religiosa",
    description: "Capilla San Peregrino Laziosi",
    icon: <Church className="w-6 h-6" />,
  },
  {
    time: "16:00",
    title: "Cóctel de Bienvenida",
    description: "Jardin Bellagio",
    icon: <Martini className="w-6 h-6" />,
  },
  {
    time: "17:00",
    title: "Comida",
    description: "Rico Buffet",
    icon: <UtensilsCrossed className="w-6 h-6" />,
  },
  {
    time: "17:45",
    title: "Brindis",
    description: "Salón Principal",
    icon: <Wine className="w-6 h-6" />,
  },
  {
    time: "18:00",
    title: "Vals",
    description: "Los novios bailaran",
    icon: <Users className="w-6 h-6" />,
  },
  {
  time: "18:30",
  title: "Baile",
  description: "Apertura de Pista de Baile",
  icon: <Music className="w-6 h-6" />,
  },
  {
    time: "22:00",
    title: "Fin",
    description: "Fin de la boda",
    icon: <Frown className="w-6 h-6" />,
    }
];

export function Schedule() {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Clock className="w-6 h-6 text-onyx" />
          <h2 className="font-serif text-3xl text-jet">Itinerario</h2>
        </div>
        <p className="text-dim-gray">Acompáñanos en este día tan especial</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-elegant" />
            
            <div className="p-6">
              {/* Time */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-3xl text-onyx">{event.time}</span>
                <div className="w-12 h-12 rounded-full bg-antiflash-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(event.icon as React.ReactElement, {
                    className: "w-6 h-6 text-onyx"
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-jet group-hover:text-onyx transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-dim-gray text-sm">
                  {event.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-onyx/10 to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="mt-12 flex justify-center">
        <div className="flex items-center gap-3">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-onyx/30" />
          <Heart className="w-4 h-4 text-onyx/30" />
          <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-onyx/30" />
        </div>
      </div>
    </section>
  );
}