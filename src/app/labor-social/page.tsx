import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import WhatsAppLink from "@/components/WhatsAppLink";
import { socialPrograms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Labor social",
  description:
    "Servicio a familias, niñez y comunidad del Ministerio Cristiano Glorificate en Panamá.",
};

export default function LaborSocialPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Iglesia y ciudad"
        title="Labor social con el corazón del Evangelio"
        text="Servimos porque Jesús nos sirvió primero. Acompañamos familias, cuidamos la niñez y nos hacemos presentes en la comunidad."
        image="/images/infantil/09.jpeg"
      />
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {socialPrograms.map((program) => (
            <article key={program.title} className="rounded-3xl bg-cream-dark p-8">
              <h2 className="font-serif text-2xl">{program.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink-muted">{program.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden rounded-[2rem]">
            <Image
              src="/images/cultos/ninos.jpeg"
              alt="Niños y jóvenes en una actividad comunitaria"
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl">Cómo puedes unirte</h2>
            <p className="mt-4 text-base leading-8 text-ink-muted">
              Puedes donar tu tiempo, apoyar una actividad infantil, colaborar
              en visitas o sembrar con ofrenda. Escríbenos y te orientamos según
              tus dones y disponibilidad.
            </p>
            <div className="mt-8">
              <WhatsAppLink text="Hola, quiero colaborar con la labor social de Glorificate.">
                Quiero servir
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
