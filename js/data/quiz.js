/* ===================================================
   quiz.js — Data Kuis Pilihan Ganda & Benar/Salah
   =================================================== */

const DATABASE_QUIZ = [
    {
        question: "Pusat dari sistem Tata Surya kita adalah...",
        image: ASSETS.matahari,
        options: ["Bumi", "Jupiter", "Matahari", "Galaksi Bima Sakti"],
        answer: "Matahari",
        explanation: "Matahari adalah pusat Tata Surya, semua planet bergerak mengitari akibat gaya gravitasinya yang sangat kuat."
    },
    {
        question: "Planet manakah yang mendapat julukan 'Planet Merah'?",
        image: ASSETS.mars,
        options: ["Venus", "Mars", "Merkurius", "Saturnus"],
        answer: "Mars",
        explanation: "Mars memiliki lapisan besi oksida (karat) yang melimpah sehingga permukaannya nampak kemerahan."
    },
    {
        question: "Planet terpanas di seluruh Tata Surya kita adalah...",
        image: ASSETS.venus,
        options: ["Merkurius", "Venus", "Bumi", "Jupiter"],
        answer: "Venus",
        explanation: "Atmosfer Venus yang diselimuti karbon dioksida sangat tebal memerangkap panas dalam efek rumah kaca yang parah."
    },
    {
        question: "Planet dengan sistem cincin es raksasa yang menawan adalah...",
        image: ASSETS.saturnus,
        options: ["Uranus", "Neptunus", "Saturnus", "Jupiter"],
        answer: "Saturnus",
        explanation: "Cincin menawan Saturnus terdiri atas miliaran partikel kecil es, air dingin, dan sisa-sisa debu kosmik."
    },
    {
        question: "Planet gas raksasa terbesar di Tata Surya kita adalah...",
        image: ASSETS.jupiter,
        options: ["Saturnus", "Jupiter", "Bumi", "Neptunus"],
        answer: "Jupiter",
        explanation: "Jupiter memiliki massa yang luar biasa besar, setara dengan gabungan seluruh massa planet lain digabungkan."
    },
    {
        question: "Planet yang berotasi dengan kemiringan ekstrem 98 derajat sehingga seolah menggelinding adalah...",
        image: ASSETS.uranus,
        options: ["Neptunus", "Uranus", "Saturnus", "Mars"],
        answer: "Uranus",
        explanation: "Uranus memiliki kemiringan sumbu 98 derajat akibat tumbukan besar di masa awal Tata Surya."
    },
    {
        question: "Planet terjauh dari Matahari dalam Tata Surya kita adalah...",
        image: ASSETS.neptunus,
        options: ["Uranus", "Pluto", "Neptunus", "Saturnus"],
        answer: "Neptunus",
        explanation: "Sejak Pluto diklasifikasikan sebagai planet kerdil (2006), Neptunus adalah planet terjauh."
    },
    {
        question: "Benda langit apakah yang paling tepat ditunjukkan gambar ini?",
        image: ASSETS.asteroid,
        options: ["Komet", "Meteor", "Asteroid", "Satelit"],
        answer: "Asteroid",
        explanation: "Asteroid adalah benda langit berbatu yang mengorbit Matahari, sebagian besar berada di Sabuk Asteroid antara Mars dan Jupiter."
    },
    {
        question: "Fenomena alam apa yang ditunjukkan pada gambar ini?",
        image: ASSETS.gerhana,
        options: ["Gerhana Bulan", "Gerhana Matahari", "Konjungsi Planet", "Aurora Borealis"],
        answer: "Gerhana Matahari",
        explanation: "Gerhana Matahari terjadi saat Bulan berada di antara Matahari dan Bumi, menghalangi cahaya Matahari."
    },
    {
        question: "Planet manakah yang paling dekat dengan Matahari?",
        image: ASSETS.merkurius,
        options: ["Venus", "Bumi", "Merkurius", "Mars"],
        answer: "Merkurius",
        explanation: "Merkurius adalah planet terdekat dari Matahari dengan jarak rata-rata sekitar 57,9 juta km."
    }
];

