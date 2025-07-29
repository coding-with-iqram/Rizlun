/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* warm neutral border */
        input: "var(--color-input)", /* subtle warm input background */
        ring: "var(--color-ring)", /* refined gold focus ring */
        background: "var(--color-background)", /* soft ivory */
        foreground: "var(--color-foreground)", /* deep charcoal */
        primary: {
          DEFAULT: "var(--color-primary)", /* rich umber base */
          foreground: "var(--color-primary-foreground)", /* soft ivory */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* warm amber */
          foreground: "var(--color-secondary-foreground)", /* soft ivory */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* deep burgundy */
          foreground: "var(--color-destructive-foreground)", /* soft ivory */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* subtle warmth */
          foreground: "var(--color-muted-foreground)", /* balanced gray */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* refined gold */
          foreground: "var(--color-accent-foreground)", /* rich umber */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* pure white */
          foreground: "var(--color-popover-foreground)", /* deep charcoal */
        },
        card: {
          DEFAULT: "var(--color-card)", /* subtle warmth */
          foreground: "var(--color-card-foreground)", /* deep charcoal */
        },
        success: {
          DEFAULT: "var(--color-success)", /* forest green */
          foreground: "var(--color-success-foreground)", /* soft ivory */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* dark goldenrod */
          foreground: "var(--color-warning-foreground)", /* soft ivory */
        },
        error: {
          DEFAULT: "var(--color-error)", /* deep burgundy */
          foreground: "var(--color-error-foreground)", /* soft ivory */
        },
        surface: "var(--color-surface)", /* subtle warmth */
        'text-primary': "var(--color-text-primary)", /* deep charcoal */
        'text-secondary': "var(--color-text-secondary)", /* balanced gray */
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Dancing Script', 'cursive'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(44, 24, 16, 0.08)',
        'luxury-lg': '0 8px 32px rgba(44, 24, 16, 0.12)',
        'luxury-xl': '0 12px 48px rgba(44, 24, 16, 0.15)',
      },
      animation: {
        'breathing': 'breathingRhythm 3s ease-in-out infinite',
        'particle-diffusion': 'particleDiffusion 6s ease-in-out infinite',
        'citrus-breathing': 'citrusBreathing 4s ease-in-out infinite',
        'floral-breathing': 'floralBreathing 4s ease-in-out infinite',
        'woody-breathing': 'woodyBreathing 4s ease-in-out infinite',
      },
      keyframes: {
        breathingRhythm: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        particleDiffusion: {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'translate3d(0, 0, 0) scale(1)',
          },
          '50%': { 
            opacity: '0.3',
            transform: 'translate3d(10px, -15px, 0) scale(1.1)',
          },
        },
        citrusBreathing: {
          '0%, 100%': { filter: 'hue-rotate(0deg) saturate(1)' },
          '50%': { filter: 'hue-rotate(15deg) saturate(1.1)' },
        },
        floralBreathing: {
          '0%, 100%': { filter: 'hue-rotate(0deg) saturate(1)' },
          '50%': { filter: 'hue-rotate(-10deg) saturate(1.1)' },
        },
        woodyBreathing: {
          '0%, 100%': { filter: 'hue-rotate(0deg) saturate(1)' },
          '50%': { filter: 'hue-rotate(10deg) saturate(0.9)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}