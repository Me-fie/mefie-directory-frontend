export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  cta: string;
  cta2: string;
  link: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Discover African-Owned Businesses & Events",
    description:
      "Connect with African owned businesses, cultural events, and services across the diaspora and back home",
    image: "/images/backgroundImages/hero1.jpg",
    cta: "Join as a vendor",
    cta2: "Explore listing",
    link: "",
  },
  {
    id: 2,
    title: "Discover African-Owned Businesses & Events",
    description:
      "Connect with African owned businesses, cultural events, and services across the diaspora and back home",
    image: "/images/backgroundImages/hero2.jpg",
    cta: "Join as a vendor",
    cta2: "Explore listing",
    link: "",
  },
  {
    id: 3,
    title: "Discover African-Owned Businesses & Events",
    description:
      "Connect with African owned businesses, cultural events, and services across the diaspora and back home",
    image: "/images/backgroundImages/hero3.jpg",
    cta: "Join as a vendor",
    cta2: "Explore listing",
    link: "",
  },
];

export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: Date;
  popularity: number;
};

export const categories: Category[] = [
  {
    id: "1",
    name: "Events",
    slug: "events",
    image: "/images/backgroundImages/categories/event.jpg",
    createdAt: new Date("2024-01-15"),
    popularity: 850,
  },
  {
    id: "2",
    name: "Cultural Services",
    slug: "cultural-services",
    image: "/images/backgroundImages/categories/culture.jpg",
    createdAt: new Date("2024-02-20"),
    popularity: 720,
  },
  {
    id: "3",
    name: "Fashion & Lifestyle",
    slug: "fashion-lifestyle",
    image: "/images/backgroundImages/categories/fashion.jpg",
    createdAt: new Date("2024-03-10"),
    popularity: 950,
  },
  {
    id: "4",
    name: "Food & Hospitality",
    slug: "food-hospitality",
    image: "/images/backgroundImages/categories/food.jpg",
    createdAt: new Date("2024-01-25"),
    popularity: 1100,
  },
  {
    id: "5",
    name: "Education & Learning",
    slug: "education-learning",
    image: "/images/backgroundImages/categories/education.jpg",
    createdAt: new Date("2024-02-05"),
    popularity: 680,
  },
  {
    id: "6",
    name: "Financial Services",
    slug: "financial-services",
    image: "/images/backgroundImages/categories/finance.jpg",
    createdAt: new Date("2024-03-15"),
    popularity: 890,
  },
  {
    id: "7",
    name: "Shipping & Logistics",
    slug: "shipping-logistics",
    image: "/images/backgroundImages/categories/logistics.jpg",
    createdAt: new Date("2024-01-30"),
    popularity: 620,
  },
  {
    id: "8",
    name: "Property Relocation",
    slug: "property-relocation",
    image: "/images/backgroundImages/categories/property.jpg",
    createdAt: new Date("2024-02-28"),
    popularity: 750,
  },
];

// Business Categories for filtering
export type BusinessCategory = {
  label: string;
  value: string;
};

export const businessCategories: BusinessCategory[] = [
  { label: "All businesses", value: "all" },
  { label: "Dancers", value: "dancers" },
  { label: "Cultural Attire Stylist", value: "cultural-attire-stylist" },
  { label: "Drummers & Cultural Performers", value: "drummers-cultural-performers" },
  { label: "Clothing", value: "clothing" },
  { label: "Jewellery", value: "jewellery" },
  { label: "Art & Crafts", value: "art-crafts" },
  { label: "Caterer", value: "caterer" },
  { label: "Toys & Games", value: "toys-games" },
  { label: "Books & Magazines", value: "books-magazines" },
];

export type Business = {
  id: string;
  name: string;
  description: string;
  category: string;
  country: string;
  image: string;
  rating: number;
  reviewCount: string;
  location: string;
  verified?: boolean;
  slug: string;
  type: "business";
  createdAt: string;
  discount?: string;
};

