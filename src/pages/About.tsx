import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Lightbulb, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { useCountUp } from "@/hooks/useCountUp";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of trends to deliver cutting-edge solutions." },
  { icon: Target, title: "Results-Driven", desc: "Every strategy is focused on measurable business outcomes." },
  { icon: Heart, title: "Client-First", desc: "Your success is our priority. We treat your business as our own." },
  { icon: Award, title: "Excellence", desc: "We never compromise on quality in everything we deliver." },
];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl md:text-4xl font-bold text-primary">{count}{suffix}</div>
      <p className="text-muted-foreground text-sm mt-1">{label}</p>
    </div>
  );
};

const About = () => {
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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Driving Digital <span className="text-gradient">Transformation</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
              We are a passionate team of digital experts dedicated to helping businesses thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-3">
                From Tripura to the <span className="text-gradient">World</span>
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Founded in 2020, Tripura Digital Technologies started with a simple mission — to bring world-class digital marketing services to businesses of all sizes.
              </p>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                What began as a small team of passionate individuals has grown into a full-service digital agency serving clients across India and beyond. We believe that every business deserves a strong digital presence.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: 150, suffix: "+", label: "Projects" },
                  { value: 100, suffix: "+", label: "Clients" },
                  { value: 5, suffix: "+", label: "Years" },
                  { value: 15, suffix: "+", label: "Team Members" },
                ].map((s, i) => (
                  <div key={i} className="bg-accent rounded-2xl p-6">
                    <StatItem {...s} />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Our Mission</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive growth, enhance brand visibility, and create lasting value through technology and creativity.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-card border border-border rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Eye size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">Our Vision</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  To be the most trusted digital partner for businesses in Northeast India and beyond, known for delivering exceptional results and fostering long-term relationships.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="font-display text-3xl font-bold text-foreground mt-3">
              What Drives <span className="text-gradient">Us</span>
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent mx-auto flex items-center justify-center mb-4">
                    <v.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{v.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
