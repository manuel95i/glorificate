"use client";

import { useState } from "react";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#cultos", label: "Cultos" },
  { href: "#ministerios", label: "Ministerios" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-light/60">
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              aria-hidden
            >
              <path d="M12 3v18M7 8h10" />
            </svg>
          </span>
          <span className="font-serif text-2xl tracking-wide">Gloríficate</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#visita"
            className="rounded-full border border-gold-light/70 px-5 py-2 text-gold-light transition hover:bg-gold-light hover:text-deep"
          >
            Visítanos
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white md:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menú</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M5 8h14M5 16h14" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="mx-4 rounded-2xl border border-white/10 bg-deep/95 p-4 text-white shadow-xl backdrop-blur md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-xl px-4 py-3 text-sm hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#visita"
            className="mt-2 block rounded-full bg-gold px-4 py-3 text-center text-sm font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Visítanos
          </a>
        </nav>
      )}
    </header>
  );
}
