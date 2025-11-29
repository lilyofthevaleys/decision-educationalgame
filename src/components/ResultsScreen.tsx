import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Button } from './Button';
import { ScoreBar } from './ScoreBar';
import { Personality } from '../utils/personalityAlgorithm';
import { Scores } from '../utils/scoreCalculations';
import { Sparkles, Download, RefreshCw, FileText, X } from 'lucide-react';

interface ResultsScreenProps {
  personality: Personality;
  finalScores: Scores;
  onPlayAgain: () => void;
  onDownloadPDF: () => void;
  onReflect: () => void;
  onNavigateArticles: () => void;
}

export function ResultsScreen({
  personality,
  finalScores,
  onPlayAgain,
  onDownloadPDF,
  onReflect,
  onNavigateArticles,
}: ResultsScreenProps) {
  const [loading, setLoading] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    // Show loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowResults(true), 100);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#1A0933] to-[#2d1154] flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute w-96 h-96 bg-[#00FF9F]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        
        <div className="text-center relative z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="text-8xl mb-8"
          >
            🧭
          </motion.div>
          <motion.h2
            className="text-white text-3xl md:text-4xl font-semibold tracking-wide"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            CALCULATING YOUR MORAL PROFILE...
          </motion.h2>
          <motion.div
            className="w-64 h-2 bg-gray-700 rounded-full mx-auto mt-8 overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#7B2CBF] via-[#00FF9F] to-[#7B2CBF] rounded-full"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#1A0933] to-[#2d1154] p-4 md:p-8 overflow-y-auto relative">
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 255, 159, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 159, 0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      {/* Animated background orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-[#00FF9F]/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '10%', left: '5%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-[#7B2CBF]/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ bottom: '10%', right: '5%' }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] bg-[#FFD700]/8 rounded-full blur-[150px]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ bottom: '-8%', left: '30%' }}
      />

      <div className="max-w-5xl mx-auto py-8 relative z-10">
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <div className="flex items-center justify-between gap-4 bg-black/60 backdrop-blur-sm border border-[#00FF9F]/40 rounded-lg px-4 py-3">
              <div className="text-white text-sm md:text-base">
                <span className="font-semibold text-[#00FF9F]">9 December:</span> International Anti-corruption month —{' '}
                <button
                  type="button"
                  onClick={onNavigateArticles}
                  className="underline text-[#00FF9F] hover:text-white transition-colors"
                >
                  click here to see articles
                </button>
              </div>
              <button
                type="button"
                aria-label="Dismiss banner"
                onClick={() => setShowBanner(false)}
                className="text-white/70 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
        {/* Personality Type */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: showResults ? 1 : 0, y: showResults ? 0 : -20 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Sparkles className="text-[#00FF9F] w-12 h-12 mx-auto" />
          </motion.div>
          <h1 className="text-[#00FF9F] text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 drop-shadow-[0_0_30px_rgba(0,255,159,0.6)] tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            YOU ARE: {personality.title.toUpperCase()}
          </h1>
          <motion.div
            className="w-80 h-1 mx-auto rounded-full"
            style={{
              background: 'linear-gradient(90deg, #7B2CBF, #00FF9F, #7B2CBF)',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Personality Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: showResults ? 1 : 0, scale: showResults ? 1 : 0.5 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          className="flex justify-center mb-12"
        >
          <motion.div
            className="text-6xl sm:text-8xl md:text-9xl relative"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="absolute inset-0 bg-[#00FF9F]/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="relative z-10">{personality.icon}</span>
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showResults ? 1 : 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-10 mb-12 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        >
          <p className="text-white text-xl md:text-2xl leading-relaxed mb-6 text-center">
            {personality.description}
          </p>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00FF9F]/50 to-transparent mb-6" />
          <p className="text-[#00FF9F] text-lg md:text-xl italic leading-relaxed text-center">
            {personality.reflection}
          </p>
        </motion.div>

        {/* Scores */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showResults ? 1 : 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-[#00FF9F] text-4xl md:text-5xl mb-6 text-center drop-shadow-[0_0_20px_rgba(0,255,159,0.4)]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            YOUR SCORES
          </h2>
          <motion.div
            className="w-48 h-1 mx-auto rounded-full mb-10"
            style={{
              background: 'linear-gradient(90deg, transparent, #00FF9F, transparent)',
            }}
          />
          <div className="space-y-8 max-w-3xl mx-auto">
            <ScoreBar
              icon="💎"
              label="Integrity"
              value={finalScores.integrity}
              animated
            />
            <ScoreBar
              icon="🤝"
              label="Public Trust"
              value={finalScores.trust}
              animated
            />
            <ScoreBar
              icon="🌱"
              label="Sustainability"
              value={finalScores.sustainability}
              animated
            />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showResults ? 1 : 0, y: showResults ? 0 : 20 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="primary" 
              onClick={onReflect}
              className="flex items-center gap-2 text-lg px-8 py-4 shadow-[0_0_20px_rgba(0,255,159,0.3)]"
            >
              <FileText size={20} />
              REFLECT & DOWNLOAD
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="secondary" 
              onClick={onDownloadPDF}
              className="flex items-center gap-2 text-lg px-8 py-4"
            >
              <Download size={20} />
              DOWNLOAD PDF
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="secondary" 
              onClick={onPlayAgain}
              className="flex items-center gap-2 text-lg px-8 py-4"
            >
              <RefreshCw size={20} />
              PLAY AGAIN
            </Button>
          </motion.div>
        </motion.div>

        {/* SDG Connection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showResults ? 1 : 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 mb-8"
        >
          <h3 className="text-[#00FF9F] text-2xl mb-6 text-center">WHAT YOU JUST EXPERIENCED</h3>
          <div className="w-32 h-1 bg-[#00FF9F] mx-auto mb-8" />
          
          <div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10 max-w-3xl mx-auto">
            <p className="text-white text-lg leading-relaxed mb-6 text-center">
              This game explored real-world ethical dilemmas around integrity, corruption, and sustainable decision-making.
              Your choices reflected your values in complex situations where there's often no perfect answer.
            </p>
            
            <div className="flex flex-row justify-center items-start gap-8 mt-8 mx-auto">
              <div className="text-center w-32">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 border border-white/20 mx-auto">
                  <span className="text-4xl">📚</span>
                </div>
                <p className="text-[#00FF9F] mb-2">SDG 4</p>
                <p className="text-gray-400 text-sm">Quality Education</p>
              </div>
              <div className="text-center w-32">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-3 border border-white/20 mx-auto">
                  <span className="text-4xl">⚖️</span>
                </div>
                <p className="text-[#00FF9F] mb-2">SDG 16</p>
                <p className="text-gray-400 text-sm">Peace, Justice & Strong Institutions</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mt-8 text-center italic">
              Teaching integrity and anti-corruption values through interactive decision-making
            </p>
          </div>
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showResults ? 1 : 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            Want to explore different paths? Try playing again with different choices!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
