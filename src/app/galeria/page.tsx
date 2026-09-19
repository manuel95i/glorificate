import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PhotoGallery from "@/components/PhotoGallery";
import SiteShell from "@/components/SiteShell";
import { gallerySections } from "@/lib/content";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Fotos de cultos, alabanza, danza, Pequeños Leones y labor del Ministerio Cristiano Glorificate.",
};

export default function GaleriaPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Memoria viva"
        title="Galería de la congregación"
        text="Cultos, ministerios, niñez y los días en que adoramos también desde casa."
        image="/images/danza/folklore.jpeg"
      />
      <section className="mx-auto max-w-6xl space-y-16 px-6 py-20 lg:px-8">
        {gallerySections.map((section) => (
          <div key={section.title}>
            <h2 className="font-serif text-3xl">{section.title}</h2>
            <div className="mt-8">
              <PhotoGallery photos={section.photos} />
            </div>
          </div>
        ))}
      </section>
    </SiteShell>
  );
}
