import React from 'react';
import { Heart } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';

export function Header() {
  return (
    <header className="w-full py-8 text-center bg-gradient-to-b from-antiflash-white to-transparent">
      <p className="font-script text-6xl md:text-8xl mb-6 text-jet">Cada vez más cerca para celebrar que volveríamos a decir 'sí' un millón de veces más.</p>
      <CountdownTimer />
    </header>
  );
}