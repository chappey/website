(function() {
"use strict";

class RavenPlatformInterface {
    constructor(wasmMemoryInterface) {
        this.mem = wasmMemoryInterface;
    }

    getInterface() {
        return {
            get_pointer_lock: (canvas_ptr, canvas_len) => {
                return document.pointerLockElement != null ? 1 : 0;
            },
            set_pointer_lock: (canvas_ptr, canvas_len, lock) => {
                const canvas = document.querySelector("#raven-canvas");
                if (lock) {
                    canvas && canvas.requestPointerLock();
                } else {
                    document.exitPointerLock();
                }
            },
        };
    }
}

window.odin = window.odin || {};
window.odin.RavenPlatformInterface = RavenPlatformInterface;
})();
