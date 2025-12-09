import React from 'react';
import { Clock, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { WORKING_HOURS, BUSINESS_INFO } from '../constants';

const InfoSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-apple-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black">
            Nous trouver.
          </h2>
          <p className="text-xl text-gray-500 font-medium">Une question ? Un projet ? Venez nous rencontrer.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hours Card */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-50 text-apple-blue rounded-full">
                <Clock size={24} />
              </div>
              <h3 className="text-2xl font-bold">Horaires</h3>
            </div>
            
            <div className="space-y-4 flex-grow">
              {WORKING_HOURS.map((wh, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                  <span className="font-medium text-gray-900">{wh.day}</span>
                  <span className={`font-medium ${wh.isOpen ? 'text-gray-600' : 'text-gray-400 italic'}`}>
                    {wh.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-50 text-apple-blue rounded-full">
                <MapPin size={24} />
              </div>
              <h3 className="text-2xl font-bold">Contact & Localisation</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Adresse</h4>
                  <p className="text-xl font-medium text-gray-900 leading-snug">
                    {BUSINESS_INFO.address}<br />
                    {BUSINESS_INFO.zip} {BUSINESS_INFO.city}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Téléphone</h4>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-3xl font-bold text-apple-blue hover:text-apple-blue-hover transition-colors inline-flex items-center gap-2">
                    {BUSINESS_INFO.phone}
                    <ArrowRight size={24} />
                  </a>
                </div>

                <div className="pt-4">
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Itinéraire GPS
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 md:h-full w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 group">
                {/* Simulated Map Visual */}
                <img 
                   src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop" 
                   alt="Map background" 
                   className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 transform group-hover:-translate-y-2 transition-transform duration-300">
                      <MapPin size={20} className="text-red-500" fill="currentColor" />
                      <span className="font-bold text-gray-900">Golbey</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;