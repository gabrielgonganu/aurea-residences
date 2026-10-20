import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CabecalhoAurea from "@/components/layout/CabecalhoAurea";
import GaleriaImovel from "@/components/imoveis/GaleriaImovel";
import PainelAtendimento from "@/components/imoveis/PainelAtendimento";
import MotionEnhancer from "@/components/ui/MotionEnhancer";
import { formatarPreco, imoveis } from "@/data/imoveis";

export const metadata: Metadata = {
  title: "Reserva das Acácias | AUREA Residences",
  description:
    "Conheça o conceito fictício Reserva das Acácias: um refúgio de campo com arquitetura brasileira, piscina natural e paisagem serrana em Brumadinho.",

  openGraph: {
    type: "website",
    images: [{ url: "/imoveis/reserva-das-acacias/fachada.webp", alt: "reserva das acacias — AUREA Residences" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/imoveis/reserva-das-acacias/fachada.webp"],
  },
};

const base = "/imoveis/reserva-das-acacias";

const fotos = [
  {
    src: `${base}/fachada.webp`,
    ambiente: "Fachada principal",
    alt: "Casa de campo em madeira com telhado inclinado, varanda e árvores ao redor",
  },
  {
    src: `${base}/piscina-natural.webp`,
    ambiente: "Piscina natural",
    alt: "Lago artificial para banho, com pedras naturais e vegetação, distante da casa",
  },
  {
    src: `${base}/sala-estar.webp`,
    ambiente: "Sala de estar",
    alt: "Sala aconchegante com lareira, madeira e vista para a serra",
  },
  {
    src: `${base}/area-externa.webp`,
    ambiente: "Área externa",
    alt: "Área verde da propriedade com paisagem natural e arquitetura de campo",
  },
  {
    src: `${base}/suite.webp`,
    ambiente: "Suíte principal",
    alt: "Suíte de estilo chalé com madeira, tecidos naturais e vista para as montanhas",
  },
  {
    src: `${base}/cozinha.webp`,
    ambiente: "Cozinha",
    alt: "Cozinha de campo sofisticada com marcenaria de madeira e ilha central",
  },
  {
    src: `${base}/banheiro.webp`,
    ambiente: "Banheiro",
    alt: "Banheiro com banheira de imersão, materiais naturais e paisagem arborizada",
  },
];

const diferenciais = [
  "Arquitetura brasileira de inspiração serrana",
  "Piscina natural integrada à paisagem",
  "Residência cercada por vegetação",
  "Sala de estar com lareira",
  "Suíte com atmosfera de chalé",
  "Cozinha com acabamentos naturais",
  "Banheiro com banheira de imersão",
  "Áreas externas voltadas ao descanso",
];

export default function ReservaDasAcacias() {
  const imovel = imoveis.find(
    (item) => item.slug === "reserva-das-acacias"
  );

  if (!imovel) {
    throw new Error("Reserva das Acácias não encontrada no catálogo.");
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
          <span className="text-[#171C1A]">Reserva das Acácias</span>
        </nav>

        <div
          data-reveal
          className="mb-12 flex flex-wrap items-end justify-between gap-8"
        >
          <div className="max-w-4xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#987B53]">
              Edição 004 · Refúgios Brasileiros · Brumadinho, MG
            </p>

            <h1 className="font-serif text-5xl leading-tight md:text-7xl">
              Reserva das Acácias
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#686C66]">
              Onde a arquitetura acolhe, a natureza desacelera
              e cada detalhe convida a permanecer.
              Um refúgio brasileiro de madeira, pedra e silêncio.
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
          nomeImovel="Reserva das Acácias"
          edicao="004"
        />

        <div className="aurea-editorial-band">
          <span>THE PRIVATE COLLECTION</span>
          <span className="aurea-editorial-symbol">✦</span>
          <span>REFÚGIOS BRASILEIROS</span>
        </div>

        <section
          data-reveal
          className="grid gap-8 border-b border-[#171C1A]/15 py-16 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { valor: imovel.area.toString(), legenda: "Área construída", unidade: "m²" },
            { valor: String(imovel.suites).padStart(2, "0"), legenda: "Suítes", unidade: "" },
            { valor: String(imovel.vagas).padStart(2, "0"), legenda: "Vagas", unidade: "" },
            { valor: "07", legenda: "Fotografias", unidade: "" },
          ].map((dado) => (
            <div key={dado.legenda} className="border-l border-[#9C835F] pl-5">
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
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#987B53]">
              O conceito
            </p>
            <h2 className="max-w-lg font-serif text-4xl leading-tight md:text-5xl">
              O privilégio de viver no próprio ritmo.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-9 text-[#5F635E]">
            <p>
              A Reserva das Acácias celebra a arquitetura de campo brasileira:
              madeira aquecida pelo sol, telhados inclinados, lareira e
              ambientes que convidam ao descanso.
            </p>
            <p>
              A piscina natural, posicionada em outra parte do terreno,
              cria um destino de contemplação e lazer entre as árvores.
              Um caminho pela paisagem transforma cada visita à água
              em parte da experiência.
            </p>
          </div>
        </section>
      </div>

      <section
        aria-label="Paisagem da Reserva das Acácias"
        className="relative isolate flex min-h-[580px] items-center overflow-hidden bg-[#202A20] text-white md:min-h-[700px]"
      >
        <Image
          src={`${base}/area-externa.webp`}
          alt="Paisagem verde e arquitetura de campo da Reserva das Acácias"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#122016]/85 via-[#122016]/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#E3C99E]">
              Brumadinho · Minas Gerais
            </p>
            <h2 className="mt-8 font-serif text-5xl leading-tight md:text-7xl">
              Há lugares que nos fazem ficar.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-8 text-white/85">
              A natureza não é apenas a paisagem.
              É parte da experiência de morar.
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
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#987B53]">
              A experiência
            </p>
            <h2 className="max-w-md font-serif text-4xl leading-tight md:text-5xl">
              Sofisticação que se sente, não que se impõe.
            </h2>
          </div>

          <div className="grid gap-x-8 sm:grid-cols-2">
            {diferenciais.map((item, indice) => (
              <div
                key={item}
                className="flex items-center gap-4 border-b border-[#171C1A]/10 py-6"
              >
                <span className="text-xs text-[#987B53]">
                  {String(indice + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-6">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section data-reveal className="py-24">
          <div className="bg-[#263025] px-8 py-16 text-white md:px-16 md:py-20">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#D5B98A]">
              AUREA · Refúgios Brasileiros
            </p>
            <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              O extraordinário também pode ser simples.
            </h2>
            <p className="mt-7 max-w-xl leading-8 text-white/70">
              Descubra as diferentes histórias e arquiteturas
              que compõem a coleção AUREA Residences.
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
