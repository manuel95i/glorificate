import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ministries = [
  {
    title: "Ministerio de alabanza",
    description:
      "Música en vivo para adorar a Dios en cada culto, con un corazón rendido.",
    image: "/images/alabanza/banda.jpeg",
    alt: "Equipo de alabanza del ministerio Glorificate",
  },
  {
    title: "Ministerio de danza",
    description:
      "Adoración con movimiento, banderas y vestuario para exaltar el nombre de Jesús.",
    image: "/images/danza/grupo.jpeg",
    alt: "Ministerio de danza con vestuario y banderas doradas",
  },
  {
    title: "Ministerio infantil",
    description:
      "Pequeños Leones: niños que aprenden la Palabra con alegría, arte y juego.",
    image: "/images/infantil/clase.jpeg",
    alt: "Niños del ministerio infantil pintando en clase",
    badge: "/images/logo-infantil.jpeg",
  },
  {
    title: "Dedicaciones",
    description:
      "Celebramos a las familias y presentamos a los niños delante de Dios.",
    image: "/images/dedicatoria/02.jpeg",
    alt: "Familia en una dedicación en el ministerio",
  },
];

const gallery = [
  {
    src: "/images/cultos/congregacion.jpeg",
    alt: "Congregación y ministerio de danza en el salón",
  },
  {
    src: "/images/cultos/navidad.jpeg",
    alt: "Culto de Navidad en Glorificate",
  },
  {
    src: "/images/cultos/ninos.jpeg",
    alt: "Niños y jóvenes en una actividad del ministerio",
  },
  {
    src: "/images/danza/folklore.jpeg",
    alt: "Ministerio de danza con vestuario folklórico",
  },
];

