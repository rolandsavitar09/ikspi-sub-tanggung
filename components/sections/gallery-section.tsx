"use client";

import Image from "next/image";
import { useState } from "react";

import { galleryItems } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";
import type { GalleryItem } from "@/types/site";

export function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="arsip" className="bg-slate-950 px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Arsip Kegiatan" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded border border-white/10 bg-black transition hover:-translate-y-1 hover:border-red-500/60 hover:shadow-[0_0_24px_rgba(220,38,38,0.35)]"
            >
              <button
                type="button"
                className="group block w-full text-left"
                onClick={() => setActiveItem(item)}
              >
                <span className="relative block min-h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute bottom-3 right-3 rounded border border-white/20 bg-black/70 px-3 py-1 text-xs font-black uppercase text-white">
                    {item.photos.length} Foto
                  </span>
                </span>
              </button>
              <div className="p-5">
                <p className="text-xs font-black uppercase text-red-500">{item.category}</p>
                <h3 className="mt-2 text-lg font-black uppercase text-white">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeItem ? (
        <div className="fixed inset-0 z-[80] bg-black/90 px-4 py-6 backdrop-blur-sm">
          <div className="mx-auto flex h-full max-w-6xl flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-black uppercase text-red-500">{activeItem.category}</p>
                <h3 className="mt-1 text-2xl font-black uppercase text-white">{activeItem.title}</h3>
              </div>
              <button
                type="button"
                className="rounded border border-white/20 px-4 py-2 text-sm font-black uppercase text-white transition hover:border-red-500 hover:text-red-400"
                onClick={() => setActiveItem(null)}
              >
                Tutup
              </button>
            </div>

            <div className="mt-5 grid flex-1 auto-rows-[12rem] gap-3 overflow-y-auto pr-1 sm:grid-cols-2 lg:grid-cols-3">
              {activeItem.photos.map((photo, index) => (
                <div key={photo} className="relative overflow-hidden rounded border border-white/10 bg-black">
                  <Image
                    src={photo}
                    alt={`${activeItem.title} ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
