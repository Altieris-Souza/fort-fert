import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fort Fert",
  description: "Serviços de caminhão-pipa e transporte de esterco. Produção própria de tomates em estufas. Atendimento rural e urbano com qualidade e compromisso.",
  icons: {
    icon: '/images/favicon.ico',
  },
  openGraph: {
    title: 'Fort Fert - Serviços de Caminhão e Estufas de Tomate',
    description: 'Serviços de caminhão-pipa e transporte de esterco. Produção própria de tomates em estufas. Atendimento rural e urbano.',
    images: ['/images/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
