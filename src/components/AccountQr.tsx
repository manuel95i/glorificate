export default function AccountQr({
  bank,
  type,
  number,
  holder,
}: {
  bank: string;
  type: string;
  number: string;
  holder: string;
}) {
  const payload = [
    bank,
    `Cuenta de ${type.toLowerCase()}: ${number}`,
    holder,
  ].join("\n");

  const src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=8&data=${encodeURIComponent(payload)}`;

  return (
    <figure className="flex flex-col items-center gap-3 rounded-2xl bg-cream px-4 py-5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`Código QR con los datos de la cuenta ${number}`}
        width={180}
        height={180}
        className="h-44 w-44 rounded-xl bg-white p-2"
      />
      <figcaption className="max-w-[14rem] text-center text-xs leading-5 text-ink-muted">
        Escanéalo para ver y copiar el número. No realiza el pago.
      </figcaption>
    </figure>
  );
}
