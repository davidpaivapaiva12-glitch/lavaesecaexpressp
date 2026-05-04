import { ArrowRight, ShieldCheck, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-tecnico.jpg";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />

      <div className="container-tight relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-soft border border-accent/20 text-sm font-medium text-accent">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Atendimento em todo o estado de SP
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-primary">
              Sua lava e seca <br />
              voltando a <span className="text-gradient">funcionar hoje</span>.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Assistência técnica especializada em máquinas lava e seca de todas as marcas.
              Diagnóstico preciso, peças originais e garantia no serviço.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button variant="hero" size="xl" asChild>
                <a
                  href={`https://wa.me/5511953204114?text=${encodeURIComponent("Quero agendar uma visita técnica")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Agendar visita técnica
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#servicos">Ver serviços</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {[
                { icon: ShieldCheck, label: "Garantia", value: "90 dias" },
                { icon: Clock, label: "Atendimento", value: "Mesmo dia" },
                { icon: MapPin, label: "Cobertura", value: "Todo SP" },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <item.icon className="h-5 w-5 text-accent mb-2" />
                  <div className="font-display font-semibold text-primary text-lg">{item.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-primary/20 rounded-[2rem] blur-2xl opacity-50" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-white/40">
              <img
                src={heroImg}
                alt="Técnico especializado realizando manutenção em máquina lava e seca"
                width={1536}
                height={1024}
                className="w-full h-[480px] lg:h-[560px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-card-soft border border-white/40 animate-float">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-9 w-9 rounded-full bg-hero border-2 border-white" />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary">+1.200 clientes</div>
                  <div className="text-xs text-muted-foreground">satisfeitos em SP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
