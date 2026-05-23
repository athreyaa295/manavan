"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Github } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call the API for JWT token
    console.log("Login attempt:", { email, password });
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-6 selection:bg-primary-500/20">
      <div className="absolute top-0 left-0 w-full h-full bg-primary-500/5 blur-[120px] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-[400px] w-full"
      >
        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary-600 to-primary-400 flex items-center justify-center mb-6 shadow-xl shadow-primary-600/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">Welcome Back</h2>
          <p className="text-gray-500 text-sm mt-2">Log in to your AI Career Dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 tracking-wider uppercase">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm"
              placeholder="name@example.com"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center mb-1">
              <label className="text-xs font-bold text-gray-400 tracking-wider uppercase">Password</label>
              <Link href="#" className="text-xs text-primary-400 hover:text-primary-300">Forgot it?</Link>
            </div>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-sm"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-all shadow-xl flex items-center justify-center gap-2 group"
          >
            Log In
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8 flex items-center justify-between gap-4">
           <div className="h-px flex-1 bg-white/10" />
           <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest px-2">OR CONTINUE WITH</span>
           <div className="h-px flex-1 bg-white/10" />
        </div>

        <button className="w-full mt-8 bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 font-bold text-sm">
           <Github className="w-5 h-5" /> GitHub
        </button>

        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account? <Link href="/signup" className="text-primary-400 font-bold hover:text-white transition-colors">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
}
