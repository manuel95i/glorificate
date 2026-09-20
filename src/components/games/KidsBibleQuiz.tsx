"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    q: "¿Quién construyó un arca enorme porque Dios se lo pidió?",
    options: ["Noé", "Moisés", "Jonás"],
    answer: 0,
  },
  {
    q: "¿Qué animal habló con Eva en el jardín?",
    options: ["Un león", "Una serpiente", "Un oveja"],
    answer: 1,
  },
  {
    q: "¿Cuántos días estuvo Jesús en el desierto?",
    options: ["7 días", "12 días", "40 días"],
    answer: 2,
  },
  {
    q: "¿Quién venció a un gigante llamado Goliat?",
    options: ["David", "Sansón", "Pedro"],
    answer: 0,
  },
  {
    q: "¿Dónde nació Jesús?",
    options: ["Jerusalén", "Belén", "Nazaret"],
    answer: 1,
  },
  {
    q: "¿Qué hizo Jesús con cinco panes y dos peces?",
    options: ["Los guardó", "Alimentó a mucha gente", "Los vendió"],
    answer: 1,
  },
  {
    q: "¿Quién fue tragado por un gran pez?",
    options: ["Jonás", "Daniel", "José"],
    answer: 0,
  },
  {
    q: "¿Cuál es el primer libro de la Biblia?",
    options: ["Salmos", "Génesis", "Mateo"],
    answer: 1,
  },
];

export default function KidsBibleQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const current = QUESTIONS[step];

  function choose(index: number) {
    if (picked !== null) return;
    setPicked(index);
    if (index === current.answer) setScore((value) => value + 1);
  }

  function next() {
    if (step + 1 >= QUESTIONS.length) {
      setDone(true);
      return;
    }
    setStep((value) => value + 1);
    setPicked(null);
  }

  function restart() {
    setStep(0);
    setScore(0);
    setPicked(null);
    setDone(false);
  }

  if (done) {
    const message =
      score >= 7 ? "¡Leoncito valiente!" : score >= 4 ? "¡Muy bien, sigue aprendiendo!" : "¡Sigue intentando, Dios te ama!";
    return (
      <div className="rounded-[2rem] bg-cream-dark p-8 text-center">
        <p className="font-serif text-3xl">{message}</p>
        <p className="mt-3 text-ink-muted">
          Acertaste {score} de {QUESTIONS.length} preguntas.
        </p>
        <button
          type="button"
          onClick={restart}
          className="mt-6 rounded-full bg-gold px-6 py-3 text-sm font-medium text-white hover:bg-gold-light hover:text-deep"
        >
          Jugar otra vez
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] bg-cream-dark p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Pregunta {step + 1} de {QUESTIONS.length}
      </p>
      <h3 className="mt-3 font-serif text-2xl sm:text-3xl">{current.q}</h3>
      <div className="mt-6 grid gap-3">
        {current.options.map((option, index) => {
          const isPicked = picked === index;
          const isCorrect = index === current.answer;
          const show = picked !== null;
          return (
            <button
              key={option}
              type="button"
              onClick={() => choose(index)}
              className={`rounded-2xl px-5 py-4 text-left text-sm font-medium transition ${
                show && isCorrect
                  ? "bg-sage text-white"
                  : show && isPicked
                    ? "bg-deep text-white"
                    : "bg-cream hover:bg-white"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {picked !== null ? (
        <button
          type="button"
          onClick={next}
          className="mt-6 rounded-full bg-deep px-6 py-3 text-sm font-medium text-cream hover:bg-gold"
        >
          {step + 1 >= QUESTIONS.length ? "Ver resultado" : "Siguiente"}
        </button>
      ) : null}
    </div>
  );
}
