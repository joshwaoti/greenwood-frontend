export interface Venue {
  id: number;
  slug: string;
  name: string;
  category: string;
  floor: string;
  image: string;
  description: string;
  phone: string;
  hours: Record<string, string>;
}

export const dining: Venue[] = [
  {
    id: 1,
    slug: "java-house",
    name: "Java House",
    category: "Cafe",
    floor: "First Floor",
    description: "Premium coffee and contemporary dining experience.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    phone: "+254 722 333 444",
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
    id: 2,
    slug: "midtown-grill",
    name: "Midtown Grill",
    category: "Fine Dining",
    floor: "Second Floor",
    description:
      "Steaks, seafood and an extensive wine list in an elegant setting.",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    phone: "+254 700 555 111",
    hours: {
      Mon: "12:00-23:00",
      Tue: "12:00-23:00",
      Wed: "12:00-23:00",
      Thu: "12:00-23:00",
      Fri: "12:00-23:30",
      Sat: "12:00-23:30",
      Sun: "12:00-22:00",
    },
  },
  {
    id: 3,
    slug: "burger-king",
    name: "Burger King",
    category: "Fast Food",
    floor: "Food Court",
    description: "Famous flame-grilled burgers and fries.",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    phone: "+254 711 222 888",
    hours: {
      Mon: "10:00-22:00",
      Tue: "10:00-22:00",
      Wed: "10:00-22:00",
      Thu: "10:00-22:00",
      Fri: "10:00-23:00",
      Sat: "10:00-23:00",
      Sun: "10:00-21:00",
    },
  },
];
