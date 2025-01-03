import { NextResponse } from "next/server";

interface Price {
  newPrice: number;
  oldPrice: number;
}

interface Product {
  slug: string;
  title: string;
  image: string;
  price: Price;
  category: string;
}

const electronics: Product[] = [
  // Laptops
  {
    slug: "gaming-laptop",
    title: "Gaming Laptop",
    image: "/images/gaming-laptop.jpg",
    price: { newPrice: 1299.99, oldPrice: 1499.99 },
    category: "Laptop",
  },
  {
    slug: "ultrabook",
    title: "Ultrabook",
    image: "/images/ultrabook.jpg",
    price: { newPrice: 999.99, oldPrice: 1199.99 },
    category: "Laptop",
  },
  {
    slug: "macbook-pro",
    title: "MacBook Pro",
    image: "/images/macbook-pro.jpg",
    price: { newPrice: 1499.99, oldPrice: 1699.99 },
    category: "Laptop",
  },
  {
    slug: "business-laptop",
    title: "Business Laptop",
    image: "/images/business-laptop.jpg",
    price: { newPrice: 899.99, oldPrice: 999.99 },
    category: "Laptop",
  },

  // Mobile Phones
  {
    slug: "iphone",
    title: "iPhone",
    image: "/images/appleiphone.jpg",
    price: { newPrice: 999.99, oldPrice: 1099.99 },
    category: "Mobile Phone",
  },
  {
    slug: "androslug-phone",
    title: "Androslug Phone",
    image: "/images/android-phone.jpg",
    price: { newPrice: 699.99, oldPrice: 799.99 },
    category: "Mobile Phone",
  },
  {
    slug: "foldable-phone",
    title: "Foldable Phone",
    image: "/images/foldable-phone.jpg",
    price: { newPrice: 1299.99, oldPrice: 1499.99 },
    category: "Mobile Phone",
  },
  {
    slug: "budget-phone",
    title: "Budget Phone",
    image: "/images/budget-phone.jpg",
    price: { newPrice: 199.99, oldPrice: 249.99 },
    category: "Mobile Phone",
  },

  // Headphones
  {
    slug: "noise-cancelling-headphones",
    title: "Noise Cancelling Headphones",
    image: "/images/noise-cancelling.jpg",
    price: { newPrice: 299.99, oldPrice: 349.99 },
    category: "Headphones",
  },
  {
    slug: "wireless-earbuds",
    title: "Wireless Earbuds",
    image: "/images/wireless-earbuds.jpg",
    price: { newPrice: 149.99, oldPrice: 179.99 },
    category: "Headphones",
  },
  {
    slug: "gaming-headset",
    title: "Gaming Headset",
    image: "/images/gaming-headset.jpg",
    price: { newPrice: 99.99, oldPrice: 129.99 },
    category: "Headphones",
  },
  {
    slug: "studio-headphones",
    title: "Studio Headphones",
    image: "/images/studio-headphones.jpg",
    price: { newPrice: 199.99, oldPrice: 249.99 },
    category: "Headphones",
  },

  // Tablets
  {
    slug: "ipad",
    title: "iPad",
    image: "/images/ipad.jpg",
    price: { newPrice: 899.99, oldPrice: 999.99 },
    category: "Tablet",
  },
  {
    slug: "androslug-tablet",
    title: "Android Tablet",
    image: "/images/android-tablet.jpg",
    price: { newPrice: 499.99, oldPrice: 599.99 },
    category: "Tablet",
  },
  {
    slug: "surface-pro",
    title: "Surface Pro",
    image: "/images/surface-pro.jpg",
    price: { newPrice: 1299.99, oldPrice: 1499.99 },
    category: "Tablet",
  },
  {
    slug: "budget-tablet",
    title: "Budget Tablet",
    image: "/images/budget-tablet.jpg",
    price: { newPrice: 299.99, oldPrice: 349.99 },
    category: "Tablet",
  },

  // Smart Watches
  {
    slug: "fitness-watch",
    title: "Fitness Watch",
    image: "/images/fitness-watch.jpg",
    price: { newPrice: 199.99, oldPrice: 249.99 },
    category: "Smart Watch",
  },
  {
    slug: "smartwatch-pro",
    title: "Smart Watch Pro",
    image: "/images/smartwatch-pro.jpg",
    price: { newPrice: 299.99, oldPrice: 349.99 },
    category: "Smart Watch",
  },
  {
    slug: "kslugs-smartwatch",
    title: "Kslugs Smart Watch",
    image: "/images/display1.png",
    price: { newPrice: 99.99, oldPrice: 129.99 },
    category: "Smart Watch",
  },
  {
    slug: "classic-smartwatch",
    title: "Classic Smart Watch",
    image: "/images/classic-smartwatch.jpg",
    price: { newPrice: 249.99, oldPrice: 299.99 },
    category: "Smart Watch",
  },

  // Air Conditioners
  {
    slug: "split-ac",
    title: "Split Air Conditioner",
    image: "/images/split-ac.jpg",
    price: { newPrice: 799.99, oldPrice: 999.99 },
    category: "Air Conditioner",
  },
  {
    slug: "window-ac",
    title: "Window Air Conditioner",
    image: "/images/window-ac.jpg",
    price: { newPrice: 599.99, oldPrice: 699.99 },
    category: "Air Conditioner",
  },
  {
    slug: "portable-ac",
    title: "Portable Air Conditioner",
    image: "/images/portable-ac.jpg",
    price: { newPrice: 399.99, oldPrice: 499.99 },
    category: "Air Conditioner",
  },
  {
    slug: "smart-ac",
    title: "Smart Air Conditioner",
    image: "/images/smart-ac.jpg",
    price: { newPrice: 999.99, oldPrice: 1199.99 },
    category: "Air Conditioner",
  },

  // Bluetooth Speakers
  {
    slug: "jbl-speaker",
    title: "JBL Speaker",
    image: "/images/jbl-speaker.jpg",
    price: { newPrice: 199.99, oldPrice: 249.99 },
    category: "Bluetooth Speaker",
  },
  {
    slug: "sony-speaker",
    title: "Sony Speaker",
    image: "/images/sony-speaker.jpg",
    price: { newPrice: 249.99, oldPrice: 299.99 },
    category: "Bluetooth Speaker",
  },
  {
    slug: "bose-speaker",
    title: "Bose Speaker",
    image: "/images/bose-speaker.jpg",
    price: { newPrice: 349.99, oldPrice: 399.99 },
    category: "Bluetooth Speaker",
  },
  {
    slug: "anker-speaker",
    title: "Anker Speaker",
    image: "/images/anker-speaker.jpg",
    price: { newPrice: 99.99, oldPrice: 149.99 },
    category: "Bluetooth Speaker",
  },

  // Washing Machines
  {
    slug: "front-load",
    title: "Front Load Washing Machine",
    image: "/images/front-load.jpg",
    price: { newPrice: 699.99, oldPrice: 799.99 },
    category: "Washing Machine",
  },
  {
    slug: "top-load",
    title: "Top Load Washing Machine",
    image: "/images/top-load.jpg",
    price: { newPrice: 499.99, oldPrice: 599.99 },
    category: "Washing Machine",
  },
  {
    slug: "portable-washer",
    title: "Portable Washer",
    image: "/images/portable-washer.jpg",
    price: { newPrice: 299.99, oldPrice: 399.99 },
    category: "Washing Machine",
  },
  {
    slug: "smart-washer",
    title: "Smart Washing Machine",
    image: "/images/smart-washer.jpg",
    price: { newPrice: 999.99, oldPrice: 1199.99 },
    category: "Washing Machine",
  },

  // Microwave Ovens
  {
    slug: "convection-microwave",
    title: "Convection Microwave",
    image: "/images/convection-microwave.jpg",
    price: { newPrice: 299.99, oldPrice: 349.99 },
    category: "Microwave Oven",
  },
  {
    slug: "grill-microwave",
    title: "Grill Microwave",
    image: "/images/grill-microwave.jpg",
    price: { newPrice: 199.99, oldPrice: 249.99 },
    category: "Microwave Oven",
  },
  {
    slug: "solo-microwave",
    title: "Solo Microwave",
    image: "/images/solo-microwave.jpg",
    price: { newPrice: 99.99, oldPrice: 149.99 },
    category: "Microwave Oven",
  },
  {
    slug: "smart-microwave",
    title: "Smart Microwave",
    image: "/images/smart-microwave.jpg",
    price: { newPrice: 399.99, oldPrice: 499.99 },
    category: "Microwave Oven",
  },
];

export const GET = () => {
  return NextResponse.json(electronics);
};
