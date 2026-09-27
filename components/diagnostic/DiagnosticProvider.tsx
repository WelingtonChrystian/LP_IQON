"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type DiagnosticContextValue = {
  /** Ids das dores marcadas pelo visitante (content/pains.ts). */
  selected: string[];
  isSelected: (id: string) => boolean;
  toggle: (id: string) => void;
};

const DiagnosticContext = createContext<DiagnosticContextValue | null>(null);

/** Guarda as dores marcadas para que todos os CTAs levem o contexto para o WhatsApp. */
export function DiagnosticProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = useCallback((id: string) => {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }, []);

  const value = useMemo(
    () => ({ selected, toggle, isSelected: (id: string) => selected.includes(id) }),
    [selected, toggle],
  );

  return <DiagnosticContext value={value}>{children}</DiagnosticContext>;
}

export function useDiagnostic() {
  const context = useContext(DiagnosticContext);
  if (!context) {
    throw new Error("useDiagnostic deve ser usado dentro de <DiagnosticProvider>.");
  }
  return context;
}
