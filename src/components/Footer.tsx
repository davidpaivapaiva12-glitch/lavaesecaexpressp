import { Wrench, Instagram, Facebook, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white/80 py-16">
      <div className="container-tight">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold text-lg text-white">LavaeSecaExpresSP</div>
                <div className="text-[10px] uppercase tracking-widest text-white/50">Assistência Técnica</div>
              </div>
            </div>
            <p className="text-sm max-w-md leading-relaxed">
              Especialistas em manutenção de máquinas lava e seca. Atendimento profissional
              em São Paulo - SP.
            </p>
            <div className="flex gap-3 pt-2">
              {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-lg bg-white/5 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              {["Serviços", "Como funciona", "Sobre", "Contato"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(/ /g, "")}`} className="hover:text-accent transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>(11) 95320-4114</li>
              <li>Lavaesecaexpressp@gmail.com</li>
              <li>São Paulo - SP</li>
              <li>Seg-Sáb · 8h-18h</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} LavaeSecaExpresSP. Todos os direitos reservados.</div>
          <div>CNPJ 00.000.000/0001-00</div>
        </div>
      </div>
    </footer>
  );
};
