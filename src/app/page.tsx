import CabecalhoAurea from "@/components/layout/CabecalhoAurea";
import Image from "next/image";
import Link from "next/link";
import { imoveis, formatarPreco } from "@/data/imoveis";

export default function Home() {
  const slugsDestaque = [
    "villa-serra-dourada",
    "maison-cote-verte",
    "reserva-das-acacias",
    "penthouse-mirante-do-vale",
  ];

  const destaques = slugsDestaque
    .map((slug) => imoveis.find((item) => item.slug === slug))
    .filter(
      (item): item is (typeof imoveis)[number] =>
        item !== undefined && item.imagem !== null
    );

  const lancamento = imoveis.find(
    (item) => item.slug === "patio-das-veredas"
  );

  if (destaques.length !== 4 || !lancamento) {
    throw new Error("Dados da vitrine AUREA incompletos.");
  }
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

      <section
        id="colecao"
        className="relative isolate overflow-hidden bg-[#F6F1E8] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[url('/brand/aurea/fundo-colecao.webp')] bg-cover bg-center opacity-35"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
                AUREA Private Collection
              </p>

              <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                Arquiteturas que contam histórias.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-[#666B65]">
                Do litoral às montanhas, uma coleção de residências
                onde cada detalhe revela uma forma singular de viver.
              </p>
            </div>

            <span className="text-xs uppercase tracking-[0.2em] text-[#777]">
              Uma seleção singular
            </span>
          </div>

          <div className="grid gap-x-8 gap-y-14 lg:grid-cols-12">
            {destaques.map((imovel, index) => (
              <Link
                key={imovel.slug}
                href={`/imoveis/${imovel.slug}`}
                className={`group block ${
                  index === 0 || index === 3
                    ? "lg:col-span-7"
                    : "lg:col-span-5"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#E8E4DC]">
                  <Image
                    src={imovel.imagem!}
                    alt={`Arquitetura de ${imovel.nome}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 bg-[#F5F2EC] px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-[#171C1A]">
                    AUREA Collection
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-xl text-white transition group-hover:bg-white group-hover:text-[#171C1A]"
                  >
                    ↗
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-[#947C58]">
                      {imovel.cidade} · {imovel.estado}
                    </p>

                    <h3 className="font-serif text-3xl md:text-4xl">
                      {imovel.nome}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#777]">
                      {imovel.descricao}
                    </p>
                  </div>

                  <p className="font-serif text-2xl">
                    {formatarPreco(imovel.preco)}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex flex-col gap-6 border-t border-[#171C1A]/15 pt-10 md:flex-row md:items-center md:justify-between">
            <p className="max-w-lg text-sm leading-7 text-[#777]">
              Descubra as seis propriedades da coleção AUREA.
            </p>

            <Link
              href="/imoveis"
              className="inline-flex items-center gap-10 border-b border-[#171C1A] pb-3 text-xs uppercase tracking-[0.2em] transition hover:text-[#947C58]"
            >
              Explorar coleção completa
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="lancamento"
        className="overflow-hidden bg-[#203D35] text-[#F5F2EC]"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-[670px]">
            <Image
              src="/imoveis/patio-das-veredas/fachada.webp"
              alt="Fachada do empreendimento fictício Pátio das Veredas"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <span className="absolute left-6 top-6 bg-[#C5AE86] px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[#171C1A]">
              Novo lançamento
            </span>
          </div>

          <div className="flex flex-col justify-center px-7 py-20 md:px-14 lg:px-16">
            <p className="text-xs uppercase tracking-[0.3em] text-[#D5B98A]">
              Edição 006 · Vespasiano, MG
            </p>

            <h2 className="mt-7 max-w-xl font-serif text-5xl leading-tight md:text-6xl">
              Pátio das Veredas.
              <span className="block italic text-[#D5B98A]">
                Alma brasileira.
              </span>
            </h2>

            <p className="mt-8 max-w-lg text-base leading-8 text-white/75">
              Um lançamento inspirado nas brasilidades.
              Cobogós, madeira, vegetação e arquitetura autoral
              em um apartamento de alto padrão.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4 border-y border-white/20 py-7">
              <div>
                <p className="font-serif text-3xl">{lancamento.area}</p>
                <p className="mt-2 text-xs text-white/60">m² privativos</p>
              </div>

              <div>
                <p className="font-serif text-3xl">
                  {String(lancamento.suites).padStart(2, "0")}
                </p>
                <p className="mt-2 text-xs text-white/60">Suítes</p>
              </div>

              <div>
                <p className="font-serif text-3xl">
                  {String(lancamento.vagas).padStart(2, "0")}
                </p>
                <p className="mt-2 text-xs text-white/60">Vagas</p>
              </div>
            </div>

            <p className="mt-8 font-serif text-3xl">
              {formatarPreco(lancamento.preco)}
            </p>

            <Link
              href={`/imoveis/${lancamento.slug}`}
              className="mt-10 inline-flex w-fit items-center gap-10 border border-[#C5AE86] px-8 py-5 text-xs uppercase tracking-[0.2em] text-[#E1CFAD] transition hover:bg-[#C5AE86] hover:text-[#171C1A]"
            >
              Conhecer lançamento
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
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




