/* ===================================================
   ar-page.js — Misi Penjelajah Antariksa AR
   Konsep: Scan planet → Jawab kuis → Bangun Tata Surya
   =================================================== */

const ARPage = {
    stream: null,
    spawnTimeout: null,
    missionActive: false,
    currentPlanetIdx: 0,
    capturedPlanets: [],

    planets: [
        {
            name: "Merkurius", img: ASSETS.merkurius, order: 1, orbitColor: "#9ca3af",
            fact: "Planet terkecil dan terdekat dari Matahari. Suhunya bisa mencapai 430°C di siang hari!",
            quiz: { q: "Merkurius adalah planet yang paling...", options: ["Dekat ke Matahari", "Jauh dari Matahari", "Besar", "Dingin"], answer: 0 }
        },
        {
            name: "Venus", img: ASSETS.venus, order: 2, orbitColor: "#fbbf24",
            fact: "Planet terpanas di Tata Surya (462°C) karena efek rumah kaca CO₂ yang sangat tebal.",
            quiz: { q: "Mengapa Venus menjadi planet terpanas?", options: ["Paling dekat Matahari", "Efek rumah kaca tebal", "Inti planet sangat panas", "Tidak berotasi"], answer: 1 }
        },
        {
            name: "Bumi", img: ASSETS.bumi, order: 3, orbitColor: "#34d399",
            fact: "Satu-satunya planet yang diketahui memiliki kehidupan, air cair, dan atmosfer oksigen.",
            quiz: { q: "Apa yang membuat Bumi unik di Tata Surya?", options: ["Memiliki cincin", "Paling besar", "Memiliki kehidupan", "Paling cepat berotasi"], answer: 2 }
        },
        {
            name: "Mars", img: ASSETS.mars, order: 4, orbitColor: "#f87171",
            fact: "Disebut Planet Merah karena besi oksida (karat) di permukaannya. Memiliki gunung tertinggi: Olympus Mons.",
            quiz: { q: "Mengapa Mars berwarna merah?", options: ["Lava panas", "Besi oksida (karat)", "Cahaya Matahari", "Atmosfer merah"], answer: 1 }
        },
        {
            name: "Jupiter", img: ASSETS.jupiter, order: 5, orbitColor: "#fb923c",
            fact: "Planet terbesar — 1.300 Bumi bisa muat di dalamnya! Badai Bintik Merah Besar sudah berlangsung ratusan tahun.",
            quiz: { q: "Berapa Bumi yang bisa muat di dalam Jupiter?", options: ["100", "500", "1.300", "10.000"], answer: 2 }
        },
        {
            name: "Saturnus", img: ASSETS.saturnus, order: 6, orbitColor: "#fde047",
            fact: "Terkenal dengan cincinnya yang terbuat dari miliaran partikel es dan batuan. Kepadatannya lebih rendah dari air!",
            quiz: { q: "Cincin Saturnus terbuat dari apa?", options: ["Gas panas", "Es dan batuan", "Debu logam", "Cahaya terpantul"], answer: 1 }
        },
        {
            name: "Uranus", img: ASSETS.uranus, order: 7, orbitColor: "#67e8f9",
            fact: "Planet es raksasa yang berotasi menyamping dengan kemiringan 98°, sehingga 'menggelinding' mengelilingi Matahari.",
            quiz: { q: "Apa yang unik dari rotasi Uranus?", options: ["Sangat cepat", "Berotasi menyamping", "Tidak berotasi", "Berotasi mundur"], answer: 1 }
        },
        {
            name: "Neptunus", img: ASSETS.neptunus, order: 8, orbitColor: "#818cf8",
            fact: "Planet terjauh dengan angin terkencang di Tata Surya (2.100 km/jam) dan suhu -214°C.",
            quiz: { q: "Neptunus memiliki angin dengan kecepatan hingga...", options: ["500 km/jam", "1.000 km/jam", "2.100 km/jam", "100 km/jam"], answer: 2 }
        }
    ],

    init() {
        this.capturedPlanets = [];
        this.currentPlanetIdx = 0;
        this.missionActive = true;
        this.startCamera();
        this.updateMiniMap();
        this.updateProgress();

        // Mulai misi setelah delay singkat
        setTimeout(() => {
            if (this.missionActive) this.spawnNextPlanet();
        }, 1500);
    },

    async startCamera() {
        const video = document.getElementById('ar-video-feed');
        const fallback = document.getElementById('ar-camera-fallback');

        try {
            this.stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } },
                audio: false
            });
            if (video) {
                video.srcObject = this.stream;
                video.onloadedmetadata = () => video.play();
                if (fallback) fallback.classList.add('hidden');
            }
        } catch (err) {
            console.warn("Camera blocked:", err);
            // Fallback: tampilkan background animasi bintang sebagai pengganti kamera
            if (fallback) {
                fallback.classList.remove('hidden');
                this.drawStarfield(fallback);
            }
        }
    },

    drawStarfield(container) {
        container.innerHTML = '';
        const canvas = document.createElement('canvas');
        canvas.className = 'w-full h-full';
        container.appendChild(canvas);
        const ctx = canvas.getContext('2d');

        const resize = () => { canvas.width = container.clientWidth; canvas.height = container.clientHeight; };
        resize();

        const stars = Array.from({ length: 100 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            s: Math.random() * 2 + 0.5,
            sp: Math.random() * 0.3 + 0.05
        }));

        const animate = () => {
            if (!this.missionActive) return;
            ctx.fillStyle = '#050d1a';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            stars.forEach(s => {
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.s, 0, Math.PI * 2);
                ctx.fill();
                s.y += s.sp;
                if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width; }
            });
            requestAnimationFrame(animate);
        };
        animate();
    },

    stopCamera() {
        this.missionActive = false;
        if (this.stream) {
            this.stream.getTracks().forEach(t => t.stop());
            this.stream = null;
        }
        if (this.spawnTimeout) {
            clearTimeout(this.spawnTimeout);
            this.spawnTimeout = null;
        }
    },

    updateProgress() {
        const count = document.getElementById('ar-planet-count');
        const bar = document.getElementById('ar-progress-fill');
        if (count) count.textContent = `${this.capturedPlanets.length} / 8`;
        if (bar) bar.style.width = `${(this.capturedPlanets.length / 8) * 100}%`;
    },

    updateMiniMap() {
        const map = document.getElementById('ar-mini-solarsystem');
        if (!map) return;

        // Gambar matahari di tengah + orbit lingkaran + planet yang sudah ditangkap
        let html = '<div class="relative w-full h-full">';
        // Matahari
        html += '<div class="absolute w-5 h-5 md:w-6 md:h-6 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)] z-10" style="top:50%;left:50%;transform:translate(-50%,-50%)"></div>';

        this.planets.forEach((p, i) => {
            const radius = 14 + i * 8; // radius orbit dari matahari (persen)
            const captured = this.capturedPlanets.includes(p.name);
            // Orbit ring
            html += `<div class="absolute rounded-full border ${captured ? 'border-white/20' : 'border-white/5'}" style="width:${radius * 2}%;height:${radius * 2}%;top:${50 - radius}%;left:${50 - radius}%"></div>`;
            // Planet dot jika sudah ditangkap
            if (captured) {
                const angle = (i * 45 + Date.now() / 100) * Math.PI / 180; // posisi statis
                const px = 50 + radius * Math.cos(i * 0.8);
                const py = 50 + radius * Math.sin(i * 0.8);
                html += `<img src="${p.img}" alt="${p.name}" class="absolute w-3 h-3 md:w-4 md:h-4 rounded-full object-cover border border-white/50 z-20" style="top:${py}%;left:${px}%;transform:translate(-50%,-50%)" title="${p.name}">`;
            }
        });
        html += '</div>';
        map.innerHTML = html;
    },

    spawnNextPlanet() {
        if (!this.missionActive) return;
        if (this.currentPlanetIdx >= this.planets.length) return; // Semua sudah muncul

        const overlay = document.getElementById('ar-overlay-area');
        const status = document.getElementById('ar-mission-status');
        if (!overlay) return;

        // Hapus planet sebelumnya di overlay
        overlay.innerHTML = '';

        const planet = this.planets[this.currentPlanetIdx];

        // Update status misi
        if (status) {
            status.innerHTML = `<span class="text-yellow-300">📡</span> Sinyal terdeteksi: <strong class="text-cyan-300">${planet.name}</strong> — ketuk untuk memindai!`;
        }

        // Buat planet element dengan animasi drift
        const el = document.createElement('div');
        el.className = 'absolute pointer-events-auto cursor-pointer ar-planet-appear';
        el.style.width = '90px';
        el.style.height = '90px';

        // Posisi acak yang aman (hindari tepi)
        const safeX = 15 + Math.random() * 60; // 15% - 75%
        const safeY = 15 + Math.random() * 50; // 15% - 65%
        el.style.left = safeX + '%';
        el.style.top = safeY + '%';
        el.style.transform = 'translate(-50%, -50%)';

        el.innerHTML = `
            <div class="relative w-full h-full flex flex-col items-center justify-center">
                <div class="w-16 h-16 md:w-20 md:h-20 rounded-full relative">
                    <img src="${planet.img}" class="w-full h-full rounded-full object-cover border-2 border-cyan-300/60 shadow-[0_0_25px_rgba(0,240,255,0.5)]" alt="${planet.name}">
                    <div class="absolute -inset-3 rounded-full border-2 border-dashed border-cyan-400/40 animate-spin" style="animation-duration:4s"></div>
                    <div class="absolute -inset-1 rounded-full border border-cyan-300/30 animate-ping"></div>
                </div>
                <span class="mt-1.5 text-[10px] font-bold text-white bg-black/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30 tracking-wider">${planet.name}</span>
            </div>
        `;

        el.onclick = (e) => {
            e.stopPropagation();
            SoundManager.play('click');
            this.showQuiz(planet, el);
        };

        overlay.appendChild(el);

        // Planet menghilang setelah 12 detik jika tidak diklik — lalu respawn
        this.spawnTimeout = setTimeout(() => {
            if (el.parentNode && this.missionActive) {
                el.classList.add('opacity-0');
                setTimeout(() => {
                    if (el.parentNode) el.remove();
                    this.spawnNextPlanet(); // Respawn planet yang sama
                }, 400);
            }
        }, 12000);
    },

    showQuiz(planet, element) {
        // Hapus timeout respawn
        if (this.spawnTimeout) clearTimeout(this.spawnTimeout);

        // Tampilkan overlay kuis
        const quizOverlay = document.getElementById('ar-quiz-overlay');
        if (!quizOverlay) return;

        const q = planet.quiz;
        let optionsHTML = q.options.map((opt, i) =>
            `<button onclick="ARPage.answerQuiz(${i}, ${q.answer}, '${planet.name}')"
                class="w-full py-3 px-4 bg-white/5 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-xl text-xs md:text-sm font-semibold text-left transition-all active:scale-[0.98]">
                <span class="text-cyan-400 font-bold mr-2">${String.fromCharCode(65 + i)}.</span> ${opt}
            </button>`
        ).join('');

        quizOverlay.innerHTML = `
        <div class="bg-gradient-to-b from-[#0a1931] to-[#15305b] border-2 border-cyan-400 rounded-3xl overflow-hidden max-w-md w-full shadow-2xl mx-4">
            <div class="p-4 bg-gradient-to-r from-cyan-600/80 to-blue-700/80 flex items-center gap-3">
                <img src="${planet.img}" class="w-12 h-12 rounded-full border-2 border-white object-cover shrink-0" alt="${planet.name}">
                <div>
                    <p class="text-[10px] text-cyan-200 uppercase tracking-wider font-bold">Pemindaian Planet</p>
                    <h4 class="font-bubble-title text-lg text-white font-bubble-stroke">${planet.name}</h4>
                </div>
            </div>
            <div class="p-5">
                <p class="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Pertanyaan Identifikasi:</p>
                <p class="text-sm text-white font-semibold mb-4 leading-relaxed">${q.q}</p>
                <div class="space-y-2">
                    ${optionsHTML}
                </div>
            </div>
        </div>
        `;
        quizOverlay.classList.remove('hidden');

        // Hapus planet dari overlay kamera
        if (element && element.parentNode) element.remove();
    },

    answerQuiz(selected, correct, planetName) {
        const quizOverlay = document.getElementById('ar-quiz-overlay');
        const planet = this.planets.find(p => p.name === planetName);

        if (selected === correct) {
            // BENAR!
            SoundManager.play('correct');

            if (!this.capturedPlanets.includes(planetName)) {
                this.capturedPlanets.push(planetName);
                GameState.addScore(100);
            }

            // Tampilkan hasil benar + fakta
            quizOverlay.innerHTML = `
            <div class="bg-gradient-to-b from-[#0a1931] to-[#15305b] border-2 border-green-400 rounded-3xl overflow-hidden max-w-md w-full shadow-2xl mx-4">
                <div class="p-5 bg-gradient-to-r from-green-600/80 to-emerald-700/80 text-center">
                    <div class="text-4xl mb-2">✅</div>
                    <h4 class="font-bubble-title text-xl text-white font-bubble-stroke">PLANET TERIDENTIFIKASI!</h4>
                    <p class="text-green-200 text-xs mt-1">${planet.name} berhasil dipindai (+100 XP)</p>
                </div>
                <div class="p-5">
                    <div class="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/10 mb-4">
                        <img src="${planet.img}" class="w-10 h-10 rounded-full object-cover border border-white/30 shrink-0" alt="${planet.name}">
                        <div>
                            <p class="text-[10px] text-cyan-400 uppercase font-bold">Fakta ${planet.name}:</p>
                            <p class="text-xs text-gray-300 leading-relaxed mt-0.5">${planet.fact}</p>
                        </div>
                    </div>
                    <button onclick="ARPage.continueAfterQuiz(true)"
                        class="w-full py-3 bg-green-500 hover:bg-green-400 text-black font-extrabold rounded-2xl active:scale-95 transition-all text-xs tracking-wider uppercase">
                        ${this.capturedPlanets.length >= 8 ? '🏆 LIHAT HASIL MISI' : '🔭 LANJUT PINDAI'}
                    </button>
                </div>
            </div>
            `;
        } else {
            // SALAH
            SoundManager.play('incorrect');

            quizOverlay.innerHTML = `
            <div class="bg-gradient-to-b from-[#0a1931] to-[#15305b] border-2 border-red-400 rounded-3xl overflow-hidden max-w-md w-full shadow-2xl mx-4">
                <div class="p-5 bg-gradient-to-r from-red-600/80 to-rose-700/80 text-center">
                    <div class="text-4xl mb-2">❌</div>
                    <h4 class="font-bubble-title text-xl text-white font-bubble-stroke">IDENTIFIKASI GAGAL</h4>
                    <p class="text-red-200 text-xs mt-1">${planet.name} menghilang dari radar... Coba lagi!</p>
                </div>
                <div class="p-5">
                    <p class="text-xs text-gray-400 mb-1">Jawaban yang benar:</p>
                    <p class="text-sm text-cyan-300 font-bold mb-4">${planet.quiz.options[correct]}</p>
                    <button onclick="ARPage.continueAfterQuiz(false)"
                        class="w-full py-3 bg-red-500/80 hover:bg-red-400/80 text-white font-extrabold rounded-2xl active:scale-95 transition-all text-xs tracking-wider uppercase">
                        🔄 COBA LAGI
                    </button>
                </div>
            </div>
            `;
        }
    },

    continueAfterQuiz(wasCorrect) {
        const quizOverlay = document.getElementById('ar-quiz-overlay');
        if (quizOverlay) quizOverlay.classList.add('hidden');

        this.updateProgress();
        this.updateMiniMap();

        // Cek apakah semua planet sudah ditangkap
        if (this.capturedPlanets.length >= 8) {
            this.missionComplete();
            return;
        }

        if (wasCorrect) {
            // Berhasil — lanjut ke planet berikutnya
            this.currentPlanetIdx++;

            // Cari planet berikutnya yang belum ditangkap
            while (this.currentPlanetIdx < this.planets.length && this.capturedPlanets.includes(this.planets[this.currentPlanetIdx].name)) {
                this.currentPlanetIdx++;
            }
            if (this.currentPlanetIdx >= this.planets.length) {
                // Kembali ke awal dan cari yang belum ditangkap
                this.currentPlanetIdx = this.planets.findIndex(p => !this.capturedPlanets.includes(p.name));
            }
        }
        // Gagal — planet yang sama akan muncul lagi

        // Spawn berikutnya setelah delay singkat
        setTimeout(() => {
            if (this.missionActive) this.spawnNextPlanet();
        }, 1200);
    },

    missionComplete() {
        this.missionActive = false;
        SoundManager.play('win');

        const overlay = document.getElementById('ar-overlay-area');
        const status = document.getElementById('ar-mission-status');

        if (overlay) overlay.innerHTML = '';
        if (status) {
            status.innerHTML = `<span class="text-green-400">🏆</span> <strong class="text-green-300">MISI SELESAI!</strong> Semua planet berhasil diidentifikasi!`;
        }

        // Bonus skor
        GameState.addScore(500);

        // Tampilkan modal hasil
        setTimeout(() => {
            const quizOverlay = document.getElementById('ar-quiz-overlay');
            if (quizOverlay) {
                quizOverlay.innerHTML = `
                <div class="bg-gradient-to-b from-[#0a1931] to-[#15305b] border-4 border-yellow-400 rounded-3xl overflow-hidden max-w-md w-full shadow-2xl mx-4">
                    <div class="p-6 bg-gradient-to-r from-yellow-500/80 to-amber-600/80 text-center">
                        <div class="text-5xl mb-2 animate-bounce">🏆</div>
                        <h4 class="font-bubble-title text-2xl text-white font-bubble-stroke">MISI AR SELESAI!</h4>
                        <p class="text-yellow-100 text-xs mt-1">Kamu telah membangun Tata Surya lengkap!</p>
                    </div>
                    <div class="p-5">
                        <div class="bg-black/40 rounded-2xl p-4 mb-4 border border-cyan-500/30">
                            <div class="flex justify-between text-xs py-1">
                                <span class="text-gray-400">Planet ditemukan:</span>
                                <span class="font-bold text-green-400">8 / 8</span>
                            </div>
                            <div class="flex justify-between text-xs py-1">
                                <span class="text-gray-400">Bonus XP:</span>
                                <span class="font-bold text-yellow-300">+500 XP</span>
                            </div>
                            <div class="flex justify-between text-xs py-1">
                                <span class="text-gray-400">Total XP dari kuis:</span>
                                <span class="font-bold text-cyan-300">+800 XP</span>
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button onclick="ARPage.resetMission()"
                                class="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl active:scale-95 transition-all text-xs border border-white/20">
                                🔄 Ulangi
                            </button>
                            <button onclick="document.getElementById('ar-quiz-overlay').classList.add('hidden'); Router.go('home');"
                                class="flex-1 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-extrabold rounded-2xl active:scale-95 transition-all text-xs">
                                🏠 Menu Utama
                            </button>
                        </div>
                    </div>
                </div>
                `;
                quizOverlay.classList.remove('hidden');
            }
        }, 800);
    },

    resetMission() {
        const quizOverlay = document.getElementById('ar-quiz-overlay');
        if (quizOverlay) quizOverlay.classList.add('hidden');

        this.capturedPlanets = [];
        this.currentPlanetIdx = 0;
        this.missionActive = true;
        this.updateMiniMap();
        this.updateProgress();

        const status = document.getElementById('ar-mission-status');
        if (status) status.innerHTML = '<span class="text-cyan-300">🔭</span> Menginisialisasi ulang radar pemindai...';

        setTimeout(() => {
            if (this.missionActive) this.spawnNextPlanet();
        }, 1500);
    }
};