const DATABASE_TRUE_FALSE = [
    { question: "Matahari memancarkan cahayanya sendiri melalui reaksi fusi nuklir.", image: ASSETS.matahari, answer: true, explanation: "Benar! Matahari adalah bintang asli yang memproduksi energi di intinya melalui fusi hidrogen menjadi helium." },
    { question: "Merkurius adalah planet terpanas karena posisinya paling dekat dengan Matahari.", image: ASSETS.merkurius, answer: false, explanation: "Salah. Venus adalah yang terpanas (460 derajat C) karena efek rumah kaca atmosfer tebalnya, meskipun Merkurius lebih dekat." },
    { question: "Bumi berada di zona Goldilocks (Zona Layak Huni) yang mendukung air cair.", image: ASSETS.bumi, answer: true, explanation: "Benar! Jarak Bumi pas untuk mendukung air cair dan kehidupan biologis." },
    { question: "Planet Saturnus memiliki masa jenis yang lebih ringan daripada air.", image: ASSETS.saturnus, answer: true, explanation: "Benar! Saturnus didominasi gas hidrogen, kerapatan massanya 0,687 g/cm3 - lebih ringan dari air (1 g/cm3)." },
    { question: "Pada gambar, planet yang terlihat memiliki cincin es paling terkenal di Tata Surya.", image: ASSETS.saturnus, answer: true, explanation: "Benar! Saturnus memiliki sistem cincin es yang paling indah dan bisa diamati bahkan dari teleskop sederhana." },
    { question: "Komet selalu mengarahkan ekornya menjauhi posisi Matahari.", image: ASSETS.asteroid, answer: true, explanation: "Benar! Angin surya meniup material komet agar selalu menjauh dari arah Matahari." },
    { question: "Gambar ini menunjukkan fenomena Gerhana Bulan.", image: ASSETS.gerhana, answer: false, explanation: "Salah. Gambar ini adalah Gerhana Matahari. Gerhana Bulan terjadi saat Bumi berada di antara Matahari dan Bulan." },
    { question: "Revolusi Bumi mengelilingi Matahari membutuhkan waktu sekitar 365,25 hari.", image: ASSETS.bumi, answer: true, explanation: "Benar! Ini mendasari penanggalan masehi satu tahun kalender (dengan tahun kabisat setiap 4 tahun)." },
    { question: "Jupiter adalah planet gas terbesar tanpa permukaan padat.", image: ASSETS.jupiter, answer: true, explanation: "Benar! Jupiter adalah raksasa gas tanpa permukaan batuan padat - atmosfernya bertransisi menjadi cairan." },
    { question: "Planet pada gambar ini berotasi dengan kemiringan ekstrem 98 derajat seolah menggelinding.", image: ASSETS.uranus, answer: true, explanation: "Benar! Uranus miring hingga 98 derajat pada sumbu rotasinya akibat tumbukan besar di masa lalu." },
    { question: "Neptunus memiliki angin tercepat di Tata Surya mencapai 2.100 km/jam.", image: ASSETS.neptunus, answer: true, explanation: "Benar! Neptunus memiliki angin supersonik yang merupakan tercepat di antara semua planet." },
    { question: "Mars memiliki gunung berapi tertinggi di Tata Surya bernama Olympus Mons.", image: ASSETS.mars, answer: true, explanation: "Benar! Olympus Mons tingginya 21,9 km - hampir 3x tinggi Gunung Everest!" },
    { question: "Venus berotasi searah jarum jam (retrograde) berbeda dengan planet lain.", image: ASSETS.venus, answer: true, explanation: "Benar! Venus berotasi retrograde, sehingga matahari terbit dari barat dan terbenam di timur." },
    { question: "Pluto masih diklasifikasikan sebagai planet utama Tata Surya.", image: null, answer: false, explanation: "Salah. Sejak 2006, Pluto diklasifikasikan sebagai planet kerdil oleh IAU (International Astronomical Union)." },
    { question: "Benda-benda berbatu pada gambar ini disebut Asteroid, mayoritas berada di antara Mars dan Jupiter.", image: ASSETS.asteroid, answer: true, explanation: "Benar! Sabuk Asteroid terletak di antara orbit Mars dan Jupiter, berisi jutaan asteroid berbatu." }
];
