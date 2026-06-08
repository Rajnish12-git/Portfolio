import React from 'react';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { Download, Linkedin, Github, MessageSquare, ArrowUpRight } from 'lucide-react';
import resumePDF from '/public/RajnishKumar_resume.pdf';

const ResumeLinks = () => {
  return (
    <section id="resume" className="py-24 px-6 bg-warm-light/45 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-warm-taupe block mb-2">Resources & Connect</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-warm-charcoal">Resume &amp; Professional Links</h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Resume Card (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex"
          >
            <Card className="p-8 md:p-10 bg-warm-cream border border-warm-beige rounded-[2.5rem] flex flex-col justify-between w-full relative overflow-hidden group">
              {/* Subtle design element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 rounded-bl-[100px] -z-10 group-hover:bg-accent-gold/20 transition-all duration-300" />
              
              <div className="space-y-6 max-w-lg">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-goldDark block">Curriculum Vitae</span>
                <h3 className="text-3xl font-serif font-bold text-warm-charcoal leading-tight">
                  Interested in my background and qualifications?
                </h3>
                <p className="text-sm md:text-base text-warm-taupe leading-relaxed">
                  Download my full resume to view details about my academic coursework, technical projects, achievements, and technical expertise in software development and machine learning.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button 
                  variant="secondary" 
                  href="/public/RajnishKumar_resume.pdf" 
                  className="gap-2.5 px-8 py-4 shadow-md hover:shadow-lg transition-all text-sm font-semibold rounded-2xl"
                >
                  <Download size={18} /> Download PDF Resume
                </Button>
                <Button 
                  variant="outline" 
                  href="#contact" 
                  className="gap-2 px-6 py-4 hover:bg-warm-beige/35 border-warm-taupe/20 text-sm font-semibold rounded-2xl"
                >
                  Let's Discuss Opportunities
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Social Links Cards (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/rajnish-kumar-100558249"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 group"
            >
              <Card className="h-full p-6 bg-warm-cream border border-warm-beige hover:border-accent-gold/40 hover:bg-warm-light rounded-2xl transition-all duration-300 flex items-center justify-between group-hover:shadow-sm cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-accent-gold/10 text-accent-goldDark group-hover:scale-105 transition-transform duration-300">
                    <Linkedin size={22} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-warm-charcoal group-hover:text-accent-gold transition-colors">Connect on LinkedIn</h4>
                    <p className="text-xs text-warm-taupe mt-0.5">Let's connect professionally and discuss technology.</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-warm-taupe/50 group-hover:text-accent-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Card>
            </a>

            {/* GitHub Card */}
            <a 
              href="https://github.com/Rajnish12-git"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 group"
            >
              <Card className="h-full p-6 bg-warm-cream border border-warm-beige hover:border-accent-gold/40 hover:bg-warm-light rounded-2xl transition-all duration-300 flex items-center justify-between group-hover:shadow-sm cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-warm-charcoal/5 text-warm-charcoal group-hover:scale-105 transition-transform duration-300">
                    <Github size={22} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-warm-charcoal group-hover:text-accent-gold transition-colors">Check My GitHub</h4>
                    <p className="text-xs text-warm-taupe mt-0.5">Explore my repositories, side projects, and commits.</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-warm-taupe/50 group-hover:text-accent-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Card>
            </a>

            {/* Chat Card */}
            <a 
              href="#contact"
              className="flex-1 group"
            >
              <Card className="h-full p-6 bg-warm-cream border border-warm-beige hover:border-accent-gold/40 hover:bg-warm-light rounded-2xl transition-all duration-300 flex items-center justify-between group-hover:shadow-sm cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-accent-blue/40 text-warm-charcoal group-hover:scale-105 transition-transform duration-300">
                    <MessageSquare size={22} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-warm-charcoal group-hover:text-accent-gold transition-colors">Drop an Inquiry</h4>
                    <p className="text-xs text-warm-taupe mt-0.5">Say hello, send a question, or leave some feedback.</p>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-warm-taupe/50 group-hover:text-accent-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Card>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeLinks;
