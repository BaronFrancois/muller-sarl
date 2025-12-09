import React from 'react';
import { Flame, Wind, Droplets, Leaf } from 'lucide-react';
import { ServiceItem } from '../types';

interface CardProps {
  service: ServiceItem;
  delay: string;
}

const BentoCard: React.FC<CardProps> = ({ service, delay }) => {
  const Icon = service.icon;
  
  return (
    <div 
      className={`group relative overflow-hidden rounded-[2rem] bg-gray-50 border border-gray-100 p-8 transition-all duration-500 hover:shadow-xl hover:scale-[1.01] ${service.large ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1'}`}
    >
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-4">
          <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 text-apple-blue group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{service.title}</h3>
          <p className="text-gray-600 font-medium leading-relaxed">{service.description}</p>
        </div>
        
        {service.image && (
          <div className="mt-8 rounded-2xl overflow-hidden h-48 md:h-64 shadow-inner">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}
      </div>
    </div>
  );
};

const BentoGrid: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Chauffage Performance",
      description: "Installation de chaudières performantes : micro-cogénération, condensation au gaz, bois ou fioul.",
      icon: Flame,
      large: true,
      image: "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=2680&auto=format&fit=crop"
    },
    {
      title: "Ventilation",
      description: "Systèmes de ventilation adaptés à votre habitat pour une qualité d'air optimale.",
      icon: Wind,
      large: false,
    },
    {
      title: "Plomberie Sanitaire",
      description: "Experts plombiers pour toutes vos installations d'eau et rénovations.",
      icon: Droplets,
      large: false,
    },
    {
      title: "Économies d'Énergie",
      description: "Solutions pensées pour réduire votre empreinte carbone et vos factures.",
      icon: Leaf,
      large: true, // Make this occupy full width in a row if wanted, or grid
    }
  ];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black">
          Savoir-faire.
        </h2>
        <p className="text-xl text-gray-500 font-medium">L'expertise Muller au service de votre maison.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BentoCard service={services[0]} delay="0s" />
        <div className="flex flex-col gap-6">
           <BentoCard service={services[1]} delay="0.1s" />
           <BentoCard service={services[2]} delay="0.2s" />
        </div>
        <div className="md:col-span-2">
           <div className="relative overflow-hidden rounded-[2rem] bg-black p-8 md:p-12 text-white">
             <div className="flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1 z-10">
                 <div className="flex items-center gap-3 mb-4">
                    <Leaf className="text-green-400" />
                    <span className="text-green-400 font-bold uppercase tracking-wider text-sm">Éco-Responsable</span>
                 </div>
                 <h3 className="text-3xl md:text-4xl font-bold mb-4">Certifié pour l'avenir.</h3>
                 <p className="text-gray-400 text-lg leading-relaxed mb-6">
                   Nos certifications Qualibat RGE et Professionnel du Gaz garantissent des solutions respectueuses de l'environnement.
                 </p>
                 <div className="flex gap-4">
                   <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-sm font-semibold border border-white/20">Qualibat RGE</span>
                   <span className="px-4 py-2 bg-white/10 backdrop-blur rounded-lg text-sm font-semibold border border-white/20">Professionnel du Gaz</span>
                 </div>
               </div>
               <div className="flex-1 h-full w-full rounded-2xl overflow-hidden relative min-h-[200px]">
                  <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" alt="Eco home" />
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;