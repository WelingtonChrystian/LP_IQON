import { useId } from "react";
import { fronts, frontsSection } from "@/content/fronts";
import { cn } from "@/lib/cn";

/*
 * Geometria do sistema: três círculos iguais nos vértices de um triângulo, sobrepostos
 * o bastante para a marca caber na área comum aos três. Coordenadas no viewBox 640 × 600.
 */
const RADIUS = 180;
/** Distância do centro do sistema ao centro de cada círculo: quanto menor, maior a sobreposição. */
const SPREAD = 105;
const ORIGIN = { x: 320, y: 326 };
/** Direção de cada frente em graus, no sentido do SVG: topo, base esquerda e base direita. */
const DIRECTIONS = [-90, 150, 30] as const;

const round = (value: number) => Math.round(value * 10) / 10;

const circles = DIRECTIONS.map((direction) => {
  const radians = (direction * Math.PI) / 180;
  return {
    direction,
    cx: round(ORIGIN.x + SPREAD * Math.cos(radians)),
    cy: round(ORIGIN.y + SPREAD * Math.sin(radians)),
  };
});

/** Rótulos em % do diagrama: cada frente na área só dela, a marca na área comum às três. */
const frontLabelPositions = [
  { left: "50%", top: "22%" },
  { left: "22.5%", top: "69.2%" },
  { left: "77.5%", top: "69.2%" },
] as const;
const centerLabelPosition = { left: "50%", top: "57.5%" };

/**
 * Presença, autoridade e conversão sobrepostas, com a marca no centro.
 * É um sistema, não uma sequência: os três círculos são desenhados ao mesmo tempo,
 * giram no mesmo ritmo e nenhum deles tem número, prazo ou seta.
 */
export function SystemDiagram({ className }: { className?: string }) {
  const glowId = `${useId()}-glow`;

  return (
    <div
      role="img"
      aria-label={frontsSection.diagramLabel}
      className={cn("@container relative aspect-[16/15] w-full select-none", className)}
    >
      <svg viewBox="0 0 640 600" aria-hidden="true" className="absolute inset-0 size-full overflow-visible">
        <defs>
          <radialGradient id={glowId}>
            <stop offset="0%" stopColor="#b99af0" stopOpacity="0.3" />
            <stop offset="40%" stopColor="#6b21c8" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#6b21c8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={ORIGIN.x} cy={ORIGIN.y} r={310} fill={`url(#${glowId})`} />

        {/* Preenchimento leve: onde as frentes se sobrepõem, a luz se soma e o centro brilha mais. */}
        {circles.map((circle) => (
          <circle
            key={`fill-${circle.direction}`}
            cx={circle.cx}
            cy={circle.cy}
            r={RADIUS}
            className="fill-lilas motion-safe:anim-fade-in [--delay:500ms]"
            fillOpacity={0.07}
          />
        ))}

        {circles.map((circle) => (
          <circle
            key={`stroke-${circle.direction}`}
            cx={circle.cx}
            cy={circle.cy}
            r={RADIUS}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.72}
            strokeWidth={2}
            pathLength={1}
            strokeDasharray={1}
            transform={`rotate(${circle.direction} ${circle.cx} ${circle.cy})`}
            className="text-luz motion-safe:anim-draw [--delay:150ms]"
          />
        ))}

        {circles.map((circle) => (
          <g
            key={`orbit-${circle.direction}`}
            transform={`rotate(${circle.direction + 90} ${circle.cx} ${circle.cy})`}
            className="motion-safe:anim-fade-in [--delay:900ms]"
          >
            <g
              className="motion-safe:anim-orbit [--orbit-duration:64s]"
              style={{ transformOrigin: `${circle.cx}px ${circle.cy}px` }}
            >
              <circle cx={circle.cx} cy={circle.cy - RADIUS} r={12} className="fill-lilas" fillOpacity={0.18} />
              <circle cx={circle.cx} cy={circle.cy - RADIUS} r={4.5} className="fill-lilas-claro" />
            </g>
          </g>
        ))}
      </svg>

      {fronts.map((front, index) => (
        <span
          key={front.id}
          style={frontLabelPositions[index]}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-sans font-medium leading-none text-luz [font-size:clamp(0.8125rem,3.4cqw,1.25rem)] motion-safe:anim-fade-in [--delay:700ms]"
        >
          {front.name}
        </span>
      ))}

      <span
        style={centerLabelPosition}
        className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-sans font-semibold tracking-tight leading-none text-white [font-size:clamp(0.9375rem,4cqw,1.375rem)] motion-safe:anim-fade-in [--delay:700ms]"
      >
        {frontsSection.center}
      </span>
    </div>
  );
}

/** Miniatura do diagrama com uma das frentes em destaque (legenda das três frentes). */
export function FrontGlyph({ highlight, className }: { highlight: number; className?: string }) {
  return (
    <svg viewBox="36 28 568 544" aria-hidden="true" className={cn("h-auto w-12 shrink-0", className)}>
      {circles.map((circle, index) => {
        const active = index === highlight;
        return (
          <circle
            key={circle.direction}
            cx={circle.cx}
            cy={circle.cy}
            r={RADIUS}
            stroke="currentColor"
            strokeOpacity={active ? 1 : 0.4}
            strokeWidth={active ? 24 : 18}
            fillOpacity={active ? 0.32 : undefined}
            className={active ? "fill-lilas text-luz" : "fill-none text-lilas"}
          />
        );
      })}
    </svg>
  );
}
