"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ images, productName }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeImages = images?.length ? images : ["/images/products/placeholder.svg"];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50 shadow-lg">
        <Image
          src={safeImages[activeIndex]}
          alt={`${productName} - Image ${activeIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      {safeImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {safeImages.map((img, index) => (
            <button
              key={img}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl transition-all ${
                activeIndex === index
                  ? "ring-2 ring-sky-brand ring-offset-2"
                  : "opacity-70 hover:opacity-100"
              }`}
              aria-label={`View image ${index + 1}`}
              aria-current={activeIndex === index}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
