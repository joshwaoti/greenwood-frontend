export interface Event {
  id: number;
  slug: string;
  title: string;
  date: string;
  time: string;
  image: string;
  summary: string;
  description: string;
  location: string;
}

export const events: Event[] = [
  {
    id: 1,
    slug: "fashion-week-launch",
    title: "Fashion Week Launch Party",
    date: "2024-08-05",
    time: "18:00",
    image:
      "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary:
      "Kick off Fashion Week with live music, runway previews, and exclusive discounts.",
    description:
      "Join us for an unforgettable evening as we launch Greenwood City's Fashion Week. Enjoy live DJ sets, runway previews of the latest collections, and exclusive one-night-only discounts across participating stores.",
    location: "Central Atrium",
  },
  {
    id: 2,
    slug: "kids-summer-camp",
    title: "Kids Summer Camp",
    date: "2024-08-10",
    time: "10:00",
    image:
      "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Fun-filled activities for kids aged 5-12 all week long.",
    description:
      "Our week-long summer camp features arts & crafts, interactive games, and educational workshops designed to keep kids engaged and happy while parents shop.",
    location: "Level 1 – Kids Zone",
  },
  {
    id: 3,
    slug: "chef-live-cooking",
    title: "Live Cooking with Chef Otieno",
    date: "2024-08-15",
    time: "14:00",
    image:
      "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Watch Chef Otieno whip up gourmet dishes and taste free samples.",
    description:
      "Celebrity Chef Otieno will demonstrate three signature dishes live on stage. Audience members can taste and receive recipe cards to try at home.",
    location: "Food Court Stage",
  },
  {
    id: 4,
    slug: "indoor-market",
    title: "Indoor Farmers Market",
    date: "2024-08-20",
    time: "09:00",
    image:
      "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary:
      "Fresh produce, artisanal breads, and organic goodies every month.",
    description:
      "Support local farmers and artisans at our monthly indoor market featuring over 30 stalls of fresh produce, cheeses, baked goods, and more.",
    location: "Expo Hall",
  },
  {
    id: 5,
    slug: "movie-marathon-night",
    title: "Retro Movie Marathon Night",
    date: "2024-08-25",
    time: "19:00",
    image:
      "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Back-to-back classics on the big screen with popcorn combos.",
    description:
      "Grab your friends and enjoy a night of nostalgia with our retro movie marathon featuring 80s classics. Special popcorn and drink combos available at discounted prices.",
    location: "Cinema Hall 3",
  },
  {
    id: 6,
    slug: "yoga-sunday",
    title: "Sunrise Yoga Sunday",
    date: "2024-09-01",
    time: "07:00",
    image:
      "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Free outdoor yoga session led by certified instructors.",
    description:
      "Start your Sunday with mindfulness and movement. Bring your mat and join our certified instructors for a refreshing sunrise yoga session on the rooftop garden.",
    location: "Rooftop Garden",
  },
  {
    id: 7,
    slug: "tech-gadget-expo",
    title: "Tech & Gadget Expo",
    date: "2024-09-05",
    time: "11:00",
    image:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Discover the latest tech innovations from top brands.",
    description:
      "Hands-on demos, product launches, and expert talks await at our Tech & Gadget Expo showcasing cutting-edge electronics and smart devices.",
    location: "Expo Hall",
  },
  {
    id: 8,
    slug: "artisan-workshop",
    title: "Artisan Craft Workshop",
    date: "2024-09-10",
    time: "13:00",
    image:
      "https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Create your own hand-made souvenirs with local artisans.",
    description:
      "Learn traditional crafting techniques and make your own keepsake to take home in this hands-on workshop led by local artisans.",
    location: "Workshop Studio, Level 2",
  },
  {
    id: 9,
    slug: "internal-sales",
    title: "Annual Mega Sales Week",
    date: "2024-09-15",
    time: "10:00",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary: "Huge discounts across all stores for an entire week!",
    description:
      "Enjoy jaw-dropping discounts, flash sales, and limited-time offers across participating stores during our biggest sales event of the year.",
    location: "Mall-wide",
  },
  {
    id: 10,
    slug: "christmas-choir",
    title: "Christmas Carol Choir",
    date: "2024-12-20",
    time: "17:00",
    image:
      "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
    summary:
      "Festive melodies performed by local choirs to celebrate the season.",
    description:
      "Get into the festive spirit with beautiful carol performances by local choirs, complimentary hot chocolate, and photo ops with Santa.",
    location: "Central Atrium",
  },
];
