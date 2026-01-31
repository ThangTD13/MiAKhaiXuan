
import React from 'react';
import { motion } from 'framer-motion';

export const Petal: React.FC<{ delay: number }> = ({ delay }) => (
  <motion.div
    initial={{ y: -20, opacity: 0, rotate: 0 }}
    animate={{ 
      y: ['0vh', '100vh'], 
      x: ['0vw', '10vw', '-5vw', '5vw'],
      opacity: [0, 0.6, 0.6, 0],
      rotate: [0, 360]
    }}
    transition={{ 
      duration: 10 + Math.random() * 10, 
      repeat: Infinity, 
      delay: delay,
      ease: "linear"
    }}
    className="fixed top-0 pointer-events-none z-0"
    style={{ left: `${Math.random() * 100}%` }}
  >
    <div className="w-3 h-3 bg-pink-100/40 rounded-full blur-[1px]"></div>
  </motion.div>
);

export const PetalBackground: React.FC = () => (
  <>
    {[...Array(15)].map((_, i) => (
      <Petal key={i} delay={i * 1.5} />
    ))}
  </>
);
