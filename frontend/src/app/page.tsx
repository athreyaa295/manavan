"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MoveRight, Sparkles, Target, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-600 to-primary-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight">ResumePro AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400 font-medium">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#templates" className="hover:text-white transition-colors">Templates</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-white transition-colors">Login</Link>
            <Link href="/signup" className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-wider mb-6">
              AI-Powered Career Growth
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
              Build a Resume That Wins <br /> 6-Figure Jobs
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our advanced LLaMA-3 powered AI crafts professional bullet points, optimizes for ATS, and generates premium resumes in seconds.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/editor" className="group bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all shadow-xl shadow-primary-500/20 flex items-center gap-2">
                Start Building Now
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-8 py-4 rounded-2xl text-lg font-bold border border-white/10 hover:bg-white/5 transition-all">
                View Templates
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Cards Mockup */}
        <div className="mt-20 relative max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 backdrop-blur-sm"
          >
             <div className="rounded-2xl bg-[#111] border border-white/5 aspect-video flex items-center justify-center">
                {/* Mockup Placeholder */}
                <div className="flex flex-col items-center gap-4">
                  <Sparkles className="w-12 h-12 text-primary-500" />
                  <p className="text-gray-500 font-medium">AI Editor Interface Mockup</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-6 h-6 text-yellow-500" />,
              title: "AI Generation",
              desc: "Instant professional summaries and bullet points powered by LLaMA-3."
            },
            {
              icon: <Target className="w-6 h-6 text-red-500" />,
              title: "ATS Optimization",
              desc: "Pass the gatekeepers with our real-time keyword analysis and scoring."
            },
            {
              icon: <Sparkles className="w-6 h-6 text-primary-500" />,
              title: "Smart Cover Letters",
              desc: "Tailored cover letters that perfectly match your resume and job description."
            }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
