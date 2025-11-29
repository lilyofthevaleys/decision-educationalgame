import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export function HoverMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Articles', 'Language', 'Settings', 'Credits'];

  return (
    <div
      className="fixed top-8 right-8 z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Hamburger Icon */}
      <div className="cursor-pointer">
        <div className="space-y-2 p-4">
          <div className="w-10 h-1 bg-white rounded-full" />
          <div className="w-10 h-1 bg-white rounded-full" />
          <div className="w-10 h-1 bg-white rounded-full" />
        </div>
      </div>

      {/* Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-0 right-0 bg-gray-900 rounded-2xl shadow-2xl p-6 min-w-[180px]"
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>

            {/* Menu items */}
            <nav className="mt-8 space-y-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="block text-white hover:text-teal-400 transition-colors text-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
