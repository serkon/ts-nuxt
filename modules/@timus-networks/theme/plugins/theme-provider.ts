import { Context } from '@nuxt/types';
import Vue from 'vue';

/**
 * Helper functions to handle localStorage safely
 */
function getDarkModeFromLocalStorage(): boolean {
  return process.client && localStorage.getItem('darkMode') === 'true';
}

function setDarkModeToLocalStorage(value: boolean): void {
  if (process.client) {
    localStorage.setItem('darkMode', value.toString());
  }
}

function setHtmlDarkClass(isDark: boolean): void {
  if (process.client) {
    const htmlElement = document.documentElement;
    if (isDark) {
      htmlElement.classList.add('dark');
    } else {
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
      get(): boolean {
        return this.isDarkMode;
      },
      set(value: boolean) {
        this.isDarkMode = value;
        setDarkModeToLocalStorage(value);
        this.$emit('darkMode', value);
      },
    },
  },
  watch: {
    isDark(newVal: boolean) {
      setHtmlDarkClass(newVal);
    },
  },
  methods: {
    setDarkMode(value: boolean) {
      this.isDark = value; // This will trigger the setter of isDark.
    },
  },
  created() {
    setHtmlDarkClass(this.isDark); // Sayfa yüklendiğinde fonksiyonu manuel olarak tetikle
  },
});

type InjectFunction = (key: string, value: any) => void;

export default (context: Context, inject: InjectFunction) => {
  inject('theme', ThemeProvider);
};
