import { Star } from "lucide-react";
import Image from "next/image";

type TestimonialCardProps = {
  image: string;
  name: string;
  message: string;
  review: string;
  stars?: number;
};

export default function TestimonialCard(props: TestimonialCardProps) {
  const { image, name, message, review, stars = 5 } = props;

  return (
    <div className="bg-[#F0F0F0] rounded-xl border border-gray-200 p-6 text-left shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="font-black text-xl">{message}</p>
          <span className="text-lg text-gray-500">{name}</span>
        </div>
      </div>

      <Image
        src="/images/icons/quote.svg"
        alt={name}
        width={56}
        height={56}
        className="w-14 h-14 rounded-full object-cover mx-auto"
      />

      <p className="text-lg text-gray-600 leading-6 mb-6">{review}</p>

      <div className="flex gap-1 text-lg">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="fill-yellow-500 text-yellow-500" />
        ))}
      </div>
    </div>
  );
}
