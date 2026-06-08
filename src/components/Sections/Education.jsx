import React from 'react';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import { MapPin, GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Brainware university",
    location: "Barasat, West bengal",
    period: "2022- 2026",
    desc: "Focusing on Core Computer Science elements (Data Structures, Algorithms, OOP, Database Systems) alongside specialized domains such as Machine Learning models, Neural Networks, Natural Language Processing, and Data Analysis."
  },
  {
    degree: "Senior Secondary School (Class XII)",
    institution: "R.L.S.Y College",
    location: "Aurangabad, Bihar",
    period: "2020 - 2022",
    desc: "Completed secondary education specializing in Physics, Chemistry, and Mathematics. Maintained active participation in science exhibition projects and technical debates."
  },
  {
    degree: "High School (Class X)",
    institution: "Government high school",
    location: "Aurangabad, Bihar",
    period: "2018 - 2019",
    desc: "Acquired fundamental education in Mathematics, Sciences, and basic Computer applications. Graduated with honors."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 bg-warm-light">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-warm-taupe block mb-2">Learning Path</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-warm-charcoal">Education</h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Timeline container */}
        <div className="relative border-l border-warm-beige/80 ml-4 md:ml-32 space-y-12">
          {educationData.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
              {/* Date indicator for desktop on the left */}
              <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-goldDark bg-accent-gold/10 border border-accent-gold/20 px-2.5 py-1 rounded-lg">
                  {item.period}
                </span>
              </div>

              {/* Timeline dot / Icon */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="absolute -left-4 top-1.5 w-8 h-8 rounded-full bg-warm-cream border-2 border-accent-gold flex items-center justify-center text-accent-gold font-bold shadow-sm group-hover:bg-accent-gold group-hover:text-warm-light transition-colors duration-300"
              >
                <GraduationCap size={14} />
              </motion.div>

              {/* Card wrapper */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <Card className="p-6 md:p-8 border-warm-beige/50 bg-warm-light rounded-3xl warm-shadow relative">
                  {/* Date indicator for mobile */}
                  <div className="md:hidden inline-block mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-goldDark bg-accent-gold/10 border border-accent-gold/20 px-2.5 py-1 rounded-lg">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-warm-charcoal leading-snug">
                    {item.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-warm-taupe">
                    <span className="flex items-center gap-1 font-medium text-warm-charcoal/90">
                      {item.institution}
                    </span>
                    <span className="hidden sm:inline text-warm-beige/60">•</span>
                    <span className="flex items-center gap-1 text-xs text-warm-taupe/80">
                      <MapPin size={12} className="text-warm-taupe/70" /> {item.location}
                    </span>
                  </div>

                  <p className="text-sm text-warm-charcoal/80 mt-4 leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
