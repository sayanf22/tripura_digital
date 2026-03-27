import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import VaporizeTextCycle, { Tag } from "@/components/ui/vapour-text-effect";
import { GetStartedButton } from "@/components/ui/get-started-button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#002f6c] text-white py-2 px-4 sm:px-8 flex items-center justify-end text-[13px] font-medium z-50 relative">
        <Mail size={15} className="mr-2 opacity-90" />
        <span className="tracking-wide">Office: +27 74 622 0000</span>
      </div>

      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group hover:opacity-90 transition-opacity min-w-[200px] h-10 relative hidden sm:flex">
             <div className="absolute inset-0 pt-2">
                 <VaporizeTextCycle
                     texts={["Tripura Digital", "Technologies"]}
                     font={{ fontFamily: "Inter, sans-serif", fontSize: "28px", fontWeight: 900 }}
                     color="#12387B"
                     spread={3}
                     density={5}
                     animation={{ vaporizeDuration: 2.5, fadeInDuration: 1.5, waitDuration: 2 }}
                     direction="left-to-right"
                     alignment="left"
                     tag={Tag.H1}
                 />
             </div>
          </Link>
          <Link to="/" className="flex items-center gap-2 group hover:opacity-90 transition-opacity sm:hidden">
            <div className="flex flex-col justify-center">
              <span className="font-display font-black text-[#12387B] text-[24px] md:text-[28px] leading-none tracking-tight">
                TRIPURA
              </span>
              <span className="text-[10px] md:text-[11px] font-bold text-muted-foreground leading-tight block tracking-[0.25em] uppercase mt-1">
                Digital Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Nav via shadcn NavigationMenu */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <NavigationMenu>
              <NavigationMenuList className="gap-2 xl:gap-6 relative">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <NavigationMenuItem key={link.path}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={link.path}
                          className={`group/navlink relative px-4 py-2 text-[15px] font-bold transition-all duration-300 ease-out flex items-center justify-center ${
                            isActive
                              ? "text-[#3b82f6]"
                              : "text-[#12387B] hover:text-[#3b82f6]"
                          }`}
                        >
                          {link.name}
                          {/* Elegant center-expanding underline */}
                          <span 
                            className={`absolute bottom-0 left-1/2 h-[3px] bg-[#3b82f6] transition-all duration-300 ease-out -translate-x-1/2 rounded-full ${
                              isActive ? "w-[80%]" : "w-0 group-hover/navlink:w-[80%]"
                            }`} 
                          />
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Animated Button */}
          <div className="hidden lg:flex items-center">
              <a 
                href="https://wa.me/919889090059?text=Hi%20Tripura%20Digital%20Technologies,%20I%20would%20like%20to%20get%20a%20free%20quote!" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GetStartedButton
                  text="Get Quote"
                  className="bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white min-w-[140px]"
                />
              </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block h-[2px] w-full bg-foreground rounded-full origin-center"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
                className="block h-[2px] w-3/4 bg-foreground rounded-full"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block h-[2px] w-full bg-foreground rounded-full origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-5 flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: "easeOut" }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/5"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="mt-3 px-4"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <GetStartedButton
                    text="Get Quote"
                    className="w-full shadow-lg shadow-primary/20 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white"
                  />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
};

export default Header;
