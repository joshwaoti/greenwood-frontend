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

export const entertainment: Venue[] = [
  {
    id: 1,
    slug: "cineplex-cinema",
    name: "Cineplex Cinema",
    category: "Cinema",
    floor: "Second Floor",
    description:
      "State-of-the-art multiplex showing the latest blockbusters in 3D and 2D.",
    image:
      "https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=800&q=80",
    phone: "+254 700 999 321",
    hours: {
      Mon: "10:00-23:00",
      Tue: "10:00-23:00",
      Wed: "10:00-23:00",
      Thu: "10:00-23:00",
      Fri: "10:00-00:00",
      Sat: "10:00-00:00",
      Sun: "10:00-22:00",
    },
  },
  {
    id: 2,
    slug: "xtreme-bowling",
    name: "Xtreme Bowling",
    category: "Bowling Alley",
    floor: "Second Floor",
    description:
      "12-lane bowling alley with cosmic lighting and arcade games section.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=800&q=80",
    phone: "+254 722 123 987",
    hours: {
      Mon: "11:00-22:00",
      Tue: "11:00-22:00",
      Wed: "11:00-22:00",
      Thu: "11:00-22:00",
      Fri: "11:00-23:30",
      Sat: "10:00-23:30",
      Sun: "10:00-21:00",
    },
  },
  {
    id: 3,
    slug: "kids-fun-zone",
    name: "Kids Fun Zone",
    category: "Play Park",
    floor: "Ground Floor",
    description:
      "Indoor playground with slides, ball pits, and safe climbing frames for children.",
    image:
      "https://images.unsplash.com/photo-1596464716121-fb1a1ecba035?auto=format&fit=crop&w=800&q=80",
    phone: "+254 733 456 555",
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
