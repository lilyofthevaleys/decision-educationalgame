import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Users, Cpu, Palette, Music2 } from 'lucide-react';

interface CreditsPageProps {
  onBack?: () => void;
}

export function CreditsPage({ onBack }: CreditsPageProps) {
  return (
    <div className="min-h-screen bg-[#0a0118] relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 255, 159, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 159, 0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <motion.div
          className="absolute top-20 -left-24 w-[420px] h-[420px] bg-[#00FF9F]/20 rounded-full blur-[120px]"
          animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-10 w-[500px] h-[500px] bg-[#7B2CBF]/20 rounded-full blur-[150px]"
          animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.06, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-16 left-1/3 w-[420px] h-[420px] bg-[#FFD700]/16 rounded-full blur-[120px]"
          animate={{ opacity: [0.1, 0.22, 0.1], scale: [1, 1.04, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-8 sm:px-10 py-20 sm:py-24 max-w-6xl space-y-14 sm:space-y-16">
        <div className="flex justify-end mt-8 sm:mt-10">
          {onBack && (
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/70 border-2 border-[#00FF9F]/50 text-[#00FF9F] hover:bg-black/80 hover:border-[#00FF9F] hover:shadow-[0_0_18px_rgba(0,255,159,0.4)] transition-all uppercase tracking-wide text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          )}
        </div>

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative p-4 rounded-xl bg-black/40 border-2 border-[#00FF9F] shadow-[0_0_30px_rgba(0,255,159,0.5)]">
              <Sparkles className="w-12 h-12 text-[#00FF9F]" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl tracking-wider mb-3">
            <span className="text-white">Deci</span>
            <span className="text-[#7B2CBF]">$</span>
            <span className="text-[#00FF9F]">ion</span>
            <span className="text-white"> – Interactive Story Game</span>
          </h1>
          <div className="w-40 h-1 mx-auto bg-gradient-to-r from-transparent via-[#00FF9F] to-transparent shadow-[0_0_10px_rgba(0,255,159,0.8)]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8 md:gap-x-16 xl:gap-x-24">
          <div className="bg-black/50 border border-[#00FF9F]/30 rounded-none p-6 md:p-10 backdrop-blur-sm shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-[#00FF9F]" />
              <h2 className="text-2xl text-white">Team Members</h2>
            </div>
            <div className="grid gap-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className="text-white">Cecilia Agusta Leo (0706022410004)</span>
                <span className="text-[#7B2CBF]">Visual & Audio Assets</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className="text-white">Charlene Athena Tjahjadi (0706022410012)</span>
                <span className="text-[#7B2CBF]">Implementation & Coding, Bug Fixing</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className="text-white">Casey Daniella Winarto (0706022410026)</span>
                <span className="text-[#7B2CBF]">GDD Documentation, UI Design</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className="text-white">Kelson Gilbert (0706022410021)</span>
                <span className="text-[#7B2CBF]">Storyline & Script Writing</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <span className="text-white">Jefferson Wijaya (0706022410049)</span>
                <span className="text-[#7B2CBF]">Testing & QA</span>
              </div>
            </div>
          </div>

          <div className="bg-black/50 border border-[#00FF9F]/30 rounded-none p-6 md:p-10 backdrop-blur-sm shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 text-[#00FF9F]" />
              <h2 className="text-2xl text-white">Tech Stack & Tools</h2>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-[#00FF9F]/10 border border-[#00FF9F]/50 text-[#00FF9F] hover:bg-[#00FF9F]/15 hover:border-[#00FF9F]/70 transition">React 18</span>
              <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-[#00FF9F]/10 border border-[#00FF9F]/50 text-[#00FF9F] hover:bg-[#00FF9F]/15 hover:border-[#00FF9F]/70 transition">Vite</span>
              <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-[#00FF9F]/10 border border-[#00FF9F]/50 text-[#00FF9F] hover:bg-[#00FF9F]/15 hover:border-[#00FF9F]/70 transition">Tailwind CSS</span>
              <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-[#00FF9F]/10 border border-[#00FF9F]/50 text-[#00FF9F] hover:bg-[#00FF9F]/15 hover:border-[#00FF9F]/70 transition">Motion</span>
              <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-[#00FF9F]/10 border border-[#00FF9F]/50 text-[#00FF9F] hover:bg-[#00FF9F]/15 hover:border-[#00FF9F]/70 transition">Lucide Icons</span>
              <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-[#00FF9F]/10 border border-[#00FF9F]/50 text-[#00FF9F] hover:bg-[#00FF9F]/15 hover:border-[#00FF9F]/70 transition">Radix UI</span>
              <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-[#00FF9F]/10 border border-[#00FF9F]/50 text-[#00FF9F] hover:bg-[#00FF9F]/15 hover:border-[#00FF9F]/70 transition">jsPDF</span>
            </div>
            <div className="grid gap-3">
              <div className="flex items-center gap-2 text-gray-300"><Palette className="w-5 h-5 text-[#7B2CBF]" /> Design: Figma</div>
              <div className="flex items-center gap-2 text-gray-300"><Sparkles className="w-5 h-5 text-[#FFD700]" /> Image generation: Gemini AI</div>
              <div className="flex items-center gap-2 text-gray-300"><Music2 className="w-5 h-5 text-[#00FF9F]" /> Audio: No-copyright/royalty-free BGM and SFX</div>
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-28 bg-black/50 border border-[#00FF9F]/30 rounded-none p-6 sm:p-10 backdrop-blur-sm shadow-[0_10px_25px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl text-white mb-4">Project Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Deci$ion is an interactive narrative game with branching storylines and multiple endings. The game features a scoring system, downloadable content, and a minimalist UI design.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreditsPage;
