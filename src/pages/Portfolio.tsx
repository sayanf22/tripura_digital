import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import Layout from "@/components/Layout";

const Portfolio = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-accent to-background py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-24 h-24 bg-[#3b82f6]/10 rounded-full flex items-center justify-center mb-8 shadow-inner">
              <FolderGit2 className="w-12 h-12 text-[#3b82f6]" strokeWidth={1.5} />
            </div>
            
            <span className="text-[#3b82f6] font-medium text-sm uppercase tracking-widest mb-4 block">Portfolio</span>
            
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-7xl text-foreground mb-6 uppercase tracking-tight">
              Curating Our <span className="text-[#3b82f6]">Work</span>
            </h1>
            
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              We are currently compiling our latest case studies and success stories. 
              A brand new portfolio showcasing our digital transformations will be launched here shortly.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-16"
            >
              <p className="text-sm font-semibold text-foreground uppercase tracking-widest mb-6">Want to see our past work now?</p>
              <a 
                href="https://wa.me/919889090059?text=Hi%20Tripura%20Digital%20Technologies,%20I%20would%20like%20to%20request%20your%20company%20portfolio/deck!" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-[#3b82f6] text-white font-bold rounded-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-wider text-sm"
              >
                Request Our PDF Deck
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
