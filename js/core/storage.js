/* ===================================================
   storage.js — Manajemen Local Storage
   =================================================== */

const StorageManager = {
    prefix: 'tatasurya_ver7_',
    
    get(key, defaultValue) {
        try {
            const data = localStorage.getItem(this.prefix + key);
            return data ? JSON.parse(data) : defaultValue;
        } catch(e) {
            return defaultValue;
        }
    },
    
    set(key, value) {
        try {
            localStorage.setItem(this.prefix + key, JSON.stringify(value));
        } catch(e) {
            console.error("Gagal menyimpan data", e);
        }
    },

    resetAll() {
        localStorage.clear();
        location.reload();
    }
};
