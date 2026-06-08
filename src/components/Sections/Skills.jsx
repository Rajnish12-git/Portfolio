import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../UI/Card';
import Badge from '../UI/Badge';
import { Terminal, Laptop, Database, HardDrive, Cpu, Star, Play, Settings, RefreshCw, Send, Check } from 'lucide-react';

const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: <Terminal size={22} />,
    desc: "Structuring high-performance algorithms, system operations, scripting, and OOP structures.",
    skills: [
      { name: "C++", level: 95, note: "Primary solving language for DSA problems" },
      { name: "C", level: 80, note: "Familiarity with memory buffers & threads" },
      { name: "Python", level: 85, note: "Machine learning workflows and scripting" }
    ]
  },
  {
    id: "web",
    title: "Web Technologies",
    icon: <Laptop size={22} />,
    desc: "Structuring clean full-stack layouts, modern streaming frontends, and responsive interfaces.",
    skills: [
      { name: "React.js", level: 90, note: "Component architectures and state hooks" },
      { name: "Next.js", level: 85, note: "Server rendering, streaming and API gates" },
      { name: "JavaScript", level: 90, note: "ES6 patterns, asynchronous flows" },
      { name: "HTML5 & CSS3", level: 95, note: "Flexbox, Grid systems, Tailwinds" }
    ]
  },
  {
    id: "backend",
    title: "Databases & Cloud",
    icon: <Database size={22} />,
    desc: "Structuring relational database nodes and managing cloud synchronization states.",
    skills: [
      { name: "MySQL", level: 80, note: "Relational query optimizations, triggers" },
      { name: "Firebase", level: 85, note: "Cloud database synchronization & auth" }
    ]
  },
  {
    id: "core",
    title: "Computer Science Core",
    icon: <HardDrive size={22} />,
    desc: "Deep core foundations in software execution cycles, object architectures, and hardware storage.",
    skills: [
      { name: "Data Structures & Algorithms", level: 90, note: "Quicksorts, dynamic planning, trees, graphs" },
      { name: "OOP (Object Oriented)", level: 88, note: "Encapsulation, inheritance, design patterns" },
      { name: "DBMS", level: 80, note: "Indexing, query plans, transactional safety" },
      { name: "Operating Systems", level: 82, note: "Scheduling, memory maps, processes" }
    ]
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    icon: <Cpu size={22} />,
    desc: "Building Natural Language Processing models, text classification, and data analysis pipelines.",
    skills: [
      { name: "NLP", level: 85, note: "Word embeddings, TF-IDF vectorizers" },
      { name: "Machine Learning", level: 80, note: "Supervised classification, regression" },
      { name: "Data Analysis", level: 85, note: "Pandas, NumPy matrix structures" }
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  // --- PLAYGROUND WIDGET STATES ---
  // Languages Benchmark
  const [benchRunning, setBenchRunning] = useState(false);
  const [benchSpeeds, setBenchSpeeds] = useState(null);

  // Web Layout
  const [flexDir, setFlexDir] = useState('row');
  const [justify, setJustify] = useState('between');

  // DB Query
  const [dbType, setDbType] = useState(null); // 'mysql' or 'firebase'
  const [dbData, setDbData] = useState(null);
  const [dbLoading, setDbLoading] = useState(false);

  // DSA Sort
  const [sortArray, setSortArray] = useState([12, 3, 9, 21, 5]);
  const [sorting, setSorting] = useState(false);

  // AI Sentiment
  const [aiText, setAiText] = useState("");
  const [aiResult, setAiResult] = useState(null);
  const [aiAnalyzing, setAiAnalyzing] = useState(false);

  const selectedCategory = skillCategories.find(cat => cat.id === activeCategory);

  // Benchmark logic
  const runBenchmark = () => {
    setBenchRunning(true);
    setBenchSpeeds(null);
    setTimeout(() => {
      setBenchSpeeds({
        cpp: "0.012ms (Optimized Compilation)",
        c: "0.009ms (Direct Kernel Execution)",
        py: "0.482ms (Standard Interpreter)"
      });
      setBenchRunning(false);
    }, 1200);
  };

  // DB logic
  const runDbQuery = (type) => {
    setDbType(type);
    setDbLoading(true);
    setDbData(null);
    setTimeout(() => {
      if (type === 'mysql') {
        setDbData([
          { id: 1, name: "dsa_benchmark", status: "INDEXED", size: "124 KB" },
          { id: 2, name: "user_sessions", status: "CLEAN", size: "1.4 MB" }
        ]);
      } else {
        setDbData({
          triage_models: { active: "model_v1.bin", confidence: 0.974 },
          status: "realtime_synced"
        });
      }
      setDbLoading(false);
    }, 1000);
  };

  // Bubble Sort Simulation
  const runBubbleSort = () => {
    if (sorting) return;
    setSorting(true);
    let arr = [...sortArray];
    let steps = [];
    
    // Simple bubble sort trace
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          steps.push([...arr]);
        }
      }
    }

    if (steps.length === 0) {
      setSorting(false);
      return;
    }

    let stepIdx = 0;
    const interval = setInterval(() => {
      setSortArray(steps[stepIdx]);
      stepIdx++;
      if (stepIdx >= steps.length) {
        clearInterval(interval);
        setSorting(false);
      }
    }, 400);
  };

  // Reset DSA array
  const resetSortArray = () => {
    setSortArray([12, 3, 9, 21, 5]);
    setSorting(false);
  };

  // AI Sentiment logic
  const runAiSentiment = (text) => {
    const target = text || aiText;
    if (!target.trim()) return;

    setAiAnalyzing(true);
    setAiResult(null);

    setTimeout(() => {
      const clean = target.toLowerCase();
      let rating = "Neutral";
      let score = "50%";
      let color = "text-accent-gold";

      if (clean.includes("love") || clean.includes("great") || clean.includes("amazing") || clean.includes("awesome") || clean.includes("good")) {
        rating = "Highly Positive";
        score = "98.7%";
        color = "text-[#6b9e54]";
      } else if (clean.includes("bad") || clean.includes("slow") || clean.includes("boring") || clean.includes("generic")) {
        rating = "Critical/Negative";
        score = "89.2%";
        color = "text-[#d43f3a]";
      }

      setAiResult({ rating, score, color, original: target });
      setAiAnalyzing(false);
      setAiText("");
    }, 1000);
  };

  // Reset child widgets on tab change
  useEffect(() => {
    setBenchSpeeds(null);
    setDbData(null);
    setDbType(null);
    setAiResult(null);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 px-6 bg-warm-cream relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-warm-taupe block mb-2">My Toolbox</span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-warm-charcoal">Skills &amp; Interactive Playground</h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Codex Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Index Tabs (Left Column - 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-warm-light border-accent-gold shadow-md translate-x-1 text-accent-goldDark'
                    : 'bg-warm-light/40 border-warm-beige/60 text-warm-charcoal/80 hover:bg-warm-cream/50 hover:translate-x-0.5'
                }`}
              >
                <div className={`p-2.5 rounded-xl border transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-accent-gold/15 border-accent-gold/20 text-accent-goldDark'
                    : 'bg-warm-cream border-warm-beige text-warm-taupe'
                }`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm tracking-tight">{cat.title}</h3>
                  <span className="text-[10px] text-warm-taupe/80 font-mono">
                    Interactive Playground Page
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Notebook Codex Page (Right Column - 8 Cols) */}
          <div className="lg:col-span-8 flex">
            <Card hoverEffect={false} className="p-8 md:p-10 bg-warm-cream border border-warm-beige rounded-[2.5rem] flex flex-col justify-between w-full relative overflow-hidden shadow-md">
              {/* Binder ring hole designs on left edge */}
              <div className="absolute left-4 top-0 bottom-0 w-2 flex flex-col justify-around py-8 pointer-events-none opacity-40 select-none">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-warm-beige border border-warm-taupe/20 shadow-inner" />
                ))}
              </div>

              <div className="pl-6 space-y-6 relative z-10">
                <div className="flex items-center justify-between border-b border-warm-beige pb-4">
                  <h3 className="text-2xl font-serif font-bold text-warm-charcoal flex items-center gap-2">
                    {selectedCategory.title}
                  </h3>
                  <span className="text-xs font-mono text-warm-taupe/60 select-none">PAGE_{selectedCategory.id.toUpperCase()}</span>
                </div>

                {/* Skill Lists with animated bar metrics */}
                <div className="space-y-4">
                  {selectedCategory.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold text-warm-charcoal font-sans">
                        <span>{skill.name} <span className="text-[10px] font-normal text-warm-taupe">({skill.note})</span></span>
                        <span className="font-mono text-accent-goldDark">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-warm-light border border-warm-beige/60 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-accent-gold rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DYNAMIC INTERACTIVE PLAYGROUND WIDGETS */}
              <div className="pl-6 mt-8 pt-6 border-t border-warm-beige/60 relative z-10 flex-1 flex flex-col justify-end">
                <div className="p-5 bg-warm-light border border-warm-beige/80 rounded-2xl shadow-xs min-h-[170px] flex flex-col justify-between">
                  
                  {/* WIDGET 1: LANGUAGES (Benchmark) */}
                  {activeCategory === 'languages' && (
                    <div className="space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent-goldDark flex items-center gap-1"><Settings size={10} className="animate-spin" style={{ animationDuration: '6s' }} /> Execution Benchmark</span>
                        <p className="text-xs text-warm-taupe leading-relaxed">Compute average loop speed of 1,000,000 summation iterations in parallel threads.</p>
                      </div>
                      
                      {benchSpeeds ? (
                        <div className="space-y-1.5 font-mono text-[10px] bg-warm-cream/50 p-2.5 rounded-lg border border-warm-beige">
                          <div className="flex justify-between"><span>C++ Execution:</span> <span className="text-[#a2d18b]">{benchSpeeds.cpp}</span></div>
                          <div className="flex justify-between"><span>C Core Kernel:</span> <span className="text-[#a2d18b]">{benchSpeeds.c}</span></div>
                          <div className="flex justify-between"><span>Python Script:</span> <span className="text-accent-gold">{benchSpeeds.py}</span></div>
                        </div>
                      ) : (
                        <div className="text-center py-2">
                          <button
                            onClick={runBenchmark}
                            disabled={benchRunning}
                            className="px-4 py-2 bg-accent-gold hover:bg-accent-goldDark disabled:bg-warm-beige text-warm-light font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer select-none"
                          >
                            {benchRunning ? "Running thread compilers..." : "Run benchmark"}
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {/* WIDGET 2: WEB TECH (Flexbox) */}
                  {activeCategory === 'web' && (
                    <div className="space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent-goldDark flex items-center gap-1"><Settings size={10} /> Flexbox Alignment sandbox</span>
                        <p className="text-xs text-warm-taupe leading-relaxed">Change flex alignment states to see the web DOM container boxes reposition.</p>
                      </div>

                      {/* Interactive CSS Container Simulator */}
                      <div className="flex items-center gap-4 flex-1 mt-2">
                        <div className="flex flex-col gap-2 shrink-0 select-none">
                          <div className="flex flex-col gap-1">
                            <span className="text-[8px] uppercase font-bold text-warm-taupe">Direction</span>
                            <div className="flex gap-1">
                              {['row', 'col'].map(dir => (
                                <button
                                  key={dir}
                                  onClick={() => setFlexDir(dir)}
                                  className={`px-1.5 py-0.5 text-[8px] font-bold uppercase border rounded ${flexDir === dir ? 'bg-accent-gold text-warm-light border-accent-gold' : 'border-warm-beige text-warm-taupe'}`}
                                >
                                  {dir}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[8px] uppercase font-bold text-warm-taupe">Justify</span>
                            <div className="flex gap-1">
                              {['start', 'center', 'between'].map(just => (
                                <button
                                  key={just}
                                  onClick={() => setJustify(just)}
                                  className={`px-1.5 py-0.5 text-[8px] font-bold uppercase border rounded ${justify === just ? 'bg-accent-gold text-warm-light border-accent-gold' : 'border-warm-beige text-warm-taupe'}`}
                                >
                                  {just}
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Flex DOM Simulator box */}
                        <div className="flex-1 h-20 bg-warm-cream/50 border border-warm-beige rounded-xl p-2 relative">
                          <div className={`w-full h-full flex gap-1.5 transition-all duration-500 ease-out ${
                            flexDir === 'row' ? 'flex-row' : 'flex-col'
                          } ${
                            justify === 'start' ? 'justify-start' : justify === 'center' ? 'justify-center' : 'justify-between'
                          }`}>
                            <div className="w-4 h-4 bg-accent-gold/20 border border-accent-gold/60 text-accent-goldDark font-mono text-[9px] flex items-center justify-center rounded-md shrink-0">1</div>
                            <div className="w-4 h-4 bg-[#8C7A6B]/20 border border-[#8C7A6B]/60 text-warm-charcoal font-mono text-[9px] flex items-center justify-center rounded-md shrink-0">2</div>
                            <div className="w-4 h-4 bg-accent-blue/30 border border-accent-blueDark/60 text-warm-taupe font-mono text-[9px] flex items-center justify-center rounded-md shrink-0">3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WIDGET 3: DATABASES (Query Simulator) */}
                  {activeCategory === 'backend' && (
                    <div className="space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent-goldDark flex items-center gap-1"><Settings size={10} /> DB query scanner</span>
                        <p className="text-xs text-warm-taupe leading-relaxed">Query the MySQL schemas or fetch real-time Firebase nodes.</p>
                      </div>

                      <div className="flex gap-2 justify-center py-1">
                        <button
                          onClick={() => runDbQuery('mysql')}
                          disabled={dbLoading}
                          className="px-3 py-1.5 bg-[#2C2520] hover:bg-black text-warm-light text-[10px] uppercase font-bold tracking-wider rounded-lg disabled:opacity-50 select-none cursor-pointer"
                        >
                          SELECT * FROM schemas
                        </button>
                        <button
                          onClick={() => runDbQuery('firebase')}
                          disabled={dbLoading}
                          className="px-3 py-1.5 bg-accent-gold hover:bg-accent-goldDark text-warm-light text-[10px] uppercase font-bold tracking-wider rounded-lg disabled:opacity-50 select-none cursor-pointer"
                        >
                          db.fetchNode('triage')
                        </button>
                      </div>

                      {dbLoading ? (
                        <div className="text-center font-mono text-[9px] text-warm-taupe animate-pulse">Running thread query indexers...</div>
                      ) : dbData ? (
                        <pre className="font-mono text-[9px] bg-warm-cream/50 p-2 border border-warm-beige rounded-lg text-warm-charcoal max-h-[60px] overflow-y-auto overflow-x-auto">
                          {JSON.stringify(dbData, null, 2)}
                        </pre>
                      ) : null}
                    </div>
                  )}

                  {/* WIDGET 4: CORE CS (Sort Array) */}
                  {activeCategory === 'core' && (
                    <div className="space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent-goldDark flex items-center gap-1"><Settings size={10} /> Quicksort Array visualizer</span>
                        <p className="text-xs text-warm-taupe leading-relaxed">Click sort to animate a bubble swap recursion on the integer indices.</p>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <div className="flex gap-1.5 py-1">
                          {sortArray.map((val, valIdx) => (
                            <motion.div
                              key={valIdx}
                              layout
                              className="w-8 h-8 rounded-lg bg-warm-cream border border-warm-beige text-warm-charcoal font-mono font-bold text-xs flex items-center justify-center shadow-xs"
                            >
                              {val}
                            </motion.div>
                          ))}
                        </div>
                        
                        <div className="flex gap-1">
                          <button
                            onClick={runBubbleSort}
                            disabled={sorting}
                            className="px-2.5 py-1.5 bg-accent-gold hover:bg-accent-goldDark disabled:opacity-50 text-warm-light text-[10px] uppercase font-bold tracking-wider rounded-lg select-none cursor-pointer"
                          >
                            {sorting ? "Sorting..." : "Sort"}
                          </button>
                          <button
                            onClick={resetSortArray}
                            disabled={sorting}
                            className="px-2.5 py-1.5 bg-[#8C7A6B]/10 hover:bg-[#8C7A6B]/20 text-[#8C7A6B] text-[10px] uppercase font-bold tracking-wider rounded-lg select-none cursor-pointer"
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* WIDGET 5: AI & ML (Sentiment Analysis) */}
                  {activeCategory === 'ai' && (
                    <div className="space-y-3 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent-goldDark flex items-center gap-1"><Settings size={10} /> NLP sentiment analyzer</span>
                        <p className="text-xs text-warm-taupe leading-relaxed">Select a feedback headline or test your own sentiment mapping classification.</p>
                      </div>

                      <div className="flex gap-1 py-1 overflow-x-auto select-none">
                        {['This is amazing!', 'It feels generic.'].map((phrase, pIdx) => (
                          <button
                            key={pIdx}
                            disabled={aiAnalyzing}
                            onClick={() => runAiSentiment(phrase)}
                            className="text-[8px] bg-warm-cream border border-warm-beige px-2 py-0.5 rounded hover:border-accent-gold whitespace-nowrap cursor-pointer"
                          >
                            {phrase}
                          </button>
                        ))}
                      </div>

                      {aiAnalyzing ? (
                        <div className="text-center font-mono text-[9px] text-warm-taupe animate-pulse">Running NLP tf-idf embeddings...</div>
                      ) : aiResult ? (
                        <div className="flex justify-between items-center bg-[#2C2520] text-[#dfd5ce] p-2 rounded-xl border border-warm-charcoal font-mono text-[9px] overflow-x-auto">
                          <span className="truncate max-w-[150px] mr-2">Input: "{aiResult.original}"</span>
                          <span className="font-bold flex items-center gap-1 text-[#dfd5ce] shrink-0">
                            Classify: <span className={aiResult.color}>{aiResult.rating} ({aiResult.score})</span>
                          </span>
                        </div>
                      ) : null}
                    </div>
                  )}

                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