export const featuredBusinesses: Business[] = [
  // Clothing Category
  {
    id: "1",
    name: "Kente Tailor",
    description: "Expert bespoke tailoring for traditional African wedding attire and formal wear",
    category: "Clothing",
    country: "United Kingdom",
    image: "/images/clothing/clothing1.jpg",
    rating: 4.8,
    reviewCount: "2.2k",
    location: "South London, United Kingdom",
    verified: true,
    slug: "kente-tailor-bespoke-mens-wedding-attire",
    type: "business",
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "2",
    name: "Ankara Fashion House",
    description: "Contemporary African fashion with modern designs and traditional prints",
    category: "Clothing",
    country: "United Kingdom",
    image: "/images/clothing/clothing2.jpg",
    rating: 4.6,
    reviewCount: "1.8k",
    location: "West London, United Kingdom",
    verified: true,
    slug: "ankara-fashion-house",
    type: "business",
    createdAt: "2024-01-20T00:00:00Z",
    discount: "-15%",
  },
  {
    id: "3",
    name: "Heritage Clothing Boutique",
    description: "Authentic African clothing and accessories for all occasions",
    category: "Clothing",
    country: "United Kingdom",
    image: "/images/clothing/clothing3.jpg",
    rating: 4.7,
    reviewCount: "1.5k",
    location: "Central London, United Kingdom",
    verified: false,
    slug: "heritage-clothing-boutique",
    type: "business",
    createdAt: "2024-01-25T00:00:00Z",
  },
  {
    id: "4",
    name: "Afrocentric Styles",
    description: "Bold and vibrant African-inspired fashion for the modern wardrobe",
    category: "Clothing",
    country: "United Kingdom",
    image: "/images/clothing/clothing4.jpg",
    rating: 4.5,
    reviewCount: "1.3k",
    location: "North London, United Kingdom",
    verified: true,
    slug: "afrocentric-styles",
    type: "business",
    createdAt: "2024-02-01T00:00:00Z",
  },

  // Jewellery Category
  {
    id: "5",
    name: "Beaded Heritage Necklaces",
    description: "Handcrafted traditional African beaded jewelry and accessories",
    category: "Jewellery",
    country: "United Kingdom",
    image: "/images/jewellery/jewellery1.jpg",
    rating: 4.9,
    reviewCount: "2.5k",
    location: "South London, United Kingdom",
    verified: true,
    slug: "beaded-heritage-necklaces-bracelets",
    type: "business",
    createdAt: "2024-02-05T00:00:00Z",
    discount: "-20%",
  },
  {
    id: "6",
    name: "Golden Adornments",
    description: "Exquisite African-inspired gold and silver jewelry pieces",
    category: "Jewellery",
    country: "United Kingdom",
    image: "/images/jewellery/jewellery2.jpg",
    rating: 4.8,
    reviewCount: "2.1k",
    location: "East London, United Kingdom",
    verified: true,
    slug: "golden-adornments",
    type: "business",
    createdAt: "2024-02-10T00:00:00Z",
  },
  {
    id: "7",
    name: "Tribal Treasures Jewelry",
    description: "Unique handmade jewelry celebrating African tribal heritage",
    category: "Jewellery",
    country: "United Kingdom",
    image: "/images/jewellery/jewellery3.jpg",
    rating: 4.7,
    reviewCount: "1.9k",
    location: "West London, United Kingdom",
    verified: false,
    slug: "tribal-treasures-jewelry",
    type: "business",
    createdAt: "2024-02-15T00:00:00Z",
  },
  {
    id: "8",
    name: "Cowrie Shell Creations",
    description: "Traditional cowrie shell jewelry and modern African accessories",
    category: "Jewellery",
    country: "United Kingdom",
    image: "/images/jewellery/jewellery4.jpg",
    rating: 4.6,
    reviewCount: "1.7k",
    location: "Central London, United Kingdom",
    verified: true,
    slug: "cowrie-shell-creations",
    type: "business",
    createdAt: "2024-02-20T00:00:00Z",
    discount: "-10%",
  },

  // Art & Crafts Category
  {
    id: "9",
    name: "African Sculpture Gallery",
    description: "Traditional African sculptures and handcrafted art pieces",
    category: "Art & Crafts",
    country: "United Kingdom",
    image: "/images/art/art1.jpg",
    rating: 5.0,
    reviewCount: "2.8k",
    location: "South London, United Kingdom",
    verified: true,
    slug: "african-sculpture-gallery",
    type: "business",
    createdAt: "2024-02-25T00:00:00Z",
  },
  {
    id: "10",
    name: "Heritage Pottery Studio",
    description: "Authentic African pottery and ceramic art workshops",
    category: "Art & Crafts",
    country: "United Kingdom",
    image: "/images/art/art2.jpg",
    rating: 4.9,
    reviewCount: "2.3k",
    location: "North London, United Kingdom",
    verified: true,
    slug: "heritage-pottery-studio",
    type: "business",
    createdAt: "2024-03-01T00:00:00Z",
  },
  {
    id: "11",
    name: "Afro Arts & Crafts",
    description: "Handmade African crafts, paintings, and decorative items",
    category: "Art & Crafts",
    country: "United Kingdom",
    image: "/images/art/art3.jpg",
    rating: 4.8,
    reviewCount: "2.0k",
    location: "East London, United Kingdom",
    verified: false,
    slug: "afro-arts-crafts",
    type: "business",
    createdAt: "2024-03-05T00:00:00Z",
  },
  {
    id: "12",
    name: "Tribal Masks & Carvings",
    description: "Authentic African masks, wood carvings, and tribal art",
    category: "Art & Crafts",
    country: "United Kingdom",
    image: "/images/art/art4.jpg",
    rating: 4.7,
    reviewCount: "1.8k",
    location: "West London, United Kingdom",
    verified: true,
    slug: "tribal-masks-carvings",
    type: "business",
    createdAt: "2024-03-10T00:00:00Z",
    discount: "-15%",
  },

  // Caterer Category
  {
    id: "13",
    name: "Mama's African Catering",
    description: "Authentic African catering services for weddings and events",
    category: "Caterer",
    country: "United Kingdom",
    image: "/images/backgroundImages/categories/food.jpg",
    rating: 4.8,
    reviewCount: "3.2k",
    location: "South London, United Kingdom",
    verified: true,
    slug: "mamas-african-catering",
    type: "business",
    createdAt: "2024-03-15T00:00:00Z",
    discount: "-10%",
  },
  {
    id: "14",
    name: "Jollof Kitchen Catering",
    description: "Specializing in West African cuisine for all your special occasions",
    category: "Caterer",
    country: "United Kingdom",
    image: "/images/backgroundImages/business/food.jpg",
    rating: 4.7,
    reviewCount: "2.9k",
    location: "East London, United Kingdom",
    verified: true,
    slug: "jollof-kitchen-catering",
    type: "business",
    createdAt: "2024-03-20T00:00:00Z",
  },

  // Dancers Category
  {
    id: "15",
    name: "African Dance Troupe",
    description: "Professional African dancers for events and cultural celebrations",
    category: "Dancers",
    country: "United Kingdom",
    image: "/images/backgroundImages/categories/culture.jpg",
    rating: 4.9,
    reviewCount: "1.8k",
    location: "Central London, United Kingdom",
    verified: true,
    slug: "african-dance-troupe",
    type: "business",
    createdAt: "2024-03-25T00:00:00Z",
  },
  {
    id: "16",
    name: "Afrobeat Dance Academy",
    description: "Learn traditional and contemporary African dance styles",
    category: "Dancers",
    country: "United Kingdom",
    image: "/images/backgroundImages/business/event.jpg",
    rating: 4.6,
    reviewCount: "1.4k",
    location: "North London, United Kingdom",
    verified: false,
    slug: "afrobeat-dance-academy",
    type: "business",
    createdAt: "2024-03-30T00:00:00Z",
  },

  // Cultural Attire Stylist Category
  {
    id: "17",
    name: "Heritage Attire Styling",
    description: "Expert styling for traditional African cultural attire and ceremonies",
    category: "Cultural Attire Stylist",
    country: "United Kingdom",
    image: "/images/backgroundImages/categories/fashion.jpg",
    rating: 4.8,
    reviewCount: "1.6k",
    location: "West London, United Kingdom",
    verified: true,
    slug: "heritage-attire-styling",
    type: "business",
    createdAt: "2024-04-01T00:00:00Z",
  },

  // Drummers & Cultural Performers Category
  {
    id: "18",
    name: "Djembe Masters",
    description: "Traditional African drummers and cultural performers for all occasions",
    category: "Drummers & Cultural Performers",
    country: "United Kingdom",
    image: "/images/backgroundImages/business/event.jpg",
    rating: 4.9,
    reviewCount: "1.5k",
    location: "East London, United Kingdom",
    verified: true,
    slug: "djembe-masters",
    type: "business",
    createdAt: "2024-04-05T00:00:00Z",
  },

  // Toys & Games Category
  {
    id: "19",
    name: "African Toy Emporium",
    description: "Educational toys and games celebrating African culture and heritage",
    category: "Toys & Games",
    country: "United Kingdom",
    image: "/images/backgroundImages/business/vendor.jpg",
    rating: 4.5,
    reviewCount: "1.2k",
    location: "South London, United Kingdom",
    verified: false,
    slug: "african-toy-emporium",
    type: "business",
    createdAt: "2024-04-10T00:00:00Z",
  },

  // Books & Magazines Category
  {
    id: "20",
    name: "African Literature Hub",
    description: "Books and magazines about African history, culture, and contemporary life",
    category: "Books & Magazines",
    country: "United Kingdom",
    image: "/images/backgroundImages/categories/education.jpg",
    rating: 4.7,
    reviewCount: "1.9k",
    location: "Central London, United Kingdom",
    verified: true,
    slug: "african-literature-hub",
    type: "business",
    createdAt: "2024-04-15T00:00:00Z",
  },
];



