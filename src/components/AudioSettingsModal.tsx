import { useEffect, useState } from 'react';
import { X, Volume2, Music2 } from 'lucide-react';
import { AudioManager } from '../audio/AudioManager';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function AudioSettingsModal({ isOpen, onClose }: Props) {
  const [master, setMaster] = useState(100);
  const [music, setMusic] = useState(50);
  const [sfx, setSfx] = useState(60);

  useEffect(() => {
    setMaster(Math.round(AudioManager.getMasterVolume() * 100));
    setMusic(Math.round(AudioManager.getMusicVolume() * 100));
    setSfx(Math.round(AudioManager.getSfxVolume() * 100));
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2147483646] bg-black/40 backdrop-blur-md flex items-center justify-center px-4" onClick={onClose}>
      <div className="relative w-11/12 sm:w-4/5 max-w-2xl rounded-3xl p-8 bg-gradient-to-b from-[#1A0933]/80 to-[#0a0118]/80 border-2 border-[#00FF9F]/40 shadow-[0_0_40px_rgba(0,255,159,0.25)]" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3 mb-6">
          <Volume2 className="w-6 h-6 text-[#00FF9F]" />
          <h2 className="text-white text-2xl">Audio Settings</h2>
          <button onClick={onClose} className="ml-2 text-white/70 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="grid gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#FFD700] text-sm">Master Volume</span>
              <span className="text-gray-400 text-xs">{master}%</span>
            </div>
            <input type="range" min={0} max={100} value={master} onChange={(e) => { const v = parseInt(e.target.value, 10); setMaster(v); AudioManager.setMasterVolume(v / 100); }} className="w-full accent-[#FFD700]" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Music2 className="w-4 h-4 text-[#00FF9F]" />
              <span className="text-[#00FF9F] text-sm">Music</span>
              <span className="text-gray-400 text-xs">{music}%</span>
            </div>
            <input type="range" min={0} max={100} value={music} onChange={(e) => { const v = parseInt(e.target.value, 10); setMusic(v); AudioManager.setMusicVolume(v / 100); }} className="w-full accent-[#00FF9F]" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[#7B2CBF] text-sm">SFX</span>
              <span className="text-gray-400 text-xs">{sfx}%</span>
            </div>
            <input type="range" min={0} max={100} value={sfx} onChange={(e) => { const v = parseInt(e.target.value, 10); setSfx(v); AudioManager.setSfxVolume(v / 100); }} className="w-full accent-[#7B2CBF]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioSettingsModal;
