import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import CursorCustom from "@/components/CursorCustom";

import SmoothProvider from "@/components/SmoothProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Clínica Priscila Martins | Estética Avançada",
  description: "Beleza que transforma. Cuidado que encanta.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <a href="#conteudo" className="sr-only sr-only-focusable">
          Ir para o conteúdo principal
        </a>

        <SmoothProvider>
          <Navbar />
          <CursorCustom />
          <main id="conteudo">{children}</main>
        </SmoothProvider>
      </body>
    </html>
  );
}
