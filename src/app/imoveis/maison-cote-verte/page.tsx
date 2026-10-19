import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CabecalhoAurea from "@/components/layout/CabecalhoAurea";
import GaleriaImovel from "@/components/imoveis/GaleriaImovel";
import PainelAtendimento from "@/components/imoveis/PainelAtendimento";
import MotionEnhancer from "@/components/ui/MotionEnhancer";
import { formatarPreco, imoveis } from "@/data/imoveis";

export const metadata: Metadata = {
  title: "Maison Côte Verte | AUREA Residences",
  description:
    "Maison Côte Verte: conceito fictício de residência de praia brasileira de alto padrão em Vitória, Espírito Santo.",
};

const base = "/imoveis/maison-cote-verte";

const fotos = [
  {
    src: `${base}/fachada.webp`,
    ambiente: "Fachada principal",
    alt: "Casa de praia brasileira com telhado cerâmico, madeira e jardim tropical",
  },
  {
    src: `${base}/piscina-gourmet.webp`,
    ambiente: "Piscina e área gourmet",
    alt: "Piscina de formato orgânico integrada ao jardim e à área de convivência",
  },
  {
    src: `${base}/varanda.webp`,
    ambiente: "Varanda",
    alt: "Varanda coberta de madeira com mobiliário acolhedor e vista para o litoral",
  },
  {
    src: `${base}/sala-estar.webp`,
    ambiente: "Sala de estar",
    alt: "Sala de estar com fibras naturais, madeira e conexão com a varanda",
  },
  {
    src: `${base}/suite.webp`,
    ambiente: "Suíte principal",
    alt: "Suíte com tecidos leves, madeira e vista para o mar",
  },
  {
    src: `${base}/cozinha.webp`,
    ambiente: "Cozinha",
    alt: "Cozinha sofisticada com ilha em pedra natural e marcenaria de madeira",
  },
  {
    src: `${base}/banheiro.webp`,
    ambiente: "Banheiro",
    alt: "Banheiro com banheira de imersão e materiais naturais",
  },
  {
    src: `${base}/garagem.webp`,
    ambiente: "Garagem",
    alt: "Garagem coberta com estrutura de madeira e arquitetura tropical",
  },
];

const diferenciais = [
  "Arquitetura de praia brasileira",
  "Telhados cerâmicos e beirais generosos",
  "Varanda integrada ao jardim tropical",
  "Piscina com desenho orgânico",
  "Sala com mobiliário e fibras naturais",
  "Suíte principal com atmosfera litorânea",
  "Cozinha com ilha em pedra natural",
  "Garagem coberta",
];

