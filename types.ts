import { LucideIcon } from 'lucide-react';

export interface BusinessInfo {
  name: string;
  description: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  fullAddress: string;
}

export interface WorkingHour {
  day: string;
  hours: string;
  isOpen: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  large?: boolean;
}

export interface Certification {
  name: string;
  description: string;
}