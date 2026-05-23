"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, FileText, Clock, Settings, LogOut, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [resumes, setResumes] = useState([
    { id: 1, title: "Software Engineer - Google", updated: "2 hours ago", score: 85 },
    { id: 2, title: "Product Manager - Meta", updated: "1 day ago", score: 92 },
  ]);

  return (
    <div className="min-h-screen bg-[#fafafa] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white">
            <span className="font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-xl">ResumePro</span>
        </div>

        <nav className="flex-1 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-100 text-gray-900 font-medium">
            <FileText className="w-5 h-5" /> Resumes
          </Link>
          <Link href="/history" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 font-medium transition-colors">
            <Clock className="w-5 h-5" /> History
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 font-medium transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>

        <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 font-medium transition-colors">
          <LogOut className="w-5 h-5" /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 max-w-6xl">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Resumes</h1>
            <p className="text-gray-500">Manage and optimize your professional profiles.</p>
          </div>
          <Link href="/editor/new" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-primary-600/20">
            <Plus className="w-5 h-5" /> Create New
          </Link>
        </header>

        {/* Resumes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumes.map((resume, i) => (
            <motion.div
              key={resume.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-lg bg-gray-50 border border-gray-100 mb-6 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <FileText className="w-12 h-12 text-gray-300" />
              </div>
              <h3 className="font-bold text-lg mb-1">{resume.title}</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Edited {resume.updated}</span>
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">
                  {resume.score}% ATS
                </span>
              </div>
            </motion.div>
          ))}
          
          {/* Create Placeholder */}
          <Link href="/editor/new" className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-6 text-gray-400 hover:border-primary-500 hover:text-primary-500 transition-all">
            <Plus className="w-10 h-10 mb-2" />
            <span className="font-bold">Create Empty</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
