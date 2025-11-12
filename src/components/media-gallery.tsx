"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
// import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { CategoryDetailMedia } from "@/lib/data";

export function MediaGallery({
  items,
  providerName,
}: {
  items: CategoryDetailMedia[];
  providerName: string;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const displayItems = items.slice(0, 6);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {displayItems.map((media, index) => (
          <GalleryThumb
            key={index}
            media={media}
            alt={`${providerName} gallery ${index + 1}`}
            onClick={() => openAt(index)}
          />
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={items}
        currentIndex={currentIndex}
        onNavigate={setCurrentIndex}
      />
    </div>
  );
}

function GalleryThumb({
  media,
  alt,
  onClick,
}: {
  media: CategoryDetailMedia;
  alt: string;
  onClick: () => void;
}) {
  const isVideo = typeof media !== "string" && media.type === "video";
  const src = typeof media === "string" ? media : media.src;
  const poster = typeof media === "string" ? undefined : media.poster;
  const vidRef = useRef<HTMLVideoElement | null>(null);

  return (
    <button
      onClick={onClick}
      className="group relative h-28 overflow-hidden rounded-2xl md:h-40"
    >
      {isVideo ? (
        <video
          ref={vidRef}
          src={src}
          poster={poster}
          className="h-full w-full object-cover"
          muted
          playsInline
          preload="metadata"
          onMouseEnter={() => {
            const v = vidRef.current;
            if (!v) return;
            v.currentTime = 0;
            v.play().catch(() => {});
          }}
          onMouseLeave={() => {
            const v = vidRef.current;
            if (!v) return;
            v.pause();
            v.currentTime = 0;
          }}
        />
      ) : (
        <Image src={src} alt={alt} fill className="object-cover" />
      )}
      {isVideo && (
        <span className="absolute bottom-2 right-2 rounded bg-black/60 px-1.5 py-0.5 text-[10px] text-white">
          Preview
        </span>
      )}
    </button>
  );
}

function Lightbox({
  open,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: {
  open: boolean;
  onClose: () => void;
  items: CategoryDetailMedia[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}) {
  const currentItem = items[currentIndex];
  const isVideo = typeof currentItem !== "string" && currentItem.type === "video";
  const src = typeof currentItem === "string" ? currentItem : currentItem.src;
  const poster = typeof currentItem === "string" ? undefined : currentItem.poster;

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!open) return;
    
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") onClose();
    };
    
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, goNext, goPrev, onClose]);

  // Safety checks after all hooks
  if (!open || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Navigation Buttons */}
      {items.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 transition"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Content */}
      <div className="relative w-full h-full flex items-center justify-center p-16">
        {isVideo ? (
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={`Gallery item ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
        {currentIndex + 1} / {items.length}
      </div>
    </div>
  );
}