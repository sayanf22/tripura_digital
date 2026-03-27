import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Search, Share2, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "We build stunning, high-performance websites that leave lasting impressions and drive conversions.",
    features: ["Custom Design & Development", "Responsive & Mobile-First", "E-commerce Solutions", "CMS Integration", "Performance Optimization", "Ongoing Maintenance"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    desc: "Boost your online visibility with data-driven SEO strategies and comprehensive digital marketing campaigns.",
    features: ["Keyword Research & Strategy", "On-page & Off-page SEO", "Content Marketing", "PPC Advertising", "Email Marketing", "Analytics & Reporting"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Engage your audience and build brand loyalty through creative social media campaigns that deliver results.",
    features: ["Campaign Strategy & Planning", "Content Creation & Design", "Paid Social Advertising", "Influencer Marketing", "Community Building", "Performance Analytics"],
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Users,
    title: "Social Media Management",
    desc: "Let us handle your entire social media presence — from content creation to engagement and growth.",
    features: ["Profile Setup & Optimization", "Content Calendar & Scheduling", "Daily Engagement & Moderation", "Growth Strategy", "Monthly Reporting", "Crisis Management"],
    color: "from-cyan-500 to-cyan-600",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "We understand your business, goals, and target audience." },
  { step: "02", title: "Strategy", desc: "We craft a custom digital strategy tailored to your needs." },
  { step: "03", title: "Execution", desc: "Our team implements the strategy with precision and creativity." },
  { step: "04", title: "Optimization", desc: "We continuously monitor, analyze, and optimize for best results." },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-accent to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Solutions That <span className="text-gradient">Deliver</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4">
              Comprehensive digital services designed to accelerate your business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 space-y-20">
          {services.map((service, i) => (
            <AnimatedSection key={i} direction={i % 2 === 0 ? "left" : "right"}>
              <div className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon size={28} className="text-primary" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{service.desc}</p>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle size={16} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="inline-block mt-6">
                    <Button className="rounded-xl shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300 group">
                      Get Started <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="bg-gradient-to-br from-accent to-primary/10 rounded-3xl aspect-[4/3] flex items-center justify-center p-8">
                    <div className="text-center">
                      <service.icon size={64} className="text-primary mx-auto mb-4 opacity-50" />
                      <h3 className="font-display text-xl font-bold text-foreground">{service.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
              How We <span className="text-gradient">Work</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative">
                  <span className="text-6xl font-display font-bold text-primary/10 absolute top-3 right-4">{p.step}</span>
                  <div className="relative">
                    <h3 className="font-display text-lg font-bold text-foreground mt-8">{p.title}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Ready to Get <span className="text-gradient">Started?</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Let's discuss your project and create a custom strategy to achieve your goals.
            </p>
            <Link to="/contact" className="inline-block mt-8">
              <Button size="lg" className="rounded-xl text-base px-10 shadow-xl shadow-primary/25 hover:scale-105 transition-all duration-300">
                Contact Us Today
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
