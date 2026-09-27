/**
 * Equipe (fonte: seção "As pessoas por trás" do site atual).
 * Para exibir fotos, adicione o arquivo em /public/images/equipe e preencha `photo`.
 */
export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  photo?: { src: string; alt: string };
};

export const teamSection = {
  title: "Quem pensa, executa e acompanha a sua estratégia.",
  intro:
    "Três especialidades diferentes, trabalhando sobre a mesma marca\u00a0— e não três fornecedores independentes.",
  closing: [
    "Uma equipe pequena o suficiente para conhecer sua marca.",
    "Especializada o suficiente para cuidar de cada etapa.",
  ],
};

export const team: TeamMember[] = [
  {
    name: "Agatha",
    role: "Estratégia e conteúdo",
    bio: "Mergulha na marca, transforma posicionamento em comunicação e conduz a estratégia editorial.",
  },
  {
    name: "Welinton",
    role: "Tráfego e performance",
    bio: "Estrutura, monitora e otimiza campanhas para colocar a estratégia diante das pessoas certas.",
  },
  {
    name: "Alanna",
    role: "Atendimento e conversão",
    bio: "Estrutura a experiência comercial no WhatsApp para que a oportunidade recebida tenha um processo para seguir.",
  },
];
