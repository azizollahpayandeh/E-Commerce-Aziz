import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    width: {
      'container' : '90%',
    },
    colors: {
      'red' : '#DB4444',
      'secondary' : '#F5F5F5',
      'bg' : '#FFFFFF',
      'hoverbtn' : '#E07575',
      'hoverbtnblue' : "#A0BCE0",
      'text' : "#FAFAFA",
      'primary' : '#363738',
      'textgray' : '#7D8184'
    }

  },
  plugins: [],
}
export default config
