"use client";

import { useState } from "react";

export default function PainelAtendimento() {
  const [aberto, setAberto] = useState(false);
  const [enviado, setEnviado] = useState(false);
  return (
    <aside className="aurea-contact-widget" aria-label="Atendimento do imóvel">
      {aberto && (
        <div id="aurea-contact-panel" className="aurea-contact-panel">
          <div className="aurea-contact-panel-head">
            <div><span className="text-[10px] uppercase tracking-[.24em] text-[#c5ae86]">Atendimento privativo</span><h2 className="mt-2 font-serif text-2xl">Villa Serra Dourada</h2></div>
            <button type="button" onClick={() => setAberto(false)} aria-label="Fechar painel de atendimento" className="text-2xl px-2">×</button>
          </div>
          <div className="px-6 py-5">
            <p className="text-[11px] uppercase tracking-[.18em] text-[#827c72]">Valor do imóvel</p>
            <p className="font-serif text-3xl mt-1">R$ 8.950.000</p>
            <div className="mt-5 border-t border-[#171c1a]/15 pt-5">
              {enviado ? (
                <div role="status" className="space-y-3"><p className="font-serif text-xl">Solicitação preparada.</p><p className="text-sm leading-6 text-[#666]">Esta é uma demonstração de portfólio. Nenhuma mensagem foi enviada e nenhum dado foi armazenado.</p><button type="button" onClick={() => setEnviado(false)} className="text-xs underline underline-offset-4">Nova simulação</button></div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setEnviado(true); }} className="space-y-3">
                  <label className="block text-xs" htmlFor="aurea-nome">Nome</label>
                  <input id="aurea-nome" type="text" required minLength={2} maxLength={80} autoComplete="name" placeholder="Seu nome" className="aurea-contact-input" />
                  <label className="block text-xs" htmlFor="aurea-email">E-mail</label>
                  <input id="aurea-email" type="email" required maxLength={120} autoComplete="email" placeholder="nome@exemplo.com" className="aurea-contact-input" />
                  <label className="block text-xs" htmlFor="aurea-assunto">Interesse</label>
                  <select id="aurea-assunto" className="aurea-contact-input" defaultValue="Visita guiada"><option>Visita guiada</option><option>Mais informações</option><option>Apresentação da propriedade</option></select>
                  <button type="submit" className="aurea-contact-submit">Simular solicitação ↗</button>
                  <p className="text-[11px] leading-5 text-[#777]">Experiência demonstrativa. Não informe dados pessoais reais; o formulário não envia informações.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      <button type="button" aria-expanded={aberto} aria-controls="aurea-contact-panel" onClick={() => setAberto(!aberto)} className="aurea-contact-trigger"><span className="aurea-contact-trigger-icon" aria-hidden>✦</span><span>{aberto ? "Fechar atendimento" : "Atendimento exclusivo"}</span><span aria-hidden>{aberto ? "×" : "↗"}</span></button>
    </aside>
  );
}
