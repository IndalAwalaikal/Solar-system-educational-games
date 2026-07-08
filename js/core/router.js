/* ===================================================
   router.js — Routing Halaman & State Game
   =================================================== */

const GameState = {
    playerName: StorageManager.get('playerName', ''),
    score: StorageManager.get('score', 0),
    progress: StorageManager.get('progress', {
        materiRead: [],
        levelsCompleted: []
    }),
    history: StorageManager.get('history', []),
    currentLevel: 1,

    save() {
        StorageManager.set('playerName', this.playerName);
        StorageManager.set('score', this.score);
        StorageManager.set('progress', this.progress);
        StorageManager.set('history', this.history);
        this.updateGlobalHeader();
    },

    addScore(points) {
        this.score += points;
        this.save();
        this.updateGlobalHeader();
    },

    completeLevel(levelNum, stats = {}) {
        if (!this.progress.levelsCompleted.includes(levelNum)) {
            this.progress.levelsCompleted.push(levelNum);
        }
        
        const newRecord = {
            level: levelNum,
            date: new Date().toLocaleDateString('id-ID'),
            score: stats.score || 0,
            accuracy: stats.accuracy || 100,
            duration: stats.duration || '00:00'
        };
        this.history.unshift(newRecord);
        this.save();
        
        const badge = this.calculateBadge();
        showLevelUpModal(levelNum, stats.score, stats.accuracy, badge);
    },

    calculateBadge() {
        const totalCompleted = this.progress.levelsCompleted.length;
        if (totalCompleted >= 5) return "🥇 Solar System Expert";
        if (totalCompleted >= 3) return "🥈 Planet Master";
        if (totalCompleted >= 1) return "🥉 Space Explorer";
        return "🛰️ Space Cadet";
    },

    updateGlobalHeader() {
        const playerTag = document.getElementById('player-welcome-tag');
        if (playerTag) {
            playerTag.innerHTML = `Selamat Belajar, <span class="text-yellow-300 font-bold">${this.playerName || "Sobat IPA"}</span>`;
        }
    }
};

