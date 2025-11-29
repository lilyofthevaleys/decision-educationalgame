type PlayOptions = {
  volume?: number;
};

const sfxUrl = new URL('../../mouse-click-290204.mp3', import.meta.url).href;
const startUrl = new URL('../../game-start-317318.mp3', import.meta.url).href;
const bgmUrl = new URL('../../Kevin MacLeod - Itty Bitty 8 Bit.mp3', import.meta.url).href;
const nightShadeUrl = new URL('../../AdhesiveWombat - Night Shade.mp3', import.meta.url).href;
const powerupUrl = new URL('../../Jeremy Blake - Powerup!.mp3', import.meta.url).href;
const virtualBoyUrl = new URL('../../Krayzius & Brainstorm - Virtual Boy.mp3', import.meta.url).href;

const sounds: Record<string, HTMLAudioElement> = {
  select: new Audio(sfxUrl),
  start: new Audio(startUrl),
};

Object.values(sounds).forEach((a) => {
  a.preload = 'auto';
  a.volume = 0.6;
});

let bgm: HTMLAudioElement | null = null;
let fadeTimer: any = null;
let targetSrc: string | null = null;
let musicVolume = (() => {
  const v = parseFloat(localStorage.getItem('audio.musicVolume') || '');
  return Number.isFinite(v) ? Math.max(0, Math.min(1, v)) : 0.5;
})();
let sfxVolume = (() => {
  const v = parseFloat(localStorage.getItem('audio.sfxVolume') || '');
  return Number.isFinite(v) ? Math.max(0, Math.min(1, v)) : 0.6;
})();
let masterVolume = (() => {
  const v = parseFloat(localStorage.getItem('audio.masterVolume') || '');
  return Number.isFinite(v) ? Math.max(0, Math.min(1, v)) : 1;
})();

export const AudioManager = {
  play(key: keyof typeof sounds | string, opts?: PlayOptions) {
    const base = sounds[key as string];
    if (!base) return;
    const audio = base.cloneNode(true) as HTMLAudioElement;
    const baseVol = opts?.volume ?? sfxVolume;
    audio.volume = Math.max(0, Math.min(1, baseVol * masterVolume));
    audio.play().catch(() => {});
  },
  playBGMFor(screen: string) {
    const mapTrack = (s: string): string | null => {
      if (s === 'landing' || s === 'character-selection' || s === 'intro') return nightShadeUrl;
      if (s === 'scenario') return bgmUrl;
      if (s === 'results' || s === 'reflection') return powerupUrl;
      if (s === 'articles') return virtualBoyUrl;
      return null;
    };

    const nextSrc = mapTrack(screen);
    if (!nextSrc) {
      if (bgm) {
        if (fadeTimer) { clearInterval(fadeTimer); fadeTimer = null; }
        let v = bgm.volume;
        fadeTimer = setInterval(() => {
          v -= 0.05;
          if (bgm) bgm.volume = Math.max(0, v);
          if (v <= 0) { clearInterval(fadeTimer); fadeTimer = null; bgm.pause(); }
        }, 60);
      }
      targetSrc = null;
      return;
    }

    if (!bgm || bgm.src !== nextSrc) {
      targetSrc = nextSrc;
      if (fadeTimer) { clearInterval(fadeTimer); fadeTimer = null; }
      if (bgm && !bgm.paused) {
        let v = bgm.volume;
        fadeTimer = setInterval(() => {
          v -= 0.05;
          if (bgm) bgm.volume = Math.max(0, v);
          if (v <= 0) {
            clearInterval(fadeTimer); fadeTimer = null;
            bgm.pause();
            bgm = new Audio(targetSrc!);
            bgm.loop = true; bgm.preload = 'auto'; bgm.volume = 0;
            bgm.play().catch(() => {});
            let vv = 0;
            fadeTimer = setInterval(() => {
              const targetVol = Math.max(0, Math.min(1, musicVolume * masterVolume));
              vv = Math.min(targetVol, vv + 0.05);
              if (bgm) bgm.volume = vv;
              if (vv >= targetVol) { clearInterval(fadeTimer); fadeTimer = null; }
            }, 60);
          }
        }, 60);
      } else {
        bgm = new Audio(targetSrc!);
        bgm.loop = true; bgm.preload = 'auto'; bgm.volume = 0;
        bgm.play().catch(() => {});
        let vv = 0;
        fadeTimer = setInterval(() => {
          const targetVol = Math.max(0, Math.min(1, musicVolume * masterVolume));
          vv = Math.min(targetVol, vv + 0.05);
          if (bgm) bgm.volume = vv;
          if (vv >= targetVol) { clearInterval(fadeTimer); fadeTimer = null; }
        }, 60);
      }
    }
  },
  setMusicVolume(v: number) {
    musicVolume = Math.max(0, Math.min(1, v));
    localStorage.setItem('audio.musicVolume', String(musicVolume));
    if (bgm) bgm.volume = Math.max(0, Math.min(1, musicVolume * masterVolume));
  },
  setSfxVolume(v: number) {
    sfxVolume = Math.max(0, Math.min(1, v));
    localStorage.setItem('audio.sfxVolume', String(sfxVolume));
  },
  setMasterVolume(v: number) {
    masterVolume = Math.max(0, Math.min(1, v));
    localStorage.setItem('audio.masterVolume', String(masterVolume));
    if (bgm) bgm.volume = Math.max(0, Math.min(1, musicVolume * masterVolume));
  },
  getMusicVolume() { return musicVolume; },
  getSfxVolume() { return sfxVolume; },
  getMasterVolume() { return masterVolume; },
};
