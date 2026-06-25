"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
type R2Object = {
  key: string;
  url: string;
  size: number;
  lastModified: string;
};

const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;

export default function MediaLightbox({
  images,
  videos,
}: {
  images: R2Object[];
  videos: R2Object[];
}) {
  const allMedia = [...images, ...videos];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : i)),
    []
  );
  const next = useCallback(
    () =>
      setActiveIndex((i) =>
        i !== null && i < allMedia.length - 1 ? i + 1 : i
      ),
    [allMedia.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, prev, next]);

  const active = activeIndex !== null ? allMedia[activeIndex] : null;
  const isImage = active ? IMAGE_EXT.test(active.key) : false;

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img) => {
          const idx = allMedia.indexOf(img);
          return (
            <button
              key={img.key}
              onClick={() => setActiveIndex(idx)}
              className="break-inside-avoid overflow-hidden rounded-xl border-4 border-mossy-olive-800 block w-full cursor-pointer"
            >
              <Image
                src={img.url}
                alt={img.key.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </button>
          );
        })}

        {videos.map((vid) => {
          const idx = allMedia.indexOf(vid);
          return (
            <button
              key={vid.key}
              onClick={() => setActiveIndex(idx)}
              className="break-inside-avoid overflow-hidden rounded-xl border-4 border-mossy-olive-800 block w-full cursor-pointer"
            >
              <video
                src={vid.url}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto"
              />
            </button>
          );
        })}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Fermer"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          </button>

          {activeIndex! > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors"
              aria-label="Précédent"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}

          {activeIndex! < allMedia.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors"
              aria-label="Suivant"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          )}

          <div
            className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {isImage ? (
              <Image
                src={active.url}
                alt={active.key.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ")}
                width={1920}
                height={1080}
                sizes="90vw"
                className="max-h-[85vh] w-auto object-contain rounded-lg"
              />
            ) : (
              <video
                src={active.url}
                autoPlay
                loop
                muted
                playsInline
                className="max-h-[85vh] w-auto rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
