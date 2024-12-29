import React from 'react';
import StarField from './components/StarField';
import DustParticles from './components/DustParticles';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Footer from './components/Footer';
import Game from './components/game/Game';
import { useLocation } from './hooks/useLocation';

function App() {
  const { hash } = useLocation();
  
  return (
    <div className="relative min-h-screen bg-black text-white">
      <StarField />
      <DustParticles />
      <Header />
      <main>
        {hash === '#game' ? (
          <div className="pt-20">
            <Game />
          </div>
        ) : (
          <>
            <Hero />
            <About />
            <Events />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;