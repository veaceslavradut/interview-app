import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// On GitHub Pages the app is served from a sub-path; keep the PWA scope/start_url
// aligned with it (icon `src` values are relative to the manifest, which lives at
// `base`, so plain filenames resolve correctly under both `/` and `/interview-app/`).
const base = globalThis.process?.env.GITHUB_PAGES ? '/interview-app/' : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    VitePWA({
      // Static content: let a new deploy's service worker take over silently and
      // serve fresh assets on the next load — no update prompt to manage.
      registerType: 'autoUpdate',
      manifest: {
        name: 'Java Interview Hub',
        short_name: 'Interview Hub',
        description:
          'Подготовка к собеседованию Java-разработчика: вопросы, ответы и квизы. ' +
          'Java interview prep: questions, answers and quizzes.',
        lang: 'ru',
        dir: 'ltr',
        theme_color: '#4f6df5',
        background_color: '#f4f6fb',
        display: 'standalone',
        orientation: 'portrait-primary',
        categories: ['education', 'productivity'],
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Precache the whole build (shell + all lazy per-category answer chunks +
        // quiz banks) so the app works fully offline after the first visit.
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff,woff2,json,webmanifest}'],
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        cleanupOutdatedCaches: true,
        // SPA deep links resolve to the precached shell when navigating offline.
        navigateFallback: `${base}index.html`,
        navigateFallbackDenylist: [/^\/api/, /\/[^/?]+\.[^/]+$/],
      },
      devOptions: {
        // Keep the SW out of `npm run dev`; verify it via `npm run preview`.
        enabled: false,
      },
    }),
  ],
})
