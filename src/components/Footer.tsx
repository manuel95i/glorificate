import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-deep text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="Ministerio Cristiano Glorificate"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full bg-white object-cover"
            />
            <p className="font-serif text-3xl text-cream">Gloríficate</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/65">
            Ministerio Cristiano Glorificate: una familia comprometida con la
            Palabra, la adoración y el amor al prójimo. Aquí hay un lugar para ti.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Explorar
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#nosotros" className="hover:text-gold-light">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#cultos" className="hover:text-gold-light">
                Horarios
              </a>
            </li>
            <li>
              <a href="#ministerios" className="hover:text-gold-light">
                Ministerios
              </a>
            </li>
            <li>
              <a href="#eventos" className="hover:text-gold-light">
                Eventos
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Av. de la Esperanza 120</li>
            <li>Ciudad de México</li>
            <li>
              <a href="mailto:hola@glorificate.mx" className="hover:text-gold-light">
                hola@glorificate.mx
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-cream/45">
        © {new Date().getFullYear()} Ministerio Cristiano Glorificate. Todos los derechos reservados.
      </div>
    </footer>
  );
}
