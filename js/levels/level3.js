/* ===================================================
   level3.js — Logika Kuis Benar atau Salah
   =================================================== */

const Level3 = {
    questions: [],
    currentIndex: 0,
    score: 0,
    startTime: null,

    init() {
        this.questions = [...DATABASE_TRUE_FALSE].sort(() => Math.random() - 0.5);
        this.currentIndex = 0;
        this.score = 0;
        this.startTime = new Date();
        this.showQuestion();
    },

    showQuestion() {
        const q = this.questions[this.currentIndex];
        document.getElementById('l3-progress').innerText = `${this.currentIndex + 1} / ${this.questions.length}`;
        document.getElementById('l3-progress-bar').style.width = `${((this.currentIndex + 1) / this.questions.length) * 100}%`;
        document.getElementById('l3-statement').innerText = q.question;
        document.getElementById('l3-feedback').classList.add('hidden');
    },

    answer(userAnswer) {
        const q = this.questions[this.currentIndex];
        const fb = document.getElementById('l3-feedback');
        fb.classList.remove('hidden');
        
        if (userAnswer === q.answer) {
            SoundManager.play('correct');
            this.score += 100;
            GameState.addScore(100);
            fb.innerHTML = `
                <div class="text-green-400 font-bold text-sm mb-1">BENAR! 🎉 (+100 XP)</div>
                <p class="text-xs text-gray-300">${q.explanation}</p>
            `;
        } else {
            SoundManager.play('incorrect');
            fb.innerHTML = `
                <div class="text-red-400 font-bold text-sm mb-1">SALAH! ✘</div>
                <p class="text-xs text-gray-300">${q.explanation}</p>
            `;
        }

        document.getElementById('l3-card-box').style.pointerEvents = 'none';
        setTimeout(() => {
            document.getElementById('l3-card-box').style.pointerEvents = 'auto';
            this.nextQuestion();
        }, 3000);
    },

    nextQuestion() {
        this.currentIndex++;
        if (this.currentIndex >= this.questions.length) {
            const durationSec = Math.floor((new Date() - this.startTime) / 1000);
            const durationStr = `${Math.floor(durationSec/60)}m ${durationSec%60}s`;
            GameState.currentLevel = 3;
            GameState.completeLevel(3, {
                score: this.score,
                accuracy: Math.floor((this.score / (this.questions.length * 100)) * 100),
                duration: durationStr
            });
        } else {
            this.showQuestion();
        }
    }
};
