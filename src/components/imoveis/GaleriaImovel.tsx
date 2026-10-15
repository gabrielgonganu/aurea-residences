"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Foto = { src: string; alt: string; ambiente: string };

export default function GaleriaImovel({ fotos }: { fotos: Foto[] }) {
  const [ativa, setAtiva] = useState<number | null>(null);
  const fecharRef = useRef<HTMLButtonElement>(null);
  const gatilhoRef = useRef<HTMLButtonElement | null>(null);
  const total = fotos.length;
  const aberta = ativa !== null;
  const navegar = useCallback((direcao: number) => {
    setAtiva((atual) => atual === null ? null : (atual + direcao + total) % total);
  }, [total]);

  useEffect(() => {
    if (!aberta) return;
    const anterior = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    fecharRef.current?.focus();
    const teclas = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAtiva(null);
      if (evento.key === "ArrowRight") navegar(1);
      if (evento.key === "ArrowLeft") navegar(-1);
      if (evento.key === "Tab") {
        const modal = document.getElementById("aurea-lightbox");
        const focaveis = Array.from(modal?.querySelectorAll<HTMLElement>('button:not([disabled])') ?? []);
        if (!focaveis.length) return;
        const primeiro = focaveis[0];
        const ultimo = focaveis[focaveis.length - 1];
        if (evento.shiftKey && document.activeElement === primeiro) { evento.preventDefault(); ultimo.focus(); }
        else if (!evento.shiftKey && document.activeElement === ultimo) { evento.preventDefault(); primeiro.focus(); }
      }
    };
    window.addEventListener("keydown", teclas);
    return () => {
      window.removeEventListener("keydown", teclas);
      document.body.style.overflow = overflowAnterior;
      (gatilhoRef.current ?? anterior)?.focus();
    };
  }, [aberta, navegar]);

  if (!total) return null;
  const abrir = (indice: number, botao: HTMLButtonElement) => {
    gatilhoRef.current = botao;
    setAtiva(indice);
  };

  return (
    <>
      <div className="aurea-gallery-v3" data-reveal>
        <div className="aurea-gallery-v3-grid">
          {fotos.slice(0, 3).map((foto, indice) => (
            <button key={foto.src} type="button" className={`aurea-gallery-v3-tile ${indice === 0 ? "aurea-gallery-v3-main" : ""}`} onClick={(e) => abrir(indice, e.currentTarget)} aria-label={`Abrir imagem: ${foto.ambiente}`}>
              <Image src={foto.src} alt={foto.alt} fill priority={indice === 0} sizes={indice === 0 ? "(max-width: 767px) 100vw, 64vw" : "(max-width: 767px) 50vw, 35vw"} className="object-cover" />
              <span className="aurea-gallery-v3-frame" aria-hidden="true" />
              <span className="aurea-gallery-v3-tag">{String(indice + 1).padStart(2, "0")} / {foto.ambiente}</span>
              {indice === 2 && <span className="aurea-gallery-v3-more">+ {total - 3} ambientes</span>}
            </button>
          ))}
        </div>
        <div className="aurea-gallery-v3-bottom">
          <span>Villa Serra Dourada <span className="text-[#b9a079]">✦</span> Acervo arquitetônico</span>
          <button type="button" onClick={(e) => abrir(0, e.currentTarget)}>Explorar as {total} fotografias <span aria-hidden>↗</span></button>
        </div>
      </div>

      {ativa !== null && (
        <div id="aurea-lightbox" role="dialog" aria-modal="true" aria-label="Galeria cinematográfica da Villa Serra Dourada" className="aurea-lightbox">
          <header className="aurea-lightbox-header">
            <div><div className="font-serif text-2xl tracking-[.20em]">AUREA</div><span className="text-[10px] uppercase tracking-[.3em] text-[#c5ae86]">Private collection · 001</span></div>
            <div className="text-center text-xs uppercase tracking-[.24em] text-white/65 hidden sm:block">{fotos[ativa].ambiente}</div>
            <button ref={fecharRef} type="button" className="aurea-lightbox-close" onClick={() => setAtiva(null)} aria-label="Fechar galeria">Fechar <span aria-hidden>×</span></button>
          </header>
          <div className="aurea-lightbox-stage">
            <Image key={fotos[ativa].src} src={fotos[ativa].src} alt={fotos[ativa].alt} fill sizes="100vw" className="object-contain" priority />
            <button type="button" onClick={() => navegar(-1)} className="aurea-lightbox-arrow left-2 md:left-7" aria-label="Fotografia anterior">←</button>
            <button type="button" onClick={() => navegar(1)} className="aurea-lightbox-arrow right-2 md:right-7" aria-label="Próxima fotografia">→</button>
          </div>
          <div className="aurea-lightbox-details"><span>{fotos[ativa].ambiente}</span><span>{String(ativa + 1).padStart(2, "0")} <span className="text-[#bda479]">/</span> {String(total).padStart(2, "0")}</span></div>
          <div className="aurea-lightbox-thumbs" aria-label="Selecionar ambiente">
            {fotos.map((foto, indice) => (
              <button key={foto.src} type="button" aria-label={`Ver ${foto.ambiente}`} aria-pressed={ativa === indice} onClick={() => setAtiva(indice)} className={`aurea-lightbox-thumb ${ativa === indice ? "is-active" : ""}`}>
                <Image src={foto.src} alt="" fill sizes="90px" className="object-cover" />
              </button>
            ))}
          </div>
          <p className="text-center text-[10px] text-white/40 pb-3 hidden md:block">Use ← → para navegar e Esc para fechar</p>
        </div>
      )}
    </>
  );
}
