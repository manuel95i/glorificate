"use client";

import { FormEvent, useState } from "react";
import { whatsapp, whatsappUrl, type WhatsAppKey } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const destinations: { key: WhatsAppKey; label: string }[] = [
  { key: "principal", label: "WhatsApp principal" },
  { key: "danza", label: "Ministerio de danza" },
  { key: "alabanza", label: "Ministerio de alabanza" },
];

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [destino, setDestino] = useState<WhatsAppKey>("principal");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = [
      "Hola, quiero contactar al Ministerio Cristiano Glorificate.",
      nombre ? `Mi nombre es ${nombre}.` : "",
      mensaje,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(whatsappUrl(text, whatsapp[destino]), "_blank", "noopener,noreferrer");
  }

  return (
    <form className="rounded-3xl bg-cream-dark p-8" onSubmit={onSubmit}>
      <label className="block text-sm">
        Nombre
        <input
          type="text"
          name="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          className="mt-2 w-full rounded-xl border-0 bg-cream px-4 py-3 text-ink outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-gold"
        />
      </label>
      <label className="mt-4 block text-sm">
        ¿A quién escribes?
        <select
          value={destino}
          onChange={(event) => setDestino(event.target.value as WhatsAppKey)}
          className="mt-2 w-full rounded-xl border-0 bg-cream px-4 py-3 text-ink outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-gold"
        >
          {destinations.map((item) => (
            <option key={item.key} value={item.key}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-4 block text-sm">
        Mensaje
        <textarea
          name="mensaje"
          rows={4}
          value={mensaje}
          onChange={(event) => setMensaje(event.target.value)}
          className="mt-2 w-full rounded-xl border-0 bg-cream px-4 py-3 text-ink outline-none ring-1 ring-ink/10 focus:ring-2 focus:ring-gold"
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-medium text-white transition hover:bg-[#1ebe57]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Enviar por WhatsApp
      </button>
    </form>
  );
}