// Events Categories for filtering
export type EventsCategory = {
  label: string;
  value: string;
};

export const events: EventsCategory[] = [
  { label: "All events", value: "all" },
  { label: "Concert", value: "concert" },
  { label: "Comedy", value: "comedy" },
  { label: "Theatre", value: "theatre" },
  { label: "Popular Events", value: "popular-events" },
  // { label: "Jewellery", value: "jewellery" },
  // { label: "Art & Crafts", value: "art-crafts" },
  // { label: "Caterer", value: "caterer" },
  // { label: "Toys & Games", value: "toys-games" },
  // { label: "Books & Magazines", value: "books-magazines" },
];
export type Event = {
  id: string;
  name: string;
  category: string;
  image: string;
  location: string;
  description: string;
  slug: string;
  startDate: string;
  endDate: string;
  verified: boolean;
  type: "event";
  date: string;
  time?: string;
  country: string;
  createdAt: string;
};

export const Events: Event[] = [
  {
    id: "1",
    name: "TGMA 2026...",
    category: "Concert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/images/backgroundImages/business/event.jpg",
    location: "Virtual",
    slug: "tgma-2026",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Ghana",
    createdAt: "2024-10-01T00:00:00Z",
  },
  {
    id: "2",
    name: "African Heritage Festival",
    category: "Festival",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/images/backgroundImages/business/events2.jpg",
    location: "Virtual",
    slug: "african-heritage-festival",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Nigeria",
    createdAt: "2024-10-05T00:00:00Z",
  },
  {
    id: "3",
    name: "Art & Culture Exhibition",
    category: "Art & Craft",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/images/backgroundImages/business/events3.jpg",
    location: "Virtual",
    slug: "art-culture-exhibition",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Kenya",
    createdAt: "2024-10-10T00:00:00Z",
  },
  {
    id: "4",
    name: "Traditional Pottery Workshop",
    category: "Art & Craft",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/images/backgroundImages/business/events4.jpg",
    location: "Virtual",
    slug: "traditional-pottery-workshop",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: false,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "South Africa",
    createdAt: "2024-10-15T00:00:00Z",
  },
  {
    id: "5",
    name: "African Cuisine Festival",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    category: "Food & Hospitality",
    image: "/images/backgroundImages/business/event.jpg",
    location: "Virtual",
    slug: "african-cuisine-festival",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: false,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Ethiopia",
    createdAt: "2024-10-20T00:00:00Z",
  },
  {
    id: "6",
    name: "Fashion & Lifestyle Expo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    category: "Fashion & Lifestyle",
    image: "/images/backgroundImages/business/events4.jpg",
    location: "Virtual",
    slug: "fashion-lifestyle-expo",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: false,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Senegal",
    createdAt: "2024-10-25T00:00:00Z",
  },
  {
    id: "7",
    name: "Afrobeats Live Concert",
    category: "Concert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/images/backgroundImages/business/events2.jpg",
    location: "Virtual",
    slug: "afrobeats-live-concert",
    startDate: "Sat, Nov 25",
    endDate: "Dec 5, 2025",
    verified: true,
    type: "event",
    date: "2025-11-25",
    time: "11:00",
    country: "Ghana",
    createdAt: "2024-10-26T00:00:00Z",
  },
  {
    id: "8",
    name: "Ghana Party In The Park",
    category: "Concert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/images/backgroundImages/business/events3.jpg",
    location: "Virtual",
    slug: "ghana-party-in-the-park",
    startDate: "Sat, Nov 25",
    endDate: "Dec 6, 2025",
    verified: true,
    type: "event",
    date: "2025-11-25",
    time: "11:00",
    country: "Ghana",
    createdAt: "2024-10-27T00:00:00Z",
  },
  {
    id: "9",
    name: "Cultural Dance Festival",
    category: "Festival",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/images/backgroundImages/business/event.jpg",
    location: "Virtual",
    slug: "cultural-dance-festival",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Nigeria",
    createdAt: "2024-10-28T00:00:00Z",
  },
  {
    id: "10",
    name: "African Music Awards",
    category: "Festival",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    image: "/images/backgroundImages/business/events4.jpg",
    location: "Virtual",
    slug: "african-music-awards",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: false,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Kenya",
    createdAt: "2024-10-29T00:00:00Z",
  },
  {
    id: "11",
    name: "TGMA 2026",
    category: "Online Events",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e...",
    image: "/images/backgroundImages/business/event.jpg",
    location: "Memphis",
    slug: "tgma-2026-online",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Ghana",
    createdAt: "2024-10-30T00:00:00Z",
  },
  {
    id: "12",
    name: "TGMA 2026",
    category: "Online Events",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e...",
    image: "/images/backgroundImages/business/events2.jpg",
    location: "Memphis",
    slug: "tgma-2026-online-2",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Ghana",
    createdAt: "2024-10-31T00:00:00Z",
  },
  {
    id: "13",
    name: "TGMA 2026",
    category: "Online Events",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e...",
    image: "/images/backgroundImages/business/events3.jpg",
    location: "Memphis",
    slug: "tgma-2026-online-3",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Ghana",
    createdAt: "2024-11-01T00:00:00Z",
  },
  {
    id: "14",
    name: "TGMA 2026",
    category: "Comedy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e...",
    image: "/images/backgroundImages/business/events4.jpg",
    location: "Memphis",
    slug: "tgma-2026-comedy",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Ghana",
    createdAt: "2024-11-02T00:00:00Z",
  },
  {
    id: "15",
    name: "TGMA 2026",
    category: "Comedy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e...",
    image: "/images/backgroundImages/business/event.jpg",
    location: "Memphis",
    slug: "tgma-2026-comedy-2",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Ghana",
    createdAt: "2024-11-03T00:00:00Z",
  },
  {
    id: "16",
    name: "TGMA 2026",
    category: "Comedy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e...",
    image: "/images/backgroundImages/business/events2.jpg",
    location: "Memphis",
    slug: "tgma-2026-comedy-3",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Ghana",
    createdAt: "2024-11-04T00:00:00Z",
  },
  {
    id: "17",
    name: "TGMA 2026",
    category: "Theatre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e...",
    image: "/images/backgroundImages/business/events3.jpg",
    location: "Memphis",
    slug: "tgma-2026-theatre",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Ghana",
    createdAt: "2024-11-05T00:00:00Z",
  },
  {
    id: "18",
    name: "TGMA 2026",
    category: "Theatre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e...",
    image: "/images/backgroundImages/business/events4.jpg",
    location: "Memphis",
    slug: "tgma-2026-theatre-2",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Ghana",
    createdAt: "2024-11-06T00:00:00Z",
  },
  {
    id: "19",
    name: "TGMA 2026",
    category: "Theatre",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e...",
    image: "/images/backgroundImages/business/event.jpg",
    location: "Memphis",
    slug: "tgma-2026-theatre-3",
    startDate: "Nov 20",
    endDate: "Dec 3, 2025",
    verified: true,
    type: "event",
    date: "2025-11-20",
    time: "10:00 AM",
    country: "Ghana",
    createdAt: "2024-11-07T00:00:00Z",
  },
];

