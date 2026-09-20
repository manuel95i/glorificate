import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import SiteShell from "@/components/SiteShell";
import { MapsLink } from "@/components/WhatsAppLink";
import WhatsAppLink from "@/components/WhatsAppLink";
import { ministries } from "@/lib/content";
import { address, offerings, rehearsalNote, schedules, whatsapp } from "@/lib/site";

export default function Home() {
  return (
    <SiteShell overlay>
      <section id="inicio" className="relative min-h-screen">
        <Image
          src="/images/cultos/congregacion.jpeg"
          alt="Congregación del Ministerio Cristiano Glorificate"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-deep/70 via-deep/55 to-deep/85" />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-6 pb-20 pt-36 lg:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-gold-light">
            Ministerio Cristiano Glorificate · Panamá
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Un lugar para glorificar a Dios y encontrar familia.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Adoración, familia y niñez. Culto los viernes en Academia Hisao Lee.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contacto"
              className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-medium text-white transition hover:bg-gold-light hover:text-deep"
            >
              Visítanos
            </Link>
            <Link
              href="/ministerios"
              className="rounded-full border border-white/35 px-7 py-3.5 text-center text-sm font-medium text-white transition hover:border-gold-light hover:text-gold-light"
            >
              Ministerios
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-deep py-8">
        <p className="mx-auto max-w-3xl px-6 text-center font-serif text-2xl italic leading-relaxed text-cream/90 sm:text-3xl">
          “Todo lo que respira alabe al Señor.”{" "}
          <span className="not-italic text-gold-light">— Salmo 150:6</span>
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-[2rem]">
          <Image
            src="/images/dedicatoria/01.jpeg"
            alt="Familia en dedicación frente al banner del ministerio"
            width={1297}
            height={599}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">
            Iglesia que adora y comunidad que sirve
          </h2>
          <p className="mt-6 text-base leading-8 text-ink-muted">
            Gloríficate nació para exaltar a Jesús y cuidar personas. Nos
            reunimos como familia, formamos a los niños en Pequeños Leones y
            extendemos las manos a quienes necesitan oración, compañía o apoyo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/nosotros"
              className="rounded-full bg-deep px-6 py-3 text-center text-sm font-medium text-cream transition hover:bg-gold"
            >
              Nuestra historia
            </Link>
            <MapsLink />
          </div>
        </div>
      </section>

      <section className="bg-cream-dark py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
            Horarios
          </p>
          <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Agenda semanal</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {schedules.map((item) => (
              <article key={item.title} className="rounded-3xl bg-cream p-8">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm font-medium text-gold">
                  {item.day} · {item.time}
                </p>
                <p className="mt-4 text-sm leading-6 text-ink-muted">{item.note}</p>
              </article>
            ))}
            <article className="rounded-3xl bg-cream p-8 md:col-span-2">
              <h3 className="font-serif text-2xl">Ensayos de danza y alabanza</h3>
              <p className="mt-4 text-sm leading-6 text-ink-muted">{rehearsalNote}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-serif text-4xl sm:text-5xl">Ministerios</h2>
          <Link href="/ministerios" className="text-sm text-gold hover:text-deep">
            Ver todos →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {ministries.map((ministry) => (
            <article key={ministry.slug} className="overflow-hidden rounded-3xl bg-cream-dark">
              <Link href={`/ministerios/${ministry.slug}`} className="relative block aspect-video">
                <Image
                  src={ministry.image}
                  alt={ministry.summary}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
                {ministry.badge ? (
                  <Image
                    src={ministry.badge}
                    alt="Logo Pequeños Leones"
                    width={72}
                    height={72}
                    className="absolute right-4 top-4 h-16 w-16 rounded-full border-2 border-white object-cover shadow-lg"
                  />
                ) : null}
              </Link>
              <div className="p-8">
                <h3 className="font-serif text-2xl">{ministry.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-ink-muted">
                  {ministry.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/ministerios/${ministry.slug}`}
                    className="rounded-full border border-gold px-5 py-2.5 text-sm font-medium text-gold transition hover:bg-gold hover:text-white"
                  >
                    Conocer más
                  </Link>
                  <WhatsAppLink text={ministry.message} number={whatsapp[ministry.whatsapp]}>
                    Contactar
                  </WhatsAppLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Pequeños Leones
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Ministerio infantil</h2>
          </div>
          <Link href="/ministerios/infantil" className="text-sm text-gold">
            Ver galería →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {["03", "05", "07", "08"].map((id) => (
            <div key={id} className="relative aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src={`/images/infantil/${id}.jpeg`}
                alt="Actividad del ministerio infantil"
                fill
                className="object-cover"
                sizes="25vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-dark py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl">Ofrendas</h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-muted">
            {offerings.length > 0
              ? "Puedes sembrar en la obra con tu ofrenda. Encontrarás las cuentas y un botón para enviar el comprobante."
              : "Estamos publicando las cuentas. Mientras tanto, escríbenos y te indicamos cómo ofrendar."}
          </p>
          <Link
            href="/ofrendas"
            className="mt-8 inline-flex rounded-full bg-deep px-6 py-3 text-sm font-medium text-cream hover:bg-gold"
          >
            Ir a ofrendas
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-28 lg:px-8">
        <Image
          src="/images/cultos/navidad.jpeg"
          alt="Salón de cultos del Ministerio Cristiano Glorificate"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-deep/70" />
        <div className="relative mx-auto max-w-3xl text-center text-white">
          <h2 className="font-serif text-4xl sm:text-5xl">Este viernes te esperamos</h2>
          <p className="mt-5 text-base leading-8 text-white/75">
            {address.lines.join(" · ")} · 7:30 p.m. a 9:30 p.m.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MapsLink />
            <WhatsAppLink text="Hola, quiero visitar el culto de Glorificate este viernes.">
              Confirmar visita
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <h2 className="font-serif text-4xl sm:text-5xl">Preguntas frecuentes</h2>
        <div className="mt-10">
          <FaqList />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl">Estamos para servirte</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-ink-muted">
              Elige el WhatsApp: principal, danza o alabanza. También puedes
              escribirnos para oración o para unirte a un ministerio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <WhatsAppLink text="Hola, quiero contactar al Ministerio Cristiano Glorificate.">
                Principal
              </WhatsAppLink>
              <WhatsAppLink
                text="Hola, quiero información del Ministerio de danza."
                number={whatsapp.danza}
              >
                Danza
              </WhatsAppLink>
              <WhatsAppLink
                text="Hola, quiero información del Ministerio de alabanza."
                number={whatsapp.alabanza}
              >
                Alabanza
              </WhatsAppLink>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
