export class Utils {
  private timeout: ReturnType<typeof setTimeout> | null = null;

  debounce(func: Function, delay: number) {
    return (...args: any[]) => {
      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  generateRandomId(): string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 9);
  }
}

export const utils = new Utils();
