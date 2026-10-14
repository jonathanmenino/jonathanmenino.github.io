/** Cores e fontes do manual da marca. */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,json}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#6E44FF', dark: '#5A30EE', light: '#9B7BFF' },
        ink: '#0B0A0D',      // fundo escuro
        graphite: '#151317', // cards no fundo escuro
        paper: '#F7F6F3',    // fundo claro principal
        mist: '#EBEBEB',     // fundo claro alternativo
        lilac: '#EEE9FF',    // selo de destaque
        muted: '#6B6870',    // texto secundário no claro
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: { site: '1200px' },
    },
  },
};
