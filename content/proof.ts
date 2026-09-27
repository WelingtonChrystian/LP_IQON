/**
 * Prova social: depoimentos e projetos.
 *
 * Preencha SOMENTE com conteúdo real e autorizado pelos clientes.
 * Enquanto as listas estiverem vazias, as seções não aparecem na página.
 */
export const proofSections = {
  projects: {
    title: "Marcas em construção",
    intro: "Alguns dos trabalhos conduzidos pela IQON.",
    linkLabel: "Ver o projeto",
  },
  testimonials: { title: "O que dizem as marcas que a IQON conduz" },
};

export type Testimonial = {
  quote: string;
  name: string;
  /** Ex.: "Proprietária" */
  role: string;
  /** Ex.: "Clínica X, Porto Alegre" */
  business: string;
};

export const testimonials: Testimonial[] = [
  // {
  //   quote: "Texto real do depoimento, com autorização do cliente.",
  //   name: "Nome do cliente",
  //   role: "Cargo",
  //   business: "Empresa, cidade",
  // },
];

export type Project = {
  name: string;
  /** Ex.: "Posicionamento e conteúdo" */
  category: string;
  /** Contexto breve do trabalho realizado. */
  context: string;
  /** Imagem em /public/images/projetos (proporção 4:5 recomendada). */
  image: { src: string; alt: string };
  href?: string;
};

export const projects: Project[] = [
  // {
  //   name: "Nome do cliente",
  //   category: "Conteúdo e tráfego pago",
  //   context: "O que foi feito e para qual objetivo.",
  //   image: { src: "/images/projetos/cliente.jpg", alt: "Descrição da imagem" },
  // },
];
