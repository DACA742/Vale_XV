import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export function DateLocation() {
  return (
    <section className="max-w-2xl mx-auto p-8 bg-antiflash-white/80 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Misa en la iglesia */}
        <div className="text-center">
          
          <Calendar className="w-8 h-8 mx-auto mb-4 text-onyx" />
          <h2 className="font-serif text-2xl mb-2 text-jet">Ceremonia</h2>
          <p className="text-dim-gray">Sábado, Abril 11, 2026</p>
          <p className="text-dim-gray">06:00 PM</p>
          <div className="mt-4">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-onyx" />
            <p className="font-serif text-xl mb-2 text-jet">Parroquia del Sagrado Corazón de Jesús</p>
            <p className="text-dim-gray">5 de Mayo 602, Zona Centro, 20000 Aguascalientes, Ags.</p>
          </div>
        </div>

        {/* Fiesta en el jardín */}
        <div className="text-center">
          <Calendar className="w-8 h-8 mx-auto mb-4 text-onyx" />
          <h2 className="font-serif text-2xl mb-2 text-jet">Recepción</h2>
          <p className="text-dim-gray">Sábado, Abril 11, 2026</p>
          <p className="text-dim-gray">07:30 PM</p>
          <div className="mt-4">
            <MapPin className="w-8 h-8 mx-auto mb-4 text-onyx" />
            <p className="font-serif text-xl mb-2 text-jet">Salón Rincón del Mezquite</p>
            <p className="text-dim-gray">Av. Eugenio Garza Sada 86, Pocitos, 20328 Pocitos, Ags.</p>
          </div>
        </div>
      </div>
    </section>  
  );
}
