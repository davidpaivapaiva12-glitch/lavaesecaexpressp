import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "LavaeSecaExpresSP · Assistência Técnica de Lava e Seca em São Paulo";
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta(
      "description",
      "LavaeSecaExpresSP · Assistência técnica especializada em máquinas lava e seca em São Paulo - SP. Atendimento rápido, peças originais e 1 ano de garantia."
    );
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
};

export default Index;
