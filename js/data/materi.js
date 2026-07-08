/* ===================================================
   materi.js — Data Materi Ensiklopedia Tata Surya
   =================================================== */

const DATABASE_MATERI = [
    {
        id: "pengertian",
        judul: "Pengertian Sistem Tata Surya",
        gambar: ASSETS.tataSurya,
        fotoAsli: ASSETS.tataSurya,
        penjelasan: `Tata Surya adalah sistem astronomi yang terdiri dari Matahari sebagai pusat dan semua objek langit yang terikat oleh gaya gravitasinya. Sistem ini terbentuk sekitar 4,6 miliar tahun yang lalu dari keruntuhan gravitasi awan molekul raksasa. Sebagian besar massa sistem ini terkonsentrasi di Matahari, dengan mayoritas massa sisanya terkandung dalam delapan planet yang mengorbit Matahari dalam jalur yang hampir melingkar dan bidang orbit yang hampir sebidang yang disebut ekliptika.

Tata Surya kita terletak di galaksi Bima Sakti, tepatnya di lengan Orion, sekitar 26.000 tahun cahaya dari pusat galaksi. Sistem ini tidak hanya terdiri dari planet-planet besar, tetapi juga mencakup berbagai objek lain seperti planet kerdil, satelit alami (bulan), asteroid, komet, meteoroid, dan debu kosmik. Semua objek ini bergerak dalam orbit yang stabil mengelilingi Matahari karena pengaruh gaya gravitasi yang sangat kuat dari bintang pusat kita.

Struktur Tata Surya dapat dibagi menjadi beberapa zona utama: Tata Surya bagian dalam yang terdiri dari empat planet kebumian (Merkurius, Venus, Bumi, dan Mars), sabuk asteroid yang memisahkan planet dalam dan luar, Tata Surya bagian luar yang terdiri dari empat raksasa gas (Jupiter, Saturnus, Uranus, dan Neptunus), serta wilayah trans-Neptunus yang mencakup sabuk Kuiper dan awan Oort. Setiap zona memiliki karakteristik unik yang menarik untuk dipelajari.`,
        fakta: "Tata Surya kita bergerak mengelilingi pusat galaksi Bima Sakti dengan kecepatan sekitar 828.000 km/jam dan membutuhkan waktu sekitar 225-250 juta tahun untuk menyelesaikan satu orbit penuh yang disebut tahun galaksi!",
        ringkasan: "Matahari adalah pusat Tata Surya, dan gravitasi adalah lem pengikat seluruh komponen langit.",
        dataTabel: {
            "Komponen": ["Matahari", "8 Planet", "5 Planet Kerdil", "200+ Satelit", "Jutaan Asteroid", "Triliunan Komet"],
            "Keterangan": ["Bintang pusat", "Mengorbit Matahari", "Ceres, Pluto, Eris, Haumea, Makemake", "Mengorbit planet", "Terutama di sabuk asteroid", "Terutama di sabuk Kuiper dan awan Oort"]
        },
        subBab: [
            {
                judul: "Sejarah Pembentukan Tata Surya",
                isi: "Tata Surya terbentuk dari nebula matahari sekitar 4,6 miliar tahun lalu. Teori yang paling diterima adalah hipotesis nebula, yang menyatakan bahwa Tata Surya terbentuk dari awan debu dan gas raksasa yang runtuh karena gravitasi. Saat awan runtuh, ia mulai berputar lebih cepat dan memipih menjadi cakram. Sebagian besar materi tertarik ke pusat dan membentuk Matahari, sementara materi di cakram mulai menggumpal membentuk planet-planet."
            },
            {
                judul: "Komponen Utama Tata Surya",
                isi: "Tata Surya terdiri dari berbagai komponen: Matahari (99,86% massa total), delapan planet utama, lima planet kerdil yang diakui (Ceres, Pluto, Haumea, Makemake, dan Eris), lebih dari 200 satelit alami yang diketahui, jutaan asteroid (terutama di sabuk asteroid antara Mars dan Jupiter), serta miliaran komet yang berasal dari sabuk Kuiper dan awan Oort."
            },
            {
                judul: "Struktur dan Zona Tata Surya",
                isi: "Tata Surya dapat dibagi menjadi beberapa zona: Tata Surya bagian dalam (planet kebumian: Merkurius, Venus, Bumi, Mars), sabuk asteroid, Tata Surya bagian luar (raksasa gas: Jupiter, Saturnus, Uranus, Neptunus), sabuk Kuiper (objek trans-Neptunus), dan awan Oort (sumber komet periode panjang). Setiap zona memiliki karakteristik fisik dan komposisi yang berbeda."
            }
        ]
    },
    {
        id: "matahari",
        judul: "Matahari (Pusat Tata Surya)",
        gambar: ASSETS.matahari,
        fotoAsli: ASSETS.matahari,
        penjelasan: `Matahari adalah bintang tipe G (katai kuning) yang terletak di pusat Tata Surya kita. Dengan diameter sekitar 1,39 juta kilometer, Matahari berukuran 109 kali lebih besar dari Bumi dan memiliki massa sekitar 333.000 kali massa Bumi. Matahari terdiri dari plasma panas yang terutama mengandung hidrogen (73%) dan helium (25%), dengan sejumlah kecil elemen berat seperti oksigen, karbon, neon, dan besi.

Matahari menghasilkan energi melalui reaksi fusi nuklir di intinya, di mana atom hidrogen bergabung membentuk helium. Proses ini melepaskan energi dalam jumlah luar biasa besar - sekitar 3,8 × 10^26 watt setiap detik! Energi ini merambat keluar melalui zona radiasi dan zona konveksi sebelum akhirnya mencapai permukaan (fotosfer) dan dipancarkan ke luar angkasa sebagai cahaya dan panas.

Suhu permukaan Matahari mencapai sekitar 5.500°C, sementara intinya mencapai suhu luar biasa 15 juta°C. Meskipun terlihat kuning dari Bumi, Matahari sebenarnya memancarkan cahaya putih yang terlihat kuning karena atmosfer Bumi menyaring panjang gelombang tertentu. Matahari berusia sekitar 4,6 miliar tahun dan diperkirakan akan terus bersinar selama 5 jangka waktu 5 miliar tahun lagi sebelum berubah menjadi raksasa merah.`,
        fakta: "Matahari kehilangan sekitar 4 million ton massa setiap detik melalui proses fusi nuklir dan angin matahari, namun dengan massanya yang sangat besar, ini tidak akan mempengaruhi keberadaannya selama miliaran tahun!",
        ringkasan: "Matahari adalah sumber energi, panas, dan cahaya utama bagi kehidupan di Bumi.",
        dataTabel: {
            "Parameter": ["Diameter", "Massa", "Suhu Permukaan", "Suhu Inti", "Usia", "Komposisi Utama"],
            "Nilai": ["1,39 juta km", "1,989 × 10^30 kg", "5.500°C", "15 juta°C", "4,6 miliard tahun", "73% Hidrogen, 25% Helium"]
        },
        subBab: [
            {
                judul: "Struktur Internal Matahari",
                isi: "Matahari memiliki struktur berlapis: Inti (core) adalah daerah terpanas tempat fusi nuklir terjadi, zona radiasi di mana energi merambat melalui radiasi foton, zona konveksi di mana plasma panas naik dan plasma dingin turun, fotosfer (permukaan yang terlihat), kromosfer (lapisan atmosfer bawah), dan korona (atmosfer luar yang sangat panas hingga 2 juta°C)."
            },
            {
                judul: "Aktivitas Matahari",
                isi: "Matahari memiliki siklus aktivitas 11 tahun yang ditandai dengan perubahan jumlah bintik matahari. Aktivitas ini termasuk suar matahari (solar flare) yang melepaskan energi besar, lontaran massa korona (CME) yang melontarkan miliaran ton plasma, dan angin matahari yang merupakan aliran partikel bermuatan. Aktivitas ini dapat mempengaruhi komunikasi satelit dan menciptakan aurora di Bumi."
            },
            {
                judul: "Pengaruh Matahari terhadap Bumi",
                isi: "Matahari adalah sumber energi utama untuk kehidupan di Bumi. Cahaya matahari memungkinkan fotosintesis tumbuhan, menggerakkan siklus air dan cuaca, serta memberikan energi untuk berbagai sumber daya terbarukan. Radiasi ultraviolet matahari membantu pembentukan vitamin D pada manusia, namun berlebihan dapat menyebabkan kerusakan kulit. Medan magnet matahari juga melindungi Tata Surya dari sinar kosmik galaksi."
            }
        ]
    },
    {
        id: "merkurius",
        judul: "Merkurius - Planet Terdekat",
        gambar: ASSETS.merkurius,
        fotoAsli: ASSETS.merkurius,
        penjelasan: `Merkurius adalah planet terkecil dan terdekat dengan Matahari dalam Tata Surya kita. Dengan diameter hanya 4.879 kilometer, Merkurius sedikit lebih besar dari Bulan Bumi. Planet ini mengorbit Matahari pada jarak rata-rata 57,9 juta kilometer dengan periode orbit hanya 88 hari Bumi, menjadikannya planet dengan tahun terpendek di Tata Surya.

Permukaan Merkurius sangat mirip dengan Bulan - penuh dengan kawah akibat tumbukan meteor dan asteroid selama miliaran tahun. Planet ini hampir tidak memiliki atmosfer (hanya eksosfer tipis yang terdiri dari atom-atom yang terlepas dari permukaan), sehingga tidak ada perlindungan dari radiasi matahari atau meteorit kecil. Kondisi ini juga menyebabkan perbedaan suhu yang ekstrem antara siang dan malam.

Meskipun paling dekat dengan Matahari, Merkurius bukanlah planet terpanas. Suhu permukaannya bisa mencapai 430°C di siang hari karena tidak ada atmosfer untuk mendistribusikan panas, namun turun drastis hingga -180°C di malam hari karena panas cepat hilang ke luar angkasa. Perbedaan suhu 600°C ini adalah yang terbesar di antara semua planet di Tata Surya.`,
        fakta: "Merkurius memiliki medan magnet yang lemah (sekitar 1% kekuatan medan magnet Bumi) yang tidak biasa untuk planet sekecil ini. Medan magnet ini menunjukkan bahwa Merkurius masih memiliki inti besi cair yang aktif!",
        ringkasan: "Planet terkecil, terdekat dari Matahari, tanpa atmosfer, dan suhu ekstrem.",
        dataTabel: {
            "Parameter": ["Diameter", "Jarak dari Matahari", "Periode Orbit", "Periode Rotasi", "Suhu Siang", "Suhu Malam"],
            "Nilai": ["4.879 km", "57,9 juta km", "88 hari", "59 hari Bumi", "430°C", "-180°C"]
        },
        subBab: [
            {
                judul: "Karakteristik Fisik",
                isi: "Merkurius adalah planet terestrial (berbatu) dengan struktur internal yang terdiri dari inti besi besar (mencakup 75% radius planet), mantel silikat, dan kerak tipis. Inti besi yang besar ini menjelaskan mengapa Merkurius memiliki densitas tinggi (5,43 g/cm³) meskipun ukurannya kecil. Permukaannya didominasi dataran tinggi yang penuh kawah dan dataran rendah yang lebih halus (smooth plains)."
            },
            {
                judul: "Eksplorasi Merkurius",
                isi: "Merkurius adalah planet yang sulit dijelajahi karena dekat dengan Matahari. Misi Mariner 10 (1974-1975) adalah yang pertama mengunjungi Merkurius dan memetakan 45% permukaannya. Misi MESSENGER NASA (2011-2015) berhasil mengorbit Merkurius dan memetakan seluruh permukaannya, menemukan bukti es air di kawah kutub yang selalu dalam bayangan. Misi BepiColombo (ESA/JAXA) diluncurkan 2018 dan akan tiba di Merkurius pada 2025."
            },
            {
                judul: "Fenomena Unik Merkurius",
                isi: "Merkurius memiliki fenomena unik: rotasinya sangat lambat (59 hari Bumi untuk satu rotasi) dibandingkan orbitnya (88 hari), sehingga satu hari matahari di Merkurius (dari matahari terbit ke matahari terbit berikutnya) berlangsung 176 hari Bumi! Planet ini juga memiliki 'ekor' natrium yang terlihat saat melintasi Matahari, dan mengalami penyusutan diameter sekitar 7 km sejak terbentuk karena pendinginan inti."
            }
        ]
    },
    {
        id: "venus",
        judul: "Venus - Planet Terpanas",
        gambar: ASSETS.venus,
        fotoAsli: ASSETS.venus,
        penjelasan: `Venus adalah planet kedua dari Matahari dan sering disebut sebagai 'kembaran Bumi' karena ukurannya yang mirip (diameter 12.104 km, hanya 650 km lebih kecil dari Bumi). Namun, kemiripan itu berakhir di situ. Venus adalah planet terpanas di Tata Surya dengan suhu permukaan konstan 460°C, cukup panas untuk melelehkan timah! Suhu ekstrem ini disebabkan oleh efek rumah kaca yang tak terkendali.

Atmosfer Venus sangat tebal dan terdiri dari 96,5% karbon dioksida dengan awan asam sulfat yang menyelimuti seluruh planet. Tekanan atmosfer di permukaan Venus 90 kali lebih besar dari Bumi - setara dengan tekanan di kedalaman 900 meter laut di Bumi! Atmosfer tebal ini memerangkap panas matahari dengan sangat efisien, menciptakan efek rumah kaca yang membuat Venus lebih panas dari Merkurius meskipun lebih jauh dari Matahari.

Venus berotasi sangat lambat (243 hari Bumi untuk satu rotasi) dan berotasi berlawanan arah (retrograde) dibandingkan mayoritas planet lain. Ini berarti di Venus, matahari terbit dari barat dan terbenam di timur! Satu hari di Venus (dari matahari terbit ke matahari terbit) berlangsung 117 hari Bumi, lebih lama dari satu tahun Venus (225 hari Bumi).`,
        fakta: "Venus adalah objek alami tercerah di langit malam setelah Bulan, dengan magnitudo visual -4,6. Orang-orang kuno mengira Venus adalah dua bintang berbeda - bintang pagi (Phosphorus/Lucifer) dan bintang sore (Hesperus/Vesper)!",
        ringkasan: "Planet terpanas di Tata Surya karena efek rumah kaca, disebut juga Bintang Fajar/Bintang Kejora.",
        dataTabel: {
            "Parameter": ["Diameter", "Jarak dari Matahari", "Periode Orbit", "Periode Rotasi", "Suhu Permukaan", "Tekanan Atmosfer"],
            "Nilai": ["12.104 km", "108,2 juta km", "225 hari", "243 hari (retrograde)", "460°C", "92 atm (90x Bumi)"]
        },
        subBab: [
            {
                judul: "Atmosfer dan Cuaca Venus",
                isi: "Atmosfer Venus terdiri dari 96,5% CO₂, 3,5% nitrogen, dan jejak gas lain termasuk sulfur dioksida. Awan asam sulfat (H₂SO₄) menyelimuti planet pada ketinggian 50-70 km. Angin di atmosfer atas mencapai 360 km/jam (super-rotation), namun di permukaan hampir tidak ada angin karena atmosfer yang sangat padat. Hujan asam sulfat pernah turun namun menguap sebelum mencapai permukaan karena suhu tinggi."
            },
            {
                judul: "Permukaan Venus",
                isi: "Permukaan Venus sebagian besar terdiri dari dataran vulkanik (80%), dengan dua benua tinggi: Ishtar Terra (seukuran Australia) di utara dan Aphrodite Terra (seukuran Amerika Selatan) di khatulistiwa. Terdapat lebih dari 1.600 gunung berapi besar, meskipun tidak diketahui apakah masih aktif. Permukaan Venus relatif muda (300-600 juta tahun) karena aktivitas vulkanik yang melapisi ulang permukaan."
            },
            {
                judul: "Misi Eksplorasi Venus",
                isi: "Venus telah dikunjungi oleh lebih dari 40 wahana antariksa. Venera 7 (1970) adalah wahana pertama yang mendarat dan mengirim data dari permukaan. Magellan (1990-1994) memetakan 98% permukaan dengan radar. Venus Express ESA (2006-2014) mempelajari atmosfer. Misi terbaru termasuk DAVINCI+ dan VERITAS NASA (direncanakan 2030-an) serta EnVision ESA untuk mempelajari geologi dan atmosfer Venus lebih detail."
            }
        ]
    },
    {
        id: "bumi",
        judul: "Bumi - Tempat Tinggal Kita",
        gambar: ASSETS.bumi,
        fotoAsli: ASSETS.bumi,
        penjelasan: `Bumi adalah planet ketiga dari Matahari dan satu-satunya planet yang diketahui memiliki kehidupan. Dengan diameter 12.742 kilometer, Bumi adalah planet terestrial terbesar di Tata Surya bagian dalam. Bumi mengorbit Matahari pada jarak rata-rata 149,6 juta kilometer (1 Satuan Astronomi) dengan periode orbit 365,25 hari, yang menjadi dasar kalender masehi kita.

Bumi memiliki komposisi yang unik: 71% permukaannya tertutup air (lautan, sungai, danau, es), sementara 29% adalah daratan (benua dan pulau). Atmosfer Bumi terdiri dari 78% nitrogen, 21% oksigen, dan 1% gas lain termasuk argon, karbon dioksida, dan uap air. Komposisi atmosfer ini sangat penting untuk mendukung kehidupan - oksigen untuk pernapasan, karbon dioksida untuk fotosintesis tumbuhan, dan lapisan ozon untuk melindungi dari radiasi ultraviolet berbahaya.

Bumi memiliki satu satelit alami yaitu Bulan yang mempengaruhi pasang surut laut dan menstabilkan kemiringan sumbu rotasi Bumi. Medan magnet Bumi yang dihasilkan oleh inti besi cair melindungi planet dari angin matahari dan radiasi kosmik. Bumi juga memiliki lempeng tektonik aktif yang membentuk permukaan melalui proses geologis seperti gempa bumi, letusan gunung berapi, dan pembentukan pegunungan.`,
        fakta: "Bumi adalah satu-satunya planet yang tidak dinamai berdasarkan dewa Yunani atau Romawi. Nama 'Earth' berasal dari kata Jermanik 'ertha' yang berarti tanah atau ground. Dalam mitologi, Bumi sering dipersonifikasikan sebagai Gaia (Yunani) atau Terra (Romawi)!",
        ringkasan: "Satu-satunya planet berpenghuni dengan atmosfer kaya oksigen dan air cair melimpah.",
        dataTabel: {
            "Parameter": ["Diameter", "Jarak dari Matahari", "Periode Orbit", "Periode Rotasi", "Suhu Rata-rata", "Jumlah Satelit"],
            "Nilai": ["12.742 km", "149,6 juta km", "365,25 hari", "23 jam 56 menit", "15°C", "1 (Bulan)"]
        },
        subBab: [
            {
                judul: "Struktur Internal Bumi",
                isi: "Bumi memiliki struktur berlapis: kerak (5-70 km tebalnya, terdiri dari batuan silikat), mantel (2.900 km, batuan panas semi-cair), inti luar (2.200 km, besi dan nikel cair), dan inti dalam (1.200 km, besi dan nikel padat). Inti dalam berputar sedikit lebih cepat dari mantel Bumi. Panas internal Bumi berasal dari peluruhan radioaktif dan panas sisa dari pembentukan planet."
            },
            {
                judul: "Atmosfer dan Iklim Bumi",
                isi: "Atmosfer Bumi terdiri dari troposfer (0-12 km, tempat cuaca terjadi), stratosfer (12-50 km, mengandung lapisan ozon), mesosfer (50-85 km), termosfer (85-600 km, tempat aurora terjadi), dan eksosfer (>600 km, transisi ke luar angkasa). Atmosfer mengatur suhu global melalui efek rumah kaca alami, mendistribusikan panas melalui sirkulasi udara dan arus laut, serta melindungi dari meteorit kecil yang terbakar saat masuk."
            },
            {
                judul: "Kehidupan di Bumi",
                isi: "Bumi mendukung keanekaragaman hayati yang luar biasa - diperkirakan 8,7 juta spesies (dengan banyak yang belum ditemukan). Kehidupan berkembang dalam berbagai biome: hutan hujan tropis, gurun, tundra, padang rumput, dan ekosistem laut. Air cair, atmosfer yang tepat, medan magnet pelindung, dan jarak yang pas dari Matahari (zona Goldilocks) membuat Bumi menjadi oasis kehidupan di alam semesta."
            }
        ]
    },
    {
        id: "mars",
        judul: "Mars - Planet Merah",
        gambar: ASSETS.mars,
        fotoAsli: ASSETS.mars,
        penjelasan: `Mars adalah planet keempat dari Matahari and sering disebut 'Planet Merah' karena penampilannya yang kemerahan. Warna merah ini berasal dari besi oksida (karat) yang melimpah di permukaan planet. Dengan diameter 6.779 kilometer, Mars berukuran sekitar setengah dari Bumi. Mars mengorbit Matahari pada jarak rata-rata 227,9 juta kilometer dengan periode orbit 687 hari Bumi (hampir 2 tahun Bumi).

Mars memiliki atmosfer yang sangat tipis - hanya 1% dari kepadatan atmosfer Bumi - yang terdiri dari 95% karbon dioksida, 2,7% nitrogen, dan 1,6% argon. Atmosfer tipis ini tidak mampu menahan panas dengan baik, sehingga suhu permukaan Mars berkisar dari -140°C di kutub saat musim dingin hingga 20°C di khatulistiwa saat musim panas. Tekanan atmosfer yang rendah juga berarti air cair tidak dapat stabil di permukaan - air akan langsung mendidih dan menguap.

Permukaan Mars menunjukkan bukti kuat bahwa planet ini pernah memiliki air cair dalam jumlah besar di masa lalu. Terdapat jaringan lembah kering, delta sungai kuno, dan mineral yang hanya terbentuk di hadapan air. Mars juga memiliki fitur geologis yang mengesankan: Olympus Mons (gunung berapi tertinggi di Tata Surya dengan tinggi 21,9 km - hampir 3x Everest), Valles Marineris (ngarai sepanjang 4.000 km dan kedalaman 7 km), dan tudung es kutub yang terdiri dari air es dan es karbon dioksida.`,
        fakta: "Mars memiliki dua bulan kecil bernama Phobos dan Deimos yang berbentuk tidak teratur seperti kentang. Phobos mengorbit sangat dekat dengan Mars (6.000 km) dan diperkirakan akan hancur dalam 50 juta tahun, membentuk cincin di sekitar Mars!",
        ringkasan: "Planet Merah, memiliki air es di kutubnya, target utama eksplorasi koloni manusia masa depan.",
        dataTabel: {
            "Parameter": ["Diameter", "Jarak dari Matahari", "Periode Orbit", "Periode Rotasi", "Suhu Rata-rata", "Jumlah Satelit"],
            "Nilai": ["6.779 km", "227,9 juta km", "687 hari", "24 jam 37 menit", "-63°C", "2 (Phobos, Deimos)"]
        },
        subBab: [
            {
                judul: "Geologi dan Permukaan Mars",
                isi: "Mars memiliki dua jenis permukaan utama: dataran rendah utara yang halus dan dataran tinggi selatan yang penuh kawah. Perbedaan ini mungkin akibat tumbukan besar di masa awal. Mars memiliki gunung berapi terbesar (Olympus Mons), ngarai terbesar (Valles Marineris), dan bukti aliran air masa lalu. Permukaan Mars juga mengalami badai debu global yang dapat berlangsung berbulan-bulan dan menyelimuti seluruh planet."
            },
            {
                judul: "Air dan Potensi Kehidupan di Mars",
                isi: "Bukti menunjukkan Mars pernah memiliki sungai, danau, dan mungkin lautan di permukaan sekitar 3-4 miliar tahun lalu. Saat ini, air di Mars terutama berupa es di kutub dan di bawah permukaan. Penemuan metana di atmosfer Mars (yang bisa berasal dari proses geologis atau biologis) dan air asin cair musiman di lereng bukit membuat ilmuwan tertarik mencari tanda-tanda kehidupan mikroba, baik masa lalu maupun sekarang."
            },
            {
                judul: "Eksplorasi Mars",
                isi: "Mars adalah planet yang paling banyak dieksplorasi setelah Bumi. Lebih dari 50 misi telah dikirim, dengan tingkat keberhasilan sekitar 50%. Rover aktif saat ini termasuk Perseverance (mencari tanda kehidupan kuno dan mengumpulkan sampel), Curiosity (mempelajari kelayakhunian), dan Zhurong (rover China). Misi masa depan termasuk Mars Sample Return (mengembalikan sampel ke Bumi) dan misi berawak yang direncanakan 2030-2040."
            }
        ]
    },
    {
        id: "jupiter",
        judul: "Jupiter - Raja Planet",
        gambar: ASSETS.jupiter,
        fotoAsli: ASSETS.jupiter,
        penjelasan: `Jupiter adalah planet kelima dari Matahari dan planet terbesar di Tata Surya kita. Dengan diameter 139.820 kilometer, Jupiter berukuran 11 kali lebih besar dari Bumi dan memiliki massa 2,5 kali lebih besar dari gabungan semua planet lain di Tata Surya! Jupiter adalah raksasa gas yang tidak memiliki permukaan padat - jika Anda mencoba 'mendarat' di Jupiter, Anda akan tenggelam ke dalam atmosfer gas yang semakin padat hingga mencapai inti.

Jupiter terkenal dengan Bintik Merah Raksasa (Great Red Spot) - badai antisiklon raksasa yang telah berputar selama setidaknya 350 tahun! Badai ini berukuran sekitar 1,3 kali diameter Bumi dengan angin mencapai 430 km/jam. Atmosfer Jupiter terdiri dari 90% hidrogen dan 10% helium, dengan jejak metana, amonia, dan uap air. Awan berwarna-warni di Jupiter (putih, coklat, merah) disebabkan oleh senyawa kimia berbeda di berbagai lapisan atmosfer.

Jupiter memiliki sistem cincin tipis yang tidak mencolok (ditemukan 1979) dan setidaknya 95 satelit alami yang diketahui. Empat satelit terbesar disebut Satelit Galileo (Io, Europa, Ganymede, dan Callisto) yang ditemukan Galileo Galilei pada 1610. Ganymede adalah satelit terbesar di Tata Surya (lebih besar dari Merkurius), sementara Europa menarik perhatian karena lautan air cair di bawah lapisan esnya yang mungkin mendukung kehidupan.`,
        fakta: "Jupiter berotasi sangat cepat - hanya 9 jam 56 menit untuk satu rotasi! Rotasi cepat ini menyebabkan Jupiter pepat di kutub dan menggembung di khatulistiwa. Jupiter juga memiliki medan magnet 20.000 kali lebih kuat dari Bumi, menciptakan aurora yang sangat terang di kutubnya!",
        ringkasan: "Planet gas raksasa terbesar, memiliki puluhan satelit (seperti Ganymede, Io, Europa, Callisto).",
        dataTabel: {
            "Parameter": ["Diameter", "Jarak dari Matahari", "Periode Orbit", "Periode Rotasi", "Massa", "Jumlah Satelit"],
            "Nilai": ["139.820 km", "778,5 juta km", "11,86 tahun", "9 jam 56 menit", "318x Bumi", "95+"]
        },
        subBab: [
            {
                judul: "Struktur Internal Jupiter",
                isi: "Jupiter tidak memiliki permukaan padat. Atmosfer gas (hidrogen dan helium) bertransisi menjadi hidrogen cair metalik pada kedalaman sekitar 10.000 km akibat tekanan ekstrem. Inti Jupiter diperkirakan terdiri dari batuan, es, dan logam berat dengan massa 12-45 kali massa Bumi. Suhu di inti mencapai 24.000°C. Jupiter memancarkan lebih banyak panas daripada yang diterima dari Matahari karena kontraksi gravitasi dan diferensiasi helium."
            },
            {
                judul: "Satelit Galileo",
                isi: "Empat satelit terbesar Jupiter: Io (paling aktif secara vulkanik di Tata Surya dengan 400+ gunung berapi aktif), Europa (memiliki lautan air cair global di bawah es yang mungkin mendukung kehidupan), Ganymede (satelit terbesar di Tata Surya, lebih besar dari Merkurius, memiliki medan magnet sendiri), dan Callisto (permukaan paling banyak kawah di Tata Surya, mungkin memiliki lautan bawah permukaan)."
            },
            {
                judul: "Peran Jupiter dalam Tata Surya",
                isi: "Jupiter sering disebut 'penyapu kosmik' karena gravitasinya yang kuat menarik dan menangkap komet serta asteroid yang bisa berbahaya bagi planet dalam termasuk Bumi. Namun, beberapa model menunjukkan Jupiter juga bisa melemparkan objek ke arah Tata Surya bagian dalam. Jupiter membantu menstabilkan orbit planet-planet lain dan mungkin berperan penting dalam pembentukan Tata Surya awal dengan migrasi orbital."
            }
        ]
    },
    {
        id: "saturnus",
        judul: "Saturnus - Permata Bercincin",
        gambar: ASSETS.saturnus,
        fotoAsli: ASSETS.saturnus,
        penjelasan: `Saturnus adalah planet keenam dari Matahari dan planet terbesar kedua di Tata Surya setelah Jupiter. Dengan diameter 116.460 kilometer, Saturnus berukuran 9,5 kali lebih besar dari Bumi. Saturnus adalah raksasa gas yang terdiri dari 96% hidrogen dan 3% helium, dengan jejak metana dan amonia. Planet ini terkenal dengan sistem cincinnya yang megah dan indah - fitur paling mencolok di antara semua planet.

Cincin Saturnus adalah struktur paling spektakuler di Tata Surya. Cincin ini terdiri dari miliaran partikel es, batu, dan debu dengan ukuran mulai dari butiran pasir hingga sebesar rumah. Cincin utama membentang hingga 282.000 km dari pusat planet namun sangat tipis - hanya sekitar 10 meter tebalnya! Cincin dibagi menjadi beberapa bagian (Cincin A, B, C, D, E, F, G) dengan celah seperti Divisi Cassini yang selebar 4.800 km.

Saturnus memiliki kerapatan sangat rendah - hanya 0,687 g/cm³, lebih ringan dari air! Jika Anda bisa menemukan kolam yang cukup besar, Saturnus akan mengapung. Saturnus memiliki 146 satelit alami yang diketahui, dengan Titan sebagai yang terbesar. Titan adalah satu-satunya satelit di Tata Surya dengan atmosfer tebal (lebih padat dari atmosfer Bumi) dan memiliki danau metana cair di permukaannya.`,
        fakta: "Angin di Saturnus bisa mencapai kecepatan 1.800 km/jam di khatulistiwa - salah satu yang tercepat di Tata Surya! Saturnus juga memancarkan 2,5 kali lebih banyak energi daripada yang diterima dari Matahari karena hujan helium di interior yang melepaskan panas gravitasi!",
        ringkasan: "Planet gas raksasa dengan sistem cincin es terindah, satelit terbesarnya bernama Titan.",
        dataTabel: {
            "Parameter": ["Diameter", "Jarak dari Matahari", "Periode Orbit", "Periode Rotasi", "Kerapatan", "Jumlah Satelit"],
            "Nilai": ["116.460 km", "1,43 miliar km", "29,46 tahun", "10 jam 42 menit", "0,687 g/cm³", "146+"]
        },
        subBab: [
            {
                judul: "Sistem Cincin Saturnus",
                isi: "Cincin Saturnus terdiri dari 7 kelompok utama (D, C, B, A, F, G, E dari dalam ke luar). Cincin B adalah yang paling terang dan padat. Divisi Cassini (celah 4.800 km antara cincin A dan B) disebabkan oleh resonansi orbital dengan satelit Mimas. Cincin kemungkinan terbentuk dari satelit yang hancur atau komet yang tertangkap. Cincin Saturnus relatif muda - mungkin hanya berusia 100 juta tahun."
            },
            {
                judul: "Titan - Satelit Unik",
                isi: "Titan adalah satelit terbesar Saturnus (diameter 5.150 km, lebih besar dari Merkurius) dan satu-satunya satelit dengan atmosfer tebal (1,5x tekanan atmosfer Bumi). Atmosfer Titan terdiri dari 95% nitrogen dan 5% metana. Titan memiliki danau dan sungai metana/etana cair, curah hujan metana, dan kemungkinan lautan air cair di bawah permukaan es. Titan adalah target utama misi Dragonfly NASA (2034) untuk mencari tanda kehidupan."
            },
            {
                judul: "Eksplorasi Saturnus",
                isi: "Saturnus dikunjungi oleh Pioneer 11 (1979), Voyager 1 & 2 (1980-1981), and Cassini-Huygens (2004-2017). Misi Cassini adalah yang paling komprehensif - mengorbit Saturnus selama 13 tahun dan mempelajari planet, cincin, dan satelitnya secara detail. Wahana Huygens mendarat di Titan pada 2005 dan mengirim data dari permukaan. Misi masa depan termasuk Dragonfly (drone ke Titan) dan Enceladus Orbilander untuk mempelajari satelit yang mungkin memiliki kehidupan."
            }
        ]
    },
    {
        id: "uranus",
        judul: "Uranus - Planet Es Raksasa",
        gambar: ASSETS.uranus,
        fotoAsli: ASSETS.uranus,
        penjelasan: `Uranus adalah planet ketujuh dari Matahari dan planet terbesar ketiga di Tata Surya dengan diameter 50.724 kilometer (4 kali lebih besar dari Bumi). Uranus dikategorikan sebagai 'raksasa es' bersama Neptunus, berbeda dari raksasa gas Jupiter dan Saturnus. Uranus terdiri dari 83% hidrogen, 15% helium, dan 2% metana, dengan inti batuan dan es yang lebih besar proporsinya dibandingkan raksasa gas.

Ciri paling mencolok Uranus adalah kemiringan sumbu rotasinya yang ekstrem - 98 derajat! Ini berarti Uranus pada dasarnya 'berguling' mengitari Matahari dengan kutubnya menghadap ke arah orbit. Ilmuwan percaya kemiringan ekstrem ini akibat tumbukan besar dengan objek seukuran Bumi di masa awal Tata Surya. Kemiringan ini menyebabkan musim yang ekstrem - setiap kutub mengalami 42 tahun cahaya matahari terus-menerus diikuti 42 tahun kegelapan total.

Uranus memiliki warna biru-hijau pucat yang khas akibat gas metana di atmosfernya yang menyerap cahaya merah dan memantulkan cahaya biru. Atmosfer Uranus adalah yang paling dingin di Tata Surya dengan suhu minimum -224°C, meskipun bukan planet terjauh. Uranus memiliki sistem cincin tipis (ditemukan 1977) and 27 satelit alami yang diketahui, yang semuanya dinamai dari karakter karya Shakespeare dan Alexander Pope.`,
        fakta: "Uranus adalah planet terdingin di Tata Surya dengan suhu atmosfer -224°C, lebih dingin dari Neptunus meskipun lebih dekat ke Matahari! Ini karena Uranus tidak memiliki sumber panas internal yang signifikan seperti raksasa gas lainnya!",
        ringkasan: "Raksasa es biru muda, rotasi miring ekstrem seolah-olah sedang menggelinding.",
        dataTabel: {
            "Parameter": ["Diameter", "Jarak dari Matahari", "Periode Orbit", "Periode Rotasi", "Suhu Minimum", "Kemiringan Sumbu"],
            "Nilai": ["50.724 km", "2,87 miliar km", "84 tahun", "17 jam 14 menit (retrograde)", "-224°C", "97,77°"]
        },
        subBab: [
            {
                judul: "Struktur dan Komposisi Uranus",
                isi: "Uranus memiliki struktur: atmosfer (hidrogen, helium, metana), mantel es (air, amonia, metana beku) yang mencakup sebagian besar massa planet, dan inti batuan kecil (silikat, besi-nikel). Mantel 'es' ini sebenarnya adalah fluida panas bertekanan tinggi, bukan es padat. Uranus tidak memiliki sumber panas internal yang signifikan, berbeda dari raksasa gas lain yang memancarkan lebih banyak panas daripada yang diterima."
            },
            {
                judul: "Atmosfer dan Cuaca Uranus",
                isi: "Atmosfer Uranus terdiri dari troposfer (dengan awan metana, hidrogen sulfida, air), stratosfer, termosfer, dan eksosfer. Warna biru-hijau berasal dari metana yang menyerap cahaya merah. Uranus tampak 'membosankan' dengan sedikit fitur awan terlihat, namun pengamatan recent menunjukkan badai dan fitur awan yang lebih dinamis dari yang diperkirakan. Angin di Uranus mencapai 900 km/jam dengan arah retrograde."
            },
            {
                judul: "Satelit dan Cincin Uranus",
                isi: "Uranus memiliki 27 satelit yang diketahui, dengan 5 satelit besar: Miranda (permukaan paling aneh dengan tebing 20 km), Ariel, Umbriel, Titania (terbesar), dan Oberon. Semua satelit dinamai dari karakter Shakespeare. Uranus memiliki 13 cincin tipis yang gelap dan sempit, berbeda dari cincin terang Saturnus. Cincin kemungkinan terdiri dari materi gelap (es air dengan radiasi gelap atau materi organik)."
            }
        ]
    },
    {
        id: "neptunus",
        judul: "Neptunus - Dunia Angin Badai",
        gambar: ASSETS.neptunus,
        fotoAsli: ASSETS.neptunus,
        penjelasan: `Neptunus adalah planet kedelapan dan terjauh dari Matahari (sejak Pluto diklasifikasikan ulang sebagai planet kerdil pada 2006). Dengan diameter 49.244 kilometer, Neptunus sedikit lebih kecil dari Uranus namun lebih masif (17 kali massa Bumi vs 14,5 kali untuk Uranus). Neptunus adalah raksasa es yang terdiri dari hidrogen, helium, dan metana, dengan interior yang kaya akan es air, amonia, dan metana.

Neptunus terkenal dengan warna biru tua yang intens dan indah, lebih pekat dari Uranus karena kandungan metana yang lebih tinggi dan kemungkinan senyawa lain yang belum teridentifikasi. Neptunus memiliki atmosfer paling dinamis di Tata Surya dengan badai dan fitur awan yang sangat aktif. Angin di Neptunus adalah yang tercepat di Tata Surya, mencapai 2.100 km/jam - hampir supersonik!

Neptunus memiliki 16 satelit alami yang diketahui, dengan Triton sebagai yang terbesar. Triton unik karena mengorbit berlawanan arah (retrograde) dan kemungkinan adalah objek sabuk Kuiper yang ditangkap gravitasi Neptunus. Triton memiliki geyser nitrogen aktif dan permukaan sangat dingin (-235°C). Neptunus juga memiliki sistem cincin tipis yang tidak mencolok, terdiri dari 5 cincin utama yang kemungkinan muda dan tidak stabil.`,
        fakta: "Neptunus adalah satu-satunya planet yang ditemukan melalui prediksi matematika sebelum diamati! Urbain Le Verrier dan John Couch Adams secara independen memprediksi posisinya berdasarkan gangguan orbit Uranus. Johann Galle mengamati Neptunus pada 1846 hanya 1° dari prediksi!",
        ringkasan: "Planet terjauh, berwarna biru tua, bersuhu sangat dingin, dan badai angin super kencang.",
        dataTabel: {
            "Parameter": ["Diameter", "Jarak dari Matahari", "Periode Orbit", "Periode Rotasi", "Kecepatan Angin", "Jumlah Satelit"],
            "Nilai": ["49.244 km", "4,5 miliar km", "164,8 tahun", "16 jam 6 menit", "2.100 km/jam", "16"]
        },
        subBab: [
            {
                judul: "Penemuan Neptunus",
                isi: "Neptunus ditemukan pada 23 September 1846 oleh Johann Galle di Berlin Observatory berdasarkan prediksi matematika Urbain Le Verrier (Prancis) dan John Couch Adams (Inggris). Gangguan orbit Uranus yang tidak dapat dijelaskan mengindikasikan adanya planet lain. Penemuan Neptunus adalah kemenangan besar untuk mekanika celestial dan gravitasi Newton. Nama 'Neptunus' diambil dari dewa laut Romawi karena warna birunya."
            },
            {
                judul: "Triton - Satelit Unik",
                isi: "Triton adalah satelit terbesar Neptunus (diameter 2.707 km) dan satu-satunya satelit besar dengan orbit retrograde. Ini menunjukkan Triton adalah objek sabuk Kuiper yang ditangkap. Triton memiliki permukaan sangat dingin (-235°C), geyser nitrogen aktif yang menyemburkan material 8 km ke atmosfer, dan kemungkinan lautan bawah permukaan. Triton akan hancur dalam 3,6 Syarat Roche Neptunus."
            },
            {
                judul: "Eksplorasi Neptunus",
                isi: "Neptunus hanya dikunjungi sekali oleh Voyager 2 pada Agustus 1989. Voyager 2 menemukan Bintik Gelap Raksasa (badai sebesar Bumi), cincin Neptunus, dan 6 satelit baru. Misi ke Neptunus sangat menantang karena jarak yang jauh (4,5 miliar km). Proposal misi masa depan termasuk Neptune Orbiter dengan probe atmosfer, namun belum ada yang dijadwalkan. Studi Neptunus saat ini mengandalkan teleskop seperti Hubble dan James Webb."
            }
        ]
    },
    {
        id: "gerhana",
        judul: "Gerhana Matahari & Bulan",
        gambar: ASSETS.gerhana,
        fotoAsli: ASSETS.gerhana,
        penjelasan: `Gerhana adalah fenomena astronomi yang terjadi ketika satu benda langit bergerak ke dalam bayangan benda langit lainnya, menghalangi cahaya. Di Tata Surya kita, gerhana yang paling umum diamati dari Bumi adalah gerhana Matahari dan gerhana Bulan, yang terjadi akibat kesejajaran Matahari, Bumi, dan Bulan dalam garis lurus (konfigurasi yang disebut syzygy).

Gerhana Matahari terjadi ketika Bulan bergerak di antara Bumi dan Matahari, sehingga bayangan Bulan jatuh ke permukaan Bumi dan menghalangi cahaya Matahari. Terdapat tiga jenis gerhana Matahari: total (Bulan menutupi seluruh Matahari), sebagian (Bulan hanya menutupi sebagian Matahari), dan annular/cincin (Bulan terlalu jauh untuk menutupi seluruh Matahari, meninggalkan 'cincin api'). Gerhana Matahari total adalah salah satu fenomena paling spektakuler di alam - langit menjadi gelap seperti malam, suhu turun drastis, dan korona Matahari terlihat.

Gerhana Bulan terjadi ketika Bumi bergerak di antara Matahari dan Bulan, sehingga bayangan Bumi menutupi Bulan. Terdapat tiga jenis: gerhana Bulan total (Bulan masuk sepenuhnya ke umbra Bumi dan berwarna merah darah), sebagian (hanya sebagian Bulan masuk umbra), dan penumbra (Bulan hanya masuk penumbra Bumi, perubahan sulit dilihat). Gerhana Bulan bisa diamati dari seluruh sisi malam Bumi dan berlangsung lebih lama dari gerhana Matahari.`,
        fakta: "Gerhana Matahari total adalah kebetulan kosmik yang luar biasa! Bulan berukuran 400 kali lebih kecil dari Matahari namun juga 400 kali lebih dekat ke Bumi, sehingga keduanya tampak sama besar di langit. Dalam 600 juta tahun, Bulan akan terlalu jauh untuk menyebabkan gerhana total!",
        ringkasan: "Gerhana terjadi akibat kesejajaran posisi Matahari, Bumi, dan Bulan pada garis lurus.",
        dataTabel: {
            "Jenis Gerhana": ["Matahari Total", "Matahari Sebagian", "Matahari Cincin", "Bulan Total", "Bulan Sebagian"],
            "Frekuensi": ["1-2 per tahun", "2-5 per tahun", "0-2 per tahun", "0-3 per tahun", "0-3 per tahun"]
        },
        subBab: [
            {
                judul: "Mekanisme Gerhana Matahari",
                isi: "Gerhana Matahari terjadi saat Bulan baru (new moon) dan Bulan berada di node orbitnya (titik potong orbit Bulan dengan ekliptika). Bayangan Bulan terdiri dari umbra (bayangan gelap total) dan penumbra (bayangan parsial). Jalur totalitas gerhana Matahari sangat sempit (maksimal 270 km) dan bergerak cepat (1.700 km/jam), sehingga gerhana total di satu lokasi hanya berlangsung 2-7 menit. Gerhana Matahari berikutnya di Indonesia akan terjadi pada tahun 2026."
            },
            {
                judul: "Mekanisme Gerhana Bulan",
                isi: "Gerhana Bulan terjadi saat Bulan purnama (full moon) dan Bulan berada di node orbitnya. Bumi melemparkan bayangan ke luar angkasa - umbra (bayangan gelap) dan penumbra (bayangan redup). Saat Bulan masuk umbra, ia tidak menjadi hitam total namun berwarna merah darah karena atmosfer Bumi membelokkan cahaya merah Matahari ke Bulan (efek yang sama dengan sunset). Gerhana Bulan total bisa berlangsung hingga 1 jam 47 menit."
            },
            {
                judul: "Siklus dan Prediksi Gerhana",
                isi: "Gerhana mengikuti siklus Saros (18 tahun 11 hari) yang memungkinkan prediksi gerhana di masa depan. Setiap tahun terjadi minimal 2 gerhana Matahari dan maksimal 5 gerhana (Matahari + Bulan). Gerhana tidak terjadi setiap bulan karena orbit Bulan miring 5° terhadap ekliptika, sehingga Bulan sering melewati di atas atau di bawah bayangan Bumi/Matahari. Gerhana hanya terjadi saat Bulan berada di node orbitnya."
            }
        ]
    },
    {
        id: "benda_lain",
        judul: "Asteroid, Komet, Meteoroid",
        gambar: ASSETS.asteroid,
        fotoAsli: ASSETS.asteroid,
        penjelasan: `Selain planet dan Matahari, Tata Surya kita juga dipenuhi oleh berbagai benda langit kecil yang menarik. Benda-benda ini merupakan sisa-sisa dari pembentukan Tata Surya 4,6 miliar tahun lalu dan memberikan petunjuk penting tentang sejarah awal sistem kita. Tiga kategori utama benda langit kecil ini adalah asteroid, komet, dan meteoroid.

Asteroid adalah benda berbatu atau logam yang mengorbit Matahari, dengan ukuran mulai dari beberapa meter hingga ratusan kilometer. Mayoritas asteroid berada di Sabuk Asteroid antara orbit Mars dan Jupiter, namun ada juga yang melintasi orbit Bumi (Near-Earth Asteroids). Asteroid terbesar adalah Ceres (diameter 940 km) yang sekarang diklasifikasikan sebagai planet kerdil. Total massa semua asteroid hanya sekitar 4% massa Bulan.

Komet adalah benda langit yang terdiri dari es, debu, dan batuan yang mengorbit Matahari dalam orbit yang sangat elips. Saat mendekati Matahari, panas menyebabkan es menguap dan membentuk koma (atmosfer sementara) serta ekor yang panjang. Ekor komet selalu menjauhi Matahari karena didorong angin matahari. Komet berasal dari Sabuk Kuiper (periode pendek) dan Awan Oort (periode panjang).`,
        fakta: "Ekor komet selalu menunjuk menjauhi Matahari karena didorong oleh angin matahari, ke mana pun arah gerak komet tersebut! Komet Halley adalah komet paling terkenal dengan periode 75-76 tahun, terakhir terlihat 1986 dan akan kembali 2061.",
        ringkasan: "Benda langit kecil di Tata Surya dengan karakteristik batuan (asteroid), es menguap (komet), dan serpihan pembakar (meteoroid).",
        dataTabel: {
            "Jenis": ["Asteroid", "Komet", "Meteoroid", "Meteor", "Meteorit"],
            "Keterangan": ["Batu/logam di sabuk asteroid", "Es + debu dengan ekor", "Batuan kecil di ruang angkasa", "Meteoroid terbakar di atmosfer", "Sisa meteoroid yang sampai ke tanah"]
        },
        subBab: [
            {
                judul: "Sabuk Asteroid dan Objek Dekat Bumi",
                isi: "Sabuk Asteroid terletak antara Mars and Jupiter (2,1-3,3 SA dari Matahari) dan berisi jutaan asteroid. Jupiter mencegah asteroid di sabuk ini membentuk planet karena gravitasinya yang kuat. Near-Earth Asteroids (NEA) adalah asteroid yang orbitnya mendekati Bumi - beberapa berpotensi berbahaya (Potentially Hazardous Asteroids). Misi OSIRIS-REx NASA berhasil mengambil sampel dari asteroid Bennu dan mengembalikannya ke Bumi pada 2023."
            },
            {
                judul: "Komet dan Asalnya",
                isi: "Komet berasal dari dua wilayah: Sabuk Kuiper (di luar Neptunus, sumber komet periode pendek seperti Halley) dan Awan Oort (bola raksasa di tepi Tata Surya, sumber komet periode panjang). Komet terdiri dari inti (nukleus) es dan debu, koma (atmosfer gas dan debu), ekor ion (biru, lurus, dari gas terionisasi), dan ekor debu (kuning, melengkung). Komet C/2022 E3 (ZTF) dan C/2023 A3 (Tsuchinshan-ATLAS) adalah komet terang yang baru-baru ini terlihat."
            },
            {
                judul: "Meteor, Meteoroid, dan Meteorit",
                isi: "Meteoroid adalah batuan kecil di ruang angkasa (ukuran debu hingga 1 meter). Saat masuk atmosfer Bumi dengan kecepatan tinggi (11-72 km/s), meteoroid terbakar dan menciptakan cahaya yang disebut meteor atau 'bintang jatuh'. Hujan meteor terjadi saat Bumi melintasi jalur debu komet (contoh: Perseid Agustus, Geminid Desember). Jika meteoroid cukup besar untuk bertahan dan mencapai tanah, ia disebut meteorit. Meteorit memberikan informasi berharga tentang komposisi Tata Surya awal."
            }
        ]
    }
];
