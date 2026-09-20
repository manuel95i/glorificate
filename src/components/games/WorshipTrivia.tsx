"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    q: "¿Quién canta “Tú estás aquí”?",
    options: ["Jesús Adrián Romero", "Marcos Witt", "Danilo Montero"],
    answer: 0,
  },
  {
    q: "“El brillo de mis ojos” es un tema de…",
    options: ["Christine D’Clario", "Jesús Adrián Romero", "Marcela Gándara"],
    answer: 1,
  },
  {
    q: "¿Quién popularizó “Tu fidelidad”?",
    options: ["Marcos Witt", "Redimi2", "Hillsong"],
    answer: 0,
  },
  {
    q: "“Supe que me amabas” es de…",
    options: ["Marcela Gándara", "Alex Campos", "Miel San Marcos"],
    answer: 0,
  },
  {
    q: "¿De qué país es Jesús Adrián Romero?",
    options: ["Colombia", "México", "Argentina"],
    answer: 1,
  },
  {
    q: "“Gracias” es un clásico de alabanza de…",
    options: ["Marcos Witt", "Jesús Adrián Romero", "Barak"],
    answer: 0,
  },
  {
    q: "¿Qué ministerio de Gloríficate ministra con instrumentos cada viernes?",
    options: ["Danza", "Alabanza", "Pequeños Leones"],
    answer: 1,
  },
  {
    q: "“Te dejo en libertad” es un tema asociado a…",
    options: ["Jesús Adrián Romero", "Julissa", "Danilo Montero"],
    answer: 0,
  },
];

export default function WorshipTrivia() {
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
    return (
      <div className="rounded-[2rem] bg-cream-dark p-8 text-center">
        <p className="font-serif text-3xl">¡Buena oreja para adorar!</p>
        <p className="mt-3 text-ink-muted">
          {score} de {QUESTIONS.length} canciones y artistas.
        </p>
        <button
          type="button"
          onClick={restart}
          className="mt-6 rounded-full bg-gold px-6 py-3 text-sm font-medium text-white hover:bg-gold-light hover:text-deep"
        >
          Otra ronda
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] bg-cream-dark p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Canción {step + 1} de {QUESTIONS.length}
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
          {step + 1 >= QUESTIONS.length ? "Ver puntaje" : "Siguiente"}
        </button>
      ) : null}
    </div>
  );
}
