"use client";

import { useEffect, useId, useRef, useState } from "react";

type PainelAtendimentoProps = {
  nomeImovel?: string;
  preco?: number;
};

export default function PainelAtendimento({
  nomeImovel = "Villa Serra Dourada",
  preco = 8950000,
}: PainelAtendimentoProps) {
  const [aberto, setAberto] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const id = useId();
  const painelId = `${id}-painel`;
  const fecharPainelRef = useRef<HTMLButtonElement>(null);
  const abrirPainelRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!aberto) return;
    fecharPainelRef.current?.focus();
    const fecharComEscape = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") {
        evento.preventDefault();
        setAberto(false);
      }
    };
    window.addEventListener("keydown", fecharComEscape);
    return () => {
      window.removeEventListener("keydown", fecharComEscape);
      abrirPainelRef.current?.focus();
    };
  }, [aberto]);

  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(preco);

  return (
    <aside
      className="aurea-contact-widget"
      aria-label={`Atendimento demonstrativo: ${nomeImovel}`}
    >
      {aberto && (
        <div id={painelId} className="aurea-contact-panel">
          <div className="aurea-contact-panel-head">
            <div>
              <span className="text-[10px] uppercase tracking-[.24em] text-[#c5ae86]">
                Atendimento privativo
              </span>
              <h2 className="mt-2 font-serif text-2xl">
                {nomeImovel}
              </h2>
            </div>

            <button
              ref={fecharPainelRef}
              type="button"
              onClick={() => setAberto(false)}
              aria-label="Fechar painel de atendimento"
              className="px-2 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="px-6 py-5">
            <p className="text-[11px] uppercase tracking-[.18em] text-[#827c72]">
              Valor ilustrativo
            </p>
            <p className="mt-1 font-serif text-3xl">
              {precoFormatado}
            </p>

            <div className="mt-5 border-t border-[#171c1a]/15 pt-5">
              {enviado ? (
                <div role="status" className="space-y-3">
                  <p className="font-serif text-xl">
                    Simulação concluída.
                  </p>
                  <p className="text-sm leading-6 text-[#666]">
                    Nenhuma mensagem foi enviada e nenhum dado foi
                    armazenado. Esta é uma experiência de portfólio.
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnviado(false)}
                    className="text-xs underline underline-offset-4"
                  >
                    Nova simulação
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(evento) => {
                    evento.preventDefault();
                    setEnviado(true);
                  }}
                  className="space-y-3"
                >
                  <p className="text-xs leading-5 text-[#666]">
                    Preencha somente com dados fictícios para
                    experimentar a interface.
                  </p>

                  <label className="block text-xs" htmlFor={`${id}-nome`}>
                    Nome fictício
                  </label>
                  <input
                    id={`${id}-nome`}
                    type="text"
                    required
                    minLength={2}
                    maxLength={80}
                    autoComplete="off"
                    placeholder="Exemplo: Visitante"
                    className="aurea-contact-input"
                  />

                  <label className="block text-xs" htmlFor={`${id}-email`}>
                    E-mail fictício
                  </label>
                  <input
                    id={`${id}-email`}
                    type="email"
                    required
                    maxLength={120}
                    autoComplete="off"
                    placeholder="visitante@exemplo.com"
                    className="aurea-contact-input"
                  />

                  <label className="block text-xs" htmlFor={`${id}-assunto`}>
                    Interesse
                  </label>
                  <select
                    id={`${id}-assunto`}
                    className="aurea-contact-input"
                    defaultValue="Apresentação da propriedade"
                  >
                    <option>Apresentação da propriedade</option>
                    <option>Mais informações</option>
                    <option>Visita simulada</option>
                  </select>

                  <button type="submit" className="aurea-contact-submit">
                    Simular solicitação ↗
                  </button>

                  <p className="text-[11px] leading-5 text-[#777]">
                    Imóvel fictício. Nenhuma solicitação real é enviada.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <button
        ref={abrirPainelRef}
        type="button"
        aria-expanded={aberto}
        aria-controls={painelId}
        onClick={() => setAberto(!aberto)}
        className="aurea-contact-trigger"
      >
        <span className="aurea-contact-trigger-icon" aria-hidden="true">
          ✦
        </span>
        <span>{aberto ? "Fechar atendimento" : "Atendimento exclusivo"}</span>
        <span aria-hidden="true">{aberto ? "×" : "↗"}</span>
      </button>
    </aside>
  );
}
