import Image from "next/image";
import Link from "next/link";

const electronicItems = [
  {
    slug: "mobile-phone",
    name: "Mobile Phone",
    image: "/images/mob.png",
  },
  {
    slug: "smart-watch",
    name: "Smart Watch",
    image: "/images/watches.png",
  },
  {
    slug: "smart-refrigerator",
    name: "Smart Refrigerator",
    image: "/images/smart-ref.png",
  },
  {
    slug: "laptop",
    name: "Laptop",
    image: "/images/laptop.png",
  },
  {
    slug: "headphones",
    name: "Headphones",
    image: "/images/head-phones.png",
  },
  {
    slug: "air-conditioner",
    name: "Air Conditioner",
    image: "/images/air-conditioner.png",
  },
  {
    slug: "tablet",
    name: "Tablet",
    image: "/images/tablet.png",
  },
  {
    slug: "bluetooth-speaker",
    name: "Bluetooth Speaker",
    image: "/images/speaker.png",
  },
  {
    slug: "washing-machine",
    name: "Washing Machine",
    image: "/images/washing_machine.png",
  },
  {
    slug: "microwave-oven",
    name: "Microwave Oven",
    image: "/images/microwave.png",
  },
];

const Categories = () => {
  return (
    <section className="bg-[#434377] text-[#f8f8f8] py-6">
      <h2 className="text-2xl md:text-4xl font-bold text-start pl-3 mb-6">Top Categories</h2>
      <div className="overflow-hidden">
        <div className="flex animate-marquee space-x-6 md:space-x-8">
          {[...electronicItems, ...electronicItems].map((item, index) => (
            <Link href={`/products/${item.slug}`} key={index}>
              <div className="flex flex-col items-center justify-center w-[150px] h-[170px] md:w-[180px] md:h-[200px] p-2 border-2 border-gray-400 gap-1 rounded-md bg-white">
                <Image
                  src={item.image}
                  width={150}
                  height={150}
                  alt={item.name}
                  className="object-cover rounded-md w-[100px] h-[100px] md:w-[150px] md:h-[150px] "
                />
                <p className="text-sm font-semibold text-center text-black mb-2">
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
