import Image from "next/image";
import { OfferBanner } from "@/components/ui/offer-banner";
import { PageHero } from "@/components/ui/page-hero";
import { galleryImages } from "@/lib/data/site";

export function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Gallery"
        title="Proof of atmosphere."
        text="A visual archive for weddings, festivals, private celebrations, event merch, and production details."
        image="/MENGO/IMG-20260715-WA0021.jpg"
        secondaryHref="/book"
        secondaryLabel="Book production"
      />
      <OfferBanner />
      <section className="bg-ybit-black py-24 md:py-32">
        <div className="ybit-container columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <div key={image} className="mb-5 break-inside-avoid overflow-hidden border border-ybit-line bg-ybit-charcoal">
              <Image
                src={image}
                alt={`Ybit event gallery image ${index + 1}`}
                width={1000}
                height={1300}
                className="w-full object-cover opacity-85 transition duration-700 hover:scale-[1.02] hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
