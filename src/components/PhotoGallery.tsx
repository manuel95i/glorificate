"use client";

import Image from "next/image";
import { useState } from "react";
import type { Photo } from "@/lib/content";

export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] = useState<number | null>(null);
  const current = active !== null ? photos[active] : null;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setActive(index)}
            className="group relative mb-4 block w-full overflow-hidden rounded-2xl text-left"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
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