// communities
export type Community = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};
export const communities: Community[] = [
  {
    id: "1",
    title: "Faith & Values",
    description:
      "Connect with local business owners, artists, freelancers, and professionals making an impact. Exchange ideas, promote your services, and find collaborators who share your drive.",
    image: "/images/faith.jpg",
    link: "faith-values",
  },
  {
    id: "2",
    title: "Creators & Entrepreneurs",
    description:
      "Connect with local business owners, artists, freelancers, and professionals making an impact. Exchange ideas, promote your services, and find collaborators who share your drive.",
    image: "/images/creators.jpg",
    link: "creators-entrepreneurs",
  },
];

// Community Categories for filtering
export type CommunityCategory = {
  label: string;
  value: string;
};

export const communityCategories: CommunityCategory[] = [
  { label: "All communities", value: "all" },
  { label: "Mental Health", value: "mental-health" },
  { label: "Charities", value: "charities" },
  { label: "Community Interest", value: "community-interest" },
  { label: "Support Group", value: "support-group" },
  { label: "Community Support", value: "community-support" },
  { label: "Local Groups", value: "local-groups" },
  { label: "Professional Groups", value: "professional-groups" },
  { label: "School Groups", value: "school-groups" },
  { label: "Sports Groups", value: "sports-groups" },
  { label: "Hometown Groups", value: "hometown-groups" },
];

// community card data
export type CommunityCard = {
  id: string; // Always good to have an id
  name: string; // From your boilerplate
  description: string;
  imageUrl: string; // Inferred from image
  tag: string; // Inferred from image ("Community Support")
  verified: boolean;
  type: "community";
  location: string;
};
export const communityCards: CommunityCard[] = [
  // Mental Health Communities
  {
    id: "1",
    name: "MindCare Ghana",
    description: "Providing accessible mental health care and safe spaces for individuals and families in Ghana",
    imageUrl: "/images/backgroundImages/community/mental-health.jpg",
    tag: "Mental Health",
    verified: true,
    type: "community",
    location: "Accra, Ghana",
  },
  {
    id: "2",
    name: "Mental Health Society of Ghana",
    description: "Promoting awareness, reducing stigma, and supporting people living with mental health conditions",
    imageUrl: "/images/backgroundImages/community/community-help.jpg",
    tag: "Mental Health",
    verified: true,
    type: "community",
    location: "Accra, Ghana",
  },
  {
    id: "3",
    name: "BasicNeeds Ghana",
    description: "Empowering people with mental illness and epilepsy to live healthier, productive lives through community-based support",
    imageUrl: "/images/backgroundImages/community/community-people.png",
    tag: "Mental Health",
    verified: true,
    type: "community",
    location: "Accra, Ghana"
  },
  {
    id: "4",
    name: "Healthy Minds Africa (HMA)",
    description: "Connecting Africans abroad with culturally sensitive mental health resources and peer support networks",
    imageUrl: "/images/backgroundImages/community/friendship.jpg",
    tag: "Mental Health",
    verified: true,
    type: "community",
    location: "Memphis, USA"
  },
  
  // Social Impact Communities
  {
    id: "5",
    name: "University of Ghana Alumni Network",
    description: "Connecting graduates worldwide to foster mentorship, career growth, and lifelong friendships across generations",
    imageUrl: "/images/backgroundImages/community/students.jpg",
    tag: "School Groups",
    verified: false,
    type: "community",
    location: "Accra, Ghana"
  },
  {
    id: "6",
    name: "Ghana Tech Professionals Association",
    description: "A network for IT specialists, innovators, and entrepreneurs driving digital growth across Ghana and beyond",
    imageUrl: "/images/backgroundImages/community/tech-community.jpg",
    tag: "Professional Groups",
    verified: true,
    type: "community",
    location: "Accra, Ghana"
  },
  {
    id: "7",
    name: "Youth for Good Governance",
    description: "Empowering young voices to engage in civic leadership, advocacy, and transparent governance initiatives",
    imageUrl: "/images/backgroundImages/community/community1.jpg",
    tag: "Community Interest",
    verified: true,
    type: "community",
    location: "Accra, Ghana"
  },
  {
    id: "8",
    name: "Ghana Cultural Exchange Circle",
    description: "Bringing together people passionate about Ghanaian culture through food, music, storytelling, and traditions",
    imageUrl: "/images/backgroundImages/community/togetherness.jpg",
    tag: "Community Interest",
    verified: true,
    type: "community",
    location: "Accra, Ghana"
  },
  
  // Additional Communities
  {
    id: "9",
    name: "Accra Runners Club",
    description: "A community of fitness enthusiasts promoting healthy lifestyles through regular running events and marathons",
    imageUrl: "/images/backgroundImages/community/community2.jpg",
    tag: "Sports Groups",
    verified: false,
    type: "community",
    location: "Accra, Ghana"
  },
  {
    id: "10",
    name: "Kumasi Hometown Heroes",
    description: "Connecting Kumasi natives and residents to celebrate local heritage and drive community development projects",
    imageUrl: "/images/backgroundImages/community/community-3.jpg",
    tag: "Hometown Groups",
    verified: true,
    type: "community",
    location: "Kumasi, Ghana"
  },
  {
    id: "11",
    name: "Ghana Education Support Network",
    description: "Supporting underprivileged students with scholarships, mentorship, and educational resources across Ghana",
    imageUrl: "/images/backgroundImages/community/community-4.jpg",
    tag: "Charities",
    verified: true,
    type: "community",
    location: "Accra, Ghana"
  },
  {
    id: "12",
    name: "Community Builders Ghana",
    description: "Volunteers working together on local infrastructure, sanitation, and neighborhood improvement initiatives",
    imageUrl: "/images/backgroundImages/community/community-love.jpg",
    tag: "Community Support",
    verified: false,
    type: "community",
    location: "Accra, Ghana"
  },
];


// faqs
export type Faq = {
  id: string;
  question: string;
  answer: string;
};
export const faqs: Faq[] = [
  {
    id: "1",
    question: "What is Mefie Directory?",
    answer: "Mefie Directory is a platform that connects local businesses, artists, freelancers, and professionals making an impact. Exchange ideas, promote your services, and find collaborators who share your drive.",
  },
  {
    id: "2",
    question: "How do I join Mefie Directory?",
    answer: "To join Mefie, simply create an account and start exploring the platform. You can connect with local businesses, artists, freelancers, and professionals making an impact. Exchange ideas, promote your services, and find collaborators who share your drive.",
  },
  {
    id: "3",
    question: "How do I list my business?",
    answer: "To list your business on Mefie Directory, simply create an account and start exploring the platform. You can connect with local businesses, artists, freelancers, and professionals making an impact. Exchange ideas, promote your services, and find collaborators who share your drive.",
  },
  {
    id: "4",
    question: "Is there a fee to join?",
    answer: "No, there is no fee to join Mefie Directory.",
  },
  {
    id: "5",
    question: "What additional features do i get with the premium plan?",
    answer: "With the premium plan, you get access to additional features such as a dedicated account manager, priority support, and exclusive discounts.",
  },
  {
    id: "6",
    question: "How do customers find my business?",
    answer: "Customers find your business through search, social media, and referrals.",
  }
];


