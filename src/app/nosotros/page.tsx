import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import { beliefs, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Historia, misión, visión y fe del Ministerio Cristiano Glorificate en Panamá.",
};

export default function NosotrosPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una familia que ama a Jesús y sirve a Panamá"
        text="Gloríficate no es solo un culto de viernes: es un pueblo que adora, discipula y se hace presente donde hay necesidad."
        image="/images/cultos/congregacion.jpeg"
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl">Misión</h2>
            <p className="mt-4 text-base leading-8 text-ink-muted">
              Glorificar a Dios con adoración genuina, formar discípulos en la
              Palabra y servir a las familias de nuestra ciudad con el amor de Cristo.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-4xl">Visión</h2>
            <p className="mt-4 text-base leading-8 text-ink-muted">
              Ser una iglesia que levanta generaciones: niños, jóvenes y adultos
              que alaben, dancen, prediquen y extiendan el Reino con excelencia y humildad.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <article key={value.title} className="rounded-3xl bg-cream-dark p-6">
              <h3 className="font-serif text-2xl">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-muted">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="font-serif text-4xl">En qué creemos</h2>
          <ul className="mt-8 space-y-4">
            {beliefs.map((item) => (
              <li key={item} className="rounded-2xl bg-cream px-6 py-4 text-sm leading-7 text-ink-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-serif text-4xl">También en tiempos difíciles</h2>
          <p className="mt-4 text-base leading-8 text-ink-muted">
            Durante la pandemia no dejamos de congregarnos: alabanza, danza y
            Palabra siguieron desde los hogares. Esa misma determinación guía
            hoy nuestra labor social: la iglesia no cierra cuando la ciudad duele.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src="/images/pandemia/culto-virtual.jpeg"
              alt="Culto virtual durante la pandemia"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
            <Image
              src="/images/pandemia/reunion-virtual.jpeg"
              alt="Reunión virtual de la congregación"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
