"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ministries } from "@/lib/content";
import { nav } from "@/lib/site";

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [ministriesOpen, setMinistriesOpen] = useState(false);

  const wrap = overlay
    ? "absolute inset-x-0 top-0 z-50"
    : "sticky top-0 z-50 border-b border-white/10 bg-deep/95 backdrop-blur";
  const text = "text-white";

  return (
    <header className={wrap}>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-deep"
      >
        Saltar al contenido
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className={`flex items-center gap-3 ${text}`}>
          <Image
            src="/images/logo.jpeg"
            alt="Ministerio Cristiano Glorificate"
            width={48}
            height={48}
            className="h-12 w-12 rounded-full bg-white object-cover"
            priority
          />
          <span className="font-serif text-2xl tracking-wide">Gloríficate</span>
        </Link>

        <nav className={`hidden items-center gap-7 text-sm font-medium text-white/85 lg:flex`}>
          {nav.map((link) =>
            link.href === "/ministerios" ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMinistriesOpen(true)}
                onMouseLeave={() => setMinistriesOpen(false)}
              >
                <Link href={link.href} className="transition hover:text-gold-light">
                  {link.label}
                </Link>
                {ministriesOpen ? (
                  <div className="absolute left-0 top-full z-50 min-w-52 rounded-2xl bg-deep py-2 shadow-xl">
                    {ministries.map((ministry) => (
                      <Link
                        key={ministry.slug}
                        href={`/ministerios/${ministry.slug}`}
                        className="block px-4 py-2 text-white/85 hover:bg-white/5 hover:text-gold-light"
                      >
                        {ministry.shortTitle}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link key={link.href} href={link.href} className="transition hover:text-gold-light">
                {link.label}
              </Link>
            ),
          )}
          <Link
            href="/contacto"
            className="rounded-full border border-gold-light/70 px-5 py-2 text-gold-light transition hover:bg-gold-light hover:text-deep"
          >
            Visítanos
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((value) => !value)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M5 8h14M5 16h14" />}
          </svg>
        </button>
      </div>

      {open ? (
        <nav className="mx-4 mb-4 rounded-2xl border border-white/10 bg-deep/95 p-4 text-white shadow-xl backdrop-blur lg:hidden">
          {nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-xl px-4 py-3 text-sm hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {ministries.map((ministry) => (
            <Link
              key={ministry.slug}
              href={`/ministerios/${ministry.slug}`}
              className="block rounded-xl px-8 py-2 text-sm text-white/70 hover:bg-white/5"
              onClick={() => setOpen(false)}
            >
              {ministry.shortTitle}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
