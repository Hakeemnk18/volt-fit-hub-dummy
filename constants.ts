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