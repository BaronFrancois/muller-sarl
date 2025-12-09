import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants.ts';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Savoir-faire', href: '#services' },
    { name: 'Engagements', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'glass-nav border-b border-gray-200/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className={`text-xl font-semibold tracking-tight ${isScrolled || isMobileMenuOpen ? 'text-black' : 'text-white'}`}>
              {BUSINESS_INFO.name}
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-600 hover:text-black' : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-apple-blue text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-apple-blue-hover transition-colors flex items-center gap-2"
            >
              <Phone size={14} />
              {BUSINESS_INFO.phone}
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled || isMobileMenuOpen ? 'text-gray-800' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-nav h-screen absolute top-16 left-0 w-full animate-fade-in">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-2xl font-semibold text-gray-900 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
               <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full flex justify-center items-center bg-apple-blue text-white px-4 py-4 rounded-xl text-lg font-medium"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;