// About page news
export type NewsItem = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
  categoryColor?: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  content: string;
};

export const newsList: NewsItem[] = [
  {
    id: "luxury-grocer-toothpaste",
    title: "Luxury Grocer Launches $11 Toothpaste",
    date: "April 5, 2025",
    excerpt:
      "High-end wellness-oriented grocer Enewhan has released a toothpaste-inspired smoothie in collaboration with oral-care.",
    image: "/images/about/news-1.jpg",
    category: "Food",
    categoryColor: "bg-green-100 text-green-700",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/about/testimonial.png",
    },
    readTime: "4 min read",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit ex facilisis metus pellentesque oreet suscipit. Nibh mattis vitae odio, turpis eu neque. Vitae massa tempus, ornare sit amet nisi eget nisi, sed dui. Donec purus velit at oreet imperdiet. Hendrerit mollis ullamcorper quis commodo vitae.

1. AI-Driven Financial Tools
Discover how these unique algorithms help optimize your investment portfolio based on real-time market data and trends. These tools are designed to minimize risk and maximize returns through intelligent decision-making.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit ex facilisis metus pellentesque oreet suscipit. Nibh mattis vitae odio, turpis eu neque. Vitae massa tempus, ornare sit amet nisi eget nisi, sed dui. Donec purus velit at oreet imperdiet. Hendrerit mollis ullamcorper quis commodo vitae.

2. Automated Investment Strategies
Explore strategies where algorithms help optimize your investment portfolio based on real-time market data and trends. These strategies are designed to minimize risk and maximize returns through intelligent decision-making.

3. Personalized Budgeting Solutions
Learn how fintech apps provide personalized budgeting recommendations. These solutions aim to enhance financial literacy and empower users to achieve their financial goals through actionable insights and coaching.

![/images/about/grid-2.jpg]

4. Automated Savings Plans
Investment systems that automatically transfer funds into savings accounts based on user-defined goals. This feature promotes consistent saving habits and helps users quickly build an emergency fund or save for specific purchases without needing to think about it.

5. Investment Tracking Tools
- Track and monitor development
- Manage your investment account with comments
- Analyze portfolio performance

Offer platforms that allow users to monitor their investment portfolios in real time. These tools provide predictive performance, diversification, and risk assessment, helping users make informed decisions about their investment strategies.`,
  },
  {
    id: "fancy-gadam-projects",
    title: "Fancy Gadam Announces Two Major Projects",
    date: "September 17, 2025",
    excerpt:
      "Ghanaian artiste Fancy Gadam has revealed plans for two new music projects in 2026.",
    image: "/images/about/news-2.jpg",
    category: "Entertainment",
    categoryColor: "bg-blue-100 text-blue-700",
    author: {
      name: "Michael Owusu",
      avatar: "/images/about/testimonial.png",
    },
    readTime: "3 min read",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit ex facilisis metus pellentesque oreet suscipit. Nibh mattis vitae odio, turpis eu neque. Vitae massa tempus, ornare sit amet nisi eget nisi, sed dui.

The announcement comes as Fancy Gadam continues to dominate the Ghanaian music scene with his unique blend of traditional and modern sounds. His upcoming projects promise to showcase his versatility and commitment to pushing creative boundaries.

1. Album Release Plans
The first project is a full-length album featuring collaborations with both local and international artists. This album aims to celebrate Ghanaian culture while incorporating global musical influences.

2. Documentary Series
The second project is a documentary series that will give fans an intimate look into his creative process, life journey, and the stories behind his most popular songs.

Both projects are expected to launch in the first quarter of 2026, with pre-release singles dropping throughout late 2025.`,
  },
  {
    id: "community-spaces",
    title: "Elevating Our Progress With New Community Spaces",
    date: "October 25, 2024",
    excerpt:
      "The development team has unveiled the next phase of our community expansion, focusing on accessibility and comfort.",
    image: "/images/about/grid-1.jpg",
    category: "Community",
    categoryColor: "bg-purple-100 text-purple-700",
    author: {
      name: "Kwame Mensah",
      avatar: "/images/about/testimonial.png",
    },
    readTime: "5 min read",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit ex facilisis metus pellentesque oreet suscipit. Nibh mattis vitae odio, turpis eu neque.

Our commitment to building inclusive community spaces continues with this exciting new development. These spaces are designed to bring people together and foster meaningful connections.

1. Accessible Design
All new spaces feature wheelchair accessibility, sensory-friendly environments, and multilingual signage to ensure everyone feels welcome.

2. Modern Amenities
From high-speed internet to comfortable seating areas, these spaces are equipped with everything needed for both work and relaxation.

3. Community Programming
Regular events, workshops, and cultural celebrations will be hosted in these new spaces to strengthen community bonds.`,
  },
];

// Testimonials
export type Testimonial = {
  id: string;
  name: string;
  image: string;
  message: string;
  review: string;
  stars: number;
  role?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alexander Brown",
    image: "/images/about/testimonial.png",
    message: "Thank you for giving me the best offers for...",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim aliqua. Excepturi sit occaecat culpa adipisci deserunt.",
    stars: 5,
    role: "Business Owner",
  },
  {
    id: "2",
    name: "Sophia Martinez",
    image: "/images/about/testimonial.png",
    message: "Amazing platform for discovering local businesses",
    review:
      "Mefie Directory has completely transformed how I find and connect with African businesses. The platform is intuitive and the listings are comprehensive.",
    stars: 5,
    role: "Community Member",
  },
  {
    id: "3",
    name: "Kwame Asante",
    image: "/images/about/testimonial.png",
    message: "Best directory for Ghanaian culture and events",
    review:
      "As someone in the diaspora, Mefie helps me stay connected to my roots. I've discovered amazing events and businesses through this platform.",
    stars: 5,
    role: "Diaspora Member",
  },
  {
    id: "4",
    name: "Amina Hassan",
    image: "/images/about/testimonial.png",
    message: "Excellent resource for event planning",
    review:
      "Planning cultural events has never been easier. Mefie Directory provides all the resources and connections I need in one place.",
    stars: 5,
    role: "Event Planner",
  },
  {
    id: "5",
    name: "David Osei",
    image: "/images/about/testimonial.png",
    message: "Great for promoting my business",
    review:
      "Since listing my business on Mefie, I've seen a significant increase in customer engagement. The platform truly supports African entrepreneurs.",
    stars: 5,
    role: "Restaurant Owner",
  },
  {
    id: "6",
    name: "Grace Mensah",
    image: "/images/about/testimonial.png",
    message: "Love the community focus",
    review:
      "Mefie isn't just a directory, it's a community. I've made meaningful connections and discovered opportunities I wouldn't have found elsewhere.",
    stars: 5,
    role: "Fashion Designer",
  },
];
