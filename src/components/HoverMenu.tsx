
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export function HoverMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Articles', 'Language', 'Settings', 'Credits'];

  return (
    <div 
      style={{
        position: 'fixed',
        top: '24px',
        right: '24px',
        zIndex: 9999,
        pointerEvents: 'auto'
      }}
    >
      <div
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* Hamburger Icon */}
        <div 
          style={{
            borderRadius: '12px',
            backgroundColor: '#000000',
            border: '2px solid #333333',
            padding: '12px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div style={{ width: '40px', height: '4px', backgroundColor: 'white', borderRadius: '9999px' }} />
          <div style={{ width: '40px', height: '4px', backgroundColor: 'white', borderRadius: '9999px' }} />
          <div style={{ width: '40px', height: '4px', backgroundColor: 'white', borderRadius: '9999px' }} />
        </div>

        {/* Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'absolute',
                top: '64px',
                right: '0',
                backgroundColor: '#111827',
                borderRadius: '16px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                padding: '24px',
                minWidth: '200px',
                border: '1px solid #374151'
              }}
            >
              {/* Close button */}
              <button
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '4px'
                }}
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </button>

              {/* Menu items */}
              <nav style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    style={{
                      display: 'block',
                      color: 'white',
                      textAlign: 'center',
                      fontSize: '14px',
                      textDecoration: 'none'
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2dd4bf')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
                  >
                    {item}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}