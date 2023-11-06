export declare class Utils {
    private timeout;
    debounce(func: Function, delay: number): (...args: any[]) => void;
    generateRandomId(): string;
}
export declare const utils: Utils;
