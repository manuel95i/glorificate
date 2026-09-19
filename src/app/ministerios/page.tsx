import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import WhatsAppLink from "@/components/WhatsAppLink";
import { ministries } from "@/lib/content";
import { whatsapp } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ministerios",
  description:
    "Alabanza, danza, Pequeños Leones y dedicaciones del Ministerio Cristiano Glorificate.",
};

export default function MinisteriosPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Sirve y crece"
        title="Ministerios para todas las edades"
        text="Hay un lugar para cantar, danzar, enseñar a los niños o acompañar a las familias."
        image="/images/danza/grupo.jpeg"
      />
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {ministries.map((ministry) => (
            <article key={ministry.slug} className="overflow-hidden rounded-[2rem] bg-cream-dark">
              <div className="relative aspect-[16/9]">
                <Image src={ministry.image} alt={ministry.summary} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="p-8">
                <h2 className="font-serif text-3xl">{ministry.title}</h2>
                <p className="mt-3 text-sm leading-7 text-ink-muted">{ministry.summary}</p>
                {ministry.schedule ? (
                  <p className="mt-3 text-sm font-medium text-gold">{ministry.schedule}</p>
                ) : null}
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/ministerios/${ministry.slug}`}
                    className="rounded-full border border-gold px-5 py-2.5 text-sm text-gold hover:bg-gold hover:text-white"
                  >
                    Ver página
                  </Link>
                  <WhatsAppLink text={ministry.message} number={whatsapp[ministry.whatsapp]}>
                    WhatsApp
                  </WhatsAppLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
