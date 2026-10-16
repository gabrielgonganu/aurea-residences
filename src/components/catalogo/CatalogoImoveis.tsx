"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { imoveis, formatarPreco } from "@/data/imoveis";

const FAVORITOS_KEY = "aurea:favoritos:v1";

export default function CatalogoImoveis() {
  const [busca, setBusca] = useState("");
  const [estado, setEstado] = useState("Todos");
  const [tipo, setTipo] = useState("Todos");
  const [ordem, setOrdem] = useState("padrao");
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);
  const [favoritosCarregados, setFavoritosCarregados] = useState(false);

  useEffect(() => {
    const carregarFavoritos = () => {
      try {
        const salvos = JSON.parse(
          localStorage.getItem(FAVORITOS_KEY) || "[]"
        );

        if (Array.isArray(salvos)) {
          setFavoritos(
            salvos.filter(
              (item): item is string => typeof item === "string"
            )
          );
        }
      } catch {
        // Ignora dados locais invalidos.
      }

      setFavoritosCarregados(true);
    };

    const identificador = window.setTimeout(carregarFavoritos, 0);

    return () => window.clearTimeout(identificador);
  }, []);
  function alternarFavorito(slug: string) {
    const novos = favoritos.includes(slug)
      ? favoritos.filter((item) => item !== slug)
      : [...favoritos, slug];

    setFavoritos(novos);

    try {
      localStorage.setItem(FAVORITOS_KEY, JSON.stringify(novos));
    } catch {
      // Favoritos continuam ativos durante a sessão.
    }
  }

  const resultados = useMemo(() => {
    const texto = busca.trim().toLocaleLowerCase("pt-BR");

    const lista = imoveis.filter((imovel) => {
      const correspondeBusca =
        !texto ||
        [imovel.nome, imovel.cidade, imovel.estado, imovel.descricao]
          .join(" ")
          .toLocaleLowerCase("pt-BR")
          .includes(texto);

      return (
        correspondeBusca &&
        (estado === "Todos" || imovel.estado === estado) &&
        (tipo === "Todos" || imovel.tipo === tipo) &&
        (!mostrarFavoritos || favoritos.includes(imovel.slug))
      );
    });

    if (ordem === "menor") lista.sort((a, b) => a.preco - b.preco);
    if (ordem === "maior") lista.sort((a, b) => b.preco - a.preco);
    if (ordem === "area") lista.sort((a, b) => b.area - a.area);

    return lista;
  }, [busca, estado, tipo, ordem, mostrarFavoritos, favoritos]);

  function limparFiltros() {
    setBusca("");
    setEstado("Todos");
    setTipo("Todos");
    setOrdem("padrao");
    setMostrarFavoritos(false);
  }

  const campo =
    "min-h-12 w-full border border-[#D8D1C4] bg-white px-4 text-sm text-[#171C1A] outline-offset-2 focus:border-[#9C835F]";

  return (
    <main className="min-h-screen bg-[#F5F2EC] text-[#171C1A]">
      <header className="bg-[#171C1A] text-white">
        <nav className="mx-auto flex min-h-24 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex flex-col">
            <span className="font-serif text-3xl tracking-[0.22em]">AUREA</span>
            <span className="text-[9px] tracking-[0.4em]">RESIDENCES</span>
          </Link>
          <Link href="/" className="text-xs uppercase tracking-[0.17em] hover:text-[#D6BE96]">
            Voltar ao início ↗
          </Link>
        </nav>
      </header>

      <section className="border-b border-[#D8D1C4] px-6 pb-20 pt-20 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-[#9C835F]">
            <span className="h-px w-12 bg-[#9C835F]" />
            The Private Collection
          </div>

          <h1 className="mt-8 max-w-4xl font-serif text-5xl leading-[1.08] tracking-tight md:text-7xl">
            Lugares extraordinários.
            <span className="block italic text-[#A28A67]">
              Histórias singulares.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#656861]">
            Uma curadoria de residências excepcionais no Sudeste brasileiro.
            Descubra arquitetura, exclusividade e novas formas de viver.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="border border-[#DDD4C6] bg-[#EEE9E0] p-5 md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="font-serif text-2xl">Encontre seu próximo endereço</h2>
            <button
              type="button"
              onClick={limparFiltros}
              className="text-xs underline underline-offset-4"
            >
              Limpar filtros
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <label className="space-y-2">
              <span className="text-xs uppercase tracking-wider">Buscar</span>
              <input
                className={campo}
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Cidade ou propriedade"
                type="search"
              />
            </label>

            <label className="space-y-2">
              <span className="text-xs uppercase tracking-wider">Estado</span>
              <select className={campo} value={estado} onChange={(e) => setEstado(e.target.value)}>
                <option>Todos</option>
                <option value="MG">Minas Gerais</option>
                <option value="ES">Espírito Santo</option>
                <option value="SP">São Paulo</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-xs uppercase tracking-wider">Tipo</span>
              <select className={campo} value={tipo} onChange={(e) => setTipo(e.target.value)}>
                <option>Todos</option>
                <option>Casa</option>
                <option>Cobertura</option>
                <option>Casa de campo</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-xs uppercase tracking-wider">Ordenar</span>
              <select className={campo} value={ordem} onChange={(e) => setOrdem(e.target.value)}>
                <option value="padrao">Seleção AUREA</option>
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
                <option value="area">Maior área</option>
              </select>
            </label>
          </div>

          <label className="mt-6 inline-flex cursor-pointer items-center gap-3 text-sm">
            <input
              type="checkbox"
              className="accent-[#171C1A]"
              checked={mostrarFavoritos}
              onChange={(event) => setMostrarFavoritos(event.target.checked)}
              disabled={!favoritosCarregados}
            />
            Mostrar somente meus favoritos
          </label>
        </div>

        <div className="mb-9 mt-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9C835F]">
              Nossa seleção
            </p>
            <h2 className="mt-3 font-serif text-4xl">Propriedades</h2>
          </div>
          <p className="text-sm text-[#77766F]" aria-live="polite">
            {resultados.length} {resultados.length === 1 ? "propriedade encontrada" : "propriedades encontradas"}
          </p>
        </div>

        {resultados.length === 0 ? (
          <div className="border border-[#D8D1C4] px-6 py-20 text-center">
            <h3 className="font-serif text-3xl">Nenhuma propriedade encontrada.</h3>
            <p className="mt-3 text-[#77766F]">Experimente ajustar os filtros da coleção.</p>
            <button onClick={limparFiltros} className="mt-6 border-b border-[#171C1A] pb-2 text-sm">
              Ver todas as propriedades
            </button>
          </div>
        ) : (
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {resultados.map((imovel, indice) => (
              <article key={imovel.slug} className="group min-w-0">
                <div className="relative aspect-[4/3] overflow-hidden border-[7px] border-[#171C1A] bg-[#171C1A]">
                  {imovel.imagem ? (
                    <Image
                      src={imovel.imagem}
                      alt={`Vista da propriedade ${imovel.nome}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-5 px-5 text-center text-[#E5D4B7]">
                      <span className="text-xs tracking-[0.4em]">AUREA · COLLECTION</span>
                      <span className="font-serif text-3xl">{imovel.nome}</span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                        Apresentação em preparação
                      </span>
                    </div>
                  )}

                  <div className="pointer-events-none absolute inset-4 border border-[#D9BE8F]/70" />

                  <span className="absolute left-7 top-7 bg-[#F5F2EC] px-3 py-2 text-[10px] uppercase tracking-wider">
                    {String(indice + 1).padStart(2, "0")} / AUREA
                  </span>

                  <button
                    type="button"
                    aria-label={`${favoritos.includes(imovel.slug) ? "Remover" : "Adicionar"} ${imovel.nome} ${favoritos.includes(imovel.slug) ? "dos" : "aos"} favoritos`}
                    aria-pressed={favoritos.includes(imovel.slug)}
                    onClick={() => alternarFavorito(imovel.slug)}
                    className="absolute right-7 top-7 z-10 flex h-10 w-10 items-center justify-center bg-[#F5F2EC] text-xl transition hover:bg-[#DCC8A4]"
                  >
                    {favoritos.includes(imovel.slug) ? "♥" : "♡"}
                  </button>
                </div>

                <div className="border-b border-[#D6CDBC] pb-7 pt-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-[#958060]">
                    {imovel.cidade} · {imovel.estado}
                  </p>

                  <h3 className="mt-3 font-serif text-3xl">{imovel.nome}</h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-[#77766F]">
                    {imovel.descricao}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#585D55]">
                    <span>{imovel.area} m²</span>
                    <span>{imovel.suites} suítes</span>
                    <span>{imovel.vagas} vagas</span>
                  </div>

                  <p className="mt-6 font-serif text-2xl">{formatarPreco(imovel.preco)}</p>

                  {imovel.disponivelNoSite ? (
                    <Link
                      href={`/imoveis/${imovel.slug}`}
                      className="mt-6 inline-flex border-b border-[#A58D67] pb-2 text-xs uppercase tracking-[0.16em] transition hover:text-[#A58D67]"
                    >
                      Explorar propriedade ↗
                    </Link>
                  ) : (
                    <p className="mt-6 text-xs uppercase tracking-[0.16em] text-[#8A867E]">
                      Apresentação em preparação
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="mt-16 bg-[#171C1A] px-6 py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5">
          <p className="font-serif text-3xl tracking-[0.2em]">AUREA</p>
          <p className="max-w-md text-xs leading-6 text-white/60">
            Projeto demonstrativo de portfólio. Propriedades,
            valores e serviços fictícios, sem oferta comercial real.
          </p>
        </div>
      </footer>
    </main>
  );
}



