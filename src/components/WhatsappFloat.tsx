import { MessageCircle } from "lucide-react";

export const WhatsappFloat = () => (
  <a
    href="https://wa.me/5511999999999"
    target="_blank"
    rel="noreferrer"
    aria-label="Falar no WhatsApp"
    className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-white flex items-center justify-center shadow-elegant animate-pulse-glow transition-all hover:scale-110"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);
