import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../UI/Button';
import { Play, RotateCcw, Terminal as TermIcon, FileCode, CheckCircle2 } from 'lucide-react';

const terminalScripts = {
  model: [
    { text: ">>> import torch", type: "input" },
    { text: ">>> import torch.nn as nn", type: "input" },
    { text: ">>> device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')", type: "input" },
    { text: "Using device: CUDA (NVIDIA GeForce RTX)", type: "info" },
    { text: "Loading dataset: 12,500 healthcare query samples...", type: "info" },
    { text: "Initializing Transformer architecture...", type: "info" },
    { text: "Epoch 1/5 [======>] Loss: 0.654, Val Acc: 74.2%", type: "progress" },
    { text: "Epoch 2/5 [======>] Loss: 0.412, Val Acc: 85.8%", type: "progress" },
    { text: "Epoch 3/5 [======>] Loss: 0.281, Val Acc: 91.3%", type: "progress" },
    { text: "Epoch 4/5 [======>] Loss: 0.179, Val Acc: 95.1%", type: "progress" },
    { text: "Epoch 5/5 [======>] Loss: 0.108, Val Acc: 97.4%", type: "progress" },
    { text: "✔ Training complete. Saving weights to model_v1.bin...", type: "success" }
  ],
  dsa: [
    { text: "$ g++ -O3 -std=c++17 dsa_solve.cpp -o solve", type: "input" },
    { text: "$ ./solve --run-tests --verbose", type: "input" },
    { text: "Initializing Dual-Pivot Quicksort test benchmark...", type: "info" },
    { text: "Test Case 1/100 (Array Size = 10): PASS (0.01ms)", type: "test-pass" },
    { text: "Test Case 2/100 (Array Size = 1000): PASS (0.15ms)", type: "test-pass" },
    { text: "Test Case 3/100 (Array Size = 100000): PASS (8.42ms)", type: "test-pass" },
    { text: "Running efficiency comparison: Quicksort vs Mergesort", type: "info" },
    { text: "Quicksort: Avg O(N log N) - Completed in 12.8ms", type: "info" },
    { text: "Mergesort: Avg O(N log N) - Completed in 14.5ms", type: "info" },
    { text: "✔ All 100 test cases passed successfully. Complexity: O(N log N)", type: "success" }
  ]
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState('model');
  const [consoleLines, setConsoleLines] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [scriptIndex, setScriptIndex] = useState(0);

  // Trigger running script
  const startScript = () => {
    if (isRunning) return;
    setIsRunning(true);
    setConsoleLines([]);
    setScriptIndex(0);
  };

  useEffect(() => {
    if (!isRunning) return;
    const lines = terminalScripts[activeTab];
    if (scriptIndex < lines.length) {
      const delay = lines[scriptIndex].type === 'input' ? 400 : 250;
      const timer = setTimeout(() => {
        setConsoleLines(prev => [...prev, lines[scriptIndex]]);
        setScriptIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [isRunning, scriptIndex, activeTab]);

  // Handle tab switch
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsRunning(false);
    setConsoleLines([]);
    setScriptIndex(0);
  };

  // Run initial script once on mount
  useEffect(() => {
    startScript();
  }, [activeTab]);

  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 pb-20 px-6 relative overflow-hidden bg-warm-cream">
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b1802_1px,transparent_1px),linear-gradient(to_bottom,#1e1b1802_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent-blue/25 rounded-full filter blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-gold/10 rounded-full filter blur-3xl -z-10 animate-pulse" style={{ animationDuration: '12s' }}></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full relative z-10">
        {/* Left Typography Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <div className="space-y-4">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-accent-goldDark bg-accent-gold/10 border border-accent-gold/25">
              Available for Opportunities
            </span>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-warm-charcoal font-serif leading-tight relative">
              Hi, I'm <span className="relative inline-block text-warm-charcoal">
                Rajnish Kumar
                {/* SVG Underline Highlight */}
                <svg viewBox="0 0 200 20" fill="none" className="absolute left-0 -bottom-2 w-full h-3">
                  <motion.path
                    d="M5 15C50 5 150 5 195 15"
                    stroke="#d4ac74"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                  />
                </svg>
              </span>
            </h1>

            <p className="text-xl font-medium text-warm-taupe max-w-lg leading-relaxed pt-2">
              I code smart systems, solve complex algorithms, and train machine learning models.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            <Button variant="secondary" href="#projects" className="gap-2 px-7 py-3.5 shadow-md hover:shadow-lg rounded-2xl border border-accent-goldDark/20 font-semibold">
              Explore Projects <Play size={16} />
            </Button>
            <Button variant="outline" href="/public/RajnishKumar_resume.pdf" className="gap-2 px-7 py-3.5 hover:bg-warm-beige/35 border-warm-taupe/20 font-semibold rounded-2xl">
              Get Resume
            </Button>
          </div>

          {/* Sparkles / Highlights */}
          <div className="hidden sm:flex items-center gap-2 mt-4 text-xs font-semibold uppercase tracking-wider text-warm-taupe/80">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-ping"></span>
            <span>Active C++ solver</span>
            <span className="mx-2 text-warm-beige">•</span>
            <span>AI Symptom Bot Creator</span>
          </div>

          {/* Quick handwritten callout */}
          <div className="hidden lg:block relative mt-4">
            <span className="font-handwritten text-accent-gold text-2xl rotate-6 inline-block select-none transform translate-x-12 translate-y-2 animate-bounce">
              Try running a code sandbox! ↗
            </span>
          </div>
        </motion.div>

        {/* Right Sandbox Terminal Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          {/* Terminal Console Mock */}
          <div className="w-full bg-[#241F1C] rounded-[2rem] border border-warm-charcoal/20 shadow-2xl overflow-hidden flex flex-col h-[400px]">
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#1e1917] border-b border-[#2d2623] shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#a09187] font-mono select-none">
                <TermIcon size={12} /> dev_sandbox.sh
              </div>
              <div className="w-10"></div> {/* Spacer to center title */}
            </div>

            {/* Terminal Tab Bar */}
            <div className="flex bg-[#1e1917] border-b border-[#2d2623] text-xs font-mono shrink-0">
              <button 
                onClick={() => handleTabChange('model')}
                disabled={isRunning}
                className={`flex items-center gap-2 px-5 py-3 border-r border-[#2d2623] transition-colors ${activeTab === 'model' ? 'bg-[#241F1C] text-accent-gold font-semibold' : 'text-[#8c7e75] hover:text-[#c4b9b0] disabled:opacity-50'}`}
              >
                <FileCode size={13} /> train_model.py
              </button>
              <button 
                onClick={() => handleTabChange('dsa')}
                disabled={isRunning}
                className={`flex items-center gap-2 px-5 py-3 border-r border-[#2d2623] transition-colors ${activeTab === 'dsa' ? 'bg-[#241F1C] text-accent-gold font-semibold' : 'text-[#8c7e75] hover:text-[#c4b9b0] disabled:opacity-50'}`}
              >
                <FileCode size={13} /> optimize_dsa.cpp
              </button>
              
              <div className="flex-1 flex justify-end items-center px-4">
                <button
                  onClick={startScript}
                  disabled={isRunning}
                  className="flex items-center gap-1.5 px-3 py-1 bg-accent-gold/10 hover:bg-accent-gold/20 disabled:bg-[#1e1917] disabled:text-[#8c7e75] disabled:border-transparent text-accent-gold rounded-lg border border-accent-gold/30 transition-colors text-[10px] font-semibold"
                >
                  {isRunning ? (
                    <>Running...</>
                  ) : (
                    <>
                      <Play size={10} /> Run Code
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Terminal Output Body */}
            <div className="flex-1 p-6 font-mono text-sm overflow-y-auto text-[#dfd5ce] space-y-2 flex flex-col justify-start">
              {consoleLines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`leading-relaxed whitespace-pre-wrap ${
                    line.type === 'input' ? 'text-[#f2e3cb] font-semibold' :
                    line.type === 'success' ? 'text-[#a2d18b] font-semibold' :
                    line.type === 'progress' ? 'text-accent-gold/95' :
                    line.type === 'test-pass' ? 'text-[#a2d18b]/80 text-xs' :
                    'text-[#a8998f] text-xs'
                  }`}
                >
                  {line.text}
                </motion.div>
              ))}
              
              {/* Blinking Cursor */}
              {!isRunning && consoleLines.length === 0 && (
                <div className="text-xs text-[#8c7e75] italic select-none">
                  Console idle. Click "Run Code" above to execute.
                </div>
              )}

              {isRunning && (
                <span className="inline-block w-2 h-4 bg-accent-gold animate-pulse align-middle ml-1" />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
