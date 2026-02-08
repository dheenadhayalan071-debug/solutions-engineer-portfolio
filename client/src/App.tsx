import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "wouter";
import { 
  Atom, Database, Zap, Github, Triangle, LayoutTemplate, 
  ChevronRight, FileText, Linkedin, Mail, ExternalLink, Layers 
} from "lucide-react";
import React from "react";

// --- 3D TILT CARD COMPONENT ---
// This makes the cards move in 3D when you hover over them
function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 50 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]); // Tilt X
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]); // Tilt Y

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={`relative transform-gpu transition-all duration-200 ${className}`}
    >
      {children}
    </motion.div>
  );
}

// --- DATA ---
const experience = [
  {
    company: "PolicyPath AI",
    link: "https://policy-path-theta.vercel.app/",
    role: "Solutions Engineer",
    period: "Jan 2026 – Present",
    summary: "Designed end-to-end solution workflows for an AI-driven learning platform.",
    points: ["Designed system workflows.", "Defined constraints for accuracy vs speed."]
  },
  {
    company: "NexGen Capital Lab",
    link: "https://nexgen-capital-lab.vercel.app/",
    role: "Founder & Engineer",
    period: "Nov 2025 – Present",
    summary: "Translating abstract ideas into concrete workflows.",
    points: ["Designed architectures before coding.", "Guided execution with strict constraints."]
  }
];

const techStack = [
  { name: "React", icon: <Atom /> },
  { name: "Supabase", icon: <Database /> },
  { name: "FastAPI", icon: <Zap /> },
  { name: "GitHub", icon: <Github /> },
  { name: "Vercel", icon: <Triangle /> },
  { name: "HTML/CSS", icon: <LayoutTemplate /> },
];

export default function Home() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden selection:bg-purple-500/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] animate-float" />
        </div>

        <div className="container max-w-7xl grid lg:grid-cols-2 gap-16 items-center z-10">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs mb-6 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"/> SYSTEM_ONLINE
              </div>

              {/* NAME - Fixed to be always visible with auto-animation */}
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-4 leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                DHEENA <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 animate-gradient-x">
                  DHAYALAN
                </span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-cyan-500 rounded-full"/> Solutions Engineer
              </h2>
              
              <p className="text-xl text-gray-300 max-w-xl leading-relaxed font-medium">
                I bridge the gap between <span className="text-white border-b border-cyan-500">product intent</span> and <span className="text-white border-b border-purple-500">reliable execution</span>.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-8">
                <a href="#projects" className="relative group px-8 py-4 bg-cyan-500 text-black font-bold font-mono overflow-hidden rounded">
                  <span className="absolute inset-0 w-full h-full bg-white/30 transform translate-x-[-100%] skew-x-12 group-hover:translate-x-[100%] transition-transform duration-500"/>
                  View Solutions
                </a>
                <a href="/resume.pdf" target="_blank" className="px-8 py-4 border border-white/20 text-white font-mono hover:bg-white/10 transition-all rounded flex items-center gap-2">
                  <FileText className="w-4 h-4" /> Resume
                </a>
              </div>
            </motion.div>
          </div>

          {/* REACTOR PHOTO - Color & Spinning Rings */}
          <div className="order-1 lg:order-2 flex justify-center relative perspective-1000">
             <TiltCard className="w-80 h-80 md:w-96 md:h-96">
                {/* Spinning Reactor Rings */}
                <div className="absolute inset-[-20px] border-2 border-dashed border-cyan-500/40 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-[-10px] border border-purple-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Glowing Core Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(0,243,255,0.2)] bg-black">
                   <img 
                    src="/1000353873.png" 
                    alt="Dheena Dhayalan" 
                    className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
                  />
                </div>
             </TiltCard>
          </div>
        </div>
      </section>

      {/* --- TECH MARQUEE --- */}
      <section className="py-16 bg-black/60 border-y border-white/5 backdrop-blur-md">
        <div className="flex overflow-hidden group">
          <div className="flex gap-16 animate-scroll whitespace-nowrap px-16">
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-4 text-gray-500 group-hover:text-white transition-colors duration-300">
                <span className="text-cyan-500">{tech.icon}</span>
                <span className="font-display font-bold text-2xl tracking-widest uppercase">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE (3D CARDS) --- */}
      <section className="py-32 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-white mb-20 text-center">EXPERIENCE <span className="text-purple-500">.</span></h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((job, index) => (
              <TiltCard key={index} className="group">
                <div className="h-full bg-white/5 border border-white/10 p-10 rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-cyan-500/50 transition-all shadow-2xl">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                       <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{job.company}</h3>
                       <p className="text-purple-400 font-mono text-sm">{job.role}</p>
                    </div>
                    {/* Live Site Link Button */}
                    <a href={job.link} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-black transition-all" title="Visit Live Site">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{job.summary}</p>
                  <div className="space-y-2">
                     {job.points.map((pt, i) => (
                       <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                         <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" /> {pt}
                       </div>
                     ))}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED PROJECT (HOVER REVEAL) --- */}
      <section id="projects" className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/10 pointer-events-none" />
        
        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="flex items-end justify-between mb-12">
             <h2 className="text-5xl font-black text-white">FEATURED SYSTEM</h2>
             <span className="hidden md:block font-mono text-cyan-500">// 01</span>
          </div>

          <Link href="/project/scwn">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="group cursor-pointer relative bg-black/40 border border-white/10 rounded-3xl overflow-hidden"
            >
              {/* Glowing Border Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="grid md:grid-cols-2 gap-12 p-12 items-center">
                <div className="space-y-6">
                   <div className="flex gap-3">
                      <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">System Design</span>
                      <span className="px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider">Awards</span>
                   </div>
                   <h3 className="text-4xl md:text-5xl font-black text-white leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                     Smart City <br/> Waste Nodes
                   </h3>
                   <p className="text-xl text-gray-400 leading-relaxed">
                     A state-based waste management system designed to handle unreliable network conditions.
                   </p>
                   <div className="flex items-center gap-3 text-cyan-400 font-bold mt-4 group-hover:translate-x-2 transition-transform">
                     View Case Study <ChevronRight />
                   </div>
                </div>
                
                {/* Visual Representation (Abstract System Map) */}
                <div className="relative h-64 md:h-full min-h-[300px] bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                   {/* Abstract Nodes */}
                   <div className="absolute w-3 h-3 bg-green-500 rounded-full top-1/4 left-1/4 animate-ping" />
                   <div className="absolute w-3 h-3 bg-red-500 rounded-full bottom-1/3 right-1/3 animate-ping delay-75" />
                   <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                   <Layers className="w-24 h-24 text-white/20 group-hover:text-cyan-500/50 group-hover:scale-110 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/10 bg-[#02000d] text-center relative z-10">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://github.com" className="p-4 bg-white/5 rounded-xl hover:bg-cyan-500 hover:text-black hover:-translate-y-1 transition-all"><Github className="w-6 h-6"/></a>
          <a href="https://linkedin.com" className="p-4 bg-white/5 rounded-xl hover:bg-purple-500 hover:text-white hover:-translate-y-1 transition-all"><Linkedin className="w-6 h-6"/></a>
          <a href="mailto:dheenadhayalan071@gmail.com" className="p-4 bg-white/5 rounded-xl hover:bg-white hover:text-black hover:-translate-y-1 transition-all"><Mail className="w-6 h-6"/></a>
        </div>
        <p className="text-gray-500 font-mono text-xs">
          © 2026 DHEENA DHAYALAN . SYSTEM STATUS: ONLINE
        </p>
      </footer>
    </div>
  );
                  }
