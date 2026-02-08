import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Atom, 
  Database, 
  Zap, 
  Github, 
  Triangle, 
  LayoutTemplate, 
  ChevronRight, 
  ExternalLink, 
  Cpu, 
  Layers, 
  AlertTriangle,
  FileText,
  Linkedin,
  Mail
} from "lucide-react";

// --- DATA: EXPERIENCE ---
const experience = [
  {
    company: "PolicyPath AI",
    role: "Solutions Engineer (Product & Systems)",
    period: "Jan 2026 – Present",
    summary: "Designed end-to-end solution workflows for an AI-driven learning platform.",
    points: [
      "Designed system workflows governing user progression, evaluation rules, and edge-case handling.",
      "Defined constraints and trade-offs to balance accuracy, reliability, and delivery speed.",
      "Communicated solution logic and system behavior clearly to peers during development."
    ]
  },
  {
    company: "NexGen Capital Lab",
    role: "Founder & Solutions Engineer",
    period: "Nov 2025 – Present",
    summary: "Translating abstract ideas into concrete workflows and execution logic.",
    points: [
      "Designed solution architectures and workflows before implementation to ensure feasibility.",
      "Explained system behavior, rules, and trade-offs to non-technical stakeholders.",
      "Guided execution by aligning implementation decisions with system constraints."
    ]
  }
];

// --- DATA: TECH STACK ---
const techStack = [
  { name: "React", icon: <Atom className="w-6 h-6" /> },
  { name: "Supabase", icon: <Database className="w-6 h-6" /> },
  { name: "FastAPI", icon: <Zap className="w-6 h-6" /> },
  { name: "GitHub", icon: <Github className="w-6 h-6" /> },
  { name: "Vercel", icon: <Triangle className="w-6 h-6" /> },
  { name: "HTML/CSS", icon: <LayoutTemplate className="w-6 h-6" /> },
];

// --- DATA: METHODOLOGY ---
const methodology = [
  { title: "Clarify the Problem", desc: "Identify the core user need versus the technical want." },
  { title: "Identify Constraints", desc: "Map failure modes, resource limits, and edge cases." },
  { title: "Design Workflows", desc: "Create state-based logic flows before writing code." },
  { title: "Define Trade-offs", desc: "Consciously choose speed vs. accuracy or scope vs. scale." },
  { title: "Explain & Execute", desc: "A solution is only valid if it can be clearly communicated." },
];

export default function Home() {
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);

  return (
    <div className="min-h-screen text-foreground font-sans selection:bg-cyan-500/20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="container max-w-6xl grid lg:grid-cols-2 gap-12 items-center z-10">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-cyan-400 font-mono tracking-widest text-sm mb-2">
                // SYSTEM_READY
              </h2>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-gray-400 mb-2">
                <GlitchText text="DHEENA" /> <br />
                <GlitchText text="DHAYALAN" />
              </h1>
              <h2 className="text-2xl md:text-3xl font-display text-gray-400 mb-6">
                Solutions Engineer <span className="text-purple-500">|</span> Product Systems
              </h2>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed border-l-2 border-cyan-500/50 pl-6">
                I design and explain technical systems that bridge product intent, 
                real-world constraints, and reliable execution.
              </p>
              
              <div className="flex gap-4 pt-6">
                <a href="#projects" className="px-6 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 font-mono hover:bg-cyan-500 hover:text-black transition-all duration-300">
                  View Solutions
                </a>
                <a href="/resume.pdf" target="_blank" className="px-6 py-3 border border-gray-700 text-gray-400 font-mono hover:border-white hover:text-white transition-all duration-300 flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* Headshot Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating Rings */}
              <div className="absolute inset-0 border-2 border-dashed border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-4 border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Image Container (Hexagon-ish clip or circle) */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-cyan-500/50 bg-black/50 backdrop-blur-sm z-10">
                 {/* Make sure 1000353873.png is in your public folder */}
                <img 
                  src="/1000353873.png" 
                  alt="Dheena Dhayalan" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK MARQUEE --- */}
      <section className="py-12 border-y border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <h3 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">:: Tech Stack ::</h3>
        </div>
        <div className="relative flex overflow-hidden group">
          <div className="flex gap-12 animate-scroll whitespace-nowrap px-12">
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-3 text-gray-400 group-hover:text-cyan-400 transition-colors">
                {tech.icon}
                <span className="font-display font-bold text-xl tracking-wider">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section className="py-24 px-6 relative">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-1 bg-purple-500"></span> EXPERIENCE
          </h2>
          
          <div className="space-y-12 relative border-l border-white/10 ml-3 md:ml-0 pl-8 md:pl-0">
            {experience.map((job, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative md:grid md:grid-cols-[1fr_2px_1fr] gap-8 items-start group"
              >
                {/* Date (Left on Desktop) */}
                <div className="hidden md:block text-right pt-1">
                  <span className="font-mono text-cyan-500/80 text-sm">{job.period}</span>
                </div>

                {/* Timeline Node */}
                <div className="absolute md:relative left-[-37px] md:left-0 top-2 w-3 h-3 bg-black border border-purple-500 rounded-full group-hover:bg-purple-500 group-hover:shadow-[0_0_10px_#bc13fe] transition-all duration-300 z-10" />

                {/* Content */}
                <div className="pb-8">
                  <div className="md:hidden font-mono text-cyan-500/80 text-sm mb-1">{job.period}</div>
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{job.company}</h3>
                  <h4 className="text-lg text-gray-400 mb-4">{job.role}</h4>
                  <p className="text-gray-300 italic mb-4 border-l-2 border-white/10 pl-4">{job.summary}</p>
                  <ul className="space-y-2">
                    {job.points.map((pt, i) => (
                      <li key={i} className="text-gray-500 text-sm leading-relaxed flex items-start gap-2">
                        <span className="text-purple-500 mt-1">›</span> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS / CASE STUDY --- */}
      <section id="projects" className="py-24 px-6 bg-gradient-to-b from-transparent to-purple-900/5">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-1 bg-cyan-500"></span> FEATURED SYSTEM
          </h2>

          <div className="grid md:grid-cols-1 gap-8">
            {/* --- SCWN Card --- */}
            <motion.div 
              layout 
              className={`bg-card/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md transition-colors ${isCaseStudyOpen ? 'border-cyan-500/30' : 'hover:border-white/20'}`}
            >
              <motion.div layout className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <div className="flex gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">System Design</span>
                      <span className="px-3 py-1 text-xs font-mono rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">Visualization</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Smart City Waste Nodes (SCWN)</h3>
                    <p className="text-gray-400">National Hackathon – 2nd Overall Runner-Up</p>
                  </div>
                  <button 
                    onClick={() => setIsCaseStudyOpen(!isCaseStudyOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-cyan-500 hover:text-black rounded-lg transition-all text-sm font-mono border border-white/10"
                  >
                    {isCaseStudyOpen ? "Close Analysis" : "View Case Study"} <ChevronRight className={`w-4 h-4 transition-transform ${isCaseStudyOpen ? 'rotate-90' : ''}`} />
                  </button>
                </div>

                <motion.p layout className="text-xl text-gray-300 font-light leading-relaxed mb-6">
                  A system-level waste management solution designed around real-world constraints, state-based logic, and city-scale visualization.
                </motion.p>

                {/* --- EXPANDABLE CONTENT --- */}
                <AnimatePresence>
                  {isCaseStudyOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-white/10 pt-8 mt-8 grid md:grid-cols-2 gap-12"
                    >
                      <div className="space-y-8">
                        <div>
                          <h4 className="flex items-center gap-2 text-cyan-400 font-bold mb-3"><AlertTriangle className="w-5 h-5"/> The Problem</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            Urban waste management involves unreliable inputs and multiple stakeholders. Traditional solutions ignore failure states. We needed a system that handles "messy" real-world data gracefully.
                          </p>
                        </div>
                        <div>
                          <h4 className="flex items-center gap-2 text-purple-400 font-bold mb-3"><Cpu className="w-5 h-5"/> System Design</h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            We modeled waste bins as "Nodes" with specific states (Normal, Warning, Full, Fallback). This state-based logic allows the system to function even if continuous connectivity fails.
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-8">
                        <div>
                          <h4 className="flex items-center gap-2 text-white font-bold mb-3"><Layers className="w-5 h-5"/> Key Decisions</h4>
                          <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex gap-2"><span className="text-cyan-500">01.</span> Chose discrete states over real-time streaming to handle poor network conditions.</li>
                            <li className="flex gap-2"><span className="text-cyan-500">02.</span> Prioritized "City-Level" health visualization over raw data tables for clearer decision-making.</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                          <h5 className="font-mono text-xs text-gray-500 uppercase mb-2">Outcome</h5>
                          <p className="text-white text-sm">
                            Awarded 2nd Runner-Up for justifying system architecture and real-world feasibility to judges.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- METHODOLOGY --- */}
      <section className="py-24 px-6">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">How I Design Solutions</h2>
          <div className="grid gap-6">
            {methodology.map((step, i) => (
              <div key={i} className="flex items-center gap-6 group text-left p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <span className="font-mono text-4xl font-bold text-white/10 group-hover:text-cyan-500/50 transition-colors">0{i+1}</span>
                <div>
                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 border border-dashed border-white/20 rounded-2xl inline-block">
            <p className="font-display text-xl text-gray-300">
              "A solution is only useful if it can be explained, defended, and executed."
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/10 bg-black text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://github.com" className="p-3 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-black transition-all"><Github className="w-5 h-5"/></a>
          <a href="https://linkedin.com" className="p-3 bg-white/5 rounded-full hover:bg-purple-500 hover:text-white transition-all"><Linkedin className="w-5 h-5"/></a>
          <a href="mailto:dheenadhayalan071@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all"><Mail className="w-5 h-5"/></a>
        </div>
        <p className="text-gray-600 font-mono text-xs">
          © 2026 DHEENA DHAYALAN . SYSTEM STATUS: ONLINE
        </p>
      </footer>

    </div>
  );
}

// Helper for Glitch Effect (Simple CSS Jitter)
function GlitchText({ text }: { text: string }) {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-[2px] transition-all duration-100 select-none">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-purple-500 opacity-0 group-hover:opacity-100 group-hover:-translate-x-[2px] transition-all duration-100 select-none">
        {text}
      </span>
    </span>
  );
}
