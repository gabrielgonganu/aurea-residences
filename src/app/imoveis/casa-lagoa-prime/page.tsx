import PainelAtendimento from "@/components/imoveis/PainelAtendimento";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import CabecalhoAurea from "@/components/layout/CabecalhoAurea";
import GaleriaImovel from "@/components/imoveis/GaleriaImovel";
import MotionEnhancer from "@/components/ui/MotionEnhancer";
import { formatarPreco, imoveis } from "@/data/imoveis";

export const metadata: Metadata = {
  title: "Casa Lagoa Prime | AUREA Residences",
  description:
    "Conheça a Casa Lagoa Prime, residência fictícia de arquitetura contemporânea tropical em Lagoa Santa, Minas Gerais.",
};

const base = "/imoveis/casa-lagoa-prime";

const fotos = [
  {
    src: `${base}/fachada.png`,
    ambiente: "Fachada",
    alt: "Fachada da Casa Lagoa Prime com pedra clara, madeira e paisagismo tropical",
  },
  {
    src: `${base}/piscina.png`,
    ambiente: "Piscina",
    alt: "Área externa com piscina integrada ao terraço e aos jardins",
  },
  {
    src: `${base}/fachada-2.png`,
    ambiente: "Arquitetura",
    alt: "Outro ângulo da arquitetura contemporânea da residência",
  },
  {
    src: `${base}/entrada.png`,
    ambiente: "Entrada",
    alt: "Entrada principal em madeira e pedra natural",
  },
  {
    src: `${base}/cozinha.png`,
    ambiente: "Cozinha",
    alt: "Cozinha com ilha central e acabamentos em pedra e madeira",
  },
  {
    src: `${base}/suite.png`,
    ambiente: "Suíte principal",
    alt: "Suíte principal com materiais naturais e vista para a paisagem",
  },
  {
    src: `${base}/quarto.png`,
    ambiente: "Quarto",
    alt: "Quarto aconchegante com vista para o jardim tropical",
  },
  {
    src: `${base}/sala-tv.png`,
    ambiente: "Sala de TV",
    alt: "Sala de televisão com painel de madeira e vista para o jardim",
  },
  {
    src: `${base}/area-gourmet.png`,
    ambiente: "Área gourmet",
    alt: "Área gourmet com churrasqueira integrada ao terraço",
  },
  {
    src: `${base}/banheiro.png`,
    ambiente: "Banheiro",
    alt: "Banheiro com banheira e revestimentos em pedra natural",
  },
  {
    src: `${base}/escritorio.png`,
    ambiente: "Escritório",
    alt: "Escritório com mobiliário contemporâneo e iluminação natural",
  },
  {
    src: `${base}/sauna.png`,
    ambiente: "Sauna",
    alt: "Sauna com acabamento em madeira e jardim reservado",
  },
];

const caracteristicas = [
  { valor: "410", unidade: "m²", legenda: "Área construída" },
  { valor: "04", unidade: "", legenda: "Suítes" },
  { valor: "04", unidade: "", legenda: "Vagas" },
  { valor: "12", unidade: "", legenda: "Ambientes fotografados" },
];

const diferenciais = [
  "Arquitetura contemporânea tropical",
  "Integração entre ambientes internos e externos",
  "Piscina e terraço de convivência",
  "Área gourmet com churrasqueira",
  "Suíte principal com vista para a paisagem",
  "Sala de TV com jardim interno",
  "Escritório privativo",
  "Sauna com área de relaxamento",
  "Paisagismo tropical",
  "Acabamentos em pedra natural e madeira",
];

export default function CasaLagoaPrime() {
  const imovel = imoveis.find((item) => item.slug === "casa-lagoa-prime");

  if (!imovel) {
    throw new Error("Casa Lagoa Prime nao encontrada na base de imoveis.");
  }

  return (
    <main className="aurea-property min-h-screen bg-[#F5F2EC] text-[#171C1A]">
      <MotionEnhancer />
      <CabecalhoAurea />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10">
        <nav
          aria-label="Navegação estrutural"
          className="mb-14 text-[11px] uppercase tracking-[0.14em] text-[#827C72]"
        >
          <Link href="/" className="hover:text-[#171C1A]">
            Início
          </Link>
          <span className="mx-3">/</span>
          <Link href="/imoveis" className="hover:text-[#171C1A]">
            Coleção
          </Link>
          <span className="mx-3">/</span>
          <span className="text-[#171C1A]">Casa Lagoa Prime</span>
        </nav>

        <div
          data-reveal
          className="mb-12 flex flex-wrap items-end justify-between gap-8"
        >
          <div className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
              Edição 002 · Coleção Privada · Lagoa Santa, MG
            </p>

            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Casa Lagoa Prime
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#686C66]">
              Um refúgio tropical contemporâneo, onde a arquitetura
              valoriza a luz natural, as texturas orgânicas e a
              tranquilidade de viver em Lagoa Santa.
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

        <PainelAtendimento nomeImovel="Casa Lagoa Prime" preco={imovel.preco} />

        <GaleriaImovel
          fotos={fotos}
          nomeImovel="Casa Lagoa Prime"
          edicao="002"
        />

        <div className="aurea-editorial-band">
          <span>THE PRIVATE COLLECTION</span>
          <span className="aurea-editorial-symbol">✦</span>
          <span>TROPICAL CONTEMPORARY LIVING</span>
        </div>

        <section
          data-reveal
          className="grid gap-8 border-b border-[#171C1A]/15 py-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {caracteristicas.map((item) => (
            <div
              key={item.legenda}
              className="border-l border-[#C5AE86] pl-5"
            >
              <p className="font-serif text-4xl">
                {item.valor}
                {item.unidade && (
                  <span className="ml-1 text-base text-[#827C72]">
                    {item.unidade}
                  </span>
                )}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#77786F]">
                {item.legenda}
              </p>
            </div>
          ))}
        </section>

        <section
          data-reveal
          className="grid gap-14 border-b border-[#171C1A]/15 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28"
        >
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
              A propriedade
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Naturalmente extraordinária.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-9 text-[#5F635E]">
            <p>
              A Casa Lagoa Prime explora o equilíbrio entre formas
              horizontais, superfícies de pedra clara, madeira e
              transparência. Suas áreas de convivência se conectam
              ao terraço e ao paisagismo tropical.
            </p>
            <p>
              A piscina e a área gourmet convidam a encontros ao ar
              livre, enquanto a sala de TV e o escritório oferecem
              ambientes reservados para descanso e produtividade.
            </p>
            <p>
              Na ala íntima, quatro suítes privilegiam o conforto.
              A sauna e seus espaços de relaxamento completam
              a proposta de uma casa voltada ao bem-estar.
            </p>
          </div>
        </section>
      </div>

      <section
        aria-label="Experiência imersiva da Casa Lagoa Prime"
        className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-[#171C1A] text-white md:min-h-[680px]"
      >
        <Image
          src={`${base}/piscina.png`}
          alt="Piscina e terraço tropical da Casa Lagoa Prime"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101916]/85 via-[#101916]/45 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#E5CDA4]">
              O privilégio do essencial
            </p>
            <h2 className="mt-8 font-serif text-5xl leading-tight md:text-7xl">
              A natureza faz parte da arquitetura.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-8 text-white/85">
              Luz, vegetação, pedra e água criam uma experiência
              de morar onde o interior e o exterior se encontram.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <section
          data-reveal
          className="grid gap-14 border-b border-[#171C1A]/15 py-24 lg:grid-cols-2"
        >
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
              Os diferenciais
            </p>
            <h2 className="max-w-md font-serif text-4xl leading-tight md:text-5xl">
              Cada ambiente, uma nova perspectiva.
            </h2>
            <p className="mt-7 max-w-md leading-8 text-[#686C66]">
              Uma composição de materiais, espaços e paisagismo
              pensada para uma experiência residencial singular.
            </p>
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
          <div className="relative overflow-hidden bg-[#171C1A] px-8 py-16 text-white md:px-16 md:py-20">
            <div className="relative z-10 max-w-3xl">
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#C5AE86]">
                AUREA · Atendimento
              </p>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Descubra uma nova forma de viver.
              </h2>
              <p className="mt-7 max-w-xl leading-8 text-white/65">
                Explore mais propriedades e conheça o conceito
                da coleção AUREA Residences.
              </p>
              <Link
                href="/imoveis"
                className="mt-10 inline-flex border border-[#C5AE86] px-8 py-5 text-xs uppercase tracking-[0.2em] text-[#E1CFAD] transition hover:bg-[#C5AE86] hover:text-[#171C1A]"
              >
                Explorar a coleção ↗
              </Link>
            </div>
          </div>
        </section>

        <p className="pb-12 text-center text-xs leading-6 text-[#827C72]">
          AUREA Residences — projeto demonstrativo de portfólio.
          Propriedades, fotografias e valores fictícios, sem oferta comercial real.
        </p>
      </div>
    </main>
  );
}

