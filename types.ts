export interface NavLink {
  name: string;
  href: string;
}

export interface Plan {
  id: number;
  name: string;
  price: string;
  duration: string;
  features: string[];
  isPopular: boolean;
}

export interface Facility {
  id: number;
  title: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}