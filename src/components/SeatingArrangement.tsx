import React from 'react';
import { Music } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for tables and guests
const tables = [
  {
    id: 1,
    name: 'Mesa 1',
    guests: ['Beatriz Arteaga','Paola Chávez', 'Alma Galván', 'Alma Trueba', 'Raul Chavez A.', 'Yannin Badillo', 'Isabel Arteaga', 'Benjamin', 'Ricardo Rabling'],
  },
  {
    id: 2,
    name: 'Mesa 2',
    guests: ['Gaby Rabling', 'Julio Martínez', 'Valentina M.', 'Julieta M.', 'Karla Rabling', 'Boris Campos', 'Noah Campos', 'Juliana Campos', 'Dante Martínez','Tania Callejo'],
  },
  {
    id: 3,
    name: 'Mesa 3',
    guests: ['Irma Bueno', 'Alma Molina', 'Julio Bueno', 'Claudia Ruelas', 'Dominica Bueno', 'Antonio Lopez', 'Johana','Antonio Lopez Jr.','Fer Lopez','Macarena C.','Macarena C. +1'],
  },   
  {
    id: 4,
    name: 'Mesa 4',
    guests: ['Paula Romo','Ricardo C.','Clémentine C.','Mauricio Romo','Diana Romo','Raul Peña','Magui Peña','Alexis Casillas','Palmira Meza','Antonio Bueno'],
  },
  {
    id: 5,
    name: 'Mesa 5',
    guests: ['Yolanda Silva','Carlos H.','Kassandra H.','Vanessa H.','Victoria H.','Lupita Nuñez','Valeria Nuñez','Jaime Silva'],  
  },
  {
    id: 6,
    name: 'Mesa 6',
    guests: ['Yolanda Bueno','Gustavo R.', 'Maria de Jesus', 'Oscar Romo', 'Araceli Bueno', 'Jaime Meza', 'Antonio Bueno', 'Laura Delgadillo' ,'Alejandro Segura','Karina Zacarias','Roberto Ocaña B.'],
  },  
  {
    id: 7,
    name: 'Mesa 7',
    guests: ['Beatriz López','Vanessa C.','Juan Manuel','Alondra C.','Diego C.','Paloma Lopez','Tere Martínez','Sofia Bueno','Sofia Bueno +1','Eduardo Bueno','Araceli Vazquez'],
  },    
  {
    id: 8,
    name: 'Mesa 8',
    guests: ['Ignacio Lozano','Ignacio Lozano +1','Alma Delgado','Alma Delgado +1','Claudia Pérez','Claudia Pérez +1','Patricia Muñiz','Patricia Muñiz +1','Blanca Loera','Blanca Loera +1','Norma E.'],
  }, 
  {
    id: 9,
    name: 'Mesa 9',
    guests: ['Irma Cortes +1','Irma Cortes','Veronica Ibarra', 'Veronica Ibarra +1','Lupita Cortes', 'Lupita Cortes +1','Efren C.','Efren C. +1','Mireya Gloria'],
  },  
  {
    id: 10,
    name: 'Mesa 10',
    guests: ['Bere Muñoz','Bere Muñoz +1','Claudia Mora','Claudia Mora +1','Alejandra M.','Alejandra M. +1','Osvaldo V.','Osvaldo V. +1'],
  },
  {
    id: 11,
    name: 'Mesa 11',
    guests: ['Raul Chávez M.','Rocio Parra','Esperanza C.','Rafael Romo','Nadia Romo','Rodrigo Romo','Cherry Romo','Elizabeth Chávez','Silvia Chávez','Jesus Alonso'],
  },
  {
    id: 12,
    name: 'Mesa 12',
    guests: ['Sammy Chávez M.','Jesus Torres','Dioni Torres','Israel','Rafael Torres','Alejandra','Pedro D. Alonso','Ana Laura','Jesus Eduardo Alonso'],
  },   
  
  {
    id: 13,
    name: 'Mesa 13',
    guests: ['Manuel Ocaña','Carmen Aguayo','Lorena Aguayo','Manuel Ocaña Jr.','Denisse Ocaña','Denisse Ocaña +1','Jackeline O.','Jackeline O. +1', 'Reyna Ocaña','Genaro Gtz.','Valentina Gtz.','Miranda Gtz.']
  },
  {
    id: 14,
    name: 'Mesa 14',
    guests: ["Carlos Gonzalez Serrano","Roxana Mesinas","Maricela Vega", "Héctor Silos", "Melani Silos", "Melani Silos +1", "Héctor Quiroz", "Héctor Quiroz +1", "Patricia Gómez", "Patricia Gómez +1"],
  },  
  {
    id: 15,
    name: 'Mesa 15',
    guests: ["Josseline Márquez", "Juan Manuel", "Rodrigo Ortiz", "Karla Ornelas", "Daniel Marfileño", "Diego Ruiz", "Dante Hdz.", "Eduardo C.", "Diana Carrillo","Diana Carrillo +1", "Odalys Pérez"],
  },    
  {
    id: 16,
    name: 'Mesa 16',
    guests: ["Roberto Ocaña", "Julieta de la Cruz", "Ofelia Ramos", "Ofelia Ramos +1", "Blanca Ocaña", "Jesús Schz.", "Ivana Schz.", "Ivana Schz. +1",'Agustin Damasco','Sandra',"Renata Ocaña"],
  },  
  {
    id: 17,
    name: 'Mesa 17',
    guests: ["Luis G. Mesinas", "Alexa Machain","Miguel C.", "Meli Muñoz","Pau Gtz", "Edgar Mtz.", "Oscar A.", "Lau", "Richy Garcia", "Fatima","Mauricio Ramirez","Paola Gtz."],
  },  
  {
    id: 18,
    name: 'Mesa 18',
    guests: ["Marilyn DLC.", "Mariano", "Eli DLC.","Johana DLC.", "Gisella Mercz", "Eliza Esparza", "Jose DLC.", "Jose DLC. +1","Linda Fierro","Rafael DLC.","Celia","Obed"],
  },
  {
    id: 19,
    name: 'Mesa 19',
    guests: ["Romeo B.", "Romeo B. +1", "Salvador E.", "Salvador E. +1","Juan Carlos","Juan Carlos +1","Fidel Mendoza",'Gerardo Horta','Gerardo Horta +1','Carlos Ocaña','Olga Herrera'],
  },    

  // Añade más mesas con sus invitados específicos
  {
    id: 21,
    name: 'Mesa Nupcial',
    guests: ['Tatis Ocaña', 'Daniel Chávez'],
  },
];

export function SeatingArrangement() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="font-serif text-3xl mb-8 text-center text-jet">Distribución de Mesas</h2>
      
      {/* Floor Plan */}
      <div className="bg-antiflash-white/90 rounded-lg shadow-xl p-8 mb-12">
        <div className="aspect-[16/9] relative">
          <svg
            viewBox="0 0 1000 600"
            className="w-full h-full"
            style={{ background: '#f8f8f8' }}
          >
            {/* Left Tables */}
            {Array.from({ length: 10 }, (_, i) => (
              <g key={`left-${i}`} transform={`translate(150, ${100 + i * 45})`}>
                <circle cx="0" cy="0" r="20" className="fill-onyx/10 stroke-onyx" />
                <text x="30" y="5" className="text-sm fill-dim-gray font-medium">Mesa {i + 1}</text>
              </g>
            ))}

            {/* Right Tables */}
            {Array.from({ length: 10 }, (_, i) => (
              <g key={`right-${i}`} transform={`translate(850, ${100 + i * 45})`}>
                <circle cx="0" cy="0" r="20" className="fill-onyx/10 stroke-onyx" />
                <text x="-80" y="5" className="text-sm fill-dim-gray font-medium">Mesa {i + 11}</text>
              </g>
            ))}

            {/* Dance Floor */}
            <rect
              x="350"
              y="150"
              width="300"
              height="250"
              className="fill-onyx/5 stroke-onyx stroke-2 stroke-dashed"
              rx="10"
            />
            <text x="500" y="280" className="text-lg fill-dim-gray text-center font-medium" textAnchor="middle">
              Pista de Baile
            </text>

            {/* DJ Booth */}
            <g transform="translate(500, 480)">
              <rect
                x="-40"
                y="0"
                width="80"
                height="40"
                className="fill-onyx/20 stroke-onyx"
                rx="5"
              />
              <Music className="w-6 h-6 stroke-dim-gray" x="-12" y="8" />
              <text x="0" y="60" className="text-sm fill-dim-gray text-center font-medium" textAnchor="middle">
                DJ
              </text>
            </g>

            {/* Newlyweds Table */}
            <g transform="translate(500, 80)">
              <rect
                x="-120"
                y="0"
                width="240"
                height="40"
                className="fill-onyx/20 stroke-onyx"
                rx="5"
              />
              <text x="0" y="25" className="text-sm fill-dim-gray text-center font-medium" textAnchor="middle">
                Mesa Nupcial
              </text>
            </g>

            {/* Legend */}
            <g transform="translate(50, 30)">
              <text className="text-xs fill-dim-gray font-medium">Leyenda:</text>
              <g transform="translate(0, 20)">
                <circle cx="10" cy="0" r="8" className="fill-onyx/10 stroke-onyx" />
                <text x="25" y="4" className="text-xs fill-dim-gray">Mesa de Invitados</text>
              </g>
              <g transform="translate(0, 40)">
                <rect x="2" y="-8" width="16" height="16" className="fill-onyx/20 stroke-onyx" rx="2" />
                <text x="25" y="4" className="text-xs fill-dim-gray">Mesa Nupcial / DJ</text>
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Guest List by Table */}
      <div className="space-y-8">
        <h3 className="font-serif text-2xl mb-8 text-center text-jet">Lista de Invitados por Mesa</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {tables.map((table) => (
            <motion.div
              key={table.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-elegant opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300" />
              <div className="bg-antiflash-white/90 rounded-lg shadow-md p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-onyx/10 pb-3">
                  <h4 className="font-serif text-xl text-jet">{table.name}</h4>
                  <span className="text-sm text-dim-gray">{table.guests.length} invitados</span>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}