import { NavLink, Plan, Facility } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Plans', href: '#plans' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Contact', href: '#contact' },
];

export const PLANS: Plan[] = [
  {
    id: 1,
    name: 'Starter Power',
    price: '₹1000',
    duration: 'Month',
    features: ['Basic Gym Access', 'Standard Support', 'Locker Room Access'],
    isPopular: false,
  },
  {
    id: 2,
    name: 'Pro Strength',
    price: '₹2000',
    duration: '3 Months',
    features: ['Full Gym Access', 'Certified Trainer Guidance', 'Basic Diet Plan', 'Extended Hours'],
    isPopular: false,
  },
  {
    id: 3,
    name: 'Elite Performance',
    price: '₹3500',
    duration: '5 Months',
    features: ['All Access VIP', 'Personal Trainer', 'Custom Diet & Nutrition', 'Weekly Progress Tracking'],
    isPopular: true,
  },
];

export const FACILITIES: Facility[] = [
  { id: 1, title: 'Modern Equipment', icon: 'Dumbbell' },
  { id: 2, title: 'Cardio Zone', icon: 'Activity' },
  { id: 3, title: 'Weight Training', icon: 'Weight' }, // Custom handling for icon names
  { id: 4, title: 'CrossFit Area', icon: 'Crosshair' },
  { id: 5, title: 'Personal Training', icon: 'Users' },
  { id: 6, title: 'Spacious Lockers', icon: 'Lock' },
  { id: 7, title: 'Refreshment Area', icon: 'Coffee' },
  { id: 8, title: 'Parking', icon: 'Car' },
];

export const testimonials = [
    {
      id: 1,
      name: "Aishwarya R.",
      role: "Fitness Enthusiast",
      quote:
        "Volt Fit Hub changed my life — the trainers pushed me to new limits and the community is amazing.",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Rahul K.",
      role: "Personal Trainer",
      quote:
        "Best equipment and an energy that keeps members motivated every single day.",
      avatar:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&q=80&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Maya P.",
      role: "Marathon Runner",
      quote:
        "I improved my endurance and gained strength in just a few months. Highly recommend!",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Arjun S.",
      role: "Student",
      quote:
        "Friendly staff, great trainers and a clean, modern space to work out in.",
      avatar:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&q=80&auto=format&fit=crop",
    },
  ];

  export const images = [
    "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=1400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583454110558-8b29f9c7b3ea?w=1400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=1400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=1400&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545336450-3d3f2ec1c6c7?w=1400&q=80&auto=format&fit=crop",
  ];