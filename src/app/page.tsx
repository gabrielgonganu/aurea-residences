import CabecalhoAurea from "@/components/layout/CabecalhoAurea";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F0E9] text-[#171C1A]">
      <CabecalhoAurea />

      <section className="relative flex min-h-[850px] items-center overflow-hidden bg-[#171C1A] text-white">
        <Image
          src="/imoveis/villa-serra-dourada/piscina.webp"
          alt="Piscina de borda infinita da Villa Serra Dourada"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#D6BE96]">
              Curadoria imobiliária de alto padrão
            </p>

            <h1 className="font-serif text-5xl leading-[1.12] md:text-7xl lg:text-8xl">
              O extraordinário
              <br />
              tem endereço.
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-white/80 md:text-lg">
              Residências excepcionais, arquitetura singular e
              experiências que transformam a maneira de viver.
            </p>

            <Link
              href="#colecao"
              className="mt-12 inline-flex border border-white/70 px-9 py-5 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-[#171C1A]"
            >
              Explorar propriedades
              <span className="ml-8">↗</span>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 z-10 text-[10px] uppercase tracking-[0.25em] text-white/70 lg:left-10">
          Nova Lima — Minas Gerais
        </div>

        <div className="absolute bottom-10 right-6 z-10 text-[10px] uppercase tracking-[0.25em] text-white/70 lg:right-10">
          01 / 06
        </div>
      </section>

      <section id="sobre" className="px-6 py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-24">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
              A essência AUREA
            </p>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Mais do que imóveis.
              <br />
              Lugares para viver.
            </h2>
          </div>

          <div className="flex items-center">
            <p className="max-w-lg text-lg leading-9 text-[#5D615C]">
              Acreditamos que uma residência extraordinária
              transcende a arquitetura. É o encontro entre
              localização, design e um estilo de vida singular.
              Nossa coleção reúne propriedades cuidadosamente
              selecionadas no Sudeste brasileiro.
            </p>
          </div>
        </div>
      </section>

      <section id="colecao" className="bg-white px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
                Nossa coleção
              </p>
              <h2 className="font-serif text-4xl md:text-6xl">
                Propriedades exclusivas
              </h2>
            </div>

            <span className="text-xs uppercase tracking-[0.2em] text-[#777]">
              Uma seleção singular
            </span>
          </div>

          <Link href="/imoveis/villa-serra-dourada" className="group block max-w-4xl">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E4DC]">
              <Image
                src="/imoveis/villa-serra-dourada/entrada-varanda.webp"
                alt="Arquitetura da Villa Serra Dourada"
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute left-6 top-6 bg-white px-5 py-3 text-[10px] uppercase tracking-[0.2em]">
                Propriedade em destaque
              </span>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-6 pt-8">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#92836B]">
                  Nova Lima · Minas Gerais
                </p>
                <h3 className="font-serif text-4xl">
                  Villa Serra Dourada
                </h3>
                <p className="mt-4 text-sm text-[#777]">
                  Residência contemporânea com vista para as montanhas
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="mb-2 text-xs uppercase tracking-widest text-[#777]">
                  Valor do imóvel
                </p>
                <p className="font-serif text-3xl">
                  R$ 8.950.000
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <footer
        id="contato"
        className="bg-[#171C1A] px-6 py-16 text-white lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-8">
          <div>
            <p className="font-serif text-4xl tracking-[0.2em]">
              AUREA
            </p>
            <p className="mt-2 text-[10px] tracking-[0.3em] text-white/50">
              RESIDENCES
            </p>
          </div>

          <div className="max-w-sm text-sm leading-7 text-white/60">
            Projeto demonstrativo de portfólio.
            Marca, propriedades e valores inteiramente fictícios.
          </div>
        </div>
      </footer>
    </main>
  );
}




