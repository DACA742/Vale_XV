import React from 'react';
import { motion } from 'framer-motion';

// Mock data for tables and guests
const tables = [
  {
    id: 1,
    name: 'Mesa 1',
    guests: ['Crisanta Flores',
      'Mary Flores',
      'Eduardo Gtz y Sra. + 2 menores',
      'Esperanza Flores',
      'Adriana Najera + 1 menor']
  },
  {
    id: 2,
    name: 'Mesa 2',
    guests: ['Ivan de Anda y Sra. + 2 menores',
      'Yacob Briones y Sra. + 3 jovenes',
      'Rocío de Anda'
    ]
  },
  {
    id: 3,
    name: 'Mesa 3',
    guests: ['Antonio López',
      'Daniel Piña y Sra.',
      'Marlon Crúz',
      'Raquel Valdez y Sr.',
      'Beto Raygoza',
      'Mitzunori Berrelleza y Sra.'
    ]
  },
  {
    id: 4,
    name: 'Mesa 4',
    guests: ['Manuel Ocaña y Sra + 1 acompañante',
      'Jaqueline Ocaña + 1 acompañante',
      'Genaro Gtz y Sra + 1 acompañante',
      'Denisse Ocaña',
      'Jorge Saucedo y Sra'
    ]
  },
  {
    id: 5,
    name: 'Mesa 5',
    guests: ['Ismael Ornelas y Sra. + 1 joven',
      'Silvia Paola Sánchez + 2 jovenes',
      'Manuel González y Sra.',
      'Grace López y Sr.',
      'Alex Segura  + 1 acompañante',
    ]
  },
  {
    id: 6,
    name: 'Mesa 6',
    guests: ['Adriana Geldis y Sr.',
      'Liliana Sánchez y Sr',
      'Karla Paola Rodríguez',
      'Jorge García Y Sra.',
      'Claudia V. Alonso y Sr.'
    ]
  },
  {
    id: 7,
    name: 'Mesa 7',
    guests: ['Ofelia Ramos ',
      'Martha Servín',
      'Roberto Ocaña y Sra.',
      'Jesús Sánchez y Sra',
      'Ivana Sánchez Ocaña y Sr',
      'Daniel Chávez y Sra.',
      'Mayela Méndez y Sr.'
    ]
  },
  {
    id: 8,
    name: 'Mesa 8',
    guests: ['Marisol Valdez y Sr.',
      'Alicia Amezcua y Sr',
      'Natalia Aguilar y Sr. ',
      'Oscar Nungaray y Sra.',
      'Ana Lizeth Castorena y Sr. '
    ]
  }
];

export default function SeatingArrangement() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="font-serif text-3xl mb-8 text-center text-jet">
        Distribución de Mesas
      </h2>

      {/* Imagen del layout */}
      <div className="bg-antiflash-white/90 rounded-lg shadow-xl p-4 mb-12">
        <img
          src="public/img/imagen1.jpg"  // ✅ correcto en React (desde /public)
          alt="Distribución de mesas"
          className="w-full h-auto rounded-lg shadow-2xl object-cover"
        />
      </div>

      {/* Lista de invitados */}
      <div className="space-y-8">
        <h3 className="font-serif text-2xl mb-8 text-center text-jet">
          Lista de Invitados por Mesa
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {tables.map((table) => (
            <motion.div
              key={table.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-antiflash-white/90 rounded-lg shadow-md p-6 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-onyx/10 pb-3">
                <h4 className="font-serif text-xl text-jet">{table.name}</h4>
                <span className="text-sm text-dim-gray">
                  {table.guests.length} invitados
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {table.guests.map((guest, index) => (
                  <div
                    key={index}
                    className="text-dim-gray text-sm py-1 border-b border-onyx/5 last:border-b-0"
                  >
                    {guest}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}