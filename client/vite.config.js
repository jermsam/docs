import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import topLevelAwait from 'vite-plugin-top-level-await'
import { VitePWA } from 'vite-plugin-pwa'
// import { resolve } from 'path'
// import { fileURLToPath, URL } from 'node:url'
export default defineConfig((/*env*/) => {
    return {
        plugins: [
            nodePolyfills(),
            topLevelAwait(),
            VitePWA({
                includeAssets: ['192.ico',],
                manifest: {
                    "name": "DemoX",
                    "short_name": "demo",
                    "description": "A collaborative p2p book drafting app",
                    "icons": [
                        {
                            "src": "/icons/192.png",
                            "sizes": "192x192",
                            "type": "image/png"
                        },
                        {
                            "src": "/icons/256.png",
                            "sizes": "256x256",
                            "type": "image/png"
                        },
                        {
                            "src": "/icons/384.png",
                            "sizes": "384x384",
                            "type": "image/png"
                        },
                        {
                            "src": "/icons/512.png",
                            "sizes": "512x512",
                            "type": "image/png"
                        }
                    ],
                    shortcuts: [
                        {
                            name: 'Home Screen',
                            short_name: 'Home',
                            description: 'List all folders and Books',
                            url: '/',
                            icons: [
                                {
                                    "src": "/icons/192.ico",
                                    "sizes": "192x192",
                                    "type": "image/ico"
                                },
                            ]
                        }
                    ]
                },
                registerType: 'autoUpdate',
                strategies: 'generateSW',
                workbox: {
                    clientsClaim: true,
                    skipWaiting: true,
                    // Only precache these files - html should be excluded
                    globPatterns: ['**/*.{js,css}'],

                    // Don't fallback on document based (e.g. `/some-page`) requests
                    // Even though this says `null` by default, I had to set this specifically to `null` to make it work
                    navigateFallback: null,
                }
            }),
        ],
        // root: 'src',
        // publicDir: 'public',
        // build: {
        //     lib: {
        //         entry: resolve(__dirname, "/main.js"),
        //         name: "MyCssLib",
        //     },
        // },

    }
})
