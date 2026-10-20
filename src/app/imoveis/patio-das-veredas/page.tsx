import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CabecalhoAurea from "@/components/layout/CabecalhoAurea";
import GaleriaImovel from "@/components/imoveis/GaleriaImovel";
import PainelAtendimento from "@/components/imoveis/PainelAtendimento";
import MotionEnhancer from "@/components/ui/MotionEnhancer";
import { formatarPreco, imoveis } from "@/data/imoveis";

export const metadata: Metadata = {
  title: "Pátio das Veredas | Novo Lançamento | AUREA Residences",
  description:
    "Conheça o conceito fictício Pátio das Veredas: apartamento de alto luxo com 325 m², quatro suítes e arquitetura brasileira em Vespasiano, MG.",

  openGraph: {
    type: "website",
    images: [{ url: "/imoveis/patio-das-veredas/fachada.webp", alt: "patio das veredas — AUREA Residences" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/imoveis/patio-das-veredas/fachada.webp"],
  },
};

const base = "/imoveis/patio-das-veredas";

const fotos = [
  {
    src: `${base}/fachada.webp`,
    ambiente: "Fachada do empreendimento",
    alt: "Edifício residencial brasileiro com cobogós, jardins e varandas",
  },
  {
    src: `${base}/sala-estar.webp`,
    ambiente: "Living integrado",
    alt: "Sala de estar com sofá verde, madeira e arte brasileira",
  },
  {
    src: `${base}/cozinha.webp`,
    ambiente: "Cozinha",
    alt: "Cozinha com marcenaria natural e revestimentos verde-oliva",
  },
  {
    src: `${base}/suite.webp`,
    ambiente: "Suíte principal",
    alt: "Suíte ampla com texturas naturais e decoração brasileira",
  },
  {
    src: `${base}/patio.webp`,
    ambiente: "Pátio de convivência",
    alt: "Área comum residencial com vegetação e espaços de descanso",
  },
  {
    src: `${base}/academia.webp`,
    ambiente: "Academia",
    alt: "Academia compartilhada com equipamentos e vista para jardins",
  },
  {
    src: `${base}/banheiros.webp`,
    ambiente: "Banheiros das áreas comuns",
    alt: "Banheiros compartilhados com pedra, madeira e cobogós",
  },
];

const caracteristicas = [
  "Arquitetura autoral brasileira",
  "Cobogós e materiais naturais",
  "325 m² privativos",
  "Quatro suítes",
  "Quatro vagas de garagem",
  "Living integrado",
  "Cozinha contemporânea",
  "Pátio de convivência",
  "Academia de uso comum",
  "Paisagismo tropical",
];

export default function PatioDasVeredas() {
  const imovel = imoveis.find((item) => item.slug === "patio-das-veredas");

  if (!imovel) {
    throw new Error("Pátio das Veredas não encontrado no catálogo.");
  }

  return (
    <main className="aurea-property min-h-screen bg-[#F5F2EC] text-[#171C1A]">
      <MotionEnhancer />
      <CabecalhoAurea />

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-10 lg:px-10">
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
          <span className="text-[#171C1A]">Pátio das Veredas</span>
        </nav>

        <section data-reveal className="mb-12">
          <div className="mb-7 flex flex-wrap items-center gap-4">
            <span className="border border-[#947C58] px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#947C58]">
              Novo lançamento
            </span>
            <span className="text-xs uppercase tracking-[0.22em] text-[#77786F]">
              Edição 006 · Vespasiano, MG
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-3xl">
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#947C58]">
                AUREA · Brasileiridades
              </p>
              <h1 className="font-serif text-5xl leading-tight md:text-7xl">
                Pátio das Veredas
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#686C66]">
                Um novo jeito de viver o extraordinário.
                A essência brasileira traduzida em arquitetura,
                materiais naturais e espaços para criar memórias.
              </p>
            </div>

            <div className="pb-1 lg:text-right">
              <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#827C72]">
                Valor de referência
              </p>
              <p className="font-serif text-3xl md:text-4xl">
                {formatarPreco(imovel.preco)}
              </p>
            </div>
          </div>
        </section>

        <PainelAtendimento
          nomeImovel={imovel.nome}
          preco={imovel.preco}
        />

        <GaleriaImovel
          fotos={fotos}
          nomeImovel="Pátio das Veredas"
          edicao="006"
        />

        <section
          data-reveal
          className="grid gap-8 border-b border-[#171C1A]/15 py-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { valor: "325", unidade: "m²", legenda: "Área privativa" },
            { valor: "04", unidade: "", legenda: "Suítes" },
            { valor: "04", unidade: "", legenda: "Vagas" },
            { valor: "006", unidade: "", legenda: "Edição AUREA" },
          ].map((item) => (
            <div key={item.legenda} className="border-l border-[#B29A71] pl-5">
              <p className="font-serif text-4xl">
                {item.valor}
                {item.unidade && (
                  <span className="ml-1 text-base text-[#827C72]">
                    {item.unidade}
                  </span>
                )}
              </p>
              <p className="mt-3 text-xs uppercase tracking-wider text-[#77786F]">
                {item.legenda}
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
              O conceito
            </p>
            <h2 className="max-w-xl font-serif text-4xl leading-tight md:text-5xl">
              O Brasil como inspiração. O viver como arte.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-9 text-[#5F635E]">
            <p>
              O Pátio das Veredas nasce da riqueza da arquitetura brasileira:
              a expressividade dos cobogós, o calor da madeira, a cerâmica,
              os tons terrosos e a presença da natureza.
            </p>
            <p>
              Um projeto conceitual que celebra a identidade mineira,
              a criatividade nacional e a elegância de ambientes
              acolhedores, sem abrir mão do alto padrão.
            </p>
          </div>
        </section>
      </div>

      <section className="bg-[#203D35] py-20 text-[#F5F2EC] md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <div data-reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#D5B98A]">
              O apartamento decorado
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Elegância com alma brasileira.
            </h2>
            <p className="mt-8 max-w-lg leading-8 text-white/75">
              O living integra estar, jantar e cozinha em uma composição
              de texturas naturais, marcenaria quente, arte e verde-oliva.
              Um apartamento de 325 m² pensado para receber e viver bem.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden md:min-h-[520px]">
            <Image
              src={`${base}/sala-estar.webp`}
              alt="Living decorado do Pátio das Veredas"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div data-reveal className="mb-12 max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#947C58]">
            Convivência e bem-estar
          </p>
          <h2 className="font-serif text-4xl leading-tight md:text-6xl">
            Mais do que morar. Pertencer.
          </h2>
          <p className="mt-6 leading-8 text-[#686C66]">
            O empreendimento contempla espaços compartilhados
            que ampliam a experiência de viver: um pátio de convivência,
            academia e banheiros de apoio às áreas comuns.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <article data-reveal className="group">
            <div className="relative h-[340px] overflow-hidden md:h-[470px]">
              <Image
                src={`${base}/patio.webp`}
                alt="Pátio de convivência do empreendimento"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#947C58]">
              01 · Áreas comuns
            </p>
            <h3 className="mt-2 font-serif text-3xl">Pátio de convivência</h3>
            <p className="mt-3 leading-7 text-[#686C66]">
              Paisagismo tropical, mobiliário aconchegante e espaços
              para encontros entre moradores.
            </p>
          </article>

          <article data-reveal className="group">
            <div className="relative h-[340px] overflow-hidden md:h-[470px]">
              <Image
                src={`${base}/academia.webp`}
                alt="Academia de uso compartilhado"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[#947C58]">
              02 · Bem-estar
            </p>
            <h3 className="mt-2 font-serif text-3xl">Academia</h3>
            <p className="mt-3 leading-7 text-[#686C66]">
              Um ambiente contemporâneo com equipamentos
              para integrar movimento e qualidade de vida.
            </p>
          </article>
        </div>

        <article
          data-reveal
          className="mt-14 grid gap-8 border-t border-[#171C1A]/15 pt-14 lg:grid-cols-2 lg:items-center"
        >
          <div className="relative min-h-[300px] overflow-hidden md:min-h-[390px]">
            <Image
              src={`${base}/banheiros.webp`}
              alt="Banheiros de apoio às áreas comuns"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="lg:pl-12">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#947C58]">
              03 · Apoio e conforto
            </p>
            <h3 className="font-serif text-4xl">Banheiros de uso comum</h3>
            <p className="mt-6 leading-8 text-[#686C66]">
              A mesma linguagem de materiais naturais e atenção
              aos detalhes se estende aos espaços de apoio,
              criando uma identidade contínua no empreendimento.
            </p>
          </div>
        </article>
      </section>

      <section
        aria-label="Experiência arquitetônica Brasileiridades"
        className="relative isolate flex min-h-[560px] items-center overflow-hidden text-white md:min-h-[700px]"
      >
        <Image
          src={`${base}/fachada.webp`}
          alt="Fachada do Pátio das Veredas ao entardecer"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102820]/90 via-[#102820]/50 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#E3C99E]">
              AUREA · Novo lançamento
            </p>
            <h2 className="mt-8 font-serif text-5xl leading-tight md:text-7xl">
              Uma nova história começa em Vespasiano.
            </h2>
            <p className="mt-8 max-w-lg leading-8 text-white/85">
              Arquitetura, natureza e identidade brasileira
              reunidas em um conceito de residência singular.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <section data-reveal className="grid gap-12 py-24 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#947C58]">
              Diferenciais
            </p>
            <h2 className="max-w-lg font-serif text-4xl leading-tight md:text-5xl">
              Cada detalhe conta uma história.
            </h2>
          </div>
          <div className="grid gap-x-6 sm:grid-cols-2">
            {caracteristicas.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 border-b border-[#171C1A]/10 py-5"
              >
                <span className="text-xs text-[#947C58]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-6">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section data-reveal className="pb-20">
          <div className="bg-[#203D35] px-8 py-16 text-white md:px-16 md:py-20">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#D5B98A]">
              AUREA Residences
            </p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Descubra a coleção completa.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-white/70">
              Seis propriedades, diferentes expressões de arquitetura
              e uma mesma busca por experiências memoráveis.
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
          Empreendimento, imagens, características e preços fictícios.
          Não representa uma oferta imobiliária real.
        </p>
      </div>
    </main>
  );
}
