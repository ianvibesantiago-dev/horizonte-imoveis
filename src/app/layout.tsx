import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Horizonte Imóveis — Alto padrão em São Paulo",
  description:
    "Curadoria de imóveis de alto padrão nos Jardins, Itaim Bibi, Vila Nova Conceição e Alto de Pinheiros. Consultor dedicado, off-market e assessoria jurídica.",
  openGraph: { locale: "pt_BR", type: "website", title: "Horizonte Imóveis" },
};

export const viewport: Viewport = { themeColor: "#0f1a2b" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
