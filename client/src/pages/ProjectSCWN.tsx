import { motion } from "framer-motion";
import { ArrowLeft, Cpu, AlertTriangle, ExternalLink, Activity, Server, Network } from "lucide-react";
import { Link } from "wouter";

export default function ProjectSCWN() {
  return (
    <div className="min-h-screen text-foreground font-sans p-6 pb-24 bg-[#030014]">
      <Link href="/">
        <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12 group font-mono text-sm">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          // RETURN_HOME
        </button>
      </Link>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/10 pb-8 mb-12"
        >
          <div className="flex gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">System Architecture</span>
            <span className="px-3 py-1 text-xs font-mono rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">IoT Simulation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Smart City Waste Nodes</h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            A state-based waste management system designed to handle unreliable network conditions and prioritize city-scale decision making.
          </p>
          
          <div className="mt-8 flex gap-4">
            <a href="https://scwnhackathon.lovable.app/" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-bold rounded hover:bg-cyan-400 transition-all">
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="text-yellow-500" /> The System Problem
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Traditional waste systems rely on real-time data streams that break when connectivity is poor. 
                They also flood operators with raw data rather than actionable states.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="text-cyan-500" /> The Solution Logic
              </h2>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                <h3 className="font-mono text-cyan-400 mb-4 text-sm">// NODE_STATE_MACHINE</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded flex items-center justify-center shrink-0"><Activity className="text-green-500 w-6 h-6"/></div>
                    <div>
                      <h4 className="text-white font-bold">State: NORMAL</h4>
                      <p className="text-sm text-gray-500">Bin is below 70%.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded flex items-center justify-center shrink-0"><Server className="text-yellow-500 w-6 h-6"/></div>
                    <div>
                      <h4 className="text-white font-bold">State: WARNING</h4>
                      {/* FIX: Replaced '>' with '&gt;' */}
                      <p className="text-sm text-gray-500">Bin &gt; 80% OR Last signal &gt; 6 hours ago.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded flex items-center justify-center shrink-0"><Network className="text-red-500 w-6 h-6"/></div>
                    <div>
                      <h4 className="text-white font-bold">State: CRITICAL</h4>
                      <p className="text-sm text-gray-500">Bin Full OR Smoke Detected.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
