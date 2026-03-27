import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Search, Share2, Users, CheckCircle, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { useCountUp } from "@/hooks/useCountUp";
import logoIcon from "@/assets/logo-icon.png";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { StaggeredTextReveal, ScrollRevealText } from "@/components/ui/scroll-reveal";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom, responsive websites that convert visitors into customers with modern design and flawless performance.",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    desc: "Data-driven strategies to boost your online visibility, drive organic traffic, and maximize ROI.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Engaging campaigns that build brand awareness and connect with your target audience across platforms.",
  },
  {
    icon: Users,
    title: "Social Media Management",
    desc: "Complete social presence management — content creation, scheduling, engagement, and analytics.",
  },
];

const stats = [
  { value: 150, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "CEO, TechStart", text: "Tripura Digital transformed our online presence completely. Our traffic increased by 300% in just 3 months!", rating: 5 },
  { name: "Priya Sharma", role: "Founder, StyleHub", text: "Their social media management is top-notch. They truly understand our brand voice and audience.", rating: 5 },
  { name: "Amit Das", role: "Director, GreenLeaf Co.", text: "Professional, creative, and result-oriented. The best digital marketing team we've worked with.", rating: 5 },
];

const trustedBy = ["TechStart", "StyleHub", "GreenLeaf", "CloudSync", "EduPro", "FoodieDelight"];

const StatCard = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground">
        {count}{suffix}
      </div>
      <p className="text-primary-foreground/60 text-xs sm:text-sm mt-1 font-medium">{label}</p>
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      {/* Hero — Image Background overriding Top */}
      <section className="relative w-full h-[600px] lg:h-[700px] bg-muted/20">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
          alt="Woman smiling on phone"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* The overlapping text box container */}
        <div className="absolute -bottom-16 md:-bottom-24 left-0 right-0 z-10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="bg-[#12387B] max-w-4xl mx-auto rounded-xl shadow-2xl p-8 sm:p-12 md:p-16 text-center text-white border-b-4 border-navy/50">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight tracking-tight uppercase"
              >
                <div className="overflow-hidden mb-2 md:mb-4"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="block">Strong Digital</motion.span></div>
                <div className="overflow-hidden mb-2 md:mb-4"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }} className="block">Presence Starts</motion.span></div>
                <div className="overflow-hidden mb-5 md:mb-8"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }} className="block">With</motion.span></div>
                <motion.span
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                  className="inline-block bg-[#CC2B2B] px-8 py-2 md:py-3 pb-3 md:pb-4"
                >
                  &nbsp;DESIGN&nbsp;
                </motion.span>
              </motion.h1>
            </div>
          </div>
        </div>
      </section>

      {/* spacer to account for overlapping box */}
      <div className="h-24 md:h-32 bg-background" />

      {/* "Who we are?" Section */}
      <section className="bg-background pt-8 pb-16 lg:pb-24 relative z-0">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Image Placeholder */}
            <div className="aspect-square bg-muted/30 border border-border/50 rounded-2xl relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Our Team"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary cursor-pointer hover:scale-110 transition-transform shadow-2xl">
                  <svg className="w-8 h-8 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="pt-8 lg:pt-0">
              <StaggeredTextReveal className="flex flex-col">
                <h2 className="font-display font-extrabold text-3xl md:text-5xl text-foreground tracking-tight mb-8">Who we are?</h2>
                <div className="space-y-6 text-foreground/80 leading-relaxed text-[17px]">
                  <p className="font-bold text-lg md:text-xl text-foreground">Design. Build. Market. Repeat.</p>
                  <ScrollRevealText text="We're a powerhouse delivering end-to-end solutions in Design, Marketing, and Technology." />
                  <ScrollRevealText text="From world-class UI/UX and brand storytelling to full-scale digital campaigns and custom tech development — we help businesses scale with speed and style." />
                  <p className="font-bold text-foreground pt-4">Let's Build Something Great!</p>
                </div>
              </StaggeredTextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Minimalist Stats */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center lg:text-left">
            <AnimatedSection delay={0.1}>
              <div className="font-display text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#111]">150+</div>
              <p className="text-[#333] font-bold text-xs sm:text-sm mt-3 uppercase tracking-wide">Business we helped to grow</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="font-display text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#111]">100+</div>
              <p className="text-[#333] font-bold text-xs sm:text-sm mt-3 uppercase tracking-wide">Brand Projects we executed</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="font-display text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#111]">5+</div>
              <p className="text-[#333] font-bold text-xs sm:text-sm mt-3 uppercase tracking-wide">Years of Experience</p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="font-display text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#111]">10+</div>
              <p className="text-[#333] font-bold text-xs sm:text-sm mt-3 uppercase tracking-wide">Nations Projects</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Massive Black "Our PURPOSE" Section */}
      <BackgroundPaths title="Our PURPOSE is to meet your PURPOSE" />

      {/* Minimalist Services */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#111] mb-6">
              Services That Drive Results
            </h2>
            <div className="w-12 h-1 bg-[#CC2B2B] mx-auto mb-6" />
            <p className="text-[#555] text-base leading-relaxed">
              Comprehensive digital solutions tailored to your business goals.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link to="/services" className="group block h-full">
                  <div className="h-full bg-white rounded-xl p-8 hover:-translate-y-2 transition-transform duration-400 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-transparent hover:border-border/50">
                    <div className="w-12 h-12 rounded-lg bg-[#F8F9FA] flex items-center justify-center mb-6 group-hover:bg-[#12387B]/10 transition-colors duration-300">
                      <service.icon size={22} className="text-[#12387B]" />
                    </div>
                    <h3 className="font-display font-bold text-[#111] text-lg mb-3">{service.title}</h3>
                    <p className="text-[#555] text-sm leading-relaxed">{service.desc}</p>
                    <div className="flex items-center gap-2 text-[#CC2B2B] text-xs font-bold mt-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 uppercase tracking-wider">
                      Explore <ChevronRight size={14} strokeWidth={3} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>



      {/* Minimalist Testimonials */}
      <section className="py-20 md:py-28 bg-[#F8F9FA] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#111] mb-6">
              What Our Clients Say
            </h2>
            <div className="w-12 h-1 bg-[#CC2B2B] mx-auto" />
          </AnimatedSection>
        </div>

        <div className="w-full">
          <StaggerTestimonials />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
