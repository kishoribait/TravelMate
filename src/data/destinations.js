import goa from "../assets/images/goa.jpg";
import jaipur from "../assets/images/jaipur.jpg";
import manali from "../assets/images/manali.jpg";
import udaipur from "../assets/images/udaipur.jpg";
import andaman from "../assets/images/andaman.jpg";
import shimla from "../assets/images/shimla.jpg";
import kashmir from "../assets/images/kashmir.jpg";
import kerala from "../assets/images/kerala.jpg";
import rishikesh from "../assets/images/rishikesh.jpg";
import agra from "../assets/images/agra.jpg";
import ladakh from "../assets/images/ladakh.jpg";

const destinations = [
  {
    id: 1,
    name: "Goa",
    image: goa,
    location: "Goa, India",
    category: "Beach",
    rating: 4.8,
    days: "3 Days",
    price: 12000,
    description:
      "Enjoy beautiful beaches, nightlife, water sports and amazing sunsets.",
    highlights: [
      "Baga Beach",
      "Calangute Beach",
      "Water Sports",
      "Night Clubs",
    ],
  },

  {
    id: 2,
    name: "Jaipur",
    image: jaipur,
    location: "Rajasthan",
    category: "Heritage",
    rating: 4.7,
    days: "4 Days",
    price: 10000,
    description:
      "Explore forts, palaces and rich Rajasthani culture.",
    highlights: [
      "Amber Fort",
      "Hawa Mahal",
      "City Palace",
      "Local Market",
    ],
  },

  {
    id: 3,
    name: "Manali",
    image: manali,
    location: "Himachal Pradesh",
    category: "Mountains",
    rating: 4.9,
    days: "5 Days",
    price: 15000,
    description:
      "Snow mountains, adventure sports and beautiful valleys.",
    highlights: [
      "Solang Valley",
      "Rohtang Pass",
      "River Rafting",
      "Paragliding",
    ],
  },

  {
    id: 4,
    name: "Udaipur",
    image: udaipur,
    location: "Rajasthan",
    category: "Heritage",
    rating: 4.8,
    days: "4 Days",
    price: 14000,
    description:
      "City of Lakes with royal palaces and peaceful boat rides.",
    highlights: [
      "Lake Pichola",
      "City Palace",
      "Fateh Sagar",
      "Jag Mandir",
    ],
  },

  {
    id: 5,
    name: "Andaman",
    image: andaman,
    location: "Andaman & Nicobar",
    category: "Beach",
    rating: 4.9,
    days: "5 Days",
    price: 22000,
    description:
      "Crystal clear water and beautiful islands.",
    highlights: [
      "Havelock Island",
      "Scuba Diving",
      "Radhanagar Beach",
      "Cellular Jail",
    ],
  },

  {
    id: 6,
    name: "Shimla",
    image: shimla,
    location: "Himachal Pradesh",
    category: "Mountains",
    rating: 4.7,
    days: "4 Days",
    price: 13000,
    description:
      "Peaceful hill station with beautiful landscapes.",
    highlights: [
      "Mall Road",
      "Jakhoo Temple",
      "Toy Train",
      "Kufri",
    ],
  },

  {
    id: 7,
    name: "Kashmir",
    image: kashmir,
    location: "Jammu & Kashmir",
    category: "Nature",
    rating: 5.0,
    days: "6 Days",
    price: 25000,
    description:
      "Paradise on Earth with lakes and snow mountains.",
    highlights: [
      "Dal Lake",
      "Gulmarg",
      "Sonmarg",
      "Pahalgam",
    ],
  },

  {
    id: 8,
    name: "Kerala",
    image: kerala,
    location: "Kerala",
    category: "Nature",
    rating: 4.8,
    days: "5 Days",
    price: 18000,
    description:
      "Backwaters, tea gardens and houseboat experience.",
    highlights: [
      "Munnar",
      "Alleppey",
      "House Boat",
      "Tea Gardens",
    ],
  },

  {
    id: 9,
    name: "Rishikesh",
    image: rishikesh,
    location: "Uttarakhand",
    category: "Adventure",
    rating: 4.7,
    days: "3 Days",
    price: 9000,
    description:
      "Yoga capital with thrilling river rafting.",
    highlights: [
      "River Rafting",
      "Laxman Jhula",
      "Camping",
      "Bungee Jump",
    ],
  },

  {
    id: 10,
    name: "Agra",
    image: agra,
    location: "Uttar Pradesh",
    category: "Heritage",
    rating: 4.6,
    days: "2 Days",
    price: 8000,
    description:
      "Visit the world-famous Taj Mahal.",
    highlights: [
      "Taj Mahal",
      "Agra Fort",
      "Mehtab Bagh",
      "Local Food",
    ],
  },

  {
    id: 11,
    name: "Ladakh",
    image: ladakh,
    location: "Ladakh",
    category: "Adventure",
    rating: 5.0,
    days: "7 Days",
    price: 30000,
    description:
      "Mountains, bike trips and breathtaking views.",
    highlights: [
      "Pangong Lake",
      "Nubra Valley",
      "Magnetic Hill",
      "Khardung La",
    ],
  },
];


export default destinations;