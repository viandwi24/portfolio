export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'zinc',
    },
    icons: {
      loading: 'ph:circle-notch-duotone',
    },
    card: {
      slots: {
        root: 'border-b border-neutral-500/20 bg-neutral-900/40 backdrop-blur-xl rounded',
        header: 'bg-neutral-50/10 dark:bg-neutral-800/30 py-2 px-4 sm:px-4 border-b border-neutral-500/20',
        footer: 'py-2 px-2 sm:px-2 border-none',
        body: 'border-none px-4 sm:px-4 py-2 sm:py-2',
        // footer: 'bg-neutral-50/30 dark:bg-neutral-800/50 py-2 px-2 sm:px-2 border-t border-neutral-500/20',
      }
    },
  }
})