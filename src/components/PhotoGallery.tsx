"use client";

import Image from "next/image";
import { useState } from "react";
import type { Photo } from "@/lib/content";

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? photos[active] : null;

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(index)}
            className="group relative aspect-4/3 overflow-hidden rounded-2xl text-left"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
            <span className="sr-only">Ampliar: {photo.alt}</span>
          </button>
        ))}
      </div>
      {current ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-deep/90 p-4"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal
          aria-label={current.alt}
        >
          <div className="relative h-[80vh] w-full max-w-5xl">
            <Image src={current.src} alt={current.alt} fill className="object-contain" sizes="100vw" />
          </div>
          <button
            type="button"
            className="absolute right-6 top-6 rounded-full border border-white/30 px-4 py-2 text-sm text-white"
            onClick={() => setActive(null)}
          >
            Cerrar
          </button>
        </div>
      ) : null}
    </>
  );
}
