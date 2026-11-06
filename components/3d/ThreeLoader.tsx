"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "@/components/visuals/Wordmark";
import { cn } from "@/lib/cn";

/**
 * ThreeLoader — Tela de carregamento cinematográfica e minimalista.
 * - Barra de progresso luminescente com contagem precisa.
 * - Desaparece com fade-out e escala suave revelando o site.
 */
export function ThreeLoader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Simulação suave de carregamento de assets 3D
    const startTime = performance.now();
    const duration = 900; // 900ms para uma entrada rápida sem irritar o usuário

    const update = (now: number) => {
      const elapsed = now - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress < 100) {
        requestAnimationFrame(update);
      } else {
        setTimeout(() => setIsDone(true), 150);
        setTimeout(() => setShouldRender(false), 800);
      }
    };

    const frameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameId);
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-abismo transition-all duration-700 ease-out-soft",
        isDone ? "opacity-0 pointer-events-none scale-102" : "opacity-100",
      )}
    >
      <div className="relative flex flex-col items-center">
        {/* Glow de fundo */}
        <div className="absolute -inset-10 rounded-full bg-violeta/20 blur-2xl animate-pulse" />

        {/* Wordmark */}
        <Wordmark className="relative text-2xl text-luz tracking-[0.45em]" />

        {/* Barra de progresso fina */}
        <div className="relative mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-lilas/15">
          <div
            className="h-full bg-gradient-to-r from-violeta to-lilas transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Contagem percentual */}
        <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-luz-suave/70">
          Iniciando ecossistema · {progress}%
        </p>
      </div>
    </div>
  );
}

