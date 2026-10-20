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

            <section id="sobre" className="overflow-hidden bg-[#F3F0E9]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-9">
              <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#947C58]">
                O universo AUREA / Nossa essência
              </p>
              <h2 className="font-serif text-5xl leading-[1.08] md:text-7xl">
                A arquitetura como
                <span className="block italic text-[#927B5C]">
                  expressão de vida.
                </span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-8 text-[#686D65] lg:col-span-3">
              Um olhar sobre os lugares que habitamos
              e as histórias que escolhemos viver.
            </p>
          </div>

          <div id="manifesto-aurea" className="grid gap-0 lg:grid-cols-12">
            <div className="relative min-h-[390px] overflow-hidden lg:col-span-7 lg:min-h-[650px]">
              <Image
                src="/imoveis/villa-serra-dourada/entrada-varanda.webp"
                alt="Arquitetura e paisagem da Villa Serra Dourada"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-8 text-white md:p-12">
                <p className="text-xs uppercase tracking-[0.24em] text-white/75">
                  Arquitetura / Natureza / Pertencimento
                </p>
                <p className="mt-4 max-w-lg font-serif text-3xl leading-snug md:text-4xl">
                  O extraordinário está nos detalhes.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-[#24372F] px-8 py-14 text-[#F5F2EC] md:px-12 md:py-16 lg:col-span-5">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C5AE86]">
                  Nosso manifesto
                </p>
                <h3 className="mt-10 font-serif text-3xl leading-snug md:text-4xl">
                  Não acreditamos em uma única definição de luxo.
                </h3>
                <div className="mt-9 space-y-6 text-sm leading-8 text-white/75">
                  <p>
                    Para alguns, ele é a vista de uma montanha.
                    Para outros, a brisa do mar, a energia da cidade
                    ou a textura acolhedora de uma casa brasileira.
                  </p>
                  <p>
                    A AUREA reúne diferentes expressões da arquitetura
                    em uma coleção onde cada residência revela
                    uma identidade e uma atmosfera próprias.
                  </p>
                  <p>
                    Mais do que apresentar espaços, queremos
                    despertar novas maneiras de imaginar o viver.
                  </p>
                </div>
              </div>

              <div className="mt-16 border-t border-white/20 pt-8">
                <span className="font-serif text-3xl tracking-[0.2em]">
                  AUREA
                </span>
                <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[#C5AE86]">
                  Residences / Private Collection
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 border-t border-[#171C1A]/15 pt-12">
            <div className="grid gap-12 lg:grid-cols-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#92744F]">
                  Nossa visão
                </p>
                <h3 className="mt-5 font-serif text-4xl">
                  O que nos inspira.
                </h3>
              </div>

              {[
                {
                  numero: "01",
                  titulo: "Arquitetura singular",
                  texto: "Cada projeto possui uma linguagem própria. Valorizamos a diversidade de formas, materiais e experiências.",
                },
                {
                  numero: "02",
                  titulo: "Conexão com o lugar",
                  texto: "Da serra ao litoral, a paisagem e a cultura local participam da identidade de cada residência.",
                },
                {
                  numero: "03",
                  titulo: "Experiência de viver",
                  texto: "Pensamos além da metragem: luz, conforto, convivência e os momentos que transformam espaços em lar.",
                },
              ].map((pilar) => (
                <div
                  key={pilar.numero}
                  className="border-l border-[#C5AE86] pl-6"
                >
                  <span className="text-xs tracking-[0.2em] text-[#92744F]">
                    {pilar.numero} / 03
                  </span>
                  <h4 className="mt-6 font-serif text-2xl leading-snug">
                    {pilar.titulo}
                  </h4>
                  <p className="mt-5 text-sm leading-8 text-[#686D65]">
                    {pilar.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-between gap-8 border-t border-[#171C1A]/15 pt-8">
            <p className="max-w-xl text-xs leading-6 text-[#77786F]">
              AUREA Residences é um projeto conceitual de portfólio.
              A marca, os imóveis e sua narrativa institucional
              são fictícios.
            </p>
            <Link
              href="/imoveis"
              className="inline-flex items-center gap-8 border-b border-[#171C1A] pb-3 text-xs uppercase tracking-[0.18em] transition hover:text-[#92744F]"
            >
              Descobrir nossa coleção
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

            <section id="viver-aurea" aria-labelledby="viver-aurea-titulo" className="bg-[#F3F0E9] text-[#171C1A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-14 grid items-end gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#947C58]">A vida acontece aqui / AUREA</p>
              <h2 id="viver-aurea-titulo" className="max-w-4xl font-serif text-5xl leading-[1.09] md:text-7xl">
                Os melhores lugares guardam <em className="text-[#927B5C]">histórias.</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-8 text-[#666B65] lg:col-span-4">
              Uma casa vai além da arquitetura. É o espaço das descobertas, dos afetos, dos encontros e das tradições que levamos conosco.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-7">
            {[
              { id: "01", src: "/brand/aurea/viver/infancia-piscina.webp", title: "Liberdade para crescer", subtitle: "Infância, natureza e brincadeiras sem hora para acabar.", span: "lg:col-span-7", aspect: "aspect-[5/4]" },
              { id: "02", src: "/brand/aurea/viver/afetos-cafe.webp", title: "A beleza dos pequenos gestos", subtitle: "O cuidado que transforma manhãs comuns em lembranças.", span: "lg:col-span-5", aspect: "aspect-[5/4]" },
              { id: "03", src: "/brand/aurea/viver/encontros-festa.webp", title: "Celebrar estar junto", subtitle: "As amizades que fazem da sala o melhor lugar da casa.", span: "lg:col-span-5", aspect: "aspect-[5/4]" },
              { id: "04", src: "/brand/aurea/viver/jantar-familia.webp", title: "Sempre há lugar à mesa", subtitle: "Receitas, histórias e encontros entre gerações.", span: "lg:col-span-7", aspect: "aspect-[5/4]" },
            ].map((momento) => (
              <article key={momento.id} className={`group min-w-0 ${momento.span}`}>
                <div className={`relative overflow-hidden bg-[#D8D2C7] ${momento.aspect}`}>
                  <Image src={momento.src} alt={momento.subtitle} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 60vw" className="object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-[1.035]" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 border border-white/60 bg-[#F5F2EC]/95 px-4 py-2 text-[10px] tracking-[0.19em] text-[#171C1A]">MOMENTO {momento.id}</span>
                </div>
                <div className="mt-5 border-b border-[#171C1A]/15 pb-7">
                  <h3 className="font-serif text-2xl md:text-3xl">{momento.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-7 text-[#666B65]">{momento.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6">
            <p className="max-w-lg text-xs leading-6 text-[#77786F]">Cenas e personagens ilustrativos criados para o projeto conceitual AUREA. Não representam clientes ou propriedades reais.</p>
            <Link href="/imoveis" className="inline-flex items-center gap-8 border-b border-[#171C1A] pb-3 text-xs uppercase tracking-[0.18em] transition hover:text-[#92744F]">Descobrir espaços para viver <span aria-hidden="true">↗</span></Link>
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

      <section
        id="pessoas-experiencias"
        className="overflow-hidden bg-[#171C1A] text-[#F5F2EC]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid items-end gap-10 border-b border-white/20 pb-14 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="mb-7 text-xs uppercase tracking-[0.3em] text-[#C5AE86]">
                Pessoas &amp; experiências / AUREA
              </p>
              <h2 className="font-serif text-5xl leading-[1.08] md:text-7xl">
                O olhar que transforma
                <span className="block italic text-[#C5AE86]"> espaços em histórias.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-8 text-white/65 lg:col-span-4">
              Uma marca imaginada a partir de encontros: entre arquitetura,
              identidade, paisagem e pessoas.
            </p>
          </div>

          <div className="grid gap-8 pt-12 lg:grid-cols-12">
            <div className="relative min-h-[390px] overflow-hidden lg:col-span-7 lg:min-h-[590px]">
              <Image
                src="/imoveis/villa-serra-dourada/entrada-varanda.webp"
                alt="Arquitetura da Villa Serra Dourada, imagem do acervo conceitual AUREA"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <p className="text-xs uppercase tracking-[0.3em] text-[#E4D2B1]">
                  A arte da curadoria
                </p>
                <p className="mt-4 max-w-md font-serif text-3xl leading-snug md:text-4xl">
                  Cada escolha começa com uma forma de enxergar.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between border border-white/20 p-8 md:p-12 lg:col-span-5">
              <div>
                <p className="text-xs uppercase tracking-[0.27em] text-[#C5AE86]">
                  Equipe conceitual
                </p>
                <h3 className="mt-7 font-serif text-4xl leading-tight">
                  Diferentes talentos. Uma visão singular.
                </h3>
                <p className="mt-6 text-sm leading-8 text-white/65">
                  Para demonstrar como uma marca imobiliária premium poderia
                  se apresentar, imaginamos duas frentes complementares de atuação.
                </p>
              </div>
              <div className="mt-10 space-y-0">
                <div className="border-t border-white/20 py-7">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[#C5AE86]">01 / Direção de curadoria</p>
                  <p className="font-serif text-2xl">Arquitetura &amp; identidade</p>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Seleção de espaços com personalidade, contexto e valor estético.
                  </p>
                </div>
                <div className="border-t border-white/20 py-7">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[#C5AE86]">02 / Experiência residencial</p>
                  <p className="font-serif text-2xl">Escuta &amp; descoberta</p>
                  <p className="mt-3 text-sm leading-7 text-white/60">
                    Uma jornada pensada para explorar possibilidades com clareza.
                  </p>
                </div>
              </div>
              <p className="border-t border-white/20 pt-5 text-xs leading-6 text-white/50">
                Funções ilustrativas de uma equipe fictícia. Não representam profissionais reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="historias-de-viver"
        className="bg-[#F2ECE2] px-6 py-24 text-[#171C1A] lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#92744F]">
                Histórias de viver / Exemplos narrativos
              </p>
              <h2 className="max-w-3xl font-serif text-5xl leading-tight md:text-6xl">
                A casa certa é aquela que faz sentido para você.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-[#6B6A62]">
              Três perspectivas imaginadas para ilustrar necessidades
              distintas de quem procura um novo lugar.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                categoria: "01 / Refúgio",
                titulo: "Uma vida mais perto da natureza",
                texto: "Procurar silêncio, verde e tempo para estar junto pode mudar completamente o significado de morar.",
                origem: "Cenário ilustrativo / Serra",
              },
              {
                categoria: "02 / Movimento",
                titulo: "A cidade como extensão de casa",
                texto: "Para algumas pessoas, morar bem é ter cultura, encontros e possibilidades a poucos passos.",
                origem: "Cenário ilustrativo / Cidade",
              },
              {
                categoria: "03 / Pertencimento",
                titulo: "Um espaço que traduz identidade",
                texto: "Materiais, luz e memória afetiva transformam arquitetura em uma experiência profundamente pessoal.",
                origem: "Cenário ilustrativo / Brasilidades",
              },
            ].map((historia) => (
              <article
                key={historia.categoria}
                className="flex min-h-[330px] flex-col justify-between border border-[#171C1A]/15 bg-[#F9F6F0] p-8 transition-colors duration-300 hover:bg-white md:p-10"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#92744F]">
                    {historia.categoria}
                  </p>
                  <h3 className="mt-9 font-serif text-3xl leading-snug">
                    {historia.titulo}
                  </h3>
                  <p className="mt-6 text-sm leading-8 text-[#666B65]">
                    {historia.texto}
                  </p>
                </div>
                <p className="mt-12 border-t border-[#171C1A]/15 pt-5 text-[11px] uppercase tracking-[0.16em] text-[#8A8174]">
                  {historia.origem}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-[#746E64]">
            Conteúdo demonstrativo e fictício. Estes relatos são cenários criativos,
            não depoimentos ou avaliações de clientes reais.
          </p>
        </div>
      </section>

      <section className="bg-[#E6E0D5] px-6 py-24 text-[#171C1A] lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#92744F]">
                Uma jornada, muitas possibilidades
              </p>
              <h2 className="font-serif text-5xl leading-tight md:text-6xl">
                Sua próxima história começa com uma descoberta.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-8 text-[#686D65] lg:col-span-5 lg:justify-self-end">
              Explore os imóveis, selecione seus favoritos e compare
              alternativas usando as ferramentas do catálogo AUREA.
            </p>
          </div>
          <div className="mt-14 grid gap-6 border-t border-[#171C1A]/20 pt-10 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#92744F]">01 / Descobrir</p>
              <h3 className="mt-5 font-serif text-3xl">Explore a coleção</h3>
              <p className="mt-4 text-sm leading-7 text-[#686D65]">Encontre residências por características e estilo de vida.</p>
              <Link href="/imoveis" className="mt-7 inline-flex gap-4 border-b border-[#171C1A] pb-2 text-xs uppercase tracking-[0.14em] hover:text-[#92744F]">Ver imóveis <span aria-hidden="true">↗</span></Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#92744F]">02 / Selecionar</p>
              <h3 className="mt-5 font-serif text-3xl">Encontre afinidades</h3>
              <p className="mt-4 text-sm leading-7 text-[#686D65]">Salve seus favoritos no catálogo para revisitá-los depois.</p>
              <Link href="/imoveis" className="mt-7 inline-flex gap-4 border-b border-[#171C1A] pb-2 text-xs uppercase tracking-[0.14em] hover:text-[#92744F]">Selecionar favoritos <span aria-hidden="true">↗</span></Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#92744F]">03 / Comparar</p>
              <h3 className="mt-5 font-serif text-3xl">Escolha com clareza</h3>
              <p className="mt-4 text-sm leading-7 text-[#686D65]">Compare até três propriedades lado a lado.</p>
              <Link href="/comparar" className="mt-7 inline-flex gap-4 border-b border-[#171C1A] pb-2 text-xs uppercase tracking-[0.14em] hover:text-[#92744F]">Abrir comparador <span aria-hidden="true">↗</span></Link>
            </div>
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




