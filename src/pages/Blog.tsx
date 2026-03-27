import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Layout from "@/components/Layout";

const posts = [
  {
    title: "10 SEO Trends You Can't Ignore in 2026",
    excerpt: "Stay ahead of the competition with these essential SEO strategies that are shaping the digital landscape.",
    category: "SEO",
    date: "2026-03-20",
    displayDate: "Mar 20, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "How Social Media Marketing Boosts Brand Awareness",
    excerpt: "Discover the proven social media strategies that help brands connect with their audience and drive engagement.",
    category: "Social Media",
    date: "2026-03-15",
    displayDate: "Mar 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "The Ultimate Guide to Website Performance",
    excerpt: "Learn how to optimize your website for speed, user experience, and better search engine rankings.",
    category: "Web Development",
    date: "2026-03-10",
    displayDate: "Mar 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Content Marketing Strategies That Actually Work",
    excerpt: "Create content that resonates with your audience and drives conversions for your business.",
    category: "Marketing",
    date: "2026-03-05",
    displayDate: "Mar 5, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Why Your Business Needs a Digital Marketing Strategy",
    excerpt: "In today's digital-first world, having a strategy isn't optional — it's essential for survival and growth.",
    category: "Strategy",
    date: "2026-02-28",
    displayDate: "Feb 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=600&h=400&fit=crop&q=80",
  },
  {
    title: "Mastering Google Ads: A Beginner's Guide",
    excerpt: "Everything you need to know to launch your first successful Google Ads campaign.",
    category: "PPC",
    date: "2026-02-22",
    displayDate: "Feb 22, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
  },
];

const Blog = () => {
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
            <span className="text-[#3b82f6] font-bold text-sm uppercase tracking-widest mb-4 block">Our Blog</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground mt-3 tracking-tight">
              Insights & <span className="text-[#3b82f6]">Resources</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
              Actionable tips, strategic guides, and industry insights to help your business scale efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <article className="group bg-white border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col h-full">
                  <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-4 py-1.5 bg-white/95 backdrop-blur-md text-[#12387B] text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    {/* Overlay gradient for premium feel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow relative bg-white">
                    <header className="mb-4">
                      <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                        <time dateTime={post.date}>{post.displayDate}</time>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-display font-bold text-xl md:text-2xl text-[#12387B] group-hover:text-[#3b82f6] transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h2>
                    </header>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <footer className="mt-auto">
                      <div className="inline-flex items-center gap-2 text-[#3b82f6] text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                        Read Article <ArrowRight size={16} strokeWidth={2.5} />
                      </div>
                    </footer>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
