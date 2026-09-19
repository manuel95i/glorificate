import { mapsUrl, whatsapp, whatsappUrl } from "@/lib/site";
import WhatsAppIcon from "@/components/WhatsAppIcon";

type Props = {
  text?: string;
  number?: string;
  children: string;
  className?: string;
};

export default function WhatsAppLink({
  text,
  number = whatsapp.principal,
  children,
  className = "inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#1ebe57]",
}: Props) {
  return (
    <a
      href={whatsappUrl(text, number)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}

export function MapsLink({
  children = "Cómo llegar · Google Maps",
  className = "inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-white transition hover:bg-gold-light hover:text-deep",
}: {
  children?: string;
  className?: string;
}) {
  return (
    <a href={mapsUrl()} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
