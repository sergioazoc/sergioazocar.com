export default defineAppConfig({
  ui: {
    colors: {
      primary: 'lime',
      neutral: 'zinc',
    },
    card: {
      slots: {
        header: 'border-0 px-6 pt-6 pb-0 sm:pt-8 sm:pb-0 sm:px-8',
        body: 'border-0 p-6 sm:p-8',
        footer: 'border-0 px-6 pt-0 pb-6 sm:pt-0 sm:pb-8 sm:px-8',
      },
      defaultVariants: {
        variant: 'subtle',
      },
    },
    pageHero: {
      container: 'lg:py-20',
    },
  },
})
