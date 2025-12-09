import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. Tous droits réservés.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-apple-blue transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-apple-blue transition-colors">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;