import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import PhotoGallery from "@/components/PhotoGallery";
import SiteShell from "@/components/SiteShell";
import WhatsAppLink from "@/components/WhatsAppLink";
import { getMinistry, ministries } from "@/lib/content";
import { whatsapp } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ministries.map((ministry) => ({ slug: ministry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ministry = getMinistry(slug);
  if (!ministry) return { title: "Ministerio" };
  return {
    title: ministry.title,
    description: ministry.summary,
  };
}

export default async function MinistryPage({ params }: Props) {
  const { slug } = await params;
  const ministry = getMinistry(slug);
  if (!ministry) notFound();

  return (
    <SiteShell>
      <PageHero
        eyebrow="Ministerio"
        title={ministry.title}
        text={ministry.summary}
        image={ministry.image}
      />
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        {ministry.badge ? (
          <Image
            src={ministry.badge}
            alt="Logo Pequeños Leones"
            width={96}
            height={96}
            className="mb-8 h-24 w-24 rounded-full object-cover"
          />
        ) : null}
        <div className="max-w-3xl space-y-5 text-base leading-8 text-ink-muted">
          {ministry.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        {ministry.schedule ? (
          <p className="mt-8 text-sm font-medium text-gold">{ministry.schedule}</p>
        ) : null}
        <div className="mt-8">
          <WhatsAppLink text={ministry.message} number={whatsapp[ministry.whatsapp]}>
            Contactar este ministerio
          </WhatsAppLink>
        </div>
        <h2 className="mt-16 font-serif text-3xl">Galería</h2>
        <div className="mt-8">
          <PhotoGallery photos={ministry.photos} />
        </div>
      </section>
    </SiteShell>
  );
}
