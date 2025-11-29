import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft } from 'lucide-react';
import BrowseArticles from '../Browse Articles Section/src/App';
import indexCss from '../Browse Articles Section/src/index.css?raw';
import globalsCss from '../Browse Articles Section/src/styles/globals.css?raw';

export function ArticlesPage({ onBack }: { onBack?: () => void }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [root, setRoot] = useState<ShadowRoot | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const shadow = host.attachShadow({ mode: 'open' });

    const styleReset = document.createElement('style');
    styleReset.textContent = `:host{all: initial}`;
    const styleIndex = document.createElement('style');
    styleIndex.textContent = indexCss;
    const styleGlobals = document.createElement('style');
    styleGlobals.textContent = globalsCss;
    const styleFonts = document.createElement('style');
    styleFonts.textContent = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');
      * { font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
      h1, h2 { font-family: 'Space Grotesk', sans-serif; }`;

    shadow.appendChild(styleReset);
    shadow.appendChild(styleIndex);
    shadow.appendChild(styleGlobals);
    shadow.appendChild(styleFonts);

    setRoot(shadow);

    return () => {
      setRoot(null);
      while (shadow.firstChild) shadow.removeChild(shadow.firstChild);
    };
  }, []);

  return (
    <div ref={hostRef} style={{ display: 'contents' }}>
      {root
        ? createPortal(
            <>
              <div
                style={{
                  position: 'fixed',
                  top: '24px',
                  right: '24px',
                  zIndex: 2147483647,
                  pointerEvents: 'auto',
                }}
              >
                <button
                  type="button"
                  onClick={onBack}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    border: '2px solid #00FF9F',
                    color: '#00FF9F',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontSize: '14px',
                    boxShadow: '0 0 18px rgba(0,255,159,0.4)',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.8)');
                    (e.currentTarget.style.boxShadow = '0 0 24px rgba(0,255,159,0.5)');
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)');
                    (e.currentTarget.style.boxShadow = '0 0 18px rgba(0,255,159,0.4)');
                  }}
                >
                  <ArrowLeft style={{ width: 16, height: 16 }} />
                  Back to Game
                </button>
              </div>
              <BrowseArticles />
            </>,
            root as any,
          )
        : null}
    </div>
  );
}

export default ArticlesPage;
