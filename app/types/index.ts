import { LucideIcon } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  featured?: boolean;
}

export interface Award {
  year: string;
  title: string;
  organization: string;
  icon: LucideIcon;
}

export interface HowToStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FAQ {
  question: string;
  answer: string;
}