export default function MaisonCoteVerte() {
  const imovel = imoveis.find(
    (item) => item.slug === "maison-cote-verte"
  );

  if (!imovel) {
    throw new Error("Maison Côte Verte não encontrada no catálogo.");
  }

  return (
    <main className="aurea-property min-h-screen bg-[#F5F2EC] text-[#171C1A]">
      <MotionEnhancer />
      <CabecalhoAurea />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10">
        <nav
          aria-label="Navegação estrutural"
          className="mb-14 text-[11px] uppercase tracking-[0.16em] text-[#827C72]"
        >
          <Link href="/" className="hover:text-[#171C1A]">
            Início
          </Link>
          <span className="mx-3">/</span>
          <Link href="/imoveis" className="hover:text-[#171C1A]">
            Coleção
          </Link>
          <span className="mx-3">/</span>
          <span className="text-[#171C1A]">Maison Côte Verte</span>
        </nav>

        <div
          data-reveal
          className="mb-12 flex flex-wrap items-end justify-between gap-8"
        >
          <div className="max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#947C58]">
              Edição 005 · Refúgios do Litoral · Vitória, ES
            </p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Maison Côte Verte
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#686C66]">
              Uma interpretação genuinamente brasileira do luxo à beira-mar.
              A brisa atravessa as varandas, a madeira aquece os espaços
              e a natureza faz parte de cada ambiente.
            </p>
          </div>

          <div className="pb-1 lg:text-right">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#827C72]">
              Valor do imóvel
            </p>
            <p className="font-serif text-3xl md:text-4xl">
              {formatarPreco(imovel.preco)}
            </p>
          </div>
        </div>

        <PainelAtendimento
          nomeImovel={imovel.nome}
          preco={imovel.preco}
        />

        <GaleriaImovel
          fotos={fotos}
          nomeImovel="Maison Côte Verte"
          edicao="005"
        />

        <div className="aurea-editorial-band">
          <span>THE PRIVATE COLLECTION</span>
          <span className="aurea-editorial-symbol">✦</span>
          <span>ALMA BRASILEIRA</span>
        </div>

        <section
          data-reveal
          className="grid gap-8 border-b border-[#171C1A]/15 py-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { valor: imovel.area.toString(), legenda: "Área construída", unidade: "m²" },
            { valor: String(imovel.suites).padStart(2, "0"), legenda: "Suítes", unidade: "" },
            { valor: String(imovel.vagas).padStart(2, "0"), legenda: "Vagas", unidade: "" },
            { valor: "08", legenda: "Fotografias", unidade: "" },
          ].map((dado) => (
            <div key={dado.legenda} className="border-l border-[#B29A71] pl-5">
              <p className="font-serif text-4xl">
                {dado.valor}
                {dado.unidade && (
                  <span className="ml-1 text-base text-[#827C72]">
                    {dado.unidade}
                  </span>
                )}
              </p>
              <p className="mt-3 text-xs uppercase tracking-wider text-[#77786F]">
                {dado.legenda}
              </p>
            </div>
          ))}
        </section>

        <section
          data-reveal
          className="grid gap-12 py-24 lg:grid-cols-2 lg:gap-24"
        >
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#947C58]">
              A propriedade
            </p>
            <h2 className="max-w-lg font-serif text-4xl leading-tight md:text-5xl">
              A leveza de viver perto do mar.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-9 text-[#5F635E]">
            <p>
              A Maison Côte Verte celebra a arquitetura litorânea brasileira:
              telhados cerâmicos, generosas estruturas de madeira, pedra
              natural e ambientes que se abrem para jardins tropicais.
            </p>
            <p>
              A varanda torna-se uma extensão da sala, enquanto a piscina
              orgânica cria um cenário de lazer e contemplação.
              Cada espaço combina conforto, simplicidade e sofisticação.
            </p>
          </div>
        </section>
      </div>

      <section
        aria-label="Experiência imersiva da Maison Côte Verte"
        className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-[#19352E] text-white md:min-h-[700px]"
      >
        <Image
          src={`${base}/varanda.webp`}
          alt="Varanda tropical com vista para a paisagem litorânea"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102820]/85 via-[#102820]/35 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#E3C99E]">
              Vitória · Espírito Santo
            </p>
            <h2 className="mt-8 font-serif text-5xl leading-tight md:text-7xl">
              Onde a brisa encontra o lar.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-8 text-white/85">
              Uma casa imaginada para apreciar a luz do sol, a sombra
              das varandas e os pequenos prazeres da vida à beira-mar.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <section
          data-reveal
          className="grid gap-12 border-b border-[#171C1A]/15 py-24 lg:grid-cols-2"
        >
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#947C58]">
              Detalhes que encantam
            </p>
            <h2 className="max-w-md font-serif text-4xl leading-tight md:text-5xl">
              O luxo de uma vida mais leve.
            </h2>
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {diferenciais.map((item, indice) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-[#171C1A]/10 py-6"
              >
                <span className="text-xs text-[#947C58]">
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-6">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section data-reveal className="py-24">
          <div className="bg-[#203D35] px-8 py-16 text-white md:px-16 md:py-20">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#D5B98A]">
              AUREA · Refúgios do Litoral
            </p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Seu próximo horizonte começa aqui.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-white/70">
              Conheça as diferentes arquiteturas e histórias da coleção
              AUREA Residences.
            </p>
            <Link
              href="/imoveis"
              className="mt-10 inline-flex border border-[#C5AE86] px-8 py-5 text-xs uppercase tracking-[0.2em] text-[#E1CFAD] transition hover:bg-[#C5AE86] hover:text-[#171C1A]"
            >
              Explorar a coleção ↗
            </Link>
          </div>
        </section>

        <p className="pb-12 text-center text-xs leading-6 text-[#827C72]">
          AUREA Residences — projeto demonstrativo de portfólio.
          Propriedade, imagens e valores fictícios, sem oferta comercial real.
        </p>
      </div>
    </main>
  );
}
