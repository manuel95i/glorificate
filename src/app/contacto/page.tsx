import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import WhatsAppLink, { MapsLink } from "@/components/WhatsAppLink";
import { address, rehearsalNote, schedules, whatsapp } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "WhatsApp, horarios y cómo llegar al Ministerio Cristiano Glorificate en Academia Hisao Lee.",
};

export default function ContactoPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Estamos cerca"
        title="Contacto y cómo llegar"
        text="Escríbenos al WhatsApp principal, de danza o de alabanza. El culto es los viernes de 7:30 p.m. a 9:30 p.m."
        image="/images/cultos/navidad.jpeg"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="font-serif text-3xl">Datos</h2>
          <p className="mt-4 text-sm leading-7 text-ink-muted">{address.lines.join(" · ")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <MapsLink />
            <WhatsAppLink text="Hola, quiero contactar al Ministerio Cristiano Glorificate.">
              Principal {whatsapp.principal}
            </WhatsAppLink>
            <WhatsAppLink text="Hola, quiero información del Ministerio de danza." number={whatsapp.danza}>
              Danza {whatsapp.danza}
            </WhatsAppLink>
            <WhatsAppLink text="Hola, quiero información del Ministerio de alabanza." number={whatsapp.alabanza}>
              Alabanza {whatsapp.alabanza}
            </WhatsAppLink>
          </div>
          <h3 className="mt-12 font-serif text-2xl">Horarios</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-muted">
            {schedules.map((item) => (
              <li key={item.title}>
                <span className="font-medium text-ink">{item.title}:</span> {item.day} · {item.time}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-md text-sm leading-7 text-ink-muted">{rehearsalNote}</p>
        </div>
        <ContactForm />
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-8">
        <h2 className="font-serif text-3xl">Preguntas frecuentes</h2>
        <div className="mt-8">
          <FaqList />
        </div>
      </section>
    </SiteShell>
  );
}
