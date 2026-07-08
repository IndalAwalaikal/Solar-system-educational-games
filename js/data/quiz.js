/* ===================================================
   quiz.js — Data Kuis Pilihan Ganda & Benar/Salah
   =================================================== */

const DATABASE_QUIZ = [
    {
        question: "Pusat dari sistem Tata Surya kita adalah...",
        fotoAsli: ASSETS.matahari,
        options: ["Bumi", "Jupiter", "Matahari", "Galaksi Bima Sakti"],
        answer: "Matahari",
        explanation: "Matahari adalah pusat Tata Surya, semua planet bergerak mengitari akibat gaya gravitasinya yang sangat kuat."
    },
    {
        question: "Planet manakah yang mendapat julukan 'Planet Merah'?",
        fotoAsli: ASSETS.mars,
        options: ["Venus", "Mars", "Merkurius", "Saturnus"],
        answer: "Mars",
        explanation: "Mars memiliki lapisan besi oksida (karat) yang melimpah sehingga permukaannya nampak kemerahan."
    },
    {
        question: "Planet terpanas di seluruh Tata Surya kita adalah...",
        fotoAsli: ASSETS.venus,
        options: ["Merkurius", "Venus", "Bumi", "Jupiter"],
        answer: "Venus",
        explanation: "Atmosfer Venus yang diselimuti karbon dioksida sangat tebal memerangkap panas dalam efek rumah kaca yang parah."
    },
    {
        question: "Sistem cincin es raksasa yang menawan dimiliki oleh...",
        fotoAsli: ASSETS.saturnus,
        options: ["Uranus", "Neptunus", "Saturnus", "Jupiter"],
        answer: "Saturnus",
        explanation: "Cincin menawan Saturnus terdiri atas miliaran partikel kecil es, air dingin, dan sisa-sisa debu kosmik."
    },
    {
        question: "Planet gas raksasa terbesar di Tata Surya kita adalah...",
        fotoAsli: ASSETS.jupiter,
        options: ["Saturnus", "Jupiter", "Bumi", "Neptunus"],
        answer: "Jupiter",
        explanation: "Jupiter memiliki massa yang luar biasa besar, setara dengan gabungan seluruh massa planet lain digabungkan."
    },
    {
        question: "Planet yang berotasi dengan kemiringan ekstrem 98° sehingga seperti menggelinding adalah...",
        fotoAsli: ASSETS.uranus,
        options: ["Neptunus", "Uranus", "Saturnus", "Mars"],
        answer: "Uranus",
        explanation: "Uranus memiliki kemiringan sumbu 98° akibat tumbukan besar di masa awal Tata Surya."
    },
    {
        question: "Planet terjauh dari Matahari dalam Tata Surya kita adalah...",
        fotoAsli: ASSETS.neptunus,
        options: ["Uranus", "Pluto", "Neptunus", "Saturnus"],
        answer: "Neptunus",
        explanation: "Sejak Pluto diklasifikasikan sebagai planet kerdil (2006), Neptunus adalah planet terjauh."
    },
    {
        question: "Benda langit yang memiliki ekor panjang saat mendekati Matahari disebut...",
        fotoAsli: ASSETS.asteroid,
        options: ["Asteroid", "Meteor", "Komet", "Satelit"],
        answer: "Komet",
        explanation: "Komet terdiri dari es dan debu yang menguap saat mendekati Matahari, membentuk ekor yang panjang."
    },
    {
        question: "Gerhana Matahari terjadi ketika...",
        fotoAsli: ASSETS.gerhana,
        options: ["Bumi di antara Matahari dan Bulan", "Bulan di antara Matahari dan Bumi", "Matahari di antara Bumi dan Bulan", "Bumi memasuki bayangan Bulan"],
        answer: "Bulan di antara Matahari dan Bumi",
        explanation: "Gerhana Matahari terjadi saat Bulan berada di antara Matahari dan Bumi, menghalangi cahaya Matahari."
    },
    {
        question: "Satelit alami terbesar di Tata Surya yang mengorbit Jupiter adalah...",
        fotoAsli: ASSETS.jupiter,
        options: ["Titan", "Europa", "Ganymede", "Callisto"],
        answer: "Ganymede",
        explanation: "Ganymede adalah satelit terbesar di Tata Surya, bahkan lebih besar dari planet Merkurius!"
    }
];

