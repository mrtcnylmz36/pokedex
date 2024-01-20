import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
      'normal': '#a4acaf',
      'fighting': '#d56723',
      'flying': '#3dc7ef',
      'poison': '#7e0058',
      'ground': '#ab9842',
      'rock': '#a38c21',
      'bug': '#729f3f',
      'ghost': '#4d5b64',
      'steel': '#9eb7b8',
      'fire': '#ff7402',
      'water': '#4592c4',
      'grass': '#9bcc50',
      'electric': '#bba909',
      'psychic': '#f366b9',
      'ice': '#51c4e7',
      'dragon': '#f16e57',
      'dark': '#09090b',
      'fairy': '#fdb9e9',
      'unknown': '#7b62a3',
      'shadow': '#757575',
    },
    backgroundColor: {
      'normal': '#a4acaf',
      'fighting': '#d56723',
      'flying': '#3dc7ef',
      'poison': '#7e0058',
      'ground': '#ab9842',
      'rock': '#a38c21',
      'bug': '#729f3f',
      'ghost': '#4d5b64',
      'steel': '#9eb7b8',
      'fire': '#ff7402',
      'water': '#4592c4',
      'grass': '#9bcc50',
      'electric': '#bba909',
      'psychic': '#f366b9',
      'ice': '#51c4e7',
      'dragon': '#f16e57',
      'dark': '#09090b',
      'fairy': '#fdb9e9',
      'unknown': '#7b62a3',
      'shadow': '#757575',
    }
    },
  },
  plugins: [],
}
export default config
