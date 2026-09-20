import DanceMemory from "@/components/games/DanceMemory";
import KidsBibleQuiz from "@/components/games/KidsBibleQuiz";
import WorshipTrivia from "@/components/games/WorshipTrivia";

const copy = {
  infantil: {
    eyebrow: "Pequeños Leones",
    title: "Trivia bíblica para niños",
    text: "Responde con alegría. No hay perdedores: cada pregunta ayuda a recordar la Palabra.",
  },
  alabanza: {
    eyebrow: "Oído de adorador",
    title: "¿De quién es la canción?",
    text: "Un juego corto con temas conocidos de Jesús Adrián Romero, Marcos Witt y más. Sin audio con copyright: solo títulos y artistas.",
  },
  danza: {
    eyebrow: "Coreografía",
    title: "Memoriza los pasos",
    text: "Observa la secuencia de Bandera, Paso, Tamboril y Giro, y repítela. Cada ronda suma un movimiento.",
  },
} as const;

export default function MinistryGame({ slug }: { slug: string }) {
  if (slug !== "infantil" && slug !== "alabanza" && slug !== "danza") return null;
  const item = copy[slug];

  return (
    <section className="mt-20 border-t border-ink/10 pt-16">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">{item.eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{item.title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-muted">{item.text}</p>
      <div className="mt-8">
        {slug === "infantil" ? <KidsBibleQuiz /> : null}
        {slug === "alabanza" ? <WorshipTrivia /> : null}
        {slug === "danza" ? <DanceMemory /> : null}
      </div>
    </section>
  );
}
