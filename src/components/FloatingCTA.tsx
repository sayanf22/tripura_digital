import { Phone } from "lucide-react";

const FloatingCTA = () => {
  return (
    <a
      href="tel:+919999999999"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Call us"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-primary rounded-full animate-pulse-ring" />
        <div className="relative w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
          <Phone size={22} className="text-primary-foreground" />
        </div>
      </div>
    </a>
  );
};

export default FloatingCTA;
