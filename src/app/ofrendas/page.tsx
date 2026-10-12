import type { Metadata } from "next";
import AccountQr from "@/components/AccountQr";
import CopyButton from "@/components/CopyButton";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import WhatsAppLink from "@/components/WhatsAppLink";
import { offerings } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ofrendas",
  description: "Cómo ofrendar al Ministerio Cristiano Glorificate.",
};

export default function OfrendasPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Generosidad"
        title="Ofrendas para la obra"
        text="Tu siembra sostiene el culto y los ministerios. Gracias por dar con alegría."
        image="/images/alabanza/culto.jpeg"
      />
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        {offerings.length > 0 ? (
          <div className="grid gap-6">
            {offerings.map((offering) => (
              <article
                key={`${offering.bank}-${offering.number}`}
                className="grid gap-8 rounded-3xl bg-cream-dark p-8 md:grid-cols-[1fr_auto] md:items-center"
              >
                <div>
                  <h2 className="font-serif text-2xl">{offering.bank}</h2>
                  <dl className="mt-6 space-y-4 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-ink-muted">Tipo</dt>
                      <dd className="mt-1">{offering.type}</dd>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <dt className="text-xs uppercase tracking-wider text-ink-muted">Número</dt>
                        <dd className="mt-1 font-medium tracking-wide">{offering.number}</dd>
                      </div>
                      <CopyButton value={offering.number} />
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wider text-ink-muted">A nombre de</dt>
                      <dd className="mt-1">{offering.holder}</dd>
                    </div>
                    {offering.extra ? (
                      <p className="max-w-md text-ink-muted">{offering.extra}</p>
                    ) : null}
                  </dl>
                </div>
                <AccountQr
                  bank={offering.bank}
                  type={offering.type}
                  number={offering.number}
                  holder={offering.holder}
                />
              </article>
            ))}
          </div>
        ) : (
          <p className="max-w-2xl text-base leading-8 text-ink-muted">
            Estamos cargando los datos bancarios. Escríbenos y te compartimos
            cómo ofrendar o enviar el comprobante.
          </p>
        )}
        <div className="mt-10">
          <WhatsAppLink text="Hola, quiero enviar el comprobante de ofrenda a Glorificate.">
            Enviar comprobante o consultar
          </WhatsAppLink>
        </div>
      </section>
    </SiteShell>
  );
}
