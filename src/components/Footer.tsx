import Image from "next/image";
import Link from "next/link";
import { ministries } from "@/lib/content";
import { address, instagram, mapsUrl, nav, whatsappUrl } from "@/lib/site";

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
            Ministerio Cristiano Glorificate en Panamá. Adoramos a Dios, formamos
            familias y nos reunimos en Academia Hisao Lee.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Explorar
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold-light">
                  {link.label}
                </Link>
              </li>
            ))}
            {ministries.map((ministry) => (
              <li key={ministry.slug}>
                <Link href={`/ministerios/${ministry.slug}`} className="hover:text-gold-light">
                  {ministry.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Contacto
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {address.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
            <li>
              <a href={mapsUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
                Google Maps
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl("Hola, quiero información del Ministerio Cristiano Glorificate.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-light"
              >
                WhatsApp principal
              </a>
            </li>
            <li>
              <a
                href={instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-light"
              >
                Instagram {instagram.handle}
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
