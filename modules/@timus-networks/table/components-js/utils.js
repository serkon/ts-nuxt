export class Utils {
    constructor() {
        this.timeout = null;
    }
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
}
export const utils = new Utils();
