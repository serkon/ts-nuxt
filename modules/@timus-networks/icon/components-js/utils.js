export class Utils {
    timeout = null;
    debounce(func, delay) {
        return (...args) => {
            if (this.timeout !== null) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(() => {
                func(...args);
            }, delay);
        };
    }
    generateRandomId() {
        return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
    }
}
export const utils = new Utils();
