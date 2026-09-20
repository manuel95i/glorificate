import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  text,
  image,
  accent = "gold-light",
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  accent?: "gold-light" | "sage";
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
      <Image src={image} alt="" fill className="object-cover" sizes="100vw" priority />
      <div className="absolute inset-0 bg-deep/70" />
      <div className="relative mx-auto max-w-6xl text-white">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.24em] ${
            accent === "sage" ? "text-sage-light" : "text-gold-light"
          }`}
        >
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">{text}</p>
      </div>
    </section>
  );
}
