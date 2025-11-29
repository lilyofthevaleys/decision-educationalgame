import { useEffect, useRef } from 'react';
import { X, Globe } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function LanguageModal({ isOpen, onClose }: Props) {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!isOpen) return;

    const init = () => {
      (window as any).googleTranslateElementInit = function () {
        const el = document.getElementById('google_translate_element');
        if (el) el.innerHTML = '';
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'id,en,zh-CN,ja,ko',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element',
        );
      };

      if ((window as any).google && (window as any).google.translate) {
        (window as any).googleTranslateElementInit();
        return;
      }

      if (!loadedRef.current) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.onload = () => {
          loadedRef.current = true;
        };
        document.body.appendChild(script);
      } else {
        (window as any).googleTranslateElementInit();
      }
    };

    init();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2147483646] bg-black/40 backdrop-blur-md flex items-center justify-center px-4" onClick={onClose}>
      <div className="relative w-11/12 sm:w-4/5 max-w-2xl rounded-3xl p-8 bg-gradient-to-b from-[#1A0933]/80 to-[#0a0118]/80 border-2 border-[#00FF9F]/40 shadow-[0_0_40px_rgba(0,255,159,0.25)]" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-[#00FF9F]" />
          <h2 className="text-white text-2xl">Language</h2>
          <button onClick={onClose} className="ml-2 text-white/70 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div id="google_translate_element" className="bg-black/30 border border-white/10 rounded-lg p-4" />

        <style>
          {`
            .goog-te-banner-frame { display: none !important; }
            body { top: 0 !important; }
          `}
        </style>
      </div>
    </div>
  );
}

export default LanguageModal;
