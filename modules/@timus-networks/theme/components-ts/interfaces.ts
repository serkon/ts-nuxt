export interface ThemeProviderTheme extends Vue {
  isDarkMode: boolean;
  isDark: boolean;
  setDarkMode(value: boolean): void;
}

declare module 'vue/types/vue' {
  interface Vue {
    $theme: ThemeProviderTheme;
  }
}
