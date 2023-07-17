import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import topLevelAwait from 'vite-plugin-top-level-await'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'
export default defineConfig({
    plugins: [
        nodePolyfills(),
        topLevelAwait(),
        VitePWA({
            includeAssets: ['../192.ico',],
            manifest: {
                "name": "DemoX",
                "short_name": "demo",
                "description": "A collaborative p2p book drafting app",
                "icons": [
                    {
                        "src": "../icons/192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "../icons/256.png",
                        "sizes": "256x256",
                        "type": "image/png"
                    },
                    {
                        "src": "../icons/384.png",
                        "sizes": "384x384",
                        "type": "image/png"
                    },
                    {
                        "src": "../icons/512.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ]
            },
            registerType: 'autoUpdate',
            workbox: {
                clientsClaim: true,
                skipWaiting: true
            }
        }),
    ],
    root: 'src',
    build:{
        outDir: '../www',
        emptyOutDir: true,
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
