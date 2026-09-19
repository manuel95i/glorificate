const PANAMA_CODE = "507";

export const whatsapp = {
  principal: "6552-5703",
  danza: "6449-8564",
  alabanza: "6852-7493",
} as const;

export const whatsappNumber = whatsapp.principal;

export const address = {
  name: "Academia Hisao Lee",
  lines: ["Academia Hisao Lee", "Panamá"],
  mapsHref: "https://maps.app.goo.gl/kaRV8WfmzgjtCPMP7",
};

export const offerings: {
  bank: string;
  type: string;
  number: string;
  holder: string;
  extra?: string;
}[] = [];

export const schedules = [
  {
    title: "Culto",
    day: "Viernes",
    time: "7:30 p.m. a 9:30 p.m.",
    note: "Adoración, Palabra y comunión para toda la familia.",
  },
  {
    title: "Práctica de danza",
    day: "Lunes",
    time: "6:00 p.m. a 8:00 p.m.",
    note: "Ensayo del ministerio de danza.",
  },
  {
    title: "Alabanza",
    day: "Miércoles",
    time: "7:00 p.m. a 9:00 p.m.",
    note: "Ensayo del ministerio de alabanza.",
  },
] as const;

function panamaWhatsapp(number: string) {
  const digits = number.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith(PANAMA_CODE)) return digits;
  return `${PANAMA_CODE}${digits}`;
}

export type WhatsAppKey = keyof typeof whatsapp;

export function whatsappUrl(text?: string, number: string = whatsapp.principal) {
  const formatted = panamaWhatsapp(number);
  if (!formatted) return "/contacto";

  const url = new URL(`https://wa.me/${formatted}`);
  if (text) url.searchParams.set("text", text);
  return url.toString();
}

export function mapsUrl() {
  return address.mapsHref;
}

export const nav = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/ministerios", label: "Ministerios" },
  { href: "/labor-social", label: "Labor social" },
  { href: "/galeria", label: "Galería" },
  { href: "/ofrendas", label: "Ofrendas" },
  { href: "/contacto", label: "Contacto" },
] as const;
