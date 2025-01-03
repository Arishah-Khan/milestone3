import Image from "next/image";
import Link from "next/link";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { HiMiniArrowUpRight } from "react-icons/hi2";

interface BlogCardProps {
    slug: string;       // Slug for the blog (for URL)
    description: string; // Description for the card
    date: string;        // Date of the blog post
    fullTitle: string;   // Full title of the blog
    imageUrl: string;    // Image URL for the blog
    author: string;      // Author of the blog
}

const BlogCard = ({ slug, description, date, fullTitle, imageUrl, author }: BlogCardProps) => {
    return (
        <div className="shadow-[0_4px_12px_rgba(0,0,0,0.2)]  transition-all duration-300 ease-in-out hover:shadow-[0_8px_16px_rgba(255,255,255,0.6)] rounded-lg flex flex-col justify-center items-center">
            {/* Image */}
            <div>
                <Image
                    src={imageUrl}
                    alt={fullTitle}
                    width={300}
                    height={300}
                    className="w-[300px] sm:w-[330px] h-[200px] sm:h-[210px] rounded-t-lg"
                />
            </div>

            {/* Content Overlay */}
            <div className=" text-black flex flex-col justify-center items-center p-4 w-[300px] sm:w-[330px] h-[200px] sm:h-[210px] border-t-2 rounded-b-lg">
                <div className="flex justify-center items-center mb-4 gap-2 sm:gap-12">
                    {/* Date */}
                    <p className="text-sm flex items-center justify-center gap-1 text-[#434377]">
                        <AiOutlineCalendar /> {date}
                    </p>

                    {/* Author */}
                    <p className="text-sm flex items-center justify-center gap-1 text-[#434377]">
                        <FaUserAlt /> By {author}
                    </p>
                </div>
                {/* Title */}
                <h2 className="text-base font-semibold hover:text-[#434377] hover:underline">
                    <Link href={`/blog/${slug}`}>
                        {fullTitle}
                    </Link>
                </h2>

                {/* Description */}
                <p className="text-sm mt-3">{description}</p>
                <Link href={`/blog/${slug}`} className="mt-4 inline-flex items-center text-[#434377] hover:text-[#434377] hover:underline">
                    Read More
                    <HiMiniArrowUpRight className="ml-1" /> {/* Adds space between the text and icon */}
                </Link>
            </div>

        </div>
    );
};

export default BlogCard;
