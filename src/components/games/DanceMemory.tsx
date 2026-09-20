"use client";

import { useEffect, useState } from "react";

const STEPS = [
  { id: "bandera", label: "Bandera", className: "bg-gold" },
  { id: "paso", label: "Paso", className: "bg-sage" },
  { id: "tamboril", label: "Tamboril", className: "bg-deep" },
  { id: "giro", label: "Giro", className: "bg-gold-light text-deep" },
] as const;

function randomStep() {
  return Math.floor(Math.random() * STEPS.length);
}

export default function DanceMemory() {
  const [sequence, setSequence] = useState<number[]>([randomStep()]);
  const [playerIndex, setPlayerIndex] = useState(0);
  const [playingBack, setPlayingBack] = useState(true);
  const [active, setActive] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [lost, setLost] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("glorificate-danza-best");
    if (stored) setBest(Number(stored));
  }, []);

  useEffect(() => {
    if (!playingBack || lost) return;
    let cancelled = false;

    async function play() {
      await wait(500);
      for (const step of sequence) {
        if (cancelled) return;
        setActive(step);
        await wait(520);
        setActive(null);
        await wait(180);
      }
      if (!cancelled) {
        setPlayingBack(false);
        setPlayerIndex(0);
      }
    }

    void play();
    return () => {
      cancelled = true;
    };
  }, [sequence, playingBack, lost]);

  function wait(ms: number) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  }

  function press(index: number) {
    if (playingBack || lost) return;
    setActive(index);
    window.setTimeout(() => setActive(null), 180);

    if (index !== sequence[playerIndex]) {
      setLost(true);
      const nextBest = Math.max(best, score);
      setBest(nextBest);
      window.localStorage.setItem("glorificate-danza-best", String(nextBest));
      return;
    }

    if (playerIndex + 1 === sequence.length) {
      const nextScore = score + 1;
      setScore(nextScore);
      setPlayingBack(true);
      setSequence((current) => [...current, randomStep()]);
      return;
    }
    setPlayerIndex((value) => value + 1);
  }

  function restart() {
    setSequence([randomStep()]);
    setPlayerIndex(0);
    setPlayingBack(true);
    setScore(0);
    setLost(false);
  }

  return (
    <div className="rounded-[2rem] bg-cream-dark p-6 sm:p-8">
      <div className="flex items-end justify-between gap-4">
        <p className="text-sm text-ink-muted">
          {lost ? "Se cortó la secuencia." : playingBack ? "Mira la coreografía…" : "Repite los pasos."}
        </p>
        <p className="text-sm font-medium text-gold">
          Nivel {score} · Mejor {best}
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {STEPS.map((step, index) => (
          <button
            key={step.id}
            type="button"
            onClick={() => press(index)}
            disabled={playingBack || lost}
            className={`min-h-24 rounded-3xl text-sm font-semibold text-white transition ${step.className} ${
              active === index ? "scale-95 ring-4 ring-white" : "opacity-90"
            } disabled:cursor-not-allowed`}
          >
            {step.label}
          </button>
        ))}
      </div>
      {lost ? (
        <button
          type="button"
          onClick={restart}
          className="mt-6 rounded-full bg-deep px-6 py-3 text-sm font-medium text-cream hover:bg-gold"
        >
          Intentar de nuevo
        </button>
      ) : null}
    </div>
  );
}
