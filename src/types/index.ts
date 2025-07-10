// Component Props Interfaces
export interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  showStats?: boolean;
}

export interface FeaturedStoresProps {
  stores?: Store[];
  title?: string;
  subtitle?: string;
}

export interface CategoriesProps {
  categories?: Category[];
  title?: string;
  showAll?: boolean;
}

export interface EventsProps {
  events?: Event[];
  title?: string;
  limit?: number;
}

export interface ServicesProps {
  services?: Service[];
  title?: string;
  layout?: "grid" | "list";
}

export interface NewsletterProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
}

export interface NavbarProps {
  showMobileMenu?: boolean;
  sticky?: boolean;
  transparent?: boolean;
}

export interface FooterProps {
  showSocialLinks?: boolean;
  showNewsletter?: boolean;
}

// Data Types
export interface Store {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  floor: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  storeCount: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  isFeatured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  available: boolean;
  location?: string;
}

// Animation Types
export interface AnimationVariant {
  initial: object;
  animate: object;
  exit?: object;
  transition?: object;
}

export interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}
