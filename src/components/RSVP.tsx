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
          Por cuestiones de organización, te pedimos confirmar tu asistencia  via WhatsApp a este numero 449 370 1217.
        </p>
      </div>
    </section>
  );
}
