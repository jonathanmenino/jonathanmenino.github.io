/** Cores e fontes do manual da marca. */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,json}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#6E44FF', dark: '#5A30EE', light: '#9B7BFF' },
        ink: '#0B0A0D',      // fundo escuro
        graphite: '#151317', // cards no fundo escuro
        // Cores das partes claras: mudam no modo escuro (valores em src/styles/tema.css).
        paper: 'rgb(var(--paper) / <alpha-value>)',     // fundo claro principal
        mist: 'rgb(var(--mist) / <alpha-value>)',       // fundo claro alternativo
        surface: 'rgb(var(--surface) / <alpha-value>)', // cards
        lilac: 'rgb(var(--lilac) / <alpha-value>)',     // selo de destaque
        muted: 'rgb(var(--muted) / <alpha-value>)',     // texto secundário
        fg: 'rgb(var(--fg) / <alpha-value>)',           // texto principal
        line: 'rgb(var(--line) / <alpha-value>)',       // bordas e divisórias
        accent: 'rgb(var(--accent) / <alpha-value>)',   // texto roxo sobre lilás
        hl: 'rgb(var(--hl) / <alpha-value>)',           // texto roxo de destaque
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      maxWidth: { site: '1200px' },
    },
  },
};
