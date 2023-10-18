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
}

export const utils = new Utils();
