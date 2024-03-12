function generateColors(baseName, start = 100, end = 900, step = 100) {
  const colors = {};

  for (let i = start; i <= end; i += step) {
    colors[i] = `var(--${baseName}-${i})`;
  }

  return colors;
}

const colorNames = ['default', 'primary', 'secondary', 'gray', 'danger', 'success', 'warning', 'info', 'light'];
const colors = colorNames.reduce((acc, color) => ({ ...acc, [`${color}`]: generateColors(color, 100, 900) }), {});

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: ['./pages/**/*.{html,js,vue}', './.nuxt/**/*.{js,jsx,ts,tsx,vue}', './components/**/*.{html,js,vue}', './layouts/**/*.{html,js,vue}'],
  safelist: [],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