const DATABASE_TRUE_FALSE = [
    { question: "Matahari memancarkan cahayanya sendiri melalui reaksi fusi nuklir.", answer: true, explanation: "Benar! Matahari adalah bintang asli yang memproduksi energi di intinya melalui fusi hidrogen menjadi helium." },
    { question: "Merkurius adalah planet terpanas karena posisinya paling dekat dengan Matahari.", answer: false, explanation: "Salah. Venus adalah yang terpanas (460°C) karena efek rumah kaca atmosfer tebalnya, meskipun Merkurius lebih dekat." },
    { question: "Bumi berada di zona Goldilocks (Zona Layak Huni).", answer: true, explanation: "Benar! Jarak Bumi pas untuk mendukung air cair dan kehidupan biologis." },
    { question: "Planet Saturnus memiliki masa jenis yang lebih ringan daripada air.", answer: true, explanation: "Benar! Saturnus didominasi gas hidrogen, kerapatan massanya 0,687 g/cm³ - lebih ringan dari air (1 g/cm³)." },
    { question: "Satelit alami satu-satunya yang dimiliki oleh planet Bumi adalah Phobos.", answer: false, explanation: "Salah. Satelit Bumi bernama Bulan (Luna). Phobos adalah satelit Mars." },
    { question: "Komet selalu mengarahkan ekornya menjauhi posisi Matahari.", answer: true, explanation: "Benar! Angin surya meniup material komet agar selalu menjauh dari arah Matahari." },
    { question: "Gerhana Bulan terjadi jika Bulan berada tepat di antara Matahari dan Bumi.", answer: false, explanation: "Salah. Itu adalah skenario Gerhana Matahari. Gerhana Bulan terjadi saat Bumi di tengah." },
    { question: "Revolusi Bumi mengelilingi Matahari membutuhkan waktu sekitar 365,25 hari.", answer: true, explanation: "Benar! Ini mendasari penanggalan masehi satu tahun kalender (dengan tahun kabisat setiap 4 tahun)." },
    { question: "Jupiter adalah planet gas tanpa permukaan padat.", answer: true, explanation: "Benar! Jupiter adalah raksasa gas tanpa permukaan batuan padat - atmosfernya bertransisi menjadi cairan." },
    { question: "Planet Uranus berputar dengan kemiringan sangat ekstrem seolah menggelinding.", answer: true, explanation: "Benar! Uranus miring hingga 98 derajat pada sumbu rotasinya akibat tumbukan besar di masa lalu." },
    { question: "Neptunus memiliki angin tercepat di Tata Surya mencapai 2.100 km/jam.", answer: true, explanation: "Benar! Neptunus memiliki angin supersonik yang merupakan tercepat di antara semua planet." },
    { question: "Mars memiliki gunung berapi tertinggi di Tata Surya bernama Olympus Mons.", answer: true, explanation: "Benar! Olympus Mons tingginya 21,9 km - hampir 3x tinggi Gunung Everest!" },
    { question: "Venus berotasi searah jarum jam (retrograde) berbeda dengan planet lain.", answer: true, explanation: "Benar! Venus berotasi retrograde, sehingga matahari terbit dari barat dan terbenam di timur." },
    { question: "Pluto masih diklasifikasikan sebagai planet utama Tata Surya.", answer: false, explanation: "Salah. Sejak 2006, Pluto diklasifikasikan sebagai planet kerdil oleh IAU (International Astronomical Union)." },
    { question: "Asteroid mayoritas berada di sabuk antara Mars dan Jupiter.", answer: true, explanation: "Benar! Sabuk Asteroid terletak di antara orbit Mars dan Jupiter, berisi jutaan asteroid." }
];
