import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      keyframes: {
        hello: {
          '0%, 7%': {
            transform: 'rotateZ(0)'
          },
          '15%': {
            transform: 'rotateZ(-15deg)'
          },
          '20%': {
            transform: 'rotateZ(10deg)'
          },
          '25%': {
            transform: 'rotateZ(-10deg)'
          },
          '30%': {
            transform: 'rotateZ(6deg)'
          },
          '35%': {
            transform: 'rotateZ(-4deg)'
          },
          '40%, 100%': {
            transform: 'rotateZ(0)'
          }
        }
      },
      animation: {
        hello: 'hello 2.5s linear infinite'
      }
    }
  },
  plugins: []
}
