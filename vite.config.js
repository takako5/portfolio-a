import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        corporate: 'work-corporate.html',
        profile: 'work-profile.html',
        beauty: 'work-beauty.html',
        osechi: 'work-osechi.html',
        reel: 'work-reel.html',
        university: 'work-university.html',
      },
    },
  },
})
