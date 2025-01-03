import { NextRequest, NextResponse } from "next/server";

interface Product {
  slug: string;
  title: string;
  image: string;
  price: {
    newPrice: number;
    oldPrice: number;
  };
  category: string;
  reviews: number;
  rating: number;
  benefits: string[];
  description: string;
}


const electronics: Product[] = [
  // Laptops
  {
    slug: "gaming-laptop",
    title: "Gaming Laptop",
    image: "/images/gaming-laptop.jpg",
    price: { newPrice: 1299.99, oldPrice: 1499.99 },
    category: "Laptop",
    description:
      "High-performance gaming laptop with powerful graphics and fast processing speed.",
    rating: 4.5,
    reviews: 1200,
    benefits: [
      "Powerful graphics card",
      "Fast processing speed",
      "High-definition display",
      "Long battery life",
    ],
  },
  {
    slug: "ultrabook",
    title: "Ultrabook",
    image: "/images/ultrabook.jpg",
    price: { newPrice: 999.99, oldPrice: 1199.99 },
    category: "Laptop",
    description: "Lightweight and powerful ultrabook for everyday use.",
    rating: 4.2,
    reviews: 800,
    benefits: [
      "Slim and lightweight",
      "Long battery life",
      "Perfect for travel",
      "Fast performance",
    ],
  },
  {
    slug: "macbook-pro",
    title: "MacBook Pro",
    image: "/images/macbook-pro.jpg",
    price: { newPrice: 1499.99, oldPrice: 1699.99 },
    category: "Laptop",
    description:
      "Apple’s high-end laptop with stunning retina display and excellent performance.",
    rating: 4.8,
    reviews: 1500,
    benefits: [
      "Retina display",
      "Excellent build quality",
      "Long battery life",
      "Advanced performance",
    ],
  },
  {
    slug: "business-laptop",
    title: "Business Laptop",
    image: "/images/business-laptop.jpg",
    price: { newPrice: 899.99, oldPrice: 999.99 },
    category: "Laptop",
    description: "A reliable business laptop with long battery life.",
    rating: 4.3,
    reviews: 600,
    benefits: [
      "Great for business tasks",
      "Long battery life",
      "Fast performance",
      "Reliable design",
    ],
  },

  // Mobile Phones
  {
    slug: "iphone",
    title: "iPhone",
    image: "/images/appleiphone.jpg",
    price: { newPrice: 999.99, oldPrice: 1099.99 },
    category: "Mobile Phone",
    description:
      "The latest iPhone model with advanced features and top-tier performance.",
    rating: 4.7,
    reviews: 2500,
    benefits: [
      "High-end performance",
      "Stunning camera quality",
      "Premium build",
      "Long battery life",
    ],
  },
  {
    slug: "androslug-phone",
    title: "Androslug Phone",
    image: "/images/android-phone.jpg",
    price: { newPrice: 699.99, oldPrice: 799.99 },
    category: "Mobile Phone",
    description: "Affordable smartphone with great value for money.",
    rating: 4.0,
    reviews: 500,
    benefits: [
      "Affordable",
      "Solid performance",
      "Good camera quality",
      "Great battery life",
    ],
  },
  {
    slug: "foldable-phone",
    title: "Foldable Phone",
    image: "/images/foldable-phone.jpg",
    price: { newPrice: 1299.99, oldPrice: 1499.99 },
    category: "Mobile Phone",
    description:
      "Innovative foldable phone with a sleek design and high-tech features.",
    rating: 4.6,
    reviews: 300,
    benefits: [
      "Foldable design",
      "Top-tier performance",
      "Excellent camera",
      "Unique innovation",
    ],
  },
  {
    slug: "budget-phone",
    title: "Budget Phone",
    image: "/images/budget-phone.jpg",
    price: { newPrice: 199.99, oldPrice: 249.99 },
    category: "Mobile Phone",
    description: "An affordable mobile phone for everyday use.",
    rating: 3.9,
    reviews: 1200,
    benefits: [
      "Affordable",
      "Decent camera",
      "Long battery life",
      "Good performance for the price",
    ],
  },

  // Headphones
  {
    slug: "noise-cancelling-headphones",
    title: "Noise Cancelling Headphones",
    image: "/images/noise-cancelling.jpg",
    price: { newPrice: 299.99, oldPrice: 349.99 },
    category: "Headphones",
    description:
      "Noise-cancelling headphones for an immersive listening experience.",
    rating: 4.4,
    reviews: 800,
    benefits: [
      "Active noise cancellation",
      "Comfortable design",
      "Excellent sound quality",
      "Long-lasting battery",
    ],
  },
  {
    slug: "wireless-earbuds",
    title: "Wireless Earbuds",
    image: "/images/wireless-earbuds.jpg",
    price: { newPrice: 149.99, oldPrice: 179.99 },
    category: "Headphones",
    description: "Compact and wireless earbuds for music on the go.",
    rating: 4.1,
    reviews: 500,
    benefits: [
      "Compact design",
      "Wireless connectivity",
      "Good sound quality",
      "Comfortable fit",
    ],
  },
  {
    slug: "gaming-headset",
    title: "Gaming Headset",
    image: "/images/gaming-headset.jpg",
    price: { newPrice: 99.99, oldPrice: 129.99 },
    category: "Headphones",
    description:
      "Gaming headset with a built-in microphone for immersive gameplay.",
    rating: 4.3,
    reviews: 300,
    benefits: [
      "Built-in microphone",
      "Surround sound",
      "Comfortable fit",
      "Great for gaming sessions",
    ],
  },
  {
    slug: "studio-headphones",
    title: "Studio Headphones",
    image: "/images/studio-headphones.jpg",
    price: { newPrice: 199.99, oldPrice: 249.99 },
    category: "Headphones",
    description: "High-quality studio headphones for professional audio.",
    rating: 4.5,
    reviews: 200,
    benefits: [
      "Studio-quality sound",
      "Excellent noise isolation",
      "Comfortable for long hours",
      "Durable design",
    ],
  },

  // Tablets
  {
    slug: "ipad",
    title: "iPad",
    image: "/images/ipad.jpg",
    price: { newPrice: 899.99, oldPrice: 999.99 },
    category: "Tablet",
    description: "Apple’s tablet with a sleek design and powerful performance.",
    rating: 4.7,
    reviews: 1200,
    benefits: [
      "Fast performance",
      "Excellent display",
      "Long battery life",
      "Wide range of apps",
    ],
  },
  {
    slug: "androslug-tablet",
    title: "Androslug Tablet",
    image: "/images/android-tablet.jpg",
    price: { newPrice: 499.99, oldPrice: 599.99 },
    category: "Tablet",
    description: "Affordable tablet with decent performance for everyday use.",
    rating: 4.0,
    reviews: 500,
    benefits: [
      "Affordable",
      "Solid performance",
      "Decent display",
      "Good battery life",
    ],
  },
  {
    slug: "surface-pro",
    title: "Surface Pro",
    image: "/images/surface-pro.jpg",
    price: { newPrice: 1299.99, oldPrice: 1499.99 },
    category: "Tablet",
    description:
      "Microsoft’s high-performance tablet with laptop-like functionality.",
    rating: 4.8,
    reviews: 1000,
    benefits: [
      "Laptop-like performance",
      "High-resolution display",
      "Versatile design",
      "Great for productivity",
    ],
  },
  {
    slug: "budget-tablet",
    title: "Budget Tablet",
    image: "/images/budget-tablet.jpg",
    price: { newPrice: 299.99, oldPrice: 349.99 },
    category: "Tablet",
    description:
      "Affordable tablet suitable for casual use and media consumption.",
    rating: 3.8,
    reviews: 700,
    benefits: [
      "Budget-friendly",
      "Good performance for the price",
      "Decent display",
      "Lightweight design",
    ],
  }, // Smart Watches
  {
    slug: "fitness-watch",
    title: "Fitness Watch",
    image: "/images/fitness-watch.jpg",
    price: { newPrice: 199.99, oldPrice: 249.99 },
    category: "Smart Watch",
    rating: 3.8,
    reviews: 700,
    description: "Fitness watch for tracking physical activities and health metrics.",
    benefits: [
      "Tracks steps and calories burned",
      "Heart rate monitoring",
      "Water-resistant",
      "Sleep tracking",
    ],
  },
  {
    slug: "smartwatch-pro",
    title: "Smart Watch Pro",
    image: "/images/smartwatch-pro.jpg",
    price: { newPrice: 299.99, oldPrice: 349.99 },
    category: "Smart Watch",
    reviews: 400,
    rating: 4.7,
    description: "Smartwatch with advanced fitness tracking and weather updates.",
    benefits: [
      "Built-in GPS",
      "Advanced fitness tracking",
      "Customizable watch faces",
      "Long battery life",
    ],
  },
  {
    slug: "kslugs-smartwatch",
    title: "Kslugs Smart Watch",
    image: "/images/display1.png",
    price: { newPrice: 99.99, oldPrice: 129.99 },
    category: "Smart Watch",
    reviews: 500,
    description:"A timeless classic smartwatch with all necessary features",
    rating: 4.0,
    benefits: [
      "Activity tracking",
      "Notification alerts",
      "Water-resistant",
      "Affordable price",
    ],
  },
  {
    slug: "classic-smartwatch",
    title: "Classic Smart Watch",
    image: "/images/classic-smartwatch.jpg",
    price: { newPrice: 249.99, oldPrice: 299.99 },
    category: "Smart Watch",
    reviews: 500,
  description:"A timeless classic smartwatch with all necessary features",
    rating: 4.3,
    benefits: [
      "Multi-sport modes",
      "Sleep tracking",
      "Heart rate monitor",
      "Customizable straps",
    ],
  },

  // Air Conditioners
  {
    slug: "split-ac",
    title: "Split Air Conditioner",
    image: "/images/split-ac.jpg",
    price: { newPrice: 799.99, oldPrice: 999.99 },
    category: "Air Conditioner",
    reviews: 700,
    description: "Split air conditioner with dual cooling capabilities.",
    rating: 4.6,
    benefits: [
      "Energy-efficient",
      "Quiet operation",
      "Fast cooling",
      "Easy to install",
    ],
  },
  {
    slug: "window-ac",
    title: "Window Air Conditioner",
    image: "/images/window-ac.jpg",
    price: { newPrice: 599.99, oldPrice: 699.99 },
    category: "Air Conditioner",
    reviews: 590,
    description: "Window air conditioner with adjustable temperature control.",
    rating: 4.2,
    benefits: [
      "Compact design",
      "Easy installation",
      "Cost-effective",
      "Good for smaller spaces",
    ],
  },
  {
    slug: "portable-ac",
    title: "Portable Air Conditioner",
    image: "/images/portable-ac.jpg",
    price: { newPrice: 399.99, oldPrice: 499.99 },
    category: "Air Conditioner",
    reviews: 400,
    description: "Portable air conditioner with built-in Bluetooth connectivity.",
    rating: 4.4,
    benefits: [
      "Portable design",
      "Easy to move",
      "Remote control",
      "Energy-efficient",
    ],
  },
  {
    slug: "smart-ac",
    title: "Smart Air Conditioner",
    image: "/images/smart-ac.jpg",
    price: { newPrice: 999.99, oldPrice: 1199.99 },
    category: "Air Conditioner",
    reviews:
      390,
      description: "Smart air conditioner with voice control and remote temperature control.",
    rating: 4.8,
    benefits: [
      "Wi-Fi enabled",
      "Voice control with Alexa",
      "Smart temperature adjustment",
      "Quiet and efficient",
    ],
  },

  // Bluetooth Speakers
  {
    slug: "jbl-speaker",
    title: "JBL Speaker",
    image: "/images/jbl-speaker.jpg",
    price: { newPrice: 199.99, oldPrice: 249.99 },
    category: "Bluetooth Speaker",
    reviews: 540,
    description: "JBL speaker with high-quality sound and Bluetooth connectivity.",
    rating: 4.6,
    benefits: [
      "High-quality sound",
      "Portable and lightweight",
      "Long battery life",
      "Water-resistant",
    ],
  },
  {
    slug: "sony-speaker",
    title: "Sony Speaker",
    image: "/images/sony-speaker.jpg",
    price: { newPrice: 249.99, oldPrice: 299.99 },
    category: "Bluetooth Speaker",
    reviews: 650,
    description: "Sony speaker with premium sound and Bluetooth connectivity.",
    rating: 4.7,
    benefits: [
      "Clear sound",
      "Built-in microphone",
      "Wireless range up to 30ft",
      "Premium build quality",
    ],
  },
  {
    slug: "bose-speaker",
    title: "Bose Speaker",
    image: "/images/bose-speaker.jpg",
    price: { newPrice: 349.99, oldPrice: 399.99 },
    category: "Bluetooth Speaker",
    reviews: 300,
    description: "Bose speaker with premium sound and Bluetooth connectivity.",
    rating: 4.8,
    benefits: [
      "Exceptional sound",
      "Simple setup",
      "Long-lasting battery",
      "Elegant design",
    ],
  },
  {
    slug: "anker-speaker",
    title: "Anker Speaker",
    image: "/images/anker-speaker.jpg",
    price: { newPrice: 99.99, oldPrice: 149.99 },
    category: "Bluetooth Speaker",
    reviews: 670,
    description: "Anker speaker with premium sound and Bluetooth connectivity.",
    rating: 4.4,
    benefits: [
      "Affordable price",
      "Decent sound quality",
      "Compact size",
      "Durable design",
    ],
  },

  // Washing Machines
  {
    slug: "front-load",
    title: "Front Load Washing Machine",
    image: "/images/front-load.jpg",
    price: { newPrice: 699.99, oldPrice: 799.99 },
    category: "Washing Machine",
    reviews:590,
    description: "Front-load washing machine with a large wash area.",
    rating: 4.6,
    benefits: [
      "Water-efficient",
      "Quiet operation",
      "Multiple wash programs",
      "Energy-efficient",
    ],
  },
  {
    slug: "top-load",
    title: "Top Load Washing Machine",
    image: "/images/top-load.jpg",
    price: { newPrice: 499.99, oldPrice: 599.99 },
    category: "Washing Machine",
    reviews: 780,
    description: "Top-load washing machine with a large wash area.",
    rating: 4.3,
    benefits: [
      "Large capacity",
      "Easy to use",
      "Affordable",
      "Quick wash cycles",
    ],
  },
  {
    slug: "portable-washer",
    title: "Portable Washer",
    image: "/images/portable-washer.jpg",
    price: { newPrice: 299.99, oldPrice: 399.99 },
    category: "Washing Machine",
    reviews: 690,
    description: "Portable washing machine with a large wash area.",
    rating: 4.2,
    benefits: [
      "Space-saving",
      "Portable design",
      "Quick setup",
      "Cost-effective",
    ],
  },
  {
    slug: "smart-washer",
    title: "Smart Washing Machine",
    image: "/images/smart-washer.jpg",
    price: { newPrice: 999.99, oldPrice: 1199.99 },
    category: "Washing Machine",
    reviews: 230,
    description: "Smart washing machine with voice control and remote temperature control.",
    rating: 4.7,
    benefits: [
      "App-enabled",
      "Voice control",
      "Water and energy efficient",
      "Multiple wash settings",
    ],
  },

  // Microwave Ovens
  {
    slug: "convection-microwave",
    title: "Convection Microwave",
    image: "/images/convection-microwave.jpg",
    price: { newPrice: 299.99, oldPrice: 349.99 },
    category: "Microwave Oven",
    reviews:670,
    description: "Convection microwave with a large cooking surface.",
    rating: 4.6,
    benefits: [
      "Multiple cooking functions",
      "Quick cooking",
      "Even heat distribution",
      "Space-saving design",
    ],
  },
  {
    slug: "grill-microwave",
    title: "Grill Microwave",
    image: "/images/grill-microwave.jpg",
    price: { newPrice: 199.99, oldPrice: 249.99 },
    category: "Microwave Oven",
    reviews: 470,
    description: "Grill microwave with a large cooking surface.",
    rating: 4.4,
    benefits: [
      "Grill and microwave functions",
      "Compact size",
      "Energy-efficient",
      "Quick cooking",
    ],
  },
  {
    slug: "solo-microwave",
    title: "Solo Microwave",
    image: "/images/solo-microwave.jpg",
    price: { newPrice: 99.99, oldPrice: 149.99 },
    category: "Microwave Oven",
    reviews: 350,
    description: "Solo microwave with a large cooking surface.",
    rating: 4.2,
    benefits: ["Simple design", "Affordable", "Quick heating", "Easy to use"],
  },
  {
    slug: "smart-microwave",
    title: "Smart Microwave",
    image: "/images/smart-microwave.jpg",
    price: { newPrice: 399.99, oldPrice: 499.99 },
    category: "Microwave Oven",
    reviews: 690,
    description: "Smart microwave with voice control and remote temperature control.",
    rating: 4.8,
    benefits: [
      "Smart features",
      "Voice control",
      "Fast cooking",
      "Remote control",
    ],
  },
];

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  // Await params resolution to get the 'slug' parameter
  const { slug } = await params;

  const electronicslug = slug;

  // Find the book based on the slug
  const electronic = electronics.find(
    (electronic) => electronic.slug === electronicslug
  );

  if (!electronic) {
    return NextResponse.json(
      { message: "Product not found", status: "error", code: 404 },
      { status: 404 }
    );
  }

  // Return the book details if found
  return NextResponse.json({
    message: "Product Details",
    status: "success",
    data: electronic,
  });
};
