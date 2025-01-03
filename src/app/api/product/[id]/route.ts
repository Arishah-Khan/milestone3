import { NextRequest, NextResponse } from "next/server";



const products = [
    {
      id: '1',
      title: 'LED',
      description: 'High-quality LED for your home.',
      price: { newPrice: 150, oldPrice: 200 },
      image: '/images/led.jpg',
      rating: 4.5,
      reviews: 120,
      category: 'Electronics',
      benefits: ['Energy efficient', 'Long lifespan', 'Eco-friendly'],
    },
    {
      id: '2',
      title: 'USB',
      description: 'Fast and reliable USB drive.',
      price: { newPrice: 20, oldPrice: 30 },
      image: '/images/usb.jpg',
      rating: 4,
      reviews: 250,
      category: 'Accessories',
      benefits: ['High speed', 'Portable', 'Durable design'],
    },
    {
      id: '3',
      title: 'Smart Fridge',
      description: 'Smart fridge with the latest technology.',
      price: { newPrice: 500, oldPrice: 700 },
      image: '/images/smart-fridge.jpg',
      rating: 5,
      reviews: 75,
      category: 'Appliances',
      benefits: ['Energy efficient', 'WiFi enabled', 'Spacious'],
    },
    {
      id: '4',
      title: 'iPhone',
      description: 'The latest iPhone with advanced features.',
      price: { newPrice: 1000, oldPrice: 1200 },
      image: '/images/iphone.jpg',
      rating: 4.5,
      reviews: 300,
      category: 'Smartphones',
      benefits: ['High performance', 'Excellent camera', 'Durable design'],
    },
    {
      id: '5',
      title: 'Headphone',
      description: 'Noise-cancelling headphones.',
      price: { newPrice: 100, oldPrice: 150 },
      image: '/images/headphones.jpg',
      rating: 4,
      reviews: 90,
      category: 'Accessories',
      benefits: ['Comfortable fit', 'Superior sound quality', 'Noise cancellation'],
    },
    {
      id: '6',
      title: 'Airbuds',
      description: 'Wireless earbuds with crystal clear sound.',
      price: { newPrice: 50, oldPrice: 80 },
      image: '/images/airbuds.jpg',
      rating: 4.5,
      reviews: 180,
      category: 'Accessories',
      benefits: ['Compact design', 'Seamless connectivity', 'Long battery life'],
    },
    {
      id: '7',
      title: 'Camera',
      description: 'Professional camera for photography.',
      price: { newPrice: 700, oldPrice: 900 },
      image: '/images/camera.jpg',
      rating: 5,
      reviews: 60,
      category: 'Electronics',
      benefits: ['High resolution', 'Fast focus', 'Durable body'],
    },
    {
      id: '8',
      title: 'Speaker',
      description: 'Portable speaker with powerful bass.',
      price: { newPrice: 70, oldPrice: 100 },
      image: '/images/speakers.jpg',
      rating: 4,
      reviews: 150,
      category: 'Electronics',
      benefits: ['Portable design', 'Deep bass', 'Bluetooth connectivity'],
    },
  ];

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  // Await params resolution to get the 'id' parameter
  const { id } = await params;

  const productId = id;

  // Find the book based on the id
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return NextResponse.json(
      { message: "Product not found", status: "error", code: 404 },
      { status: 404 }
    );
  }

  // Return the book details if found
  return NextResponse.json({
    message: "Product Details",
    status: "success",
    data: product
  });
};
