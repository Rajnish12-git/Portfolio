import React from 'react';
import { motion } from 'framer-motion';
import Card from '../UI/Card';
import { Award, Trophy, Code2 } from 'lucide-react';

const achievements = [
  {
    icon: <Code2 className="text-accent-gold" size={28} />,
    title: "100+ DSA Problems Solved",
    subtitle: "LeetCode & GeeksforGeeks",
    desc: "Strengthened core problem-solving methodologies, analyzing algorithm complexities, and writing optimal solutions daily."
  },
  {
    icon: <Trophy className="text-accent-gold" size={28} />,
    title: "Coding Contests & Hackathons",
    subtitle: "Active Competitor",
    desc: "Participated in local hackathons and online speed-coding platforms, collaborating on rapid prototyping and debugging under time constraints."
  },
  {
    icon: <Award className="text-accent-gold" size={28} />,
    title: "Extempore Winner",
    subtitle: "Public Speaking Award",
    desc: "Achieved top positions in extempore speech events, demonstrating articulation, quick structural thinking, and communication skills."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-6 bg-warm-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-warm-taupe block mb-2">Milestones</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-warm-charcoal">Achievements</h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card className="h-full flex flex-col items-center text-center p-8 border-warm-beige bg-warm-light rounded-[2rem] warm-shadow hover:border-accent-gold/40 hover:shadow-md transition-all duration-300 relative group overflow-hidden">
                {/* Subtle Decorative Number Backdrop */}
                <span className="absolute -top-4 -right-2 font-serif text-8xl font-black text-warm-beige/35 select-none transition-colors group-hover:text-accent-gold/10">
                  0{idx + 1}
                </span>

                {/* Circular Icon Container */}
                <div className="p-4.5 rounded-2xl bg-warm-cream border border-warm-beige/85 w-fit mb-6 group-hover:scale-110 group-hover:border-accent-gold/30 transition-all duration-300 relative z-10">
                  {ach.icon}
                </div>
                
                <h3 className="font-serif font-bold text-xl text-warm-charcoal mb-1 relative z-10 group-hover:text-accent-gold transition-colors">
                  {ach.title}
                </h3>
                
                <span className="text-xs font-semibold uppercase tracking-wider text-accent-goldDark mb-4 relative z-10 block">
                  {ach.subtitle}
                </span>
                
                <p className="text-sm text-warm-taupe leading-relaxed relative z-10">
                  {ach.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
