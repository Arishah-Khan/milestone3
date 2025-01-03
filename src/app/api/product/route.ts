// pages/api/products.ts
import { NextResponse } from "next/server";

const productsData = [
  {
    id: '1',
    title: 'LED',
    description: 'High-quality LED for your home.',
    price: { newPrice: 150, oldPrice: 200 },
    image: '/images/led.jpg',
    rating: 4.5, // Half star
  },
  {
    id: '2',
    title: 'USB',
    description: 'Fast and reliable USB drive.',
    price: { newPrice: 20, oldPrice: 30 },
    image: '/images/usb.jpg',
    rating: 4,
  },
  {
    id: '3',
    title: 'Smart Fridge',
    description: 'Smart fridge with latest technology.',
    price: { newPrice: 500, oldPrice: 700 },
    image: '/images/smart-fridge.jpg',
    rating: 5,
  },
  {
    id: '4',
    title: 'iPhone',
    description: 'The latest iPhone with advanced features.',
    price: { newPrice: 1000, oldPrice: 1200 },
    image: '/images/iphone.jpg',
    rating: 4.5,
  },
  {
    id: '5',
    title: 'Headphone',
    description: 'Noise-cancelling headphones.',
    price: { newPrice: 100, oldPrice: 150 },
    image: '/images/headphones.jpg',
    rating: 4,
  },
  {
    id: '6',
    title: 'Airbuds',
    description: 'Wireless earbuds with crystal clear sound.',
    price: { newPrice: 50, oldPrice: 80 },
    image: '/images/airbuds.jpg',
    rating: 4.5,
  },
  {
    id: '7',
    title: 'Camera',
    description: 'Professional camera for photography.',
    price: { newPrice: 700, oldPrice: 900 },
    image: '/images/camera.jpg',
    rating: 5,
  },
  {
    id: '8',
    title: 'Speaker',
    description: 'Portable speaker with powerful bass.',
    price: { newPrice: 70, oldPrice: 100 },
    image: '/images/speakers.jpg',
    rating: 4,
  },
];

export const GET = () => {
  return NextResponse.json(productsData);
};
