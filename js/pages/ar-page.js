/* ===================================================
   ar-page.js — Fitur 3D Solar System & AR Explorer
   =================================================== */

const ARPage = {
  activePlanet: "matahari",

  // Estimasi target koordinat untuk model-viewer tata_surya.glb
  // Format: X Y Z (dalam meter/unit model)
  planetTargets: {
    matahari: "0m 0m 0m",
    merkurius: "-0.8m 0m 0.2m",
    venus: "-1.5m 0m -0.3m",
    bumi: "-2.2m 0m 0.4m",
    mars: "-2.9m 0m -0.2m",
    jupiter: "-4.2m 0m 0.6m",
    saturnus: "-6.0m 0m -0.5m",
    uranus: "-7.8m 0m 0.3m",
    neptunus: "-9.5m 0m -0.4m",
  },

  init() {
    this.renderTabs();
    this.selectPlanet("matahari");
  },

  goBack() {
    SoundManager.play("click");
    Router.go("home");
  },

  stopCamera() {
    // Dummy method untuk mencegah crash saat router melakukan cleanup navigasi
  },

  renderTabs() {
    const selectorContainer = document.getElementById("planet-selector-scroll");
    if (!selectorContainer) return;

    // Ambil objek astronomi saja (Matahari + 8 Planet) dari DATABASE_MATERI
    const items = DATABASE_MATERI.filter((m) => m.id !== "pengertian");

    selectorContainer.innerHTML = items
      .map(
        (m) => `
            <button onclick="ARPage.selectPlanet('${m.id}')" id="tab-ar-${m.id}"
                class="px-3 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap border transition-all duration-200 uppercase shrink-0 bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10">
                ${m.judul.split(" ")[0]}
            </button>
        `,
      )
      .join("");
  },

  selectPlanet(id) {
    SoundManager.play("click");
    this.activePlanet = id;

    // Ambil data materi
    const m = DATABASE_MATERI.find((item) => item.id === id);
    if (!m) return;

    // Update styling tombol tab yang aktif
    DATABASE_MATERI.forEach((item) => {
      const btn = document.getElementById(`tab-ar-${item.id}`);
      if (btn) {
        if (item.id === id) {
          btn.className =
            "px-3 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap border transition-all duration-200 uppercase shrink-0 bg-cyan-500/10 border-cyan-400 text-cyan-300";
        } else {
          btn.className =
            "px-3 py-1.5 rounded-lg text-[11px] font-bold whitespace-nowrap border transition-all duration-200 uppercase shrink-0 bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10";
        }
      }
    });

    // Set camera target & zoom pada model-viewer
    const viewer = document.getElementById("solar-system-3d");
    if (viewer) {
      const target = this.planetTargets[id] || "0m 0m 0m";
      viewer.setAttribute("camera-target", target);

      // Set orbit/jarak kamera agar lebih dekat untuk planet kecil, dan menjauh untuk tata surya secara utuh
      if (id === "matahari") {
        viewer.setAttribute("camera-orbit", "45deg 75deg 6m");
      } else if (id === "jupiter" || id === "saturnus") {
        viewer.setAttribute("camera-orbit", "20deg 80deg 2m");
      } else {
        viewer.setAttribute("camera-orbit", "30deg 85deg 1.2m");
      }
    }

    // Render Panel Informasi
    const infoPanel = document.getElementById("planet-info-panel");
    if (!infoPanel) return;

    // Buat tabel spesifikasi
    let specTableHTML = "";
    if (m.dataTabel) {
      const keys = Object.keys(m.dataTabel);
      const rows = m.dataTabel[keys[0]].length;
      specTableHTML = `
            <div class="border border-white/10 rounded-xl overflow-hidden bg-black/30">
                <table class="w-full text-left border-collapse text-[11px]">
                    <thead>
                        <tr class="bg-white/5 text-cyan-400 border-b border-white/10">
                            <th class="p-2 font-bold">${keys[0]}</th>
                            <th class="p-2 font-bold">${keys[1]}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-white/5 text-gray-300">
            `;
      for (let r = 0; r < rows; r++) {
        specTableHTML += `
                    <tr>
                        <td class="p-2 font-medium bg-white/[0.02]">${m.dataTabel[keys[0]][r]}</td>
                        <td class="p-2">${m.dataTabel[keys[1]][r]}</td>
                    </tr>
                `;
      }
      specTableHTML += `
                    </tbody>
                </table>
            </div>
            `;
    }

    infoPanel.innerHTML = `
            <!-- Judul Objek -->
            <div class="space-y-1 border-b border-cyan-500/10 pb-2">
                <span class="text-[9px] font-bold text-cyan-400 tracking-wider uppercase">Objek Dipilih</span>
                <h3 class="font-bubble-title text-lg text-cyan-300 font-bubble-stroke">${m.judul}</h3>
            </div>

            <!-- Ringkasan Singkat -->
            <div class="bg-cyan-500/5 border border-cyan-500/10 rounded-lg p-2.5 text-[11px] text-gray-300 leading-relaxed">
                <p>${m.ringkasan}</p>
            </div>

            <!-- Penjelasan Singkat -->
            <div class="text-[11px] text-gray-400 leading-relaxed">
                <p>${m.penjelasan.split("\n\n")[0]}</p>
            </div>

            <!-- Tabel Spesifikasi -->
            <div>
                <span class="text-[10px] font-bold text-cyan-400 uppercase tracking-wider block mb-1.5">📊 Info Fisik</span>
                <div class="border border-cyan-500/10 rounded-lg overflow-hidden bg-[#0a1931]/40">
                    <table class="w-full text-[10px] border-collapse">
                        <thead>
                            <tr class="bg-cyan-500/10 text-cyan-300 border-b border-cyan-500/10">
                                <th class="p-1.5 text-left font-bold">${Object.keys(m.dataTabel)[0]}</th>
                                <th class="p-1.5 text-left font-bold">${Object.keys(m.dataTabel)[1]}</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-cyan-500/5">
                            ${
                              Object.keys(m.dataTabel)[0] &&
                              m.dataTabel[Object.keys(m.dataTabel)[0]]
                                .slice(0, 4)
                                .map(
                                  (val, i) => `
                            <tr>
                                <td class="p-1.5 text-gray-400">${val}</td>
                                <td class="p-1.5 text-gray-300 font-semibold">${m.dataTabel[Object.keys(m.dataTabel)[1]][i]}</td>
                            </tr>
                            `,
                                )
                                .join("")
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Fakta Unik -->
            <div class="bg-yellow-400/5 border border-yellow-400/10 rounded-lg p-2.5 text-[10px] space-y-1">
                <span class="font-bold text-yellow-300 block">💡 Fakta</span>
                <p class="text-gray-300 leading-relaxed">${m.fakta}</p>
            </div>
        `;
  },
};
