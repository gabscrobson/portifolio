import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#773DFB',
      secondary: '#FFC700',
      background: '#030014',
      white: '#FFFFFF',
      gray: '#E5E5E5',
    },
    extend: {},
  },
  plugins: [],
}
export default config
