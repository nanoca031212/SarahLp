'use client'

import { useState } from 'react'

export default function Agendamento() {
  const [nome, setNome] = useState('')
  const [whats, setWhats] = useState('')
  const [servico, setServico] = useState('')
  const [data, setData] = useState('')

  const whatsappLink = () => {
    const msg = encodeURIComponent(
      `Olá, sou ${nome || 'cliente'}. Gostaria de agendar ${servico || 'uma avaliação'} na data ${data || 'mais próxima'}.`
    )
    const phone = '5500000000000'
    return `https://wa.me/${phone}?text=${msg}`
  }

  return (
    <section id="agendamento" className="py-20 md:py-28">
      <div className="section">
        <h2 className="heading text-4xl text-neutral-900">Agende sua avaliação</h2>
        <form
          className="mt-8 grid grid-cols-1 gap-4 rounded-3xl border border-neutral-100 bg-white p-6 shadow-soft md:grid-cols-2"
          onSubmit={e => {
            e.preventDefault()
            window.open(whatsappLink(), '_blank')
          }}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="text-sm text-neutral-700">Nome</label>
            <input id="nome" required value={nome} onChange={e => setNome(e.target.value)} className="rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="whats" className="text-sm text-neutral-700">WhatsApp</label>
            <input id="whats" value={whats} onChange={e => setWhats(e.target.value)} className="rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="servico" className="text-sm text-neutral-700">Serviço desejado</label>
            <select id="servico" value={servico} onChange={e => setServico(e.target.value)} className="rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary">
              <option value="">Selecione</option>
              <option>Limpeza de Pele</option>
              <option>Botox & Preenchimento</option>
              <option>Drenagem Linfática</option>
              <option>Radiofrequência</option>
              <option>Peeling Químico</option>
              <option>Design de Sobrancelhas</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="data" className="text-sm text-neutral-700">Data preferida</label>
            <input id="data" type="date" value={data} onChange={e => setData(e.target.value)} className="rounded-xl border border-neutral-200 px-4 py-3 outline-none focus:ring-2 focus:ring-primary" />
          </div>
          <div className="md:col-span-2 mt-2 flex flex-wrap items-center justify-between gap-3">
            <button type="submit" className="btn btn-accent">Enviar pelo WhatsApp</button>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-full border border-accent px-4 py-2 text-accent" aria-label="Abrir conversa no WhatsApp">
              Abrir no WhatsApp
            </a>
          </div>
        </form>
        <a
          href={whatsappLink()}
          className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-soft"
          aria-label="WhatsApp flutuante"
        >
          <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-green-500/70" />
          <span className="relative text-lg">WA</span>
        </a>
      </div>
    </section>
  )
}
