import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card from "../UI/Card";
import Badge from "../UI/Badge";
import Button from "../UI/Button";
import {
  Github,
  ExternalLink,
  Send,
  Compass,
  Search,
  MapPin,
  AlertCircle,
  CheckCircle,
  RefreshCw,
} from "lucide-react";

const Projects = () => {
  // Simulator State: Chatbot
  const [chatMessages, setChatMessages] = useState([
    {
      text: "Hello! I am your AI Health assistant. What symptom are you experiencing?",
      sender: "bot",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isBotTyping, setIsBotTyping] = useState(false);

  // Simulator State: Fake News
  const [newsInput, setNewsInput] = useState("");
  const [newsResult, setNewsResult] = useState(null);
  const [isScanningNews, setIsScanningNews] = useState(false);

  // Simulator State: Tour Selector (Bharat Darshan)
  const [activeRegion, setActiveRegion] = useState("north");

  const tourRegions = {
    north: {
      title: "Golden Triangle & Ganges",
      route: "Delhi ➔ Agra ➔ Jaipur ➔ Varanasi",
      duration: "6 Days",
      spots: ["Taj Mahal", "Hawa Mahal", "Ganga Aarti"],
    },
    south: {
      title: "Backwaters & Empires",
      route: "Kochi ➔ Alleppey ➔ Hampi ➔ Madurai",
      duration: "8 Days",
      spots: ["Kerala Houseboat", "Virupaksha Temple", "Meenakshi Temple"],
    },
    west: {
      title: "Royal Heritage & Dunes",
      route: "Mumbai ➔ Udaipur ➔ Jaisalmer ➔ Ajanta",
      duration: "7 Days",
      spots: ["Lake Palace", "Desert Safari", "Ellora Caves"],
    },
  };

  // Chatbot logic
  const handleSendChat = (text) => {
    const query = text || chatInput;
    if (!query.trim()) return;

    // Add user message
    setChatMessages((prev) => [...prev, { text: query, sender: "user" }]);
    setChatInput("");
    setIsBotTyping(true);

    // AI Response Simulation
    setTimeout(() => {
      let response =
        "I'm here to offer general guidelines. For specific medical concerns, please consult a professional.";
      const cleanQuery = query.toLowerCase();

      if (cleanQuery.includes("headache")) {
        response =
          "Please stay hydrated and rest in a quiet, dark room. If it persists, consider consulting a healthcare professional.";
      } else if (
        cleanQuery.includes("fever") ||
        cleanQuery.includes("temperature")
      ) {
        response =
          "Monitor your temperature closely. Stay rested, drink fluids, and seek medical attention if it exceeds 101°F.";
      } else if (cleanQuery.includes("cold") || cleanQuery.includes("cough")) {
        response =
          "Warm liquids, honey, steam inhalation, and plenty of rest can help relieve symptoms. Get well soon!";
      }

      setChatMessages((prev) => [...prev, { text: response, sender: "bot" }]);
      setIsBotTyping(false);
    }, 1000);
  };

  // Fake News logic
  const handleVerifyNews = (headline) => {
    const query = headline || newsInput;
    if (!query.trim()) return;

    setIsScanningNews(true);
    setNewsResult(null);

    setTimeout(() => {
      const clean = query.toLowerCase();
      let rating = "Unverified Source";
      let confidence = "52.4%";
      let variant = "warning";
      let details =
        "Insufficient baseline data. The algorithm flags this source as low-authority or unverified.";

      if (
        clean.includes("mars") ||
        clean.includes("alien") ||
        clean.includes("gold")
      ) {
        rating = "Fake News Flags";
        confidence = "94.8% Misinformation";
        variant = "danger";
        details =
          "Misleading headline structure detected. AI NLP models indicate clickbait pattern matching.";
      } else if (
        clean.includes("library") ||
        clean.includes("school") ||
        clean.includes("expansion")
      ) {
        rating = "Verified Source";
        confidence = "98.2% Credibility";
        variant = "success";
        details =
          "Source cross-reference matches local municipal declarations and official state releases.";
      }

      setNewsResult({ rating, confidence, variant, details, headline: query });
      setIsScanningNews(false);
    }, 1200);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-warm-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-warm-taupe block mb-2">
            My Sandbox Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-warm-charcoal">
            Interactive Projects
          </h2>
          <div className="w-12 h-1 bg-accent-gold mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Bharat Darshan */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex"
          >
            <Card className="flex flex-col h-full overflow-hidden p-0 border-warm-beige bg-warm-light rounded-[2rem] warm-shadow flex-1">
              {/* Browser Shell with Interactive Tour */}
              <div className="w-full aspect-[16/10] bg-warm-beige/20 border-b border-warm-beige/40 overflow-hidden relative group flex flex-col">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-warm-beige/40 border-b border-warm-beige/30 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                  <div className="flex-1 max-w-[160px] mx-auto bg-warm-light/75 rounded-md py-0.5 px-2 text-[10px] text-warm-taupe/80 font-mono text-center truncate border border-warm-beige/25 select-none">
                    bharat-darshan.dev
                  </div>
                </div>

                {/* Tour Selector Area */}
                <div className="flex-1 p-4 bg-warm-cream flex flex-col justify-between select-none">
                  {/* Selector tabs */}
                  <div className="flex justify-center gap-2">
                    {["north", "south", "west"].map((region) => (
                      <button
                        key={region}
                        onClick={() => setActiveRegion(region)}
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border transition-all ${activeRegion === region ? "bg-accent-gold text-warm-light border-accent-gold" : "border-warm-beige text-warm-taupe hover:bg-warm-beige/20"}`}
                      >
                        {region}
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Tour Details Output */}
                  <div className="bg-warm-light/95 border border-warm-beige p-3 rounded-xl mt-3 flex-1 flex flex-col justify-center space-y-1.5 shadow-sm">
                    <span className="text-[11px] font-bold text-accent-goldDark font-serif uppercase tracking-wider flex items-center gap-1">
                      <Compass
                        size={11}
                        className="animate-spin"
                        style={{ animationDuration: "6s" }}
                      />{" "}
                      {tourRegions[activeRegion].title}
                    </span>
                    <div className="text-xs font-semibold text-warm-charcoal truncate">
                      {tourRegions[activeRegion].route}
                    </div>
                    <div className="text-[10px] text-warm-taupe">
                      Duration: {tourRegions[activeRegion].duration}
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {tourRegions[activeRegion].spots.map((spot, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[9px] px-1.5 py-0.5 rounded bg-warm-beige text-warm-charcoal/80 border border-warm-beige/80"
                        >
                          {spot}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info & Description */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-warm-charcoal leading-tight hover:text-accent-gold transition-colors">
                    Bharat Darshan
                  </h3>
                  <p className="text-xs text-warm-taupe leading-relaxed">
                    A tourism exploration platform showcasing India's cultural
                    heritage, monuments, and regions. Interactive itineraries
                    and responsive planning grids.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["React.js",'Next.js', "Tailwind CSS", "Firebase", "Maps API"].map(
                    (tag, tIdx) => (
                      <Badge
                        key={tIdx}
                        variant="default"
                        className="text-[10px] px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ),
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    href="https://github.com/Rajnish12-git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 gap-1.5 py-2 px-3 text-xs rounded-xl border-warm-taupe/20"
                  >
                    <Github size={13} /> Code
                  </Button>
                  <Button
                    variant="secondary"
                    href="https://web-bharat-darshan.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 gap-1.5 py-2 px-3 text-xs rounded-xl"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 2: AI Healthcare Chatbot */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex"
          >
            <Card className="flex flex-col h-full overflow-hidden p-0 border-warm-beige bg-warm-light rounded-[2rem] warm-shadow flex-1">
              {/* Browser Shell with Live Chat Simulator */}
              <div className="w-full aspect-[16/10] bg-[#241F1C] border-b border-warm-charcoal/30 overflow-hidden relative group flex flex-col">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1e1917] border-b border-[#2d2623] shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                  <div className="flex-1 max-w-[160px] mx-auto bg-[#241F1C] rounded-md py-0.5 px-2 text-[10px] text-[#a09187] font-mono text-center truncate border border-[#2d2623] select-none">
                    healthcare-chatbot.ai
                  </div>
                </div>

                {/* Dialog Body */}
                <div className="flex-1 p-3 flex flex-col justify-between overflow-y-auto text-[10px] font-sans gap-2 bg-[#241F1C]">
                  <div className="flex-1 space-y-2 overflow-y-auto max-h-[90px] pr-1 scrollbar-thin flex flex-col">
                    {chatMessages.map((msg, mIdx) => (
                      <div
                        key={mIdx}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-xl px-2.5 py-1.5 leading-normal ${msg.sender === "user" ? "bg-accent-gold text-warm-light rounded-tr-none" : "bg-[#2d2623] text-[#dfd5ce] rounded-tl-none border border-[#3d332f]"}`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {isBotTyping && (
                      <div className="flex justify-start">
                        <div className="bg-[#2d2623] text-accent-gold rounded-xl px-2.5 py-1.5 rounded-tl-none animate-pulse">
                          Typing guidelines...
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Predefined symptoms chips */}
                  <div className="flex gap-1 overflow-x-auto select-none py-1 border-t border-[#2d2623] shrink-0">
                    {["Headache", "Fever", "Cold"].map((symptom) => (
                      <button
                        key={symptom}
                        disabled={isBotTyping}
                        onClick={() => handleSendChat(symptom)}
                        className="text-[9px] font-semibold bg-[#2d2623] text-[#dfd5ce] px-2 py-0.5 rounded-md hover:bg-accent-gold/20 hover:text-accent-gold transition-all cursor-pointer disabled:opacity-50 select-none whitespace-nowrap"
                      >
                        {symptom}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Info & Description */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-warm-charcoal leading-tight hover:text-accent-gold transition-colors">
                    AI Healthcare Chatbot
                  </h3>
                  <p className="text-xs text-warm-taupe leading-relaxed">
                    Empathetic diagnostic helper agent designed to triage
                    primary care symptoms and output patient suggestions using
                    dialog systems.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["Python", "NLP", "React.js", "Tailwind"].map(
                    (tag, tIdx) => (
                      <Badge
                        key={tIdx}
                        variant="default"
                        className="text-[10px] px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ),
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    href="https://github.com/Rajnish12-git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 gap-1.5 py-2 px-3 text-xs rounded-xl border-warm-taupe/20"
                  >
                    <Github size={13} /> Code
                  </Button>
                  <Button
                    variant="secondary"
                    href="https://ai-healthcare-chatbot-qw0q.onrender.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 gap-1.5 py-2 px-3 text-xs rounded-xl"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card 3: Fake News Detection */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex"
          >
            <Card className="flex flex-col h-full overflow-hidden p-0 border-warm-beige bg-warm-light rounded-[2rem] warm-shadow flex-1">
              {/* Browser Shell with Fake News Scanner */}
              <div className="w-full aspect-[16/10] bg-warm-beige/25 border-b border-warm-beige/40 overflow-hidden relative group flex flex-col">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-warm-beige/40 border-b border-warm-beige/30 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                  <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                  <div className="flex-1 max-w-[160px] mx-auto bg-warm-light/75 rounded-md py-0.5 px-2 text-[10px] text-warm-taupe/80 font-mono text-center truncate border border-warm-beige/25 select-none">
                    fake-news-detector.org
                  </div>
                </div>

                {/* Detector Interface */}
                <div className="flex-1 p-3 flex flex-col justify-between text-[10px] font-sans bg-warm-cream/95 overflow-hidden">
                  <div className="space-y-2 flex-1 flex flex-col justify-center">
                    {isScanningNews ? (
                      <div className="flex flex-col items-center justify-center py-2 text-center gap-1.5">
                        <RefreshCw
                          size={14}
                          className="animate-spin text-accent-gold"
                        />
                        <span className="font-mono text-[9px] text-warm-taupe">
                          Scanning NLP word embeddings...
                        </span>
                      </div>
                    ) : newsResult ? (
                      <div className="p-2.5 rounded-xl border border-warm-beige bg-warm-light shadow-xs space-y-1 overflow-y-auto max-h-[110px]">
                        <div className="flex items-center justify-between">
                          <span
                            className={`font-bold uppercase tracking-wider text-[8px] px-1.5 py-0.5 rounded ${
                              newsResult.variant === "success"
                                ? "bg-[#a2d18b]/15 text-[#6b9e54]"
                                : newsResult.variant === "danger"
                                  ? "bg-[#ff5f56]/10 text-[#d43f3a]"
                                  : "bg-accent-gold/15 text-accent-goldDark"
                            }`}
                          >
                            {newsResult.rating}
                          </span>
                          <span className="font-mono font-bold text-[#8c7a6b]">
                            {newsResult.confidence}
                          </span>
                        </div>
                        <p className="text-[9px] text-warm-taupe leading-snug">
                          {newsResult.details}
                        </p>
                        <button
                          onClick={() => setNewsResult(null)}
                          className="text-[8px] text-accent-gold hover:underline block pt-1 select-none cursor-pointer"
                        >
                          ← Scan Another
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2 flex flex-col justify-center">
                        <div className="text-[9px] font-semibold text-warm-taupe">
                          Verify News Article Headline:
                        </div>
                        <div className="flex gap-1 overflow-x-auto select-none py-1 shrink-0">
                          {["NASA Mars Gold", "New School Expansion"].map(
                            (demoNews, dnIdx) => (
                              <button
                                key={dnIdx}
                                onClick={() => handleVerifyNews(demoNews)}
                                className="text-[8px] border border-warm-beige bg-warm-light px-2 py-1 rounded hover:border-accent-gold transition-all whitespace-nowrap cursor-pointer"
                              >
                                {demoNews}
                              </button>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info & Description */}
              <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-warm-charcoal leading-tight hover:text-accent-gold transition-colors">
                    Fake News Detector
                  </h3>
                  <p className="text-xs text-warm-taupe leading-relaxed">
                    A machine learning based pipeline that evaluates the
                    credibility of news articles. Preprocesses datasets,
                    extracts features, and runs NLP.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["Python", "Scikit-Learn", "NLP", "Flask", "JS"].map(
                    (tag, tIdx) => (
                      <Badge
                        key={tIdx}
                        variant="default"
                        className="text-[10px] px-2 py-0.5"
                      >
                        {tag}
                      </Badge>
                    ),
                  )}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    href="https://github.com/Rajnish12-git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 gap-1.5 py-2 px-3 text-xs rounded-xl border-warm-taupe/20"
                  >
                    <Github size={13} /> Code
                  </Button>
                  <Button
                    variant="secondary"
                    href="https://github.com/Rajnish12-git/Fake-News-Detection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 gap-1.5 py-2 px-3 text-xs rounded-xl"
                  >
                    <ExternalLink size={13} /> Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
