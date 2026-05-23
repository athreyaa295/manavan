"use client";

import { useState } from "react";
import { 
  ChevronLeft, 
  Download, 
  Eye, 
  Layout, 
  Plus, 
  Save, 
  Sparkles, 
  Trash2,
  Wand2
} from "lucide-react";
import { motion } from "framer-motion";

export default function Editor() {
  const [activeTab, setActiveTab] = useState("content");
  const [sections, setSections] = useState([
    { id: "summary", title: "Summary", type: "text" },
    { id: "experience", title: "Experience", type: "list" },
    { id: "education", title: "Education", type: "list" },
    { id: "skills", title: "Skills", type: "tags" },
  ]);

  return (
    <div className="h-screen bg-white flex flex-col font-sans">
      {/* Editor Header */}
      <header className="h-16 border-b border-gray-200 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <ChevronLeft className="w-5 h-5 text-gray-500" />
          </button>
          <h1 className="font-bold text-lg">My Professional Resume</h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
            <Eye className="w-4 h-4" /> Preview
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-lg border border-primary-200">
            <Save className="w-4 h-4" /> Save
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold bg-gray-900 text-white hover:bg-black rounded-lg shadow-lg">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Toolbar */}
        <aside className="w-16 border-r border-gray-200 flex flex-col items-center py-6 gap-6 bg-gray-50">
           <button 
             onClick={() => setActiveTab("content")}
             className={`p-3 rounded-xl transition-all ${activeTab === "content" ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20" : "text-gray-400 hover:bg-gray-200"}`}
           >
             <Layout className="w-6 h-6" />
           </button>
           <button 
             onClick={() => setActiveTab("ai")}
             className={`p-3 rounded-xl transition-all ${activeTab === "ai" ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20" : "text-gray-400 hover:bg-gray-200"}`}
           >
             <Sparkles className="w-6 h-6" />
           </button>
        </aside>

        {/* content Area */}
        <div className="flex-1 flex bg-[#f5f5f7]">
          {/* Editor Panels */}
          <div className="w-1/2 p-8 overflow-y-auto">
            <div className="max-w-xl mx-auto space-y-8">
              {sections.map((section) => (
                <div key={section.id} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm transition-all hover:shadow-md focus-within:ring-2 focus-within:ring-primary-500/20">
                  <header className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-xl text-gray-900">{section.title}</h3>
                    <div className="flex items-center gap-2">
                       <button className="p-2 hover:bg-primary-50 text-primary-600 rounded-lg transition-colors flex items-center gap-1.5 text-sm font-bold">
                         <Wand2 className="w-4 h-4" /> AI Rewrite
                       </button>
                       <button className="p-2 hover:bg-red-50 text-red-500 rounded-lg">
                         <Trash2 className="w-4 h-4" />
                       </button>
                    </div>
                  </header>

                  {section.type === "text" && (
                    <textarea 
                      className="w-full h-32 p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 resize-none"
                      placeholder={`Tell your professional story...`}
                    />
                  )}

                  {section.type === "list" && (
                    <div className="space-y-4">
                      <div className="p-4 border-2 border-dashed border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:border-primary-200 hover:text-primary-500 cursor-pointer transition-all">
                        <Plus className="w-5 h-5 mr-2" /> Add {section.title} Item
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <button className="w-full py-4 rounded-2xl border-2 border-dashed border-gray-300 text-gray-400 font-bold hover:border-primary-500 hover:text-primary-500 transition-all flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" /> Add Section
              </button>
            </div>
          </div>

          {/* Real-time Preview */}
          <div className="w-1/2 p-8 bg-gray-200 overflow-y-auto flex items-start justify-center">
             <div className="w-[595px] min-h-[842px] bg-white shadow-2xl p-12 transition-all">
                {/* A4 Resume Preview Page */}
                <div className="border-b-4 border-primary-600 pb-8 mb-8">
                   <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight uppercase">John Doe</h2>
                   <p className="text-primary-600 font-bold tracking-widest text-sm mt-2">Senior Full-Stack Engineer</p>
                   <div className="flex gap-4 text-xs text-gray-500 mt-4">
                      <span>john.doe@example.com</span>
                      <span>•</span>
                      <span>+1 (555) 123-4567</span>
                      <span>•</span>
                      <span>San Francisco, CA</span>
                   </div>
                </div>

                <div className="space-y-8">
                   <section>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Professional Summary</h3>
                      <p className="text-sm leading-relaxed text-gray-700"> Experienced engineer with a passion for building scalable web applications and AI-driven solutions. Proven track record of delivering high-quality code and leading successful teams.</p>
                   </section>

                   <section>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">Experience</h3>
                      <div className="space-y-4">
                         <div>
                            <div className="flex justify-between items-center mb-1">
                               <h4 className="font-bold text-gray-900">Lead Developer • TechCorp</h4>
                               <span className="text-xs text-gray-500 font-medium">2021 — PRESENT</span>
                            </div>
                            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                               <li>Architected microservices architecture handling 1M+ reqs/day.</li>
                               <li>Reduced latency by 40% through redis caching implementation.</li>
                            </ul>
                         </div>
                      </div>
                   </section>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
