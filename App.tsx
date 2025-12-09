import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import BentoGrid from './components/BentoGrid.tsx';
import InfoSection from './components/InfoSection.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BentoGrid />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;