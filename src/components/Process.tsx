const steps = [
  {
    n: "01",
    title: "Solicite o orçamento",
    desc: "Entre em contato pelo WhatsApp ou formulário descrevendo o problema da sua máquina.",
  },
  {
    n: "02",
    title: "Agendamento rápido",
    desc: "Marcamos a visita no melhor horário para você, com confirmação no mesmo dia.",
  },
  {
    n: "03",
    title: "Diagnóstico técnico",
    desc: "Nosso técnico avalia a máquina no local e apresenta o orçamento sem compromisso.",
  },
  {
    n: "04",
    title: "Reparo com garantia",
    desc: "Realizamos o serviço com peças originais e oferecemos 365 dias (1 ano) de garantia.",
  },
];

export const Process = () => {
  return (
    <section id="processo" className="py-24 md:py-32 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="container-tight relative">
        <div className="max-w-2xl mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Como funciona
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-tight">
            Processo simples, <br />
            resultado garantido.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative group">
              <div className="text-7xl font-display font-bold text-white/10 group-hover:text-accent/40 transition-colors duration-500 leading-none mb-4">
                {s.n}
              </div>
              <div className="h-px w-12 bg-accent mb-4" />
              <h3 className="font-display font-semibold text-xl text-white mb-3">{s.title}</h3>
              <p className="text-white/70 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
