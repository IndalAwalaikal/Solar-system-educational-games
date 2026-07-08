/* ===================================================
   dialog.js — Custom Modal Dialog & Alert System
   =================================================== */

const Dialog = {
    show(options) {
        SoundManager.play('click');
        const modal = document.getElementById('custom-dialog-modal');
        const title = document.getElementById('dialog-title');
        const msg = document.getElementById('dialog-message');
        const icon = document.getElementById('dialog-icon');
        const btnConfirm = document.getElementById('dialog-btn-confirm');
        const btnCancel = document.getElementById('dialog-btn-cancel');

        icon.innerText = options.icon || "";
        title.innerText = options.title || "INFORMASI";
        msg.innerText = options.message || "";
        
        btnConfirm.innerText = options.confirmText || "OK";
        btnConfirm.onclick = () => {
            SoundManager.play('click');
            modal.classList.add('hidden');
            if (options.onConfirm) options.onConfirm();
        };

        if (options.showCancel === false) {
            btnCancel.classList.add('hidden');
        } else {
            btnCancel.classList.remove('hidden');
            btnCancel.innerText = options.cancelText || "Batal";
            btnCancel.onclick = () => {
                SoundManager.play('click');
                modal.classList.add('hidden');
                if (options.onCancel) options.onCancel();
            };
        }

        modal.classList.remove('hidden');
    },

    alert(message, onOk) {
        this.show({
            title: "INFORMASI",
            message: message,
            confirmText: "OK",
            showCancel: false,
            icon: "",
            onConfirm: onOk
        });
    }
};
