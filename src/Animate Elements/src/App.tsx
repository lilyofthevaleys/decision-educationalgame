import React from 'react';
import { motion } from 'motion/react';

export default function App() {
  const squares = [
    { id: 1, size: 80, x: '5%', y: '10%', duration: 4, delay: 0 },
    { id: 2, size: 50, x: '15%', y: '25%', duration: 5, delay: 0.5 },
    { id: 3, size: 120, x: '25%', y: '5%', duration: 4.5, delay: 1 },
    { id: 4, size: 40, x: '35%', y: '35%', duration: 5.5, delay: 1.5 },
    { id: 5, size: 90, x: '45%', y: '15%', duration: 4.8, delay: 2 },
    { id: 6, size: 60, x: '55%', y: '30%', duration: 5.2, delay: 2.5 },
    { id: 7, size: 110, x: '65%', y: '8%', duration: 4.3, delay: 3 },
    { id: 8, size: 70, x: '75%', y: '25%', duration: 5.8, delay: 3.5 },
    { id: 9, size: 45, x: '85%', y: '12%', duration: 4.6, delay: 0.8 },
    { id: 10, size: 100, x: '92%', y: '35%', duration: 5.3, delay: 1.3 },
    { id: 11, size: 55, x: '8%', y: '50%', duration: 4.9, delay: 1.8 },
    { id: 12, size: 85, x: '18%', y: '65%', duration: 5.1, delay: 2.3 },
    { id: 13, size: 65, x: '28%', y: '55%', duration: 4.7, delay: 2.8 },
    { id: 14, size: 95, x: '40%', y: '70%', duration: 5.4, delay: 3.3 },
    { id: 15, size: 75, x: '50%', y: '60%', duration: 4.4, delay: 0.3 },
    { id: 16, size: 50, x: '62%', y: '52%', duration: 5.6, delay: 1.2 },
    { id: 17, size: 40, x: '72%', y: '68%', duration: 4.2, delay: 2.1 },
    { id: 18, size: 130, x: '82%', y: '58%', duration: 5.7, delay: 2.7 },
    { id: 19, size: 60, x: '10%', y: '82%', duration: 5, delay: 1.6 },
    { id: 20, size: 70, x: '22%', y: '88%', duration: 4.5, delay: 2.4 },
    { id: 21, size: 55, x: '35%', y: '85%', duration: 5.3, delay: 0.9 },
    { id: 22, size: 90, x: '48%', y: '82%', duration: 4.8, delay: 1.7 },
    { id: 23, size: 65, x: '60%', y: '78%', duration: 5.1, delay: 3.1 },
    { id: 24, size: 80, x: '72%', y: '85%', duration: 4.6, delay: 2.6 },
    { id: 25, size: 45, x: '88%', y: '80%', duration: 5.5, delay: 0.6 },
    { id: 26, size: 100, x: '12%', y: '42%', duration: 4.9, delay: 1.1 },
    { id: 27, size: 50, x: '92%', y: '48%', duration: 5.2, delay: 3.4 },
    { id: 28, size: 75, x: '42%', y: '45%', duration: 4.4, delay: 1.9 },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {squares.map((square) => (
        <React.Fragment key={square.id}>
          {/* Main square with glitch effect */}
          <motion.div
            className="absolute bg-teal-400"
            style={{
              left: square.x,
              top: square.y,
              width: square.size,
              height: square.size,
              boxShadow: `0 0 20px rgba(20, 184, 166, 0.6), 0 0 40px rgba(20, 184, 166, 0.3)`,
            }}
            animate={{
              opacity: [0, 0.8, 0.9, 0.9, 0.4, 0.9, 0],
              scale: [0.8, 1, 1, 1.03, 1, 1, 0.9],
              x: [0, 3, -3, 0, 2, 0],
              rotate: [0, 0, 0, 2, 0, 0],
            }}
            transition={{
              duration: square.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: square.delay,
              times: [0, 0.15, 0.4, 0.5, 0.55, 0.7, 1],
            }}
          />

          {/* RGB split glitch layer - red/pink */}
          <motion.div
            className="absolute bg-pink-500 opacity-40"
            style={{
              left: square.x,
              top: square.y,
              width: square.size,
              height: square.size,
              mixBlendMode: 'screen',
            }}
            animate={{
              opacity: [0, 0, 0, 0.6, 0, 0, 0],
              x: [-4, -4, -4, -6, -4, -4, -4],
            }}
            transition={{
              duration: square.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: square.delay,
              times: [0, 0.15, 0.4, 0.5, 0.55, 0.7, 1],
            }}
          />

          {/* RGB split glitch layer - cyan */}
          <motion.div
            className="absolute bg-cyan-400 opacity-40"
            style={{
              left: square.x,
              top: square.y,
              width: square.size,
              height: square.size,
              mixBlendMode: 'screen',
            }}
            animate={{
              opacity: [0, 0, 0, 0.6, 0, 0, 0],
              x: [4, 4, 4, 6, 4, 4, 4],
            }}
            transition={{
              duration: square.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: square.delay,
              times: [0, 0.15, 0.4, 0.5, 0.55, 0.7, 1],
            }}
          />
        </React.Fragment>
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(20, 184, 166, 0.5) 25%, rgba(20, 184, 166, 0.5) 26%, transparent 27%, transparent 74%, rgba(20, 184, 166, 0.5) 75%, rgba(20, 184, 166, 0.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(20, 184, 166, 0.5) 25%, rgba(20, 184, 166, 0.5) 26%, transparent 27%, transparent 74%, rgba(20, 184, 166, 0.5) 75%, rgba(20, 184, 166, 0.5) 76%, transparent 77%, transparent)',
          backgroundSize: '60px 60px'
        }} />
      </div>
    </div>
  );
}
