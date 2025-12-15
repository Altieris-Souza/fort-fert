import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tomates de Estufa | Fort Fert",
  description: "Produção própria de tomates em estufas controladas. Tomates frescos e de qualidade para atacado e varejo.",
};

export default function TomatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