const events = [
  {
    day: "06",
    month: "Sep",
    title: "Noche de oración",
    time: "Sábado · 19:00",
  },
  {
    day: "14",
    month: "Sep",
    title: "Retiro de jóvenes",
    time: "Domingo · 10:00",
  },
  {
    day: "28",
    month: "Sep",
    title: "Cena de bienvenida",
    time: "Sábado · 18:30",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
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
              Ministerio Cristiano Glorificate
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Un lugar para glorificar a Dios y encontrar familia.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Te invitamos a adorar, crecer en la Palabra y vivir el Evangelio
              en comunidad. Hay un asiento para ti este domingo.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cultos"
                className="rounded-full bg-gold px-7 py-3.5 text-center text-sm font-medium text-white transition hover:bg-gold-light hover:text-deep"
              >
                Ver horarios
              </a>
              <a
                href="#nosotros"
                className="rounded-full border border-white/35 px-7 py-3.5 text-center text-sm font-medium text-white transition hover:border-gold-light hover:text-gold-light"
              >
                Conócenos
              </a>
            </div>
          </div>
        </section>

        <section className="bg-deep py-8">
          <p className="mx-auto max-w-3xl px-6 text-center font-serif text-2xl italic leading-relaxed text-cream/90 sm:text-3xl">
            “Todo lo que respira alabe al Señor.”{" "}
            <span className="not-italic text-gold-light">— Salmo 150:6</span>
          </p>
        </section>

        <section id="nosotros" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-4/5 overflow-hidden rounded-[2rem]">
            <Image
              src="/images/dedicatoria/01.jpeg"
              alt="Familia en dedicación frente al banner del ministerio"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
              Bienvenido
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">
              Somos una familia que ama a Jesús
            </h2>
            <p className="mt-6 text-base leading-8 text-ink-muted">
              En Gloríficate creemos que la iglesia no es un edificio, sino un
              pueblo. Nos reunimos para adorar a Dios, discipular con la Biblia
              y servir a nuestra ciudad con humildad y esperanza.
            </p>
            <p className="mt-4 text-base leading-8 text-ink-muted">
              Da igual si es tu primera vez o si llevas años caminando con
              Cristo: aquí serás recibido con alegría.
            </p>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-muted">
                  Años
                </dt>
                <dd className="mt-1 font-serif text-3xl text-gold">12</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-muted">
                  Familias
                </dt>
                <dd className="mt-1 font-serif text-3xl text-gold">180+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-muted">
                  Ministerios
                </dt>
                <dd className="mt-1 font-serif text-3xl text-gold">8</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="cultos" className="bg-cream-dark py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Horarios
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Ven y adora con nosotros
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { title: "Culto dominical", time: "Domingo · 10:00 y 12:30", note: "Adoración, Palabra y comunión." },
                { title: "Estudio bíblico", time: "Miércoles · 19:30", note: "Profundizamos juntos en las Escrituras." },
                { title: "Oración", time: "Viernes · 19:00", note: "Intercesión por la iglesia y la ciudad." },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl bg-cream p-8 shadow-[0_20px_50px_-30px_rgba(28,25,20,0.35)]"
                >
                  <h3 className="font-serif text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm font-medium text-gold">{item.time}</p>
                  <p className="mt-4 text-sm leading-6 text-ink-muted">{item.note}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-4/3 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ministerios" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Vida en comunidad
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Ministerios</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-ink-muted">
              Hay un lugar para servir y crecer, sin importar tu edad o tu
              historia.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ministries.map((ministry) => (
              <article
                key={ministry.title}
                className="overflow-hidden rounded-3xl bg-cream-dark"
              >
                <div className="relative aspect-4/3">
                  <Image
                    src={ministry.image}
                    alt={ministry.alt}
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
                </div>
                <div className="p-8 sm:p-10">
                  <h3 className="font-serif text-2xl">{ministry.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-ink-muted">
                    {ministry.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="eventos" className="bg-deep py-24 text-cream">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-light">
              Próximamente
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Eventos</h2>
            <ul className="mt-12 divide-y divide-white/10">
              {events.map((event) => (
                <li
                  key={event.title}
                  className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-16 text-center">
                      <p className="font-serif text-3xl leading-none">{event.day}</p>
                      <p className="mt-1 text-xs uppercase tracking-widest text-gold-light">
                        {event.month}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">{event.title}</h3>
                      <p className="text-sm text-cream/60">{event.time}</p>
                    </div>
                  </div>
                  <a
                    href="#contacto"
                    className="text-sm text-gold-light transition hover:text-cream"
                  >
                    Más información →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="visita"
          className="relative overflow-hidden px-6 py-28 lg:px-8"
        >
          <Image
            src="/images/cultos/navidad.jpeg"
            alt="Salón de cultos del Ministerio Cristiano Glorificate"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-deep/70" />
          <div className="relative mx-auto max-w-3xl text-center text-white">
            <h2 className="font-serif text-4xl sm:text-5xl">
              Este domingo te esperamos
            </h2>
            <p className="mt-5 text-base leading-8 text-white/75">
              Av. de la Esperanza 120, Ciudad de México. Llega unos minutos
              antes: habrá café, sonrisas y un lugar para ti.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-white transition hover:bg-gold-light hover:text-deep"
            >
              Cómo llegar
            </a>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Contacto
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                Estamos para servirte
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-ink-muted">
                Escríbenos para oración, visita pastoral o cualquier pregunta.
                Respondemos con alegría.
              </p>
              <div className="mt-8 space-y-3 text-sm text-ink-muted">
                <p>hola@glorificate.mx</p>
                <p>+52 55 0000 0000</p>
                <p>Av. de la Esperanza 120, CDMX</p>
              </div>
            </div>
            <form className="rounded-3xl bg-cream-dark p-8">
              <label className="block text-sm">
                Nombre
                <input
                  type="text"
                  name="nombre"
                  className="mt-2 w-full rounded-xl border-0 bg-cream px-4 py-3 text-ink outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-gold"
                />
              </label>
              <label className="mt-4 block text-sm">
                Correo
                <input
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border-0 bg-cream px-4 py-3 text-ink outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-gold"
                />
              </label>
              <label className="mt-4 block text-sm">
                Mensaje
                <textarea
                  name="mensaje"
                  rows={4}
                  className="mt-2 w-full rounded-xl border-0 bg-cream px-4 py-3 text-ink outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-gold"
                />
              </label>
              <button
                type="button"
                className="mt-6 w-full rounded-full bg-deep py-3.5 text-sm font-medium text-cream transition hover:bg-gold"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
