import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

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