import type { Metadata } from "next";
import CatalogoImoveis from "@/components/catalogo/CatalogoImoveis";

export const metadata: Metadata = {
  title: "Coleção de Imóveis | AUREA Residences",
  description:
    "Explore a coleção de propriedades de alto padrão da AUREA Residences no Sudeste brasileiro. Projeto demonstrativo.",
};

export default function PaginaImoveis() {
  return <CatalogoImoveis />;
}
