import PainelAtendimento from "@/components/imoveis/PainelAtendimento";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CabecalhoAurea from "@/components/layout/CabecalhoAurea";
import GaleriaImovel from "@/components/imoveis/GaleriaImovel";
import MotionEnhancer from "@/components/ui/MotionEnhancer";
import { formatarPreco, imoveis } from "@/data/imoveis";

export const metadata: Metadata = {
  title: "Penthouse Mirante do Vale | AUREA Residences",
  description:
    "Cobertura fictícia de alto padrão em Belo Horizonte. Conheça a Penthouse Mirante do Vale e sua arquitetura urbana.",

  openGraph: {
    type: "website",
    images: [{ url: "/imoveis/penthouse-mirante-do-vale/fachada.webp", alt: "penthouse mirante do vale — AUREA Residences" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/imoveis/penthouse-mirante-do-vale/fachada.webp"],
  },
};

const base = "/imoveis/penthouse-mirante-do-vale";

const fotos = [
  {
    src: `${base}/fachada.webp`,
    ambiente: "Cobertura",
    alt: "Penthouse no topo de um edifício com vista urbana ao entardecer",
  },
  {
    src: `${base}/sala-estar.webp`,
    ambiente: "Living",
    alt: "Living sofisticado com mobiliário azul-marinho e marcenaria escura",
  },
  {
    src: `${base}/sala-jantar.webp`,
    ambiente: "Sala de jantar",
    alt: "Sala de jantar elegante com iluminação indireta e pedra escura",
  },
  {
    src: `${base}/cozinha.webp`,
    ambiente: "Cozinha",
    alt: "Cozinha contemporânea com ilha de pedra escura",
  },
  {
    src: `${base}/jacuzzi.webp`,
    ambiente: "Jacuzzi",
    alt: "Ambiente de spa com jacuzzi e revestimentos em mármore",
  },
  {
    src: `${base}/quarto.webp`,
    ambiente: "Quarto principal",
    alt: "Quarto principal com iluminação acolhedora e acabamento sofisticado",
  },
  {
    src: `${base}/quarto-comum.webp`,
    ambiente: "Quarto secundário",
    alt: "Quarto secundário contemporâneo com decoração em tons neutros",
  },
];

const diferenciais = [
  "Cobertura com vista panorâmica urbana",
  "Arquitetura contemporânea cosmopolita",
  "Living com mobiliário de alto padrão",
  "Sala de jantar com acabamento em pedra",
  "Cozinha com ilha central",
  "Jacuzzi e espaço de bem-estar",
  "Marcenaria em tons escuros",
  "Iluminação arquitetônica indireta",
];

export default function PenthouseMiranteDoVale() {
  const imovel = imoveis.find(
    (item) => item.slug === "penthouse-mirante-do-vale"
  );

  if (!imovel) {
    throw new Error("Penthouse nao encontrada na base de imoveis.");
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
          <Link href="/" className="hover:text-[#171C1A]">Início</Link>
          <span className="mx-3">/</span>
          <Link href="/imoveis" className="hover:text-[#171C1A]">Coleção</Link>
          <span className="mx-3">/</span>
          <span className="text-[#171C1A]">Penthouse Mirante do Vale</span>
        </nav>

        <div
          data-reveal
          className="mb-12 flex flex-wrap items-end justify-between gap-8"
        >
          <div className="max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
              Edição 003 · Coleção Privada · Belo Horizonte, MG
            </p>
            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Penthouse Mirante do Vale
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#686C66]">
              O encontro entre arquitetura autoral e a energia da cidade.
              Uma experiência residencial elevada, envolvida pela
              paisagem urbana de Belo Horizonte.
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

        <PainelAtendimento nomeImovel="Penthouse Mirante do Vale" preco={imovel.preco} />

        <GaleriaImovel
          fotos={fotos}
          nomeImovel="Penthouse Mirante do Vale"
          edicao="003"
        />

        <div className="aurea-editorial-band">
          <span>THE PRIVATE COLLECTION</span>
          <span className="aurea-editorial-symbol">✦</span>
          <span>URBAN ELEGANCE</span>
        </div>

        <section
          data-reveal
          className="grid gap-8 border-b border-[#171C1A]/15 py-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { valor: "480", legenda: "Área construída", unidade: "m²" },
            { valor: "04", legenda: "Suítes", unidade: "" },
            { valor: "05", legenda: "Vagas", unidade: "" },
            { valor: "07", legenda: "Fotografias", unidade: "" },
          ].map((dado) => (
            <div key={dado.legenda} className="border-l border-[#A58D67] pl-5">
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
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
              A propriedade
            </p>
            <h2 className="max-w-lg font-serif text-4xl leading-tight md:text-5xl">
              Acima da cidade. Além do convencional.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-9 text-[#5F635E]">
            <p>
              A Penthouse Mirante do Vale interpreta o luxo urbano
              por meio de uma composição de superfícies envidraçadas,
              metais escuros, mármore e marcenaria sofisticada.
            </p>
            <p>
              Seus ambientes sociais valorizam a convivência,
              enquanto a área íntima oferece privacidade e conforto.
              A vista da cidade marca a personalidade desta residência.
            </p>
          </div>
        </section>
      </div>

      <section
        aria-label="Vista imersiva da Penthouse"
        className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-[#14191B] text-white md:min-h-[700px]"
      >
        <Image
          src={`${base}/fachada.webp`}
          alt="Cobertura da Penthouse Mirante do Vale iluminada ao entardecer"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1016]/90 via-[#0A1016]/45 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D7B989]">
              Belo Horizonte · Uma nova perspectiva
            </p>
            <h2 className="mt-8 font-serif text-5xl leading-tight md:text-7xl">
              O horizonte é parte da sua casa.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-8 text-white/85">
              Uma interpretação cosmopolita de morar, em que
              arquitetura, atmosfera e paisagem se encontram.
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
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
              Diferenciais
            </p>
            <h2 className="max-w-md font-serif text-4xl leading-tight md:text-5xl">
              Elegância em cada detalhe.
            </h2>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {diferenciais.map((item, indice) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-[#171C1A]/10 py-6"
              >
                <span className="text-xs text-[#A38A66]">
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-6">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" data-reveal className="py-24">
          <div className="bg-[#171C1A] px-8 py-16 text-white md:px-16 md:py-20">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#C5AE86]">
              AUREA · Private Collection
            </p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              A próxima perspectiva começa aqui.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-white/65">
              Explore as propriedades da coleção e descubra
              diferentes interpretações de uma vida extraordinária.
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
          Imóveis, imagens e valores fictícios, sem oferta comercial real.
        </p>
      </div>
    </main>
  );
}


