export interface Store {
  id: number;
  slug: string;
  name: string;
  category: string;
  floor: string;
  image: string;
  description: string;
  phone: string;
  email?: string;
  website?: string;
  hours: Record<string, string>; // e.g., { Mon: "09:00-21:00" }
}

export const stores: Store[] = [
  {
    id: 1,
    slug: "nakumatt-supermarket",
    name: "Nakumatt Supermarket",
    category: "Supermarket & Groceries",
    floor: "Ground Floor",
    description: "Your one-stop shop for groceries and household items.",
    image:
      "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=800&q=80",
    phone: "+254 700 111 222",
    email: "info@nakumatt.co.ke",
    website: "https://example.com",
    hours: {
      Mon: "08:00-21:00",
      Tue: "08:00-21:00",
      Wed: "08:00-21:00",
      Thu: "08:00-21:00",
      Fri: "08:00-22:00",
      Sat: "08:00-22:00",
      Sun: "09:00-20:00",
    },
  },
  {
    id: 2,
    slug: "java-house",
    name: "Java House",
    category: "Coffee & Dining",
    floor: "First Floor",
    description: "Premium coffee and contemporary dining experience.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    phone: "+254 722 333 444",
    email: "contact@javahouse.co.ke",
    website: "https://example.com",
    hours: {
      Mon: "07:00-22:00",
      Tue: "07:00-22:00",
      Wed: "07:00-22:00",
      Thu: "07:00-22:00",
      Fri: "07:00-23:00",
      Sat: "07:00-23:00",
      Sun: "08:00-21:00",
    },
  },
  {
    id: 3,
    slug: "bata-shoes",
    name: "Bata Shoes",
    category: "Footwear",
    floor: "Ground Floor",
    description: "Quality footwear for the whole family.",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
    phone: "+254 733 555 666",
    hours: {
      Mon: "09:00-20:00",
      Tue: "09:00-20:00",
      Wed: "09:00-20:00",
      Thu: "09:00-20:00",
      Fri: "09:00-21:00",
      Sat: "09:00-21:00",
      Sun: "10:00-19:00",
    },
  },
  {
    id: 4,
    slug: "woolworths",
    name: "Woolworths",
    category: "Fashion & Lifestyle",
    floor: "First Floor",
    description: "Premium fashion and lifestyle products.",
    image:
      "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
    phone: "+254 755 999 000",
    website: "https://example.com",
    hours: {
      Mon: "09:00-20:00",
      Tue: "09:00-20:00",
      Wed: "09:00-20:00",
      Thu: "09:00-20:00",
      Fri: "09:00-21:00",
      Sat: "09:00-21:00",
      Sun: "10:00-19:00",
    },
  },
];
