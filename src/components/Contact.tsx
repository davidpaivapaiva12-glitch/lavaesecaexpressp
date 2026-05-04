import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const WHATSAPP = "5511953204114";

export const Contact = () => {
  const [form, setForm] = useState({ nome: "", telefone: "", problema: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.telefone) {
      toast.error("Preencha nome e telefone para continuar.");
      return;
    }
    const msg = `Olá! Sou ${form.nome}. Telefone: ${form.telefone}. ${form.problema ? `Problema: ${form.problema}` : "Gostaria de um orçamento."}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-ice">
      <div className="container-tight">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
                Fale conosco
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-primary leading-tight mb-6">
                Vamos resolver <br />o problema da sua máquina.
              </h2>
              <p className="text-muted-foreground text-lg">
                Solicite seu orçamento sem compromisso. Atendemos rápido e com transparência.
              </p>
            </div>

            <div className="space-y-4">
              {[
              { icon: MessageCircle, label: "WhatsApp", value: "(11) 95320-4114", href: `https://wa.me/${WHATSAPP}` },
                { icon: Phone, label: "Telefone", value: "(11) 95320-4114", href: "tel:+5511953204114" },
                { icon: Mail, label: "Email", value: "Lavaesecaexpressp@gmail.com", href: "mailto:Lavaesecaexpressp@gmail.com" },
                { icon: MapPin, label: "Localização", value: "São Paulo - SP", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/40 hover:shadow-card-soft transition-all group"
                >
                  <div className="h-11 w-11 rounded-lg bg-blue-soft flex items-center justify-center group-hover:bg-accent transition-colors">
                    <c.icon className="h-5 w-5 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-0.5">{c.label}</div>
                    <div className="font-medium text-primary">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 md:p-10 shadow-elegant border border-border"
            >
              <h3 className="font-display font-semibold text-2xl text-primary mb-2">
                Solicite seu orçamento
              </h3>
              <p className="text-muted-foreground mb-8">
                Resposta em até 1 hora em horário comercial.
              </p>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="nome" className="text-primary mb-2 block">Nome completo</Label>
                  <Input
                    id="nome"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="telefone" className="text-primary mb-2 block">WhatsApp / Telefone</Label>
                  <Input
                    id="telefone"
                    placeholder="(11) 99999-9999"
                    value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <Label htmlFor="problema" className="text-primary mb-2 block">Descreva o problema (opcional)</Label>
                  <Textarea
                    id="problema"
                    placeholder="Ex: A máquina não está aquecendo na hora de secar..."
                    value={form.problema}
                    onChange={(e) => setForm({ ...form, problema: e.target.value })}
                    rows={4}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button type="submit" variant="whatsapp" size="xl" className="flex-1">
                    <MessageCircle className="h-5 w-5" />
                    Enviar pelo WhatsApp
                  </Button>
                  <Button type="button" variant="outline" size="xl" asChild>
                    <a href={`tel:+5511953204114`}>
                      <Phone className="h-5 w-5" />
                      Ligar
                    </a>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
