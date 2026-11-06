/**
 * Equipe IQON — Síntese executiva direta.
 */
export type TeamMember = {
  name: string;
  role: string;
  focus: string;
  bio: string;
  photo?: { src: string; alt: string };
};

export const teamSection = {
  tagline: "Quem conduz",
  title: "Especialidades integradas. Uma única estratégia.",
  intro:
    "Três frentes que atuam a partir do mesmo diagnóstico — para que marca, tráfego e atendimento falem a mesma língua.",
};

export const team: TeamMember[] = [
  {
    name: "Agatha",
    role: "Estratégia & Conteúdo",
    focus: "Inteligência de Marca",
    bio: "Transforma o diagnóstico em posicionamento de marca, narrativas editoriais e copywriting persuasivo para construir autoridade e alta percepção de valor.",
  },
  {
    name: "Welington",
    role: "Tráfego Pago & Performance",
    focus: "Aquisição de Clientes",
    bio: "Estrutura campanhas no Meta e Google Ads, parametrização técnica e análise contínua de métricas para conectar o negócio ao público certo e otimizar verbas.",
  },
  {
    name: "Alanna",
    role: "Estratégia Comercial & Operação",
    focus: "Processos & Conversão",
    bio: "Estrutura soluções para presença digital, rotinas de suporte e aprimoramento comercial — desde qualificação e scripts de atendimento até treinamento de equipe.",
  },
];
