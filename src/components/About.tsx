import { Award, Users, ThumbsUp, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "10+", label: "Anos de experiência" },
  { icon: Users, value: "1.2k+", label: "Clientes atendidos" },
  { icon: Award, value: "100%", label: "Peças originais" },
  { icon: ThumbsUp, value: "4.9", label: "Avaliação média" },
];

export const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Sobre a LavaTec
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-primary leading-tight mb-6">
              Especialistas em <span className="text-gradient">lava e seca</span> há mais de uma década.
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Sediados em <strong className="text-primary">Osasco - SP</strong>, atendemos toda a região
                metropolitana e o estado de São Paulo com pontualidade e excelência técnica.
              </p>
              <p>
                Nossa equipe é especializada exclusivamente em máquinas lava e seca, o que nos
                garante profundo conhecimento técnico de todas as marcas e modelos do mercado.
              </p>
              <p>
                Trabalhamos apenas com peças originais e oferecemos garantia formal em todos
                os serviços realizados.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`p-8 rounded-2xl border border-border bg-gradient-to-br from-card to-blue-soft/30 shadow-card-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 ${
                  i % 2 === 1 ? "mt-8" : ""
                }`}
              >
                <s.icon className="h-8 w-8 text-accent mb-4" />
                <div className="font-display font-bold text-4xl text-primary mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
