import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{

      fontSize:{
        'title-web':'3rem',
        'title-mob':'1.5rem',
        'subtitle-web':'2.5rem',
        'subtitle-mob':'2rem',
        'paragraph-web':'1.4rem',    
        'paragraph-mob':'1.2rem',
        'common': '1rem' 
      },
      keyframes:{
        movementLeft:{
          '0%': {transform: 'translateX(0%)'},
          '100%': { transform: 'translateX(100%)'}
        },
      moveCanva:{
        '0%': {transform: 'translateX(400px)'},
        '100%': { transform: 'translateX(0px)'}
      },
      scroll:{
        '0%': {transform: 'translateX(0px)'},
      }
    },
    animation:{
      'move-left':'movementLeft 200ms',
      'move-canva':'moveCanva 200ms',
    },
    screens:{
      'fHD': '1080px',
      'mob':'390px'
    },
  }
  },
  plugins: [],
}
export default config
