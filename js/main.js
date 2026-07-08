/* ===================================================
   main.js — Bootstrap & Integrasi UI Efek Utama
   =================================================== */

function showLevelUpModal(levelNum, scoreEarned, accuracyVal, badgeName) {
    SoundManager.play('win');
    document.getElementById('modal-title').innerText = `MISI LEVEL ${levelNum} BERHASIL!`;
    document.getElementById('modal-score').innerText = `+${scoreEarned} XP`;
    document.getElementById('modal-accuracy').innerText = `${accuracyVal}%`;
    document.getElementById('modal-badge').innerText = badgeName;
    
    // Show/hide next level button
    const btnNext = document.getElementById('btn-next-level');
    if (levelNum >= 5) {
        btnNext.style.display = 'none';
    } else {
        btnNext.style.display = 'block';
    }
    
    document.getElementById('level-up-modal').classList.remove('hidden');
    triggerConfetti();
}

function closeLevelUpModal() {
    document.getElementById('level-up-modal').classList.add('hidden');
    stopConfetti();
}

let confettiInterval = null;
function triggerConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    canvas.classList.remove('hidden');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 5 + 4,
            d: Math.random() * canvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            tilt: Math.random() * 10 - 5
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, idx) => {
            ctx.beginPath();
            ctx.lineWidth = p.r;
            ctx.strokeStyle = p.color;
            ctx.moveTo(p.x + p.tilt + p.r/2, p.y);
            ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r/2);
            ctx.stroke();

            p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
            p.x += Math.sin(p.d) * 1.5;
            p.tilt = Math.sin(p.d - idx) * 3;

            if (p.y > canvas.height) {
                particles[idx] = {
                    x: Math.random() * canvas.width,
                    y: -20,
                    r: p.r,
                    d: p.d,
                    color: p.color,
                    tilt: p.tilt
                };
            }
        });
    }

    confettiInterval = setInterval(draw, 24);
}

function stopConfetti() {
    clearInterval(confettiInterval);
    const canvas = document.getElementById('confetti-canvas');
    if (canvas) canvas.classList.add('hidden');
}

window.onload = function() {
    const canvas = document.getElementById('stars-canvas');
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const starArray = [];
    for (let i = 0; i < 80; i++) {
        starArray.push({
            x: Math.random() * w,
            y: Math.random() * h,
            size: Math.random() * 2,
            speed: 0.08 + Math.random() * 0.2
        });
    }

    function animateBackground() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        starArray.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
            
            star.y += star.speed;
            if (star.y > h) {
                star.y = 0;
                star.x = Math.random() * w;
            }
        });
        requestAnimationFrame(animateBackground);
    }
    animateBackground();

    window.onresize = function() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    };

    GameState.updateGlobalHeader();
    SoundManager.init(); // Siapkan dan coba jalankan BGM
    Router.go('splash');
};
