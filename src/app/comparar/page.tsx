import type { Metadata } from "next";
import Link from "next/link";
import CabecalhoAurea from "@/components/layout/CabecalhoAurea";
import { imoveis, formatarPreco } from "@/data/imoveis";

export const metadata: Metadata = {
  title: "Comparar Imóveis | AUREA Residences",
  description: "Compare as propriedades da coleção demonstrativa AUREA.",
};

type Props = {
  searchParams: Promise<{ imoveis?: string | string[] }>;
};

export default async function PaginaComparar({ searchParams }: Props) {
  const params = await searchParams;
  const valor = typeof params.imoveis === "string" ? params.imoveis : "";

  const slugs = [...new Set(valor.split(",").filter(Boolean))].slice(0, 3);
  const selecionados = slugs
    .map((slug) => imoveis.find((imovel) => imovel.slug === slug))
    .filter((imovel): imovel is (typeof imoveis)[number] => Boolean(imovel));

  const linhas = [
    { nome: "Localização", valor: (i: (typeof imoveis)[number]) => `${i.cidade}, ${i.estado}` },
    { nome: "Tipo", valor: (i: (typeof imoveis)[number]) => i.tipo },
    { nome: "Investimento", valor: (i: (typeof imoveis)[number]) => formatarPreco(i.preco) },
    { nome: "Área", valor: (i: (typeof imoveis)[number]) => `${i.area} m²` },
    { nome: "Suítes", valor: (i: (typeof imoveis)[number]) => String(i.suites) },
    { nome: "Vagas", valor: (i: (typeof imoveis)[number]) => String(i.vagas) },
  ];

  return (
    <main className="min-h-screen bg-[#F5F2EC] text-[#171C1A]">
      <CabecalhoAurea />

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20">
        <Link href="/imoveis" className="text-xs uppercase tracking-[0.2em] text-[#927C5B]">
          ← Voltar à coleção
        </Link>
        <p className="mt-14 text-xs uppercase tracking-[0.3em] text-[#927C5B]">
          AUREA · Private Collection
        </p>
        <h1 className="mt-5 font-serif text-5xl md:text-7xl">
          O privilégio de escolher.
        </h1>
        <p className="mt-6 max-w-2xl leading-8 text-[#64665F]">
          Compare os detalhes que tornam cada residência singular.
          Explore localização, espaço e características em uma só visão.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        {selecionados.length === 0 ? (
          <div className="border border-[#D5CABA] p-12 text-center">
            <h2 className="font-serif text-3xl">Nenhuma residência selecionada</h2>
            <p className="mt-4 text-[#64665F]">
              Escolha até três propriedades no catálogo para começar.
            </p>
            <Link href="/imoveis" className="mt-8 inline-block bg-[#171C1A] px-7 py-4 text-xs uppercase tracking-widest text-white">
              Explorar a coleção
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto border border-[#D5CABA] bg-[#FFFEFB]">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="bg-[#171C1A] text-white">
                  <th className="w-40 p-5 text-xs uppercase tracking-widest font-normal">
                    Residência
                  </th>
                  {selecionados.map((imovel) => (
                    <th key={imovel.slug} className="min-w-44 p-5 align-top">
                      <span className="block text-[10px] font-normal uppercase tracking-widest text-[#C5AE86]">
                        AUREA Collection
                      </span>
                      <span className="mt-4 block font-serif text-xl font-normal md:text-2xl">
                        {imovel.nome}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {linhas.map((linha) => (
                  <tr key={linha.nome} className="border-b border-[#E5DFD4]">
                    <th className="p-5 text-xs font-medium uppercase tracking-wide text-[#77766F]">
                      {linha.nome}
                    </th>
                    {selecionados.map((imovel) => (
                      <td key={imovel.slug} className="p-5 font-serif text-lg">
                        {linha.valor(imovel)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th className="p-5 text-xs font-medium uppercase tracking-wide text-[#77766F]">
                    Explorar
                  </th>
                  {selecionados.map((imovel) => (
                    <td key={imovel.slug} className="p-5">
                      {imovel.disponivelNoSite ? (
                        <Link href={`/imoveis/${imovel.slug}`} className="border-b border-[#9C835F] pb-1 text-xs uppercase tracking-wider">
                          Ver residência ↗
                        </Link>
                      ) : (
                        <span className="text-xs text-[#77766F]">Apresentação em preparação</span>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-8 text-xs leading-6 text-[#77766F]">
          Projeto demonstrativo de portfólio. Imóveis, valores e características fictícios,
          sujeitos à revisão durante o desenvolvimento.
        </p>
      </section>
    </main>
  );
}
