/* ===================================================
   sound.js — Sintesis Audio Web Audio API (SFX & BGM)
   =================================================== */

const SoundManager = {
    enabled: StorageManager.get('sound_enabled', true),
    ctx: null,
    bgmAudio: null,

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
        }
    },

    toggle() {
        this.enabled = !this.enabled;
        StorageManager.set('sound_enabled', this.enabled);
        this.updateUI();
        this.play('click');

        if (this.enabled) {
            this.startBGM();
        } else {
            this.stopBGM();
        }
    },

    updateUI() {
        const btnStatus = document.getElementById('sound-icon-status');
        if (btnStatus) {
            btnStatus.innerText = this.enabled ? '🔊' : '🔇';
        }
    },

    startBGM() {
        if (!this.enabled) return;
        if (!this.bgmAudio) this.init();
        this.bgmAudio.play().catch(e => {
            console.warn("Autoplay BGM blocked, waiting for user gesture.", e);
        });
    },

    stopBGM() {
        if (this.bgmAudio) {
            this.bgmAudio.pause();
        }
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
