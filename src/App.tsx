import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { OpeningPage } from './components/OpeningPage';
import { Welcome } from './components/Welcome';
import { Header } from './components/Header';
import { DateLocation } from './components/DateLocation';
import { Story } from './components/Story';
import { Gallery } from './components/Gallery';
import { Schedule } from './components/Schedule';
import { LocationMap } from './components/LocationMap';
import { SeatingArrangement } from './components/SeatingArrangement';
import { RSVP } from './components/RSVP';
import { GiftRegistry } from './components/GiftRegistry';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <OpeningPage onOpen={() => setIsOpen(true)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className="min-h-screen bg-gradient-to-br from-antiflash-white via-white to-antiflash-white"
      >
        <Welcome />
        <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">
        <Header />
          <Story />
          <DateLocation />
          <LocationMap />
          <Gallery />
          <GiftRegistry />
          <RSVP />
        </div>
      </motion.div>
    </>
  );
}

export default App;