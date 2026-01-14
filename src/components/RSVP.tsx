import React, { useState } from 'react';

export function RSVP() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('');
  const [guests, setGuests] = useState('1');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const scriptURL = 'https://script.google.com/macros/s/AKfycbz5P47xcRT5noao7Byxe-a4hdctv1bPcV6qdPY7YbT2ntkmYitzEZ3plExItZG_8USpzw/exec';

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('attending', attending);
    formData.append('guests', guests);

    fetch(scriptURL, { method: 'POST', body: formData })
      .then((response) => response.json())
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setName('');
        setAttending('');
        setGuests('1');
      })
      .catch((error) => {
        setLoading(false);
        setError('Error al enviar el formulario. Intenta nuevamente.');
        console.error('Error!', error.message);
      });
  };

  return (
    <section className="max-w-md mx-auto p-8">
      <h2 className="font-serif text-3xl mb-6 text-center text-jet">Confirma tu Asistencia</h2>
      
      {/* Confirmation Message */}
      <div className="mt-4 text-center text-sm text-dim-gray">
        <p>
          Por cuestiones de organización, te pedimos respetar la cantidad de asientos asignados.
        </p>
      </div>

      <form name="contact-form" method="post" action="" onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dim-gray">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-dim-gray/30 shadow-sm focus:border-onyx focus:ring-onyx bg-antiflash-white/50"
            required
          />
        </div>
        <div>
          <label htmlFor="attending" className="block text-sm font-medium text-dim-gray">
            ¿Asistirás?
          </label>
          <select
            id="attending"
            value={attending}
            onChange={(e) => setAttending(e.target.value)}
            className="mt-1 block w-full rounded-md border-dim-gray/30 shadow-sm focus:border-onyx focus:ring-onyx bg-antiflash-white/50"
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="yes">Sí, asistiré</option>
            <option value="no">No podré asistir</option>
          </select>
        </div>
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-dim-gray">
            Número de Invitados
          </label>
          <select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="mt-1 block w-full rounded-md border-dim-gray/30 shadow-sm focus:border-onyx focus:ring-onyx bg-antiflash-white/50"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        {loading && <p className="text-center text-dim-gray">Enviando...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {success && <p className="text-center text-green-500">¡Gracias! Tu respuesta ha sido registrada.</p>}

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-antiflash-white bg-onyx hover:bg-jet focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dim-gray transition-colors duration-300"
        >
          Confirmar Asistencia
        </button>
      </form>
    </section>
  );
}
