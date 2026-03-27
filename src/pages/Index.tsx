import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Search, Share2, Users, CheckCircle, Star, ChevronRight, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroCarousel } from "@/components/ui/HeroCarousel";
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
      {/* Carousel Hero Section */}
      <HeroCarousel />

      {/* "Who we are?" Section */}
      <section className="bg-background py-20 lg:py-32 relative z-0">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-square bg-muted/30 border border-border/50 rounded-2xl relative overflow-hidden group"
            >
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
            </motion.div>

            {/* Right Content — Each child animates one-by-one with blur */}
            <div className="pt-8 lg:pt-0">
              <StaggeredTextReveal className="flex flex-col gap-6">
                <h2 className="font-display font-extrabold text-3xl md:text-5xl text-foreground tracking-tight">Who we are?</h2>
                <p className="font-bold text-xl md:text-2xl text-foreground">Design. Build. Market. Repeat.</p>
                <ScrollRevealText 
                  text="We're a powerhouse delivering end-to-end solutions in Design, Marketing, and Technology." 
                  scrollStart="start 85%"
                  scrollEnd="start 50%"
                />
                <ScrollRevealText 
                  text="From world-class UI/UX and brand storytelling to full-scale digital campaigns and custom tech development — we help businesses scale with speed and style." 
                  scrollStart="start 60%"
                  scrollEnd="start 20%"
                />
                <p className="font-bold text-lg text-[#CC2B2B]">Let's Build Something Great →</p>
              </StaggeredTextReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Huge Vertical Staggered Stats */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8F9FA] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.4 } },
                hidden: {}
              }}
              className="grid grid-cols-1 gap-12 md:gap-16 max-w-4xl mx-auto"
            >
              {[
                { num: "150+", title: "Businesses Accelerated", desc: "We have proudly partnered with over 150 businesses locally and internationally to scale their digital presence and exponentially boost their online revenue." },
                { num: "100+", title: "Brand Projects Executed", desc: "Our creative team has masterminded and executed more than 100 transformational brand campaigns, delivering stunning, measurable results." },
                { num: "5+", title: "Years of Experience", desc: "For over half a decade, we've honed our craft, keeping up with cutting-edge trends and adapting fast to the dynamic digital landscape." },
                { num: "10+", title: "Nations Reached", desc: "Our high-impact digital solutions transcend borders, delivering excellence and scaling businesses spread across more than 10 nations worldwide." },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
                  }}
                  className="flex flex-col items-center bg-white p-10 md:p-14 lg:p-16 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] justify-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 border border-border/10"
                >
                  <div className="font-display text-6xl md:text-7xl lg:text-[88px] font-black text-[#12387B] overflow-hidden leading-tight">
                    <motion.div
                      variants={{
                        hidden: { y: "100%" },
                        visible: { y: "0%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                      }}
                    >
                      {stat.num}
                    </motion.div>
                  </div>
                  <div className="overflow-hidden mt-6 text-center w-full">
                    <motion.h3
                      variants={{
                        hidden: { y: "100%" },
                        visible: { y: "0%", transition: { duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="text-[#111] font-extrabold text-2xl md:text-3xl tracking-tight mb-4"
                    >
                      {stat.title}
                    </motion.h3>
                    <motion.p
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      className="text-[#555] text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
                    >
                      {stat.desc}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
