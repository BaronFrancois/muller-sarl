import { WorkingHour, BusinessInfo, Certification } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Muller SARL",
  description: "Muller met son savoir-faire au service de votre confort thermique et de la qualité de l'air intérieur. Plombiers et chauffagistes expérimentés, nous proposons la vente et l'installation de chaudières performantes, incluant micro-cogénération, condensation au gaz, bois ou fioul, ainsi que des systèmes de ventilation adaptés à votre habitat.",
  phone: "03 29 34 33 87",
  address: "4 allée Marronniers Prolongée",
  zip: "88190",
  city: "Golbey",
  fullAddress: "4 allée Marronniers Prolongée 88190 Golbey"
};

export const WORKING_HOURS: WorkingHour[] = [
  { day: "Lundi", hours: "08h00 - 17h30", isOpen: true },
  { day: "Mardi", hours: "08h00 - 17h30", isOpen: true },
  { day: "Mercredi", hours: "08h00 - 17h30", isOpen: true },
  { day: "Jeudi", hours: "08h00 - 17h30", isOpen: true },
  { day: "Vendredi", hours: "08h00 - 17h30", isOpen: true },
  { day: "Samedi", hours: "Fermé", isOpen: false },
  { day: "Dimanche", hours: "Fermé", isOpen: false },
];

export const CERTIFICATIONS: Certification[] = [
  { 
    name: "Qualibat RGE", 
    description: "Reconnu Garant de l'Environnement. Des solutions respectueuses de l'environnement et éligibles aux aides de l'État." 
  },
  { 
    name: "Professionnel du Gaz", 
    description: "L'assurance d'une installation gaz sécurisée, performante et conforme aux normes en vigueur." 
  }
];