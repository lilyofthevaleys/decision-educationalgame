import { motion } from 'motion/react';
import { Button } from './Button';
import { Sparkles, Zap, Brain } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
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

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(#00FF9F 1px, transparent 1px), linear-gradient(90deg, #00FF9F 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

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
            className="mb-6"
          >
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