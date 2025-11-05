import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark } from "lucide-react";
import Link from "next/link";

export type CommunityCardProps = {
  id: string;
  name: string;
  imageUrl: string;
  tag: string;
  verified: boolean;
};

export default function CommunityCard({
  community,
}: {
  community: CommunityCardProps;
}) {
  return (
    <Link
      href={`/communities/${community.id}`}
      className="group block rounded-3xl overflow-hidden hover:shadow-sm transition-all duration-300 h-full"
    >
      {/* Image container with relative positioning for overlays */}
      <div className="relative p-3 w-full overflow-hidden">
        {/* Image with fixed aspect ratio and rounded corners */}
        <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden">
          <Image
            src={community.imageUrl}
            alt={community.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/80" />
        </div>

        {/* Subtle gradient overlay */}

        {/* Bookmark Icon - Always visible on mobile, hover on desktop */}
        <button
          // onClick={(e) => {
          //   e.preventDefault();
          //   // Add bookmark logic here
          // }}
          className="absolute top-5 right-5 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors md:opacity-0 md:group-hover:opacity-100"
          aria-label="Bookmark event"
        >
          <Bookmark className="w-4 h-4 text-white" />
        </button>

        {/* Tag and Verified group (bottom-left) */}
        <div className="absolute bottom-8 left-8 flex items-center gap-2 z-10">
          {/* Tag Pill */}
          <Badge className="px-3 py-1.5 bg-white text-gray-700 hover:bg-gray-100 rounded-full shadow-md border-0">
            <span className="text-xs font-medium">{community.tag}</span>
          </Badge>

          {/* Verified Checkmark */}
          {community.verified && (
            <Image
              src="/images/icons/verify.svg"
              alt="Verified"
              width={20}
              height={20}
            />
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 pb-4">
        <h2 className="text-xl font-semibold leading-tight text-gray-900">
          {community.name}
        </h2>
      </div>
    </Link>
  );
}
