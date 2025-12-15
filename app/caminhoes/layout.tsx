import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços de Caminhão | Fort Fert",
  description: "Caminhão-pipa, esterco de qualidade e limpeza de fossas. Atendimento profissional rural e urbano com equipamentos modernos.",
};

export default function CaminhoesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
