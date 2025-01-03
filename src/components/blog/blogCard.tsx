import BlogCard from "./card";

interface IBlogData {
  slug: string;
  description: string;
  date: string;
  fullTitle: string;
  imageUrl: string;
  author: string;
}

const blogData: IBlogData[] = [
  {
    slug: "latest-gadgets",
    description:
      "Exploring the latest innovations in electronic gadgets and devices.",
    date: "15/02/2024",
    fullTitle: "The Rise of Smart Gadgets: A Revolution in Electronics",
    imageUrl: "/images/gadgets.png",
    author: "John Doe",
  },
  {
    slug: "consumer-electronics",
    description:
      "The impact of consumer electronics on everyday life and future trends.",
    date: "25/02/2024",
    fullTitle: "Consumer Electronics: Shaping Our Future",
    imageUrl: "/images/consumer-electronics.png",
    author: "Michael Johnson",
  },
  {
    slug: "ai-in-electronics",
    description: "The role of artificial intelligence in modern electronics.",
    date: "01/03/2024",
    fullTitle: "AI in Electronics: Enhancing Devices with Smart Features",
    imageUrl: "/images/ai-electronics.png",
    author: "Sara Lee",
  },
];

export default function Blog() {
  return (
    <section className="pb-8 bg-[#f8f8f8]">
      <h2 className="text-2xl text-center sm:text-3xl md:text-2xl lg:text-4xl font-bold text-black pt-8 max-w-[800px] mx-auto">
        Our Blog
      </h2>

      <div className="flex mx-10 gap-12 flex-wrap justify-center items-center py-8 ">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.slug}
            slug={blog.slug}
            description={blog.description}
            date={blog.date}
            fullTitle={blog.fullTitle}
            imageUrl={blog.imageUrl}
            author={blog.author}
          />
        ))}
      </div>
    </section>
  );
}
