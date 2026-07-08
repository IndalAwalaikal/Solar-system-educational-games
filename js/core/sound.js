/* ===================================================
   sound.js — Sintesis Audio Web Audio API (SFX & BGM)
   =================================================== */

const SoundManager = {
    enabled: StorageManager.get('sound_enabled', true),
    ctx: null,
    bgmAudio: null,
    synthInterval: null,
    synthNodes: [],

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (!this.bgmAudio) {
            this.bgmAudio = new Audio('assets/audio/bgm.mp3');
            this.bgmAudio.loop = true;
            this.bgmAudio.volume = 0.35;
        }
        this.updateUI();
        if (this.enabled) {
            this.startBGM();
            // Setup listener untuk interaksi pertama jika autoplay diblokir browser
            const playOnGesture = () => {
                if (this.enabled) {
                    this.startBGM();
                }
                window.removeEventListener('click', playOnGesture);
                window.removeEventListener('touchstart', playOnGesture);
                window.removeEventListener('keydown', playOnGesture);
            };
            window.addEventListener('click', playOnGesture);
            window.addEventListener('touchstart', playOnGesture);
            window.addEventListener('keydown', playOnGesture);
        }
    },

    toggle() {
        this.enabled = !this.enabled;
        StorageManager.set('sound_enabled', this.enabled);
        this.updateUI();
        this.play('click');

        if (this.enabled) {
            this.playBGMForPage(window.Router ? Router.currentPage : 'home');
        } else {
            this.stopBGM();
            this.stopSynthLoop();
        }
    },

    updateUI() {
        const btnStatus = document.getElementById('sound-icon-status');
        if (btnStatus) {
            btnStatus.innerText = this.enabled ? '🔊' : '🔇';
        }
    },

    startBGM() {
        this.playMenuBGM();
    },

    playMenuBGM() {
        this.stopSynthLoop();
        if (!this.enabled) return;
        if (!this.bgmAudio) this.init();
        if (this.bgmAudio.paused) {
            this.bgmAudio.play().catch(e => {
                console.warn("Autoplay BGM blocked, waiting for user gesture.", e);
            });
        }
    },

    stopBGM() {
        if (this.bgmAudio) {
            this.bgmAudio.pause();
        }
    },

    playBGMForPage(pageId) {
        if (!this.enabled) return;
        this.init();

        if (pageId.startsWith('level')) {
            // Tentukan tipe musik synth berdasarkan level
            if (pageId === 'level1' || pageId === 'level2') {
                this.playLevelBGM('game1');
            } else if (pageId === 'level3' || pageId === 'level4') {
                this.playLevelBGM('quiz');
            } else if (pageId === 'level5') {
                this.playLevelBGM('game5');
            }
        } else {
            // Menu utama, splash, score, about, materi
            this.playMenuBGM();
        }
    },

    stopSynthLoop() {
        if (this.synthInterval) {
            clearInterval(this.synthInterval);
            this.synthInterval = null;
        }
        this.synthNodes.forEach(node => {
            try { node.stop(); } catch(e) {}
        });
        this.synthNodes = [];
    },

    playLevelBGM(levelType) {
        this.stopBGM();
        this.stopSynthLoop();
        if (!this.enabled) return;
        this.init();

        const ctx = this.ctx;
        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        let step = 0;
        
        if (levelType === 'game1') {
            // Level 1 & 2: Space Orbit (Melodi luar angkasa yang tenang dan misterius)
            const chords = [
                [261.63, 329.63, 392.00, 493.88], // Cmaj7
                [220.00, 261.63, 329.63, 392.00], // Am7
                [174.61, 220.00, 261.63, 329.63], // Fmaj7
                [196.00, 246.94, 293.66, 349.23]  // G7
            ];
            
            this.synthInterval = setInterval(() => {
                const chordIdx = Math.floor(step / 8) % chords.length;
                const noteIdx = step % 8;
                const notes = chords[chordIdx];
                
                if (noteIdx % 2 === 0) {
                    const freq = notes[noteIdx / 2];
                    this.playSynthNote(freq, 'triangle', 0.8, 0.05);
                }
                
                if (noteIdx === 0) {
                    this.playSynthNote(notes[0] / 2, 'sine', 1.5, 0.1);
                }
                
                step++;
            }, 400);
            
        } else if (levelType === 'quiz') {
            // Level 3 & 4: Kuis (Detak ritme tegang untuk berpikir)
            const scale = [220.00, 246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00]; // A Minor
            
            this.synthInterval = setInterval(() => {
                const noteIdx = step % 8;
                
                this.playSynthNote(110.00, 'sine', 0.15, 0.08); // Detak bass konstan
                
                if (noteIdx === 0 || noteIdx === 4 || (noteIdx === 6 && Math.random() < 0.5)) {
                    const freq = scale[Math.floor(Math.random() * scale.length)];
                    this.playSynthNote(freq, 'sine', 0.6, 0.04);
                }
                
                step++;
            }, 350);
            
        } else if (levelType === 'game5') {
            // Level 5: Mission Space (Beat retro arcade synthwave bertempo cepat)
            const bass = [110.00, 110.00, 130.81, 130.81, 146.83, 146.83, 164.81, 164.81]; 
            const melody = [440.00, 523.25, 587.33, 659.25, 783.99, 880.00];
            
            this.synthInterval = setInterval(() => {
                const idx = step % 8;
                
                this.playSynthNote(bass[idx] / 2, 'sawtooth', 0.25, 0.25, 180);
                
                if (idx % 2 === 1 && Math.random() < 0.4) {
                    const freq = melody[Math.floor(Math.random() * melody.length)];
                    this.playSynthNote(freq, 'triangle', 0.12, 0.12);
                }
                
                step++;
            }, 180);
        }
    },

    playSynthNote(freq, type, duration, volume, filterFreq = 1000) {
        try {
            const ctx = this.ctx;
            const now = ctx.currentTime;
            
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const filter = ctx.createBiquadFilter();
            
            osc.type = type;
            osc.frequency.setValueAtTime(freq, now);
            
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(filterFreq, now);
            
            osc.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            
            gain.gain.setValueAtTime(volume * 0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
            
            osc.start(now);
            osc.stop(now + duration);
            
            this.synthNodes.push(osc);
            if (this.synthNodes.length > 30) {
                const oldOsc = this.synthNodes.shift();
                try { oldOsc.disconnect(); } catch(e) {}
            }
        } catch(e) {}
    },

    play(type) {
        if (!this.enabled) return;
        this.init();
        
        try {
            const ctx = this.ctx;
            if (ctx.state === 'suspended') {
                ctx.resume();
            }

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);

            const now = ctx.currentTime;

            switch (type) {
                case 'click':
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(600, now);
                    osc.frequency.exponentialRampToValueAtTime(150, now + 0.12);
                    gain.gain.setValueAtTime(0.25, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
                    osc.start(now);
                    osc.stop(now + 0.12);
                    break;

                case 'correct':
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(523.25, now);
                    osc.frequency.setValueAtTime(659.25, now + 0.08);
                    osc.frequency.setValueAtTime(783.99, now + 0.16);
                    osc.frequency.setValueAtTime(1046.50, now + 0.24);
                    gain.gain.setValueAtTime(0.3, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);
                    osc.start(now);
                    osc.stop(now + 0.5);
                    break;

                case 'incorrect':
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(160, now);
                    osc.frequency.linearRampToValueAtTime(90, now + 0.3);
                    gain.gain.setValueAtTime(0.35, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
                    osc.start(now);
                    osc.stop(now + 0.35);
                    break;

                case 'win':
                    const notes = [523, 659, 784, 987, 1046, 1318];
                    notes.forEach((freq, idx) => {
                        const subOsc = ctx.createOscillator();
                        const subGain = ctx.createGain();
                        subOsc.type = 'triangle';
                        subOsc.frequency.setValueAtTime(freq, now + idx * 0.08);
                        subOsc.connect(subGain);
                        subGain.connect(ctx.destination);
                        subGain.gain.setValueAtTime(0.2, now + idx * 0.08);
                        subGain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.4);
                        subOsc.start(now + idx * 0.08);
                        subOsc.stop(now + idx * 0.08 + 0.4);
                    });
                    break;
            }
        } catch(e) {
            console.warn("Audio blocked");
        }
    }
};
