import Vue from 'vue';
/**
 * Helper functions to handle localStorage safely
 */
function getDarkModeFromLocalStorage() {
    return process.client && localStorage.getItem('darkMode') === 'true';
}
function setDarkModeToLocalStorage(value) {
    if (process.client) {
        localStorage.setItem('darkMode', value.toString());
    }
}
function setHtmlDarkClass(isDark) {
    if (process.client) {
        const htmlElement = document.documentElement;
        if (isDark) {
            htmlElement.classList.add('dark');
        }
        else {
            htmlElement.classList.remove('dark');
        }
    }
}
/**
 * ThemeProvider: A Vue instance to provide theme related functionalities.
 *
 * Usage:
 * - Change the theme on button click:
 *   this.$theme.setDarkMode(!this.$theme.isDark);
 *
 * - Register the theme change listener:
 *   this.$theme.$on('darkMode', (value) => { console.log('darkMode:', value); });
 */
export const ThemeProvider = new Vue({
    data() {
        return {
            isDarkMode: getDarkModeFromLocalStorage(),
        };
    },
    computed: {
        isDark: {
            get() {
                return this.isDarkMode;
            },
            set(value) {
                this.isDarkMode = value;
                setDarkModeToLocalStorage(value);
                this.$emit('darkMode', value);
            },
        },
    },
    watch: {
        isDark(newVal) {
            setHtmlDarkClass(newVal);
        },
    },
    methods: {
        setDarkMode(value) {
            this.isDark = value; // This will trigger the setter of isDark.
        },
    },
    created() {
        setHtmlDarkClass(this.isDark); // Sayfa yüklendiğinde fonksiyonu manuel olarak tetikle
    },
});
export default (context, inject) => {
    inject('theme', ThemeProvider);
};