const Router = {
    currentPage: 'splash',

    go(pageId) {
        SoundManager.play('click');
        this.currentPage = pageId;
        
        const container = document.getElementById('main-content');
        const horizonBg = document.getElementById('bottom-planet-horizon');

        if (pageId === 'splash' || pageId === 'home') {
            horizonBg.style.transform = 'translateY(0)';
        } else {
            horizonBg.style.transform = 'translateY(100%)';
        }

        // Sembunyikan elemen header tertentu jika berada di halaman splash
        const playerTag = document.getElementById('player-welcome-tag');
        const btnScore = document.querySelector('[title="Statistik & Skor"]');
        const btnHome = document.querySelector('[title="Kembali ke Menu Utama"]');

        if (pageId === 'splash') {
            if (playerTag) playerTag.style.visibility = 'hidden';
            if (btnScore) btnScore.style.visibility = 'hidden';
            if (btnHome) btnHome.style.visibility = 'hidden';
        } else {
            if (playerTag) playerTag.style.visibility = 'visible';
            if (btnScore) btnScore.style.visibility = 'visible';
            if (btnHome) btnHome.style.visibility = pageId === 'home' ? 'hidden' : 'visible';
        }

        if (window.missionGameLoopId) {
            cancelAnimationFrame(window.missionGameLoopId);
            window.missionGameLoopId = null;
        }

        switch(pageId) {
            case 'splash':
                container.innerHTML = Pages.splash();
                break;
            case 'home':
                container.innerHTML = Pages.home();
                break;
            case 'materi':
                container.innerHTML = Pages.materi();
                MateriPage.init();
                break;
            case 'level1':
                container.innerHTML = Pages.level1();
                Level1.init();
                break;
            case 'level2':
                container.innerHTML = Pages.level2();
                Level2.init();
                break;
            case 'level3':
                container.innerHTML = Pages.level3();
                Level3.init();
                break;
            case 'level4':
                container.innerHTML = Pages.level4();
                Level4.init();
                break;
            case 'level5':
                container.innerHTML = Pages.level5();
                Level5.init();
                break;
            case 'score':
                container.innerHTML = Pages.score();
                break;
            case 'about':
                container.innerHTML = Pages.about();
                break;
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

function openGameSelector() {
    const container = document.getElementById('main-content');
    container.innerHTML = `
    <div class="bg-black/50 border border-cyan-500/20 rounded-[32px] p-6 max-w-lg mx-auto text-center">
        <h2 class="font-bubble-title text-3xl text-yellow-300 mb-6">PILIH MISI GAME</h2>
        <div class="grid grid-cols-1 gap-3">
            <button onclick="Router.go('level1')" class="py-4 bg-[#0a1931] hover:bg-cyan-500/20 border-2 border-cyan-400/40 rounded-2xl font-bold transition-all text-sm">LEVEL 1: URUTAN ORBIT 🛰️</button>
            <button onclick="Router.go('level2')" class="py-4 bg-[#0a1931] hover:bg-cyan-500/20 border-2 border-cyan-400/40 rounded-2xl font-bold transition-all text-sm">LEVEL 2: COCOKKAN PLANET 🪐</button>
            <button onclick="Router.go('level5')" class="py-4 bg-[#0a1931] hover:bg-cyan-500/20 border-2 border-cyan-400/40 rounded-2xl font-bold transition-all text-sm">LEVEL 5: MISSION SPACE 🚀</button>
            <button onclick="Router.go('home')" class="py-3 text-xs text-gray-400 hover:text-white transition-all mt-2">Batal</button>
        </div>
    </div>
    `;
}

function openQuizSelector() {
    const container = document.getElementById('main-content');
    container.innerHTML = `
    <div class="bg-black/50 border border-cyan-500/20 rounded-[32px] p-6 max-w-lg mx-auto text-center">
        <h2 class="font-bubble-title text-3xl text-cyan-300 mb-6">PILIH JENIS KUIS</h2>
        <div class="grid grid-cols-1 gap-3">
            <button onclick="Router.go('level3')" class="py-4 bg-[#0a1931] hover:bg-cyan-500/20 border-2 border-cyan-400/40 rounded-2xl font-bold transition-all text-sm">LEVEL 3: BENAR / SALAH ⚖️</button>
            <button onclick="Router.go('level4')" class="py-4 bg-[#0a1931] hover:bg-cyan-500/20 border-2 border-cyan-400/40 rounded-2xl font-bold transition-all text-sm">LEVEL 4: PILIHAN GANDA 📝</button>
            <button onclick="Router.go('home')" class="py-3 text-xs text-gray-400 hover:text-white transition-all mt-2">Batal</button>
        </div>
    </div>
    `;
}

function savePlayerNameAndStart() {
    const input = document.getElementById('input-player-name');
    const name = input.value.trim();
    if (name === "") {
        input.classList.add('shake-effect');
        setTimeout(() => input.classList.remove('shake-effect'), 400);
        return;
    }
    GameState.playerName = name;
    GameState.save();
    SoundManager.startBGM(); // Aktifkan musik secara paksa setelah interaksi tombol
    Router.go('home');
}

function confirmExit() {
    Dialog.show({
        title: "KONFIRMASI KELUAR",
        message: "Apakah kamu yakin ingin menghentikan misi dan kembali ke menu utama?",
        icon: "🚀",
        confirmText: "Ya, Keluar",
        cancelText: "Batal",
        onConfirm: () => {
            Router.go('home');
        }
    });
}

function goToNextLevel() {
    const nextLevel = GameState.currentLevel + 1;
    closeLevelUpModal();
    
    if (nextLevel > 5) {
        Dialog.alert("Selamat! Kamu telah menyelesaikan semua level! 🎉 Kembali ke menu utama untuk menjelajahi materi atau mengulangi level.", () => {
            Router.go('home');
        });
    } else {
        GameState.currentLevel = nextLevel;
        Router.go('level' + nextLevel);
    }
}

function repeatCurrentLevel() {
    const level = GameState.currentLevel;
    closeLevelUpModal();
    Router.go('level' + level);
}
