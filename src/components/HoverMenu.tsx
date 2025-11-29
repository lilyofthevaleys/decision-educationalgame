
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export function HoverMenu({ onNavigateArticles }: { onNavigateArticles?: () => void }) {
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
        onClick={() => setIsOpen((v) => !v)}
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
                borderRadius: '16px',
                padding: '24px',
                minWidth: '220px',
                border: '2px solid rgba(0,255,159,0.35)',
                background: 'radial-gradient(1200px 1200px at 10% 10%, rgba(0,255,159,0.14) 0%, rgba(0,255,159,0.06) 20%, rgba(10,1,24,0.92) 60%), radial-gradient(1000px 1000px at 90% 10%, rgba(123,44,191,0.12) 0%, rgba(123,44,191,0.05) 25%, rgba(10,1,24,0.92) 60%), linear-gradient(180deg, rgba(26,9,51,0.96) 0%, rgba(10,1,24,0.96) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow:
                  '0 0 0 1px rgba(123,44,191,0.35), 0 10px 24px rgba(0,0,0,0.5), 0 0 24px rgba(0,255,159,0.25)',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  backgroundImage:
                    'linear-gradient(rgba(0, 255, 159, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 159, 0.06) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                  opacity: 0.4
                }}
              />
              {/* Menu items */}
              <nav style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px', padding: '4px' }}>
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item}
                    type="button"
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'white',
                      textAlign: 'center',
                      fontSize: '14px',
                      background: 'rgba(0,0,0,0.35)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '12px',
                      padding: '14px 16px',
                      cursor: 'pointer'
                    }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#00FF9F';
                      e.currentTarget.style.border = '1px solid rgba(0,255,159,0.6)';
                      e.currentTarget.style.background =
                        'linear-gradient(135deg, rgba(0,255,159,0.18), rgba(123,44,191,0.16))';
                      e.currentTarget.style.boxShadow = '0 0 16px rgba(0,255,159,0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.border = '1px solid rgba(255,255,255,0.12)';
                      e.currentTarget.style.background = 'rgba(0,0,0,0.35)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    onClick={() => {
                      if (item === 'Articles' && onNavigateArticles) {
                        onNavigateArticles();
                        setIsOpen(false);
                      }
                    }}
                  >
                    {item}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
