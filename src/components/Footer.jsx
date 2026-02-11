import React from 'react';
import { Github, Linkedin, Code, Zap, Globe, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-emerald-100 py-12 md:py-16 px-6 mt-12 md:mt-20 relative overflow-hidden">
      {/* Subtle EV Gradient Glow at the top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-12">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-500 p-2 rounded-xl shadow-lg shadow-emerald-100 shrink-0">
              <Zap size={24} className="text-white" fill="currentColor" />
            </div>
            <span className="text-slate-900 font-bold text-xl md:text-2xl tracking-tight">
              GreenPower<span className="text-emerald-500">Tech</span>
            </span>
          </div>
          
          <p className="text-slate-500 text-sm max-w-xs text-center md:text-left leading-relaxed">
            Revolutionizing energy with Australian-standard solar solutions. High-efficiency technology for a sustainable tomorrow.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-widest mt-2">
            <span className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-full md:bg-transparent md:p-0">
              <ShieldCheck size={14}/> Quality Assured
            </span>
            <span className="flex items-center gap-1.5 bg-emerald-50 px-3 py-1 rounded-full md:bg-transparent md:p-0">
              <Globe size={14}/> Eco-Friendly
            </span>
          </div>
        </div>

        {/* Social & Developer Links Section */}
        <div className="flex flex-col items-center md:items-end gap-6 w-full md:w-auto border-t border-slate-100 pt-10 md:border-none md:pt-0">
          <h4 className="text-slate-900 font-bold text-xs md:text-sm uppercase tracking-widest">Connect with Developer</h4>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/sravanKumar1211" 
              target="_blank" rel="noreferrer"
              className="group flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 shadow-sm active:scale-95"
              title="GitHub"
            >
              <Github size={20} className="text-slate-600 group-hover:text-white transition-colors" />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/sravan-kumar-gaddamedhi-89976019a/" 
              target="_blank" rel="noreferrer"
              className="group flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-sky-500 hover:border-sky-500 transition-all duration-300 shadow-sm active:scale-95"
              title="LinkedIn"
            >
              <Linkedin size={20} className="text-slate-600 group-hover:text-white transition-colors" />
            </a>
            
            <a 
              href="https://leetcode.com/u/sravan12111999/" 
              target="_blank" rel="noreferrer"
              className="group flex items-center justify-center w-11 h-11 md:w-12 md:h-12 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-amber-500 hover:border-amber-500 transition-all duration-300 shadow-sm active:scale-95"
              title="LeetCode"
            >
              <Code size={20} className="text-slate-600 group-hover:text-white transition-colors" />
            </a>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.3em]">
              © 2026 Crafted by Sravan Kumar
            </p>
            <p className="hidden md:block text-emerald-500 text-[8px] font-bold uppercase tracking-tighter">
              Clean Energy • Smart Technology • Better Future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;