import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-muted-foreground text-lg mt-4">
              Have a project in mind? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="left">
                <h2 className="font-display text-2xl font-bold text-foreground">Get In Touch</h2>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  Reach out to us through any of these channels and we'll respond as quickly as possible.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    { icon: MapPin, label: "Visit Us", value: "Tripura, India" },
                    { icon: Phone, label: "Call Us", value: "+91 99999 99999" },
                    { icon: Mail, label: "Email Us", value: "info@tripuradigital.com" },
                    { icon: Clock, label: "Working Hours", value: "Mon - Sat, 9:00 AM - 7:00 PM" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-sm font-medium text-foreground mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 text-muted-foreground"
                      >
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 99999 99999"
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Subject</label>
                      <Input
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Inquiry"
                        className="rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Your Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="rounded-xl min-h-[140px] resize-none"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-xl text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300 group"
                  >
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-accent rounded-2xl aspect-[21/9] flex items-center justify-center">
            <div className="text-center">
              <MapPin size={40} className="text-primary mx-auto mb-3 opacity-50" />
              <p className="text-muted-foreground text-sm">Google Maps Integration</p>
              <p className="text-muted-foreground text-xs">Tripura, India</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
