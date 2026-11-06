import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const title = site.title;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title,
    description: site.description,
    images: [
      {
        url: "/images/og.png",
        width: 1200,
        height: 630,
        alt: "IQON. Primeiro o diagnóstico. Depois, a solução certa. Estratégia e soluções para negócios.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/images/og.png"],
  },
  icons: {
    icon: [{ url: "/images/icon-180.png", type: "image/png", sizes: "180x180" }],
    apple: [{ url: "/images/icon-180.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0016",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${hanken.variable} antialiased`}
    >
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-luz focus:px-5 focus:py-3 focus:text-small focus:font-medium focus:text-abismo"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
