export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
    },
    card: {
      slots: {
        root: 'grid gap-8 p-6 sm:p-8 rounded-lg',
        header: 'p-0 sm:p-0 border-0',
        body: 'p-0 sm:p-0 border-0',
        footer: 'p-0 sm:p-0',
      },
      defaultVariants: {
        variant: 'subtle',
      },
    },
  },
})
