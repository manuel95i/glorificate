"use client";

import { useState } from "react";

export default function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-gold/30 px-3 py-1 text-xs font-medium text-gold transition hover:bg-gold hover:text-white"
    >
      {copied ? "Copiado" : "Copiar"}
    </button>
  );
}
