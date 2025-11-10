import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  image: string;
  category: string;
  categoryColor?: string;
  date: string;
  title: string;
  description: string;
  link: string;
};

export default function NewsCard(props: NewsCardProps) {
  const {
    image,
    category,
    date,
    title,
    description,
    link,
    categoryColor = "bg-green-100 text-green-700",
  } = props;

  return (
    <div className="group cursor-pointer">
      <Link href={link}>
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="rounded-2xl h-[280px] lg:h-[320px] w-full object-cover mb-4 transition-transform group-hover:scale-[1.02]"
        />
      </Link>

      <div className="flex items-center justify-between text-xs mb-3">
        <span className={`${categoryColor} px-3 py-1.5 rounded-full font-medium text-xs`}>
          {category}
        </span>
        <span className="text-gray-500">{date}</span>
      </div>

      <Link href={link}>
        <h4 className="font-semibold text-left text-xl mb-2">
          {title}
        </h4>
      </Link>

      <p className="text-left text-base text-gray-600 leading-relaxed mb-3">
        {description}
      </p>

      <Link
        href={link}
        className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:gap-2 transition-all"
      >
        Read more
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
