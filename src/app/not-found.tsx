import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-32 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">404</p>
        <h1 className="mt-4 font-serif text-5xl">Esta página no existe</h1>
        <p className="mt-4 text-ink-muted">
          Vuelve al inicio o escríbenos por WhatsApp si buscabas un ministerio.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-deep px-6 py-3 text-sm text-cream hover:bg-gold"
        >
          Ir al inicio
        </Link>
      </section>
    </SiteShell>
  );
}
