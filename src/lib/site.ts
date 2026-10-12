const PANAMA_CODE = "507";

export const whatsapp = {
  principal: "6919-5740",
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
}[] = [
  {
    bank: "Caja de Ahorros",
    type: "Ahorro",
    number: "300221141",
    holder: "Ministerio Cristiano Glorificate (RG)",
    extra: "Caja de Ahorros no usa Yappy. El código QR muestra los datos para copiarlos rápido al hacer una transferencia.",
  },
];

export const schedules = [
  {
    title: "Culto",
    day: "Viernes",
    time: "7:30 p.m. a 9:30 p.m.",
    note: "Adoración, Palabra y comunión para toda la familia.",
  },
] as const;

export const rehearsalNote =
  "Si te interesa unirte a danza o alabanza, pregunta el horario de los ensayos cuando nos escribas o llames.";

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
  { href: "/galeria", label: "Galería" },
  { href: "/ofrendas", label: "Ofrendas" },
  { href: "/contacto", label: "Contacto" },
] as const;
