import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2664&auto=format&fit=crop" 
          alt="Intérieur moderne et confortable" 
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Confort thermique.
          <br />
          <span className="text-gray-300">Réinventé.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl font-medium opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Plomberie, chauffage et ventilation de précision. 
          <br className="hidden md:block"/> 
          Une expertise pensée pour votre habitat durable.
        </p>
        
        <div className="mt-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
           <a 
            href="#contact"
            className="group inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
           >
            Demander un devis
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
           </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;