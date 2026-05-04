import { Wrench, Droplets, Zap, Cog, Thermometer, Settings2, ArrowUpRight } from "lucide-react";

const WHATSAPP = "5511953204114";

const services = [
  {
    icon: Wrench,
    title: "Manutenção corretiva",
    desc: "Diagnóstico e reparo de defeitos em qualquer marca: Samsung, LG, Electrolux, Brastemp e mais.",
    msg: "Quero agendar manutenção corretiva",
  },
  {
    icon: Droplets,
    title: "Vazamentos e bombas",
    desc: "Identificação e correção de vazamentos, troca de bomba d'água e mangueiras danificadas.",
    msg: "Quero agendar serviço de vazamentos e bombas",
  },
  {
    icon: Zap,
    title: "Placa eletrônica",
    desc: "Conserto e substituição de placas, sensores e componentes eletrônicos com peças originais.",
    msg: "Quero agendar serviço de placa eletrônica",
  },
  {
    icon: Thermometer,
    title: "Sistema de secagem",
    desc: "Reparo no aquecimento, resistências, sensores de temperatura e sistema de ventilação.",
    msg: "Quero agendar reparo no sistema de secagem",
  },
  {
    icon: Cog,
    title: "Tambor e rolamentos",
    desc: "Troca de rolamentos, retentores, polias e correias. Eliminamos ruídos e vibração excessiva.",
    msg: "Quero agendar serviço em tambor e rolamentos",
  },
  {
    icon: Settings2,
    title: "Manutenção preventiva",
    desc: "Limpeza interna, verificação completa e ajustes para prolongar a vida útil da sua máquina.",
    msg: "Quero agendar manutenção preventiva",
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-ice">
      <div className="container-tight">
        <div className="max-w-2xl mb-16">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Nossos serviços
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-primary leading-tight mb-6">
            Tudo que sua lava e seca precisa, <span className="text-gradient">em um só lugar</span>.
          </h2>
          <p className="text-lg text-muted-foreground">
            Equipe técnica certificada, ferramentas profissionais e peças originais para garantir
            o melhor resultado em cada atendimento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <a
              key={s.title}
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(s.msg)}`}
              target="_blank"
              rel="noreferrer"
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/40 shadow-card-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 block"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-accent" />
              </div>
              <div className="h-14 w-14 rounded-xl bg-blue-soft flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <s.icon className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-display font-semibold text-xl text-primary mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
