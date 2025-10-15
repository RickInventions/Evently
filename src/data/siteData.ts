import { Briefcase, Heart, UtensilsCrossed, PartyPopper, Facebook, Instagram, Twitter, Linkedin,  GithubIcon } from "lucide-react";
import corporateImage from "@/assets/corporate.jpg";
import weddingImage from "@/assets/wedding.jpg";
import cateringImage from "@/assets/catering.jpg";
import kidsImage from "@/assets/kids.jpg";
import heroImage from "@/assets/hero.jpg";
import aboutImage from "@/assets/about.jpg";
import janeImage from "@/assets/jane.jpg";
import emmanuelImage from "@/assets/emmanuel.jpg";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";

export const siteData = {
  name: "Evently & Co.",
  tagline: "Celebrate Life's Best Moments With Us",
  description: "Elegant spaces, unforgettable memories.",
  
  contact: {
    phone: "+234 800 123 4567",
    email: "info@eventcentre.com",
    address: "123 Celebration Avenue, Lagos, Nigeria",
  },

  socialMedia: [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com/eventlyandco" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com/eventlyinsta" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/eventlyandco" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/eventlyandco" },
    { name: "Github", icon: GithubIcon, url: "https://github.com/company/eventlyandco" },
  ],

  navigation: [
    { name: "Home", path: "/" },
    { name: "Who We Are", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ],

  hero: {
    image: heroImage,
    headline: "Celebrate Life's Best Moments With Us",
    subtext: "Elegant spaces, unforgettable memories.",
    cta: "Book Your Event",
  },

  services: [
    {
      id: "corporate",
      name: "Corporate Events",
      slug: "corporate-events",
      image: corporateImage,
      description: "Professional spaces for meetings, conferences, and corporate galas. State-of-the-art AV equipment and elegant settings.",
      icon: Briefcase,
      button: "Enquire Now",
      tagline: "Where Business Meets Excellence",
      fullDescription: "Transform your corporate events into memorable experiences with our premium venues and professional services. From intimate board meetings to grand conferences, we provide the perfect setting for your business success.",
      packages: [
        {
          name: "Executive Meeting",
          price: "₦150,000",
          duration: "Half Day",
          features: [
            "Boardroom for up to 20 people",
            "High-speed WiFi & AV equipment",
            "Whiteboard & presentation tools",
            "Coffee & tea service",
            "Dedicated event coordinator"
          ]
        },
        {
          name: "Conference Package",
          price: "₦450,000",
          duration: "Full Day",
          features: [
            "Main hall for up to 200 guests",
            "Stage & professional lighting",
            "Premium sound system",
            "Lunch & refreshments",
            "Breakout rooms available",
            "Registration desk setup",
            "Technical support team"
          ]
        },
        {
          name: "Corporate Gala",
          price: "₦850,000",
          duration: "Evening Event",
          features: [
            "Grand ballroom for 300+ guests",
            "Premium décor & ambiance lighting",
            "3-course dinner buffet",
            "Premium bar service",
            "Live entertainment stage",
            "Photography & videography",
            "Valet parking service",
            "Full event planning & coordination"
          ]
        }
      ],
      amenities: [
        "State-of-the-art AV equipment",
        "High-speed internet throughout",
        "Climate-controlled venues",
        "Professional catering services",
        "Secure parking facilities",
        "Wheelchair accessible"
      ]
    },
    {
      id: "weddings",
      name: "Weddings",
      slug: "weddings",
      image: weddingImage,
      description: "Romantic settings for your special day. From intimate ceremonies to grand receptions, we create your dream wedding.",
      icon: Heart,
      button: "Request Quote",
      tagline: "Your Love Story, Beautifully Told",
      fullDescription: "Say 'I do' in a venue as unique as your love story. Our wedding packages are designed to create magical moments that you and your guests will cherish forever.",
      packages: [
        {
          name: "Intimate Ceremony",
          price: "₦500,000",
          capacity: "Up to 50 guests",
          features: [
            "Elegant ceremony space",
            "Floral arrangements",
            "Champagne toast",
            "Professional photographer (4 hours)",
            "Cake cutting service",
            "Bridal suite access"
          ]
        },
        {
          name: "Classic Wedding",
          price: "₦1,200,000",
          capacity: "Up to 150 guests",
          features: [
            "Ceremony & reception venue",
            "Premium décor & centerpieces",
            "3-course plated dinner",
            "Open bar (4 hours)",
            "Wedding cake",
            "DJ & sound system",
            "Photography & videography (8 hours)",
            "Day-of coordinator",
            "Bridal & groom suites"
          ]
        },
        {
          name: "Luxury Dream Wedding",
          price: "₦2,500,000+",
          capacity: "200+ guests",
          features: [
            "Premium venue transformation",
            "Custom luxury décor & florals",
            "Gourmet 5-course dinner",
            "Premium open bar (unlimited)",
            "Designer wedding cake",
            "Live band or premium DJ",
            "Professional photography & cinematography",
            "Drone footage",
            "Full wedding planning service",
            "Dedicated planning team",
            "Valet parking & shuttle service",
            "Overnight bridal suite"
          ]
        }
      ],
      addOns: [
        { item: "Photo booth with props", price: "₦80,000" },
        { item: "Fireworks display", price: "₦150,000" },
        { item: "Live band upgrade", price: "₦200,000" },
        { item: "Additional hour reception", price: "₦50,000" },
        { item: "Rehearsal dinner venue", price: "₦180,000" }
      ]
    },
    {
      id: "catering",
      name: "Event Catering",
      slug: "event-catering",
      image: cateringImage,
      description: "Delicious cuisine tailored to your theme. Gourmet menus crafted by expert chefs using the finest ingredients.",
      icon: UtensilsCrossed,
      button: "View Menu",
      tagline: "Culinary Excellence for Every Occasion",
      fullDescription: "Delight your guests with exceptional cuisine crafted by our award-winning chefs. From intimate dinners to grand celebrations, we create memorable dining experiences.",
      packages: [
        {
          name: "Cocktail Reception",
          price: "₦8,500/person",
          features: [
            "Selection of 12 canapés",
            "2 hot passed hors d'oeuvres",
            "Cheese & charcuterie station",
            "Soft drinks & juice bar",
            "Professional service staff"
          ]
        },
        {
          name: "Buffet Dinner",
          price: "₦15,000/person",
          features: [
            "Choice of 2 proteins (chicken, beef, fish)",
            "3 side dishes",
            "Fresh salad bar",
            "Bread & butter service",
            "Dessert table",
            "Soft drinks & water",
            "Full table setup"
          ]
        },
        {
          name: "Plated Gourmet",
          price: "₦25,000/person",
          features: [
            "3-course gourmet meal",
            "Appetizer, main course, dessert",
            "Choice of premium proteins",
            "Wine pairing suggestions",
            "Amuse-bouche",
            "Artisan bread service",
            "Coffee & petit fours",
            "White-glove service"
          ]
        }
      ],
      menuCategories: [
        {
          name: "Nigerian Specialties",
          items: [
            "Jollof Rice with Chicken",
            "Assorted Meat Pepper Soup",
            "Grilled Suya Platter",
            "Moi Moi & Akara Station",
            "Gizdodo (Gizzard & Plantain)"
          ]
        },
        {
          name: "Continental Cuisine",
          items: [
            "Grilled Salmon with Lemon Butter",
            "Roasted Herb Chicken",
            "Beef Wellington",
            "Vegetarian Pasta Primavera",
            "Mediterranean Mezze Platter"
          ]
        },
        {
          name: "Desserts",
          items: [
            "Chocolate Lava Cake",
            "Tiramisu",
            "Fresh Fruit Pavlova",
            "Artisan Ice Cream Bar",
            "Nigerian Chin Chin & Puff Puff"
          ]
        }
      ],
      dietaryOptions: [
        "Vegetarian & Vegan options",
        "Gluten-free alternatives",
        "Halal preparation available",
        "Allergy-friendly modifications",
        "Kids menu available"
      ]
    },
    {
      id: "kids",
      name: "Kids Parties",
      slug: "kids-parties",
      image: kidsImage,
      description: "Fun-filled experiences for the little ones. Safe, colorful spaces with entertainment and activities they'll love.",
      icon: PartyPopper,
      button: "Book Party",
      tagline: "Where Little Dreams Come True",
      fullDescription: "Create magical memories for your little ones with our specially designed kids party packages. Safe, supervised fun with entertainment that kids absolutely love!",
      packages: [
        {
          name: "Basic Birthday Bash",
          price: "₦120,000",
          capacity: "Up to 20 kids",
          features: [
            "2-hour venue rental",
            "Colorful party decorations",
            "Birthday cake",
            "Juice & snacks",
            "Party supplies (plates, cups, napkins)",
            "Music system",
            "1 party attendant"
          ]
        },
        {
          name: "Super Fun Package",
          price: "₦250,000",
          capacity: "Up to 40 kids",
          features: [
            "3-hour venue rental",
            "Themed decorations",
            "Professional entertainer/MC",
            "Face painting",
            "Balloon twisting",
            "Party games & activities",
            "Birthday cake & treats",
            "Lunch boxes for all kids",
            "Party favor bags",
            "2 party attendants"
          ]
        },
        {
          name: "Ultimate Party Experience",
          price: "₦450,000",
          capacity: "50+ kids",
          features: [
            "4-hour venue rental",
            "Premium themed transformation",
            "Character appearance",
            "Magic show or puppet show",
            "Bouncy castle",
            "Face painting & glitter tattoos",
            "Photo booth with props",
            "Full buffet for kids & adults",
            "Designer birthday cake",
            "Gift bags for all guests",
            "Professional photography",
            "3 party attendants",
            "Dedicated party coordinator"
          ]
        }
      ],
      themes: [
        "Superheroes (Marvel/DC)",
        "Princess & Fairytale",
        "Unicorn Magic",
        "Dinosaur Adventure",
        "Space & Astronauts",
        "Under the Sea",
        "Jungle Safari",
        "Frozen/Disney Princesses",
        "Paw Patrol",
        "Carnival/Circus"
      ],
      addOns: [
        { item: "Bouncy castle", price: "₦50,000" },
        { item: "Face painter (2 hours)", price: "₦35,000" },
        { item: "Character appearance", price: "₦60,000" },
        { item: "Popcorn & cotton candy machine", price: "₦30,000" },
        { item: "Extra hour venue time", price: "₦25,000" }
      ]
    }
  ],

  testimonials: [
    {
      name: "Aisha Ibrahim",
      role: "Bride",
      text: "The best day of our lives — everything was perfect! From the stunning décor to the impeccable service, Evently & Co. made our wedding dreams come true.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      name: "Tunde Adebayo",
      role: "Corporate Client",
      text: "Flawless service and beautiful atmosphere. Our annual conference was a huge success thanks to their professional team and state-of-the-art facilities.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
    },
    {
      name: "Chioma Okafor",
      role: "Mother",
      text: "My daughter's 5th birthday party was magical! The kids had an amazing time, and the staff went above and beyond. Highly recommended!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    },
    {
      name: "David Chen",
      role: "Event Organizer",
      text: "Working with Evently & Co. is always a pleasure. Their attention to detail and commitment to excellence makes every event spectacular.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
    }
  ],

  team: [
    {
      name: "Jane Doe",
      role: "Founder & CEO",
      image: janeImage,
      bio: "With over 15 years in the events industry, Jane founded Evently & Co. to create unforgettable experiences for every occasion."
    },
    {
      name: "Emmanuel O.",
      role: "Creative Director",
      image: emmanuelImage,
      bio: "Emmanuel brings artistic vision and meticulous attention to detail, transforming venues into stunning event spaces."
    }
  ],

  about: {
    image: aboutImage,
    story: "Founded in 2010, Evently & Co. began with a simple vision: to create spaces where life's most precious moments come alive. What started as a small venue has blossomed into Lagos's premier event destination, hosting thousands of celebrations that have brought joy to countless families and businesses.",
    mission: "To provide exceptional event experiences that exceed expectations, creating lasting memories through impeccable service, stunning venues, and attention to every detail.",
    values: [
      {
        title: "Excellence",
        description: "We strive for perfection in every aspect of our service, from venue preparation to post-event care."
      },
      {
        title: "Creativity",
        description: "Every event is unique. We bring fresh ideas and innovative solutions to make your vision come to life."
      },
      {
        title: "Integrity",
        description: "Honesty, transparency, and reliability are the foundations of our relationships with clients."
      },
      {
        title: "Passion",
        description: "We love what we do, and it shows in every celebration we host and every smile we create."
      }
    ],
    stats: [
      { number: "5000+", label: "Events Hosted" },
      { number: "98%", label: "Client Satisfaction" },
      { number: "15+", label: "Years Experience" },
      { number: "50+", label: "Team Members" }
    ]
  },

  gallery: {
    images: [
      { src: gallery1, alt: "Elegant wedding reception setup", category: "weddings" },
      { src: gallery2, alt: "Corporate conference hall", category: "corporate" },
      { src: gallery3, alt: "Colorful kids birthday party", category: "kids" },
      { src: gallery4, alt: "Gourmet catering display", category: "catering" },
      { src: gallery5, alt: "Beautiful wedding ceremony", category: "weddings" },
      { src: gallery6, alt: "Grand event hall", category: "all" }
    ]
  },

  features: [
    {
      title: "Flexible Spaces",
      description: "Versatile venues that adapt to your vision and guest count, from intimate gatherings to grand celebrations."
    },
    {
      title: "Full-Service Planning",
      description: "From concept to cleanup, we handle every detail with care, so you can focus on enjoying your event."
    },
    {
      title: "Premium Amenities",
      description: "State-of-the-art AV, elegant décor, and luxury facilities that elevate every occasion."
    },
    {
      title: "Expert Staff",
      description: "Professional team dedicated to making your event flawless, with years of experience in hospitality."
    },
    {
      title: "Custom Catering",
      description: "Gourmet menus tailored to your preferences and dietary needs, crafted by award-winning chefs."
    },
    {
      title: "Stunning Design",
      description: "Beautiful spaces that create the perfect atmosphere, transforming your vision into reality."
    }
  ],

  faqs: [
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 3-6 months in advance for weddings and large events. However, we often accommodate shorter timelines based on availability."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! We offer flexible payment plans for all packages. A 30% deposit secures your date, with the balance payable in installments."
    },
    {
      question: "Can I bring my own vendors?",
      answer: "Absolutely! While we have preferred vendors, you're welcome to bring your own caterer, decorator, or entertainment with prior approval."
    },
    {
      question: "Is there parking available?",
      answer: "Yes, we provide complimentary parking for up to 200 vehicles, with valet service available for premium packages."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Cancellations made 90+ days before the event receive a 50% refund. Within 90 days, deposits are non-refundable but can be applied to future bookings."
    }
  ]
};
