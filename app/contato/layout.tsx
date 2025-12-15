import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Fort Fert",
  description: "Entre em contato conosco pelo WhatsApp. Atendimento rápido e personalizado para serviços de caminhão e tomates de estufa.",
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
