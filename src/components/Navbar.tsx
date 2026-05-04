import { useEffect, useState } from "react";
import { Wrench, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-card-soft" : "bg-transparent"
      }`}
    >
      <div className="container-tight flex h-20 items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-hero shadow-glow group-hover:scale-110 transition-transform">
            <Wrench className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg text-primary">LavaeSecaExpresSP</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Assistência Técnica</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-accent hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="hero" size="default" asChild>
            <a
              href={`https://wa.me/5511953204114?text=${encodeURIComponent("Quero solicitar um orçamento")}`}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento
            </a>
          </Button>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass border-t border-border animate-fade-in">
          <div className="container-tight py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground/80 hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild>
              <a href="#contato">Solicitar orçamento</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
