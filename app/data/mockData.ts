import { Award, Star, CheckCircle2, HandHeart, Palette, Sparkles } from 'lucide-react';
import { Product, Award as AwardType, HowToStep, FAQ } from '../types';

export const selectedProducts: Product[] = [
  {
    id: 1,
    name: "Hand-Painted Vase",
    category: "Vases",
    price: 85,
    image: "https://images.unsplash.com/photo-1578764296642-f27e6d5e3ccb?w=600&h=800&fit=crop",
    featured: true
  },
  {
    id: 2,
    name: "Ceramic Dinner Set",
    category: "Tableware",
    price: 195,
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=800&fit=crop",
    featured: true
  },
  {
    id: 3,
    name: "Artisan Bowl Collection",
    category: "Bowls",
    price: 125,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=800&fit=crop",
    featured: true
  }
];

export const allProducts: Product[] = [
  ...selectedProducts,
  {
    id: 4,
    name: "Hand-Thrown Mug Set",
    category: "Mugs",
    price: 65,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=800&fit=crop"
  },
  {
    id: 5,
    name: "Decorative Plate",
    category: "Plates",
    price: 45,
    image: "https://images.unsplash.com/photo-1578764296642-f27e6d5e3ccb?w=600&h=800&fit=crop"
  },
  {
    id: 6,
    name: "Ceramic Plant Pot",
    category: "Planters",
    price: 55,
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=800&fit=crop"
  }
];

export const awards: AwardType[] = [
  {
    year: "2024",
    title: "Best Artisan Craft",
    organization: "Bulgarian Handmade Awards",
    icon: Award
  },
  {
    year: "2023",
    title: "Excellence in Ceramics",
    organization: "European Craft Fair",
    icon: Star
  },
  {
    year: "2022",
    title: "Sustainable Design",
    organization: "Eco Craft Council",
    icon: CheckCircle2
  }
];

export const howToSteps: HowToStep[] = [
  {
    number: "01",
    title: "Choose Your Piece",
    description: "Browse our curated collection of handmade ceramics, each crafted with care and attention to detail.",
    icon: Palette
  },
  {
    number: "02",
    title: "Customize & Order",
    description: "Select your preferred size, color, and finish. We can also create custom pieces based on your vision.",
    icon: HandHeart
  },
  {
    number: "03",
    title: "Handcrafted Creation",
    description: "Our artisans carefully handcraft your piece using traditional techniques passed down through generations.",
    icon: Sparkles
  },
  {
    number: "04",
    title: "Delivery & Enjoy",
    description: "Your beautiful ceramic piece is carefully packaged and delivered to your door, ready to bring warmth to your home.",
    icon: CheckCircle2
  }
];

export const faqs: FAQ[] = [
  {
    question: "Are all products handmade?",
    answer: "Yes, every piece in our collection is lovingly handmade by skilled Bulgarian artisans using traditional techniques. Each piece is unique, reflecting the natural beauty of handcrafted ceramics."
  },
  {
    question: "What is your shipping policy?",
    answer: "We ship worldwide! Domestic orders typically arrive within 5-7 business days, while international orders take 10-14 business days. All items are carefully packaged to ensure they arrive safely."
  },
  {
    question: "Can I customize my order?",
    answer: "Absolutely! We love creating custom pieces. Please contact us with your ideas, and we'll work together to bring your vision to life. Custom orders typically take 3-4 weeks."
  },
  {
    question: "Are your ceramics dishwasher safe?",
    answer: "Most of our pieces are dishwasher safe, but we recommend hand-washing for pieces with intricate decorations or glazes to preserve their beauty longer. Care instructions are included with each order."
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes! We offer beautiful gift wrapping options at checkout. Perfect for special occasions, our eco-friendly wrapping adds an extra touch of elegance to your gift."
  }
];

