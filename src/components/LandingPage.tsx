import { motion } from 'motion/react';
import { Button } from './Button';
import { Sparkles, Zap, Brain, DollarSign, Euro, PoundSterling, JapaneseYen, IndianRupee, Bitcoin } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  const glitchSquares = [
    { id: 1, size: 60, x: '8%', y: '12%', duration: 4, delay: 0 },
    { id: 2, size: 40, x: '18%', y: '30%', duration: 5, delay: 0.5 },
    { id: 3, size: 90, x: '28%', y: '10%', duration: 4.5, delay: 1 },
    { id: 4, size: 36, x: '38%', y: '36%', duration: 5.5, delay: 1.5 },
    { id: 5, size: 72, x: '50%', y: '18%', duration: 4.8, delay: 2 },
    { id: 6, size: 48, x: '60%', y: '34%', duration: 5.2, delay: 2.5 },
    { id: 7, size: 84, x: '70%', y: '11%', duration: 4.3, delay: 3 },
    { id: 8, size: 54, x: '80%', y: '28%', duration: 5.8, delay: 3.5 },
    { id: 9, size: 40, x: '14%', y: '64%', duration: 4.6, delay: 0.8 },
    { id: 10, size: 72, x: '26%', y: '72%', duration: 5.3, delay: 1.3 },
    { id: 11, size: 44, x: '40%', y: '66%', duration: 4.9, delay: 1.8 },
    { id: 12, size: 68, x: '54%', y: '70%', duration: 5.1, delay: 2.3 },
    { id: 13, size: 52, x: '68%', y: '63%', duration: 4.7, delay: 2.8 },
    { id: 14, size: 76, x: '82%', y: '68%', duration: 5.4, delay: 3.3 },
  ];
  const squares = glitchSquares.map((sq, i) => ({ ...sq, alpha: [0.22, 0.28, 0.35][i % 3] }));
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#1A0933] to-[#2d1154] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-[#00FF9F]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-[#7B2CBF]/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              background: i % 2 === 0 ? '#00FF9F' : '#7B2CBF',
              opacity: Math.random() * 0.5 + 0.2,
            }}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* SVG grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#00FF9F" strokeOpacity="0.09" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glitch squares overlay (from Animate Elements) */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {squares.map((sq) => (
          <div key={sq.id} className="absolute" style={{ left: sq.x, top: sq.y, width: sq.size, height: sq.size }}>
            <motion.div
              className="absolute"
              style={{
                width: '100%',
                height: '100%',
                background: `rgba(0,255,159,${sq.alpha})`,
                boxShadow: `0 0 16px rgba(0,255,159,${sq.alpha}), 0 0 28px rgba(0,255,159,${Math.max(0, sq.alpha - 0.06)})`,
              }}
              animate={{
                opacity: [0, Math.min(0.6, sq.alpha + 0.25), Math.min(0.5, sq.alpha + 0.15), sq.alpha, Math.min(0.5, sq.alpha + 0.15), 0],
                scale: [0.9, 1, 1.02, 1],
                x: [0, 3, -3, 0],
                rotate: [0, 0, 2, 0],
              }}
              transition={{ duration: sq.duration, repeat: Infinity, ease: 'easeInOut', delay: sq.delay, times: [0, 0.2, 0.5, 1] }}
            />
            <motion.div
              className="absolute"
              style={{ width: '100%', height: '100%', background: `rgba(123,44,191,${Math.max(0.2, sq.alpha - 0.05)})`, mixBlendMode: 'screen' }}
              animate={{ opacity: [0, Math.min(0.4, sq.alpha + 0.1), 0], x: [-4, -6, -4] }}
              transition={{ duration: sq.duration, repeat: Infinity, ease: 'easeInOut', delay: sq.delay }}
            />
            <motion.div
              className="absolute"
              style={{ width: '100%', height: '100%', background: `rgba(0,255,159,${Math.max(0.2, sq.alpha - 0.05)})`, mixBlendMode: 'screen' }}
              animate={{ opacity: [0, Math.min(0.4, sq.alpha + 0.1), 0], x: [4, 6, 4] }}
              transition={{ duration: sq.duration, repeat: Infinity, ease: 'easeInOut', delay: sq.delay }}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute text-[#7B2CBF]"
          style={{ left: '6%', top: '10%' }}
          initial={{ opacity: 0.35, scale: 0.95 }}
          animate={{ opacity: [0.35, 0.7, 0.35], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        >
          <DollarSign size={64} />
        </motion.div>
        <motion.div
          className="absolute text-[#00FF9F]"
          style={{ right: '7%', top: '14%' }}
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ opacity: [0.3, 0.65, 0.3], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 6.5, repeat: Infinity }}
        >
          <Euro size={68} />
        </motion.div>
        <motion.div
          className="absolute text-[#00FF9F]"
          style={{ left: '8%', top: '58%' }}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.6, 0.3], rotate: [0, 6, -6, 0] }}
          transition={{ duration: 6.8, repeat: Infinity }}
        >
          <PoundSterling size={56} />
        </motion.div>
        <motion.div
          className="absolute text-[#7B2CBF]"
          style={{ right: '8%', top: '62%' }}
          initial={{ opacity: 0.35 }}
          animate={{ opacity: [0.35, 0.7, 0.35], rotate: [0, -8, 8, 0] }}
          transition={{ duration: 7.2, repeat: Infinity }}
        >
          <JapaneseYen size={56} />
        </motion.div>
        <motion.div
          className="absolute text-[#00FF9F]"
          style={{ left: '10%', bottom: '12%' }}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.6, 0.3], rotate: [0, 6, -6, 0] }}
          transition={{ duration: 6.2, repeat: Infinity }}
        >
          <IndianRupee size={64} />
        </motion.div>
        <motion.div
          className="absolute text-[#7B2CBF]"
          style={{ right: '10%', bottom: '12%' }}
          initial={{ opacity: 0.35 }}
          animate={{ opacity: [0.35, 0.7, 0.35], rotate: [0, -8, 8, 0] }}
          transition={{ duration: 6.9, repeat: Infinity }}
        >
          <Bitcoin size={64} />
        </motion.div>
      </div>

      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating icons */}
          <div className="relative mb-8">
            <motion.div
              className="absolute left-0 top-0 text-[#00FF9F]"
              animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles size={40} />
            </motion.div>
            <motion.div
              className="absolute right-0 top-0 text-[#7B2CBF]"
              animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            >
              <Zap size={40} />
            </motion.div>
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -top-8 text-[#00FF9F]"
              animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2.8, repeat: Infinity }}
            >
              <Brain size={48} />
            </motion.div>
          </div>

          {/* Logo with enhanced styling */}
          <div className="mb-8 mt-16">
            <motion.h1
              className="text-7xl md:text-8xl lg:text-9xl mb-4 relative"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(0, 255, 159, 0.5)',
                  '0 0 40px rgba(0, 255, 159, 0.8)',
                  '0 0 20px rgba(0, 255, 159, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-[#00FF9F] drop-shadow-[0_0_15px_rgba(0,255,159,0.5)]">Deci</span>
              <span className="text-[#7B2CBF] drop-shadow-[0_0_15px_rgba(123,44,191,0.5)] text-8xl md:text-9xl lg:text-[10rem]">$</span>
              <span className="text-[#00FF9F] drop-shadow-[0_0_15px_rgba(0,255,159,0.5)]">ion</span>
            </motion.h1>
            
            {/* Subtitle line with gradient */}
            <motion.div
              className="w-64 h-1 mx-auto rounded-full"
              style={{
                background: 'linear-gradient(90deg, #7B2CBF, #00FF9F, #7B2CBF)',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          {/* Tagline with better typography */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-white text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              Every choice shapes{' '}
              <span className="text-[#00FF9F] font-semibold drop-shadow-[0_0_10px_rgba(0,255,159,0.5)]">
                who you are
              </span>
              .
            </p>
          </motion.div>

          {/* Start Button with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-6 relative"
          >
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 translate-y-6 w-[320px] h-[150px] md:w-[380px] md:h-[180px] rounded-full blur-2xl"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(0,255,159,0.35) 0%, rgba(0,255,159,0.15) 45%, rgba(0,255,159,0) 70%)',
              }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="primary"
                size="large"
                onClick={onStart}
                className="text-2xl px-16 py-6 rounded-2xl shadow-[0_0_30px_rgba(0,255,159,0.4)] hover:shadow-[0_0_50px_rgba(0,255,159,0.6)] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 font-bold tracking-wide">START GAME</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00FF9F] to-[#00d682]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>

          {/* Subtitle with glassmorphism */}
          <motion.div
            className="backdrop-blur-md bg-white/5 rounded-2xl px-8 py-4 inline-block border border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <p className="text-gray-300 text-lg">
              An interactive choice-based game
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
