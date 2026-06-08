import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../UI/Card';
import { Sparkles, Brain, Code, BookOpen, Quote, Coffee, Bug, Star, Zap, Cpu } from 'lucide-react';

const About = () => {
  const [coffees, setCoffees] = useState(4);
  const [bugs, setBugs] = useState(148);
  const [activeTab, setActiveTab] = useState('mind');

  // Interactive Learning Widget States
  const [nlpStep, setNlpStep] = useState(0);
  const [nlpRunning, setNlpRunning] = useState(false);
  const [rscState, setRscState] = useState('idle'); // 'idle', 'rendering', 'streaming', 'completed'
  const [lbTarget, setLbTarget] = useState('none'); // 'none', 'A', 'B'
  const [lbCount, setLbCount] = useState(0);
  const [bsStep, setBsStep] = useState(0); // 0: idle, 1: check 12, 2: check 23, 3: found
  const [bsRunning, setBsRunning] = useState(false);

  const addCoffee = () => {
    setCoffees(prev => prev + 1);
  };

  const squishBug = () => {
    setBugs(prev => prev + 1);
  };

  const runNlpFF = () => {
    if (nlpRunning) return;
    setNlpRunning(true);
    setNlpStep(1);
    setTimeout(() => {
      setNlpStep(2);
      setTimeout(() => {
        setNlpStep(3);
        setNlpRunning(false);
      }, 500);
    }, 500);
  };

  const runRscStream = () => {
    if (rscState !== 'idle') return;
    setRscState('rendering');
    setTimeout(() => {
      setRscState('streaming');
      setTimeout(() => {
        setRscState('completed');
        setTimeout(() => {
          setRscState('idle');
        }, 1500);
      }, 1000);
    }, 600);
  };

  const runLoadBalancer = () => {
    const nextServer = lbCount % 2 === 0 ? 'A' : 'B';
    setLbTarget(nextServer);
    setLbCount(prev => prev + 1);
    setTimeout(() => {
      setLbTarget('none');
    }, 800);
  };

  const runBinarySearch = () => {
    if (bsRunning) return;
    setBsRunning(true);
    setBsStep(1);
    setTimeout(() => {
      setBsStep(2);
      setTimeout(() => {
        setBsStep(3);
        setBsRunning(false);
      }, 700);
    }, 700);
  };

  return (
    <section id="about" className="py-24 px-6 bg-warm-light/45 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-warm-taupe block mb-2">My Narrative</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-warm-charcoal">About Me</h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bio Notebook Block (7-Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex"
          >
            <Card hoverEffect={false} className="p-8 bg-warm-cream border border-warm-beige rounded-[2.5rem] flex flex-col justify-between w-full relative overflow-hidden group shadow-md">
              {/* Notebook Lines Background effect */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e1b1803_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-50" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-warm-beige pb-4">
                  <h3 className="text-2xl font-serif font-bold text-warm-charcoal flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent-gold" />
                    Developer's Log
                  </h3>
                  <span className="font-mono text-xs text-warm-taupe/70 select-none">SYSTEM_UP_06-08</span>
                </div>

                <div className="space-y-4 font-sans text-sm md:text-base leading-relaxed text-warm-charcoal/90">
                  <p>
                    My journey into technology began with a simple question: <em className="text-accent-goldDark font-semibold">"How does this work?"</em> That early curiosity quickly evolved into a genuine passion for writing code, debugging challenges, and designing algorithms.
                  </p>
                  <p>
                    Currently, I'm focusing my studies on <strong>Artificial Intelligence &amp; Machine Learning</strong>. I love exploring neural network logic, natural language processing models, and building clean web systems. I believe software engineering is about crafting useful tools that solve real human challenges.
                  </p>
                </div>
              </div>

              {/* Story Highlights Tab selector inside card */}
              <div className="mt-8 pt-6 border-t border-warm-beige/60 relative z-10">
                <div className="flex gap-2 mb-4">
                  <button 
                    onClick={() => setActiveTab('mind')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${activeTab === 'mind' ? 'bg-accent-gold/20 text-accent-goldDark' : 'text-warm-taupe hover:bg-warm-beige/30'}`}
                  >
                    Curious Mind
                  </button>
                  <button 
                    onClick={() => setActiveTab('code')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${activeTab === 'code' ? 'bg-accent-gold/20 text-accent-goldDark' : 'text-warm-taupe hover:bg-warm-beige/30'}`}
                  >
                    Builder
                  </button>
                </div>

                <div className="bg-warm-light/40 border border-warm-beige/50 p-4 rounded-2xl min-h-[70px] flex items-center">
                  <p className="text-xs text-warm-taupe leading-relaxed">
                    {activeTab === 'mind' 
                      ? "Driven by a deep curiosity to explore neural networks, machine learning pipelines, and how cognitive compute can shape our digital workspace." 
                      : "Translating mathematical constraints and logic structures into responsive user interfaces and robust algorithmic scripts."}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Interactive Life Stats Widget (5-Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex"
          >
            <Card hoverEffect={false} className="p-8 bg-warm-cream border border-warm-beige rounded-[2.5rem] w-full flex flex-col justify-between shadow-md relative overflow-hidden">
              <div className="space-y-6">
                <h3 className="text-xl font-serif font-bold text-warm-charcoal border-b border-warm-beige pb-3">
                  Live Stats
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {/* Coffee Stat Card */}
                  <div className="p-4 rounded-2xl bg-warm-light border border-warm-beige/65 flex flex-col justify-between gap-4">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-semibold uppercase text-warm-taupe/80">Caffeine</span>
                      <Coffee className="text-accent-gold animate-bounce" size={18} style={{ animationDuration: '4s' }} />
                    </div>
                    <div>
                      <span className="text-2xl font-bold font-serif text-warm-charcoal block">{coffees}</span>
                      <span className="text-[10px] text-warm-taupe/70 font-mono">Cups today</span>
                    </div>
                    <button 
                      onClick={addCoffee}
                      className="w-full py-1.5 bg-accent-gold/10 hover:bg-accent-gold/20 text-accent-goldDark font-semibold text-[10px] uppercase tracking-wider rounded-lg border border-accent-gold/20 transition-all select-none"
                    >
                      + Sip Coffee
                    </button>
                  </div>

                  {/* Bug Squasher Stat Card */}
                  <div className="p-4 rounded-2xl bg-warm-light border border-warm-beige/65 flex flex-col justify-between gap-4">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-semibold uppercase text-warm-taupe/80">Bugs</span>
                      <Bug className="text-accent-gold animate-pulse" size={18} />
                    </div>
                    <div>
                      <span className="text-2xl font-bold font-serif text-warm-charcoal block">{bugs}</span>
                      <span className="text-[10px] text-warm-taupe/70 font-mono">Squashed</span>
                    </div>
                    <button 
                      onClick={squishBug}
                      className="w-full py-1.5 bg-warm-charcoal/5 hover:bg-warm-charcoal/10 text-warm-charcoal font-semibold text-[10px] uppercase tracking-wider rounded-lg border border-warm-beige transition-all select-none"
                    >
                      Squish Bug
                    </button>
                  </div>
                </div>
              </div>

              {/* Extra Stats */}
              <div className="mt-8 space-y-3 pt-6 border-t border-warm-beige/60">
                <div className="flex justify-between text-xs text-warm-taupe font-medium">
                  <span>DSA Solved:</span>
                  <span className="text-warm-charcoal font-semibold font-mono">100+ problems</span>
                </div>
                <div className="flex justify-between text-xs text-warm-taupe font-medium">
                  <span>Build Success Rate:</span>
                  <span className="text-[#a2d18b] font-semibold font-mono">100.0%</span>
                </div>
              </div>
            </Card>
          </motion.div>

        </div>

        {/* Thoughtful Quote Banner
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative py-10 px-8 text-center max-w-3xl mx-auto border-y border-warm-beige"
        >
          <Quote size={36} className="text-accent-gold/20 mx-auto mb-4 rotate-180" />
          <p className="font-serif text-lg md:text-xl italic text-warm-charcoal font-medium leading-relaxed">
            "I believe that software development is more than just writing code for machines; it's about engineering useful tools that make human experiences smoother."
          </p>
          <span className="block mt-3 font-handwritten text-accent-gold text-2xl">— Rajnish</span>
        </motion.div> */}

        {/* Currently Learning Section */}
        <div className="pt-12 border-t border-warm-beige/80">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-6xl mx-auto"
          >
            <h3 className="text-2xl font-serif font-bold text-warm-charcoal flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-gold"></span>
              Currently Learning
            </h3>
            <p className="text-sm text-warm-taupe leading-relaxed">
              I love staying on the edge of software engineering and machine learning. Here are some of the areas I'm actively exploring:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: NLP / Deep Learning */}
              <Card className="p-6 bg-warm-cream border border-warm-beige rounded-[2rem] shadow-sm flex flex-col justify-between min-h-[260px] relative overflow-hidden group hover:shadow-md hover:border-accent-gold/20 transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-goldDark font-mono">Neural Nets</span>
                    <span className="text-[9px] font-mono bg-accent-gold/10 px-2 py-0.5 rounded text-accent-goldDark">65% Progress</span>
                  </div>
                  <h4 className="font-bold text-base text-warm-charcoal font-serif">Deep Learning &amp; NLP</h4>
                  <p className="text-xs text-warm-taupe leading-relaxed">
                    Understanding sequence-to-sequence modeling, attention vectors, and Transformer blocks.
                  </p>
                </div>

                {/* Mini feed forward simulator visualizer */}
                <div className="mt-4 p-3 bg-warm-light border border-warm-beige/60 rounded-xl flex items-center justify-between gap-2 h-16 select-none relative shrink-0">
                  <div className="flex gap-2">
                    {/* Input Nodes */}
                    <div className="flex flex-col justify-between h-8 gap-1">
                      <div className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${nlpStep >= 1 ? 'bg-accent-gold border-accent-gold shadow-md' : 'bg-warm-beige border-warm-taupe/30'}`} />
                      <div className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${nlpStep >= 1 ? 'bg-accent-gold border-accent-gold shadow-md' : 'bg-warm-beige border-warm-taupe/30'}`} />
                    </div>
                    {/* Hidden Nodes */}
                    <div className="flex flex-col justify-between h-8 gap-1">
                      <div className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${nlpStep >= 2 ? 'bg-[#8C7A6B] border-[#8C7A6B] shadow-md' : 'bg-warm-beige border-warm-taupe/30'}`} />
                      <div className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${nlpStep >= 2 ? 'bg-[#8C7A6B] border-[#8C7A6B] shadow-md' : 'bg-warm-beige border-warm-taupe/30'}`} />
                    </div>
                    {/* Output Node */}
                    <div className="flex flex-col justify-center h-8">
                      <div className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${nlpStep >= 3 ? 'bg-[#a2d18b] border-[#a2d18b] shadow-md' : 'bg-warm-beige border-warm-taupe/30'}`} />
                    </div>
                  </div>

                  <button
                    onClick={runNlpFF}
                    disabled={nlpRunning}
                    className="px-2.5 py-1 bg-accent-gold hover:bg-accent-goldDark disabled:bg-warm-beige/50 text-warm-light text-[9px] uppercase font-bold tracking-wider rounded-lg transition-colors cursor-pointer select-none"
                  >
                    {nlpRunning ? "Compiling..." : "Feed Forward"}
                  </button>
                </div>
              </Card>

              {/* Card 2: Next.js Server Components */}
              <Card className="p-6 bg-warm-cream border border-warm-beige rounded-[2rem] shadow-sm flex flex-col justify-between min-h-[260px] relative overflow-hidden group hover:shadow-md hover:border-accent-gold/20 transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-goldDark font-mono">React v19</span>
                    <span className="text-[9px] font-mono bg-[#5D9CEC]/10 px-2 py-0.5 rounded text-[#4A89DC]">80% Progress</span>
                  </div>
                  <h4 className="font-bold text-base text-warm-charcoal font-serif">Next.js 15 &amp; RSC</h4>
                  <p className="text-xs text-warm-taupe leading-relaxed">
                    Mastering server-side rendering, layout streaming, hydration cycles, and Server Actions.
                  </p>
                </div>

                {/* Mini streaming simulation */}
                <div className="mt-4 p-3 bg-warm-light border border-warm-beige/60 rounded-xl flex items-center justify-between gap-2 h-16 select-none shrink-0">
                  <div className="flex-1 flex items-center gap-1.5 font-mono text-[9px]">
                    <div className="px-1.5 py-0.5 bg-warm-cream border border-warm-beige rounded text-warm-charcoal font-bold">RSC</div>
                    <div className="flex-1 flex justify-center overflow-hidden relative h-3 bg-warm-cream/50 border border-warm-beige/40 rounded-full">
                      {rscState === 'streaming' && (
                        <motion.div 
                          className="absolute w-2 h-2 rounded-full bg-accent-gold"
                          animate={{ x: [-20, 40] }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                        />
                      )}
                      {rscState === 'rendering' && <span className="text-[8px] text-accent-gold font-bold scale-90">rendering...</span>}
                      {rscState === 'completed' && <span className="text-[8px] text-[#6b9e54] font-bold scale-90">Loaded!</span>}
                      {rscState === 'idle' && <span className="text-[8px] text-warm-taupe/60 select-none">stream idle</span>}
                    </div>
                    <div className="px-1.5 py-0.5 bg-accent-gold/10 border border-accent-gold/20 rounded text-accent-goldDark font-bold">DOM</div>
                  </div>

                  <button
                    onClick={runRscStream}
                    disabled={rscState !== 'idle'}
                    className="px-2 py-1 bg-accent-gold hover:bg-accent-goldDark disabled:bg-warm-beige/50 text-warm-light text-[9px] uppercase font-bold tracking-wider rounded-lg transition-colors cursor-pointer select-none"
                  >
                    Fetch Page
                  </button>
                </div>
              </Card>

              {/* Card 3: System Design */}
              <Card className="p-6 bg-warm-cream border border-warm-beige rounded-[2rem] shadow-sm flex flex-col justify-between min-h-[260px] relative overflow-hidden group hover:shadow-md hover:border-accent-gold/20 transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-goldDark font-mono">Architecture</span>
                    <span className="text-[9px] font-mono bg-[#8C7A6B]/15 px-2 py-0.5 rounded text-warm-charcoal">50% Progress</span>
                  </div>
                  <h4 className="font-bold text-base text-warm-charcoal font-serif">System Design</h4>
                  <p className="text-xs text-warm-taupe leading-relaxed">
                    Studying scalable API structures, caching distribution, load balancers, and db partitions.
                  </p>
                </div>

                {/* Load distributor simulator */}
                <div className="mt-4 p-3 bg-warm-light border border-warm-beige/60 rounded-xl flex items-center justify-between gap-2 h-16 select-none shrink-0">
                  <div className="flex flex-col justify-center items-center gap-1 font-mono text-[8px] w-20 shrink-0">
                    <span className="text-warm-taupe">Load Balancer</span>
                    <span className="px-1 py-0.5 bg-warm-cream border border-warm-beige rounded font-bold text-accent-goldDark">Requests: {lbCount}</span>
                  </div>

                  <div className="flex-1 flex flex-col justify-between h-full py-1 gap-1">
                    <div className={`px-1 rounded text-center transition-all duration-300 text-[8px] font-bold ${lbTarget === 'A' ? 'bg-[#a2d18b] text-[#558641] border border-[#a2d18b]' : 'bg-warm-cream/50 text-warm-taupe border border-warm-beige'}`}>Server A</div>
                    <div className={`px-1 rounded text-center transition-all duration-300 text-[8px] font-bold ${lbTarget === 'B' ? 'bg-[#a2d18b] text-[#558641] border border-[#a2d18b]' : 'bg-warm-cream/50 text-warm-taupe border border-warm-beige'}`}>Server B</div>
                  </div>

                  <button
                    onClick={runLoadBalancer}
                    disabled={lbTarget !== 'none'}
                    className="px-2 py-1 bg-accent-gold hover:bg-accent-goldDark disabled:bg-warm-beige/50 text-warm-light text-[9px] uppercase font-bold tracking-wider rounded-lg transition-colors cursor-pointer select-none shrink-0"
                  >
                    Request
                  </button>
                </div>
              </Card>

              {/* Card 4: DSA & Optimization */}
              <Card className="p-6 bg-warm-cream border border-warm-beige rounded-[2rem] shadow-sm flex flex-col justify-between min-h-[260px] relative overflow-hidden group hover:shadow-md hover:border-accent-gold/20 transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-goldDark font-mono">Algorithms</span>
                    <span className="text-[9px] font-mono bg-accent-gold/10 px-2 py-0.5 rounded text-accent-goldDark">90% Progress</span>
                  </div>
                  <h4 className="font-bold text-base text-warm-charcoal font-serif">DSA &amp; Optimization</h4>
                  <p className="text-xs text-warm-taupe leading-relaxed">
                    Solving algorithmic complexities, graph traversals, and optimal tree indexes.
                  </p>
                </div>

                {/* Binary Search simulator visualizer */}
                <div className="mt-4 p-3 bg-warm-light border border-warm-beige/60 rounded-xl flex items-center justify-between gap-2 h-16 select-none shrink-0 relative overflow-hidden">
                  <div className="flex flex-col gap-1 flex-1">
                    <div className="flex gap-1 justify-center">
                      {[2, 5, 8, 12, 16, 23, 38].map((val, idx) => {
                        let isMiddle = (bsStep === 1 && idx === 3) || (bsStep === 2 && idx === 5) || (bsStep === 3 && idx === 5);
                        let isFound = bsStep >= 2 && idx === 5;
                        return (
                          <div 
                            key={idx} 
                            className={`w-3.5 h-5 rounded text-[8px] font-mono font-bold flex items-center justify-center border transition-all duration-300 ${
                              isFound ? 'bg-[#a2d18b] border-[#a2d18b] text-[#558641] shadow-xs' :
                              isMiddle ? 'bg-accent-gold/20 border-accent-gold text-accent-goldDark' :
                              'bg-warm-cream border-warm-beige text-warm-taupe'
                            }`}
                          >
                            {val}
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-[8px] font-mono text-center text-warm-taupe truncate h-2.5">
                      {bsStep === 1 && "Check mid index 3: 12 < 23 ➔ Right"}
                      {bsStep === 2 && "Check mid index 5: 23 == 23 ➔ Found!"}
                      {bsStep === 3 && "✔ Found in 2 steps!"}
                      {bsStep === 0 && "Search target: 23"}
                    </div>
                  </div>

                  <button
                    onClick={runBinarySearch}
                    disabled={bsRunning}
                    className="px-2 py-1 bg-accent-gold hover:bg-accent-goldDark disabled:bg-warm-beige/50 text-warm-light text-[9px] uppercase font-bold tracking-wider rounded-lg transition-colors cursor-pointer select-none shrink-0"
                  >
                    Search
                  </button>
                </div>
              </Card>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
