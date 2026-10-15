import ExperienciaImersiva from "@/components/imoveis/ExperienciaImersiva";
import PainelAtendimento from "@/components/imoveis/PainelAtendimento";
import MotionEnhancer from "@/components/ui/MotionEnhancer";
import type { Metadata } from "next";
import Link from "next/link";
import GaleriaImovel from "@/components/imoveis/GaleriaImovel";

export const metadata: Metadata = {
  title: "Villa Serra Dourada | AUREA Residences",
  description:
    "Conheça o conceito da Villa Serra Dourada, residência contemporânea de alto padrão em Nova Lima, Minas Gerais.",
};

const base = "/imoveis/villa-serra-dourada";

const fotos = [
  { src: `${base}/entrada-varanda.png`, ambiente: "Arquitetura", alt: "Fachada contemporânea da Villa Serra Dourada" },
  { src: `${base}/piscina.png`, ambiente: "Piscina", alt: "Piscina de borda infinita com vista para as montanhas" },
  { src: `${base}/sala-estar.png`, ambiente: "Living", alt: "Sala de estar com pé-direito duplo" },
  { src: `${base}/cozinha.png`, ambiente: "Cozinha", alt: "Cozinha gourmet com ilha central" },
  { src: `${base}/quarto.png`, ambiente: "Suíte principal", alt: "Suíte principal com vista panorâmica" },
  { src: `${base}/banheiro.png`, ambiente: "Banheiro", alt: "Banheiro principal revestido em pedra natural" },
  { src: `${base}/escritorio.png`, ambiente: "Escritório", alt: "Home office privativo com vista para as montanhas" },
  { src: `${base}/garagem.png`, ambiente: "Garagem", alt: "Garagem de alto padrão da residência" },
];

const caracteristicas = [
  { numero: "620", unidade: "m²", descricao: "Área construída" },
  { numero: "1.450", unidade: "m²", descricao: "Área do terreno" },
  { numero: "05", unidade: "", descricao: "Suítes" },
  { numero: "07", unidade: "", descricao: "Banheiros" },
  { numero: "06", unidade: "", descricao: "Vagas" },
];

const diferenciais = [
  "Vista panorâmica para as montanhas",
  "Piscina de borda infinita",
  "Sala com pé-direito duplo",
  "Varanda gourmet integrada",
  "Home office privativo",
  "Paisagismo contemporâneo",
  "Acabamentos em pedra natural",
  "Grandes superfícies envidraçadas",
];

export default function VillaSerraDourada() {
  return (
    <main className="aurea-property min-h-screen bg-[#F5F2EC] text-[#171C1A]">
      <MotionEnhancer />
      <header className="border-b border-[#171C1A]/10 bg-[#171C1A] text-white">
        <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-5 px-6 lg:px-10">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-3xl tracking-[0.22em]">
              AUREA
            </span>
            <span className="mt-1 text-[9px] tracking-[0.4em]">
              RESIDENCES
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-[10px] uppercase tracking-[0.15em] md:gap-10">
            <Link href="/#colecao" className="hover:text-[#C5AE86]">
              Coleção
            </Link>
            <Link href="/#sobre" className="hidden hover:text-[#C5AE86] sm:block">
              Nossa essência
            </Link>
            <Link href="#contato" className="hover:text-[#C5AE86]">
              Contato
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10">
        <nav
          aria-label="Navegação estrutural"
          className="mb-14 text-[11px] uppercase tracking-[0.14em] text-[#827C72]"
        >
          <Link href="/" className="hover:text-[#171C1A]">
            Início
          </Link>
          <span className="mx-3">/</span>
          <Link href="/#colecao" className="hover:text-[#171C1A]">
            Coleção
          </Link>
          <span className="mx-3">/</span>
          <span className="text-[#171C1A]">Villa Serra Dourada</span>
        </nav>

        <div data-reveal className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
              Edição 001 · Coleção Privada · Nova Lima, MG
            </p>

            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Villa Serra Dourada
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#686C66]">
              Uma expressão singular da arquitetura contemporânea,
              em perfeita harmonia com as montanhas de Minas Gerais.
            </p>
          </div>

          <div className="pb-1 lg:text-right">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#827C72]">
              Valor do imóvel
            </p>
            <p className="font-serif text-3xl md:text-4xl">
              R$ 8.950.000
            </p>
          </div>
        </div>

        <GaleriaImovel fotos={fotos} />
        <ExperienciaImersiva />
        <PainelAtendimento />

        {/* Assinatura editorial */}
        <div className="aurea-editorial-band">
          <span>THE PRIVATE COLLECTION</span>
          <span className="aurea-editorial-symbol">✦</span>
          <span>ARQUITETURA & EXCLUSIVIDADE</span>
        </div>

        

        <section data-reveal className="grid gap-10 border-b border-[#171C1A]/15 py-16 md:grid-cols-5">
          {caracteristicas.map((item) => (
            <div key={item.descricao} className="border-l border-[#C5AE86] pl-5">
              <p className="font-serif text-3xl md:text-4xl">
                {item.numero}
                {item.unidade && (
                  <span className="ml-1 text-base text-[#827C72]">
                    {item.unidade}
                  </span>
                )}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[#77786F]">
                {item.descricao}
              </p>
            </div>
          ))}
        </section>

        <section data-reveal className="grid gap-14 border-b border-[#171C1A]/15 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
              A propriedade
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Um novo olhar sobre o extraordinário.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-9 text-[#5F635E]">
            <p>
              Entre volumes de pedra natural, madeira e grandes
              superfícies de vidro, a Villa Serra Dourada revela uma
              arquitetura cuidadosamente integrada à paisagem
              montanhosa de Nova Lima.
            </p>
            <p>
              A sala com pé-direito duplo se conecta à varanda
              gourmet e ao deck da piscina de borda infinita,
              formando espaços de convivência que privilegiam a
              luz natural, a amplitude e a contemplação.
            </p>
            <p>
              Na ala íntima, cinco suítes oferecem conforto e
              privacidade. Um escritório reservado, áreas sociais
              generosas e jardins de inspiração contemporânea
              completam a experiência desta residência.
            </p>
          </div>
        </section>

        <section data-reveal className="grid gap-14 border-b border-[#171C1A]/15 py-24 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
              Detalhes que fazem a diferença
            </p>
            <h2 className="max-w-md font-serif text-4xl leading-tight md:text-5xl">
              Exclusividade em cada ambiente.
            </h2>
            <p className="mt-7 max-w-md leading-8 text-[#686C66]">
              Cada escolha arquitetônica valoriza a integração com
              a natureza, a sofisticação dos materiais e o prazer
              de viver bem.
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
            <div className="absolute right-0 top-0 h-80 w-80 translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C5AE86]/20" />
            <div className="relative z-10 max-w-3xl">
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#C5AE86]">
                Atendimento AUREA
              </p>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">
                Sua próxima história começa aqui.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/65">
                Descubra mais sobre a arquitetura, os espaços e
                os diferenciais desta propriedade exclusiva.
              </p>
              <Link
                href="/#contato"
                className="mt-10 inline-flex border border-[#C5AE86] px-8 py-5 text-xs uppercase tracking-[0.2em] text-[#E1CFAD] transition hover:bg-[#C5AE86] hover:text-[#171C1A]"
              >
                Conheça a AUREA ↗
              </Link>
            </div>
          </div>
        </section>

        <p className="text-center text-xs leading-6 text-[#827C72]">
          AUREA Residences — projeto de portfólio.
          Propriedades e valores fictícios, sem oferta comercial real.
        </p>
      </div>
    </main>
  );
}




