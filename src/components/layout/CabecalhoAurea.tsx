"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const links = [
  { nome: "Início", href: "/" },
  { nome: "Propriedades", href: "/imoveis" },
  { nome: "Comparar", href: "/comparar" },
  { nome: "Nossa essência", href: "/#sobre" },
  { nome: "Contato", href: "/#contato" },
];

export default function CabecalhoAurea() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);
  const botaoMenuRef = useRef<HTMLButtonElement>(null);
  const naHome = pathname === "/";

  return (
    <header
      className={`left-0 top-0 z-30 w-full text-white ${
        naHome
          ? "absolute border-b border-white/20"
          : "relative bg-[#171C1A]"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        onKeyDown={(evento) => {
          if (evento.key === "Escape" && aberto) {
            evento.preventDefault();
            setAberto(false);
            botaoMenuRef.current?.focus();
          }
        }}
        className="relative mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10"
      >
        <Link
          href="/"
          onClick={() => setAberto(false)}
          className="flex flex-col"
          aria-label="AUREA Residences — Início"
        >
          <span className="font-serif text-3xl tracking-[0.22em]">
            AUREA
          </span>
          <span className="mt-1 text-[9px] tracking-[0.4em]">
            RESIDENCES
          </span>
        </Link>

        <div className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={
                link.href === pathname ? "page" : undefined
              }
              className={`text-[11px] uppercase tracking-[0.18em] transition-colors hover:text-[#D6BE96] ${
                link.href === pathname
                  ? "text-[#D6BE96]"
                  : "text-white/85"
              }`}
            >
              {link.nome}
            </Link>
          ))}
        </div>

        <button
          ref={botaoMenuRef}
          type="button"
          onClick={() => setAberto(!aberto)}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={aberto}
          aria-controls="aurea-menu-mobile"
          className="flex h-12 w-12 flex-col items-center justify-center gap-[6px] border border-white/35 transition hover:border-[#C5AE86] lg:hidden"
        >
          <span
            className={`h-px w-5 bg-[#E9D8BA] transition-transform duration-300 ${
              aberto ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-[#E9D8BA] transition-opacity duration-300 ${
              aberto ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-[#E9D8BA] transition-transform duration-300 ${
              aberto ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        {aberto && (
          <div
            id="aurea-menu-mobile"
            className="absolute left-0 right-0 top-full z-50 border-t border-[#C5AE86]/30 bg-[#171C1A] px-6 py-8 shadow-2xl lg:hidden"
          >
            <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#C5AE86]">
              The AUREA Collection
            </p>

            <div className="flex flex-col">
              {links.map((link, indice) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setAberto(false)}
                  className="flex items-center justify-between border-b border-white/10 py-5 text-xl font-light transition hover:text-[#C5AE86]"
                >
                  <span>{link.nome}</span>
                  <span className="text-xs text-[#C5AE86]">
                    {String(indice + 1).padStart(2, "0")} ↗
                  </span>
                </Link>
              ))}
            </div>

            <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/40">
              AUREA Residences · Private Collection
            </p>
          </div>
        )}
      </nav>
    </header>
  );
}

