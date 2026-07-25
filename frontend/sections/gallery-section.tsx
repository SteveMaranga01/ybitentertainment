import Image from "next/image";
import { galleryImages } from "@/frontend/data/home";

const marqueeItems = ["Weddings", "Festivals", "Birthdays", "Merch", "Tickets", "Westlands"];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-ybit-charcoal py-24 md:py-32">
      <div className="mb-10 overflow-hidden border-y border-white/10 py-4">
        <div className="marquee-track flex w-max gap-10 text-xs font-bold uppercase tracking-[0.3em] text-ybit-muted">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex gap-10">
              {marqueeItems.map((item) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="ybit-container">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <div
              key={image}
              className="mb-5 break-inside-avoid overflow-hidden border border-white/10"
            >
              <Image
                src={image}
                alt={`Ybit gallery moment ${index + 1}`}
                width={900}
                height={1200}
                className="w-full object-cover opacity-80 transition duration-700 hover:scale-[1.02] hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
