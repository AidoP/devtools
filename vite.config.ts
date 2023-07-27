import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import wasm from 'vite-plugin-wasm';
import top_level_await from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [top_level_await(), wasm(), vue()],
    publicDir: resolve('./src/static'),
    css: {
        transformer: 'lightningcss',
        lightningcss: {
            drafts: {
                nesting: true
            }
        }
    },
    build: {
        target: 'esnext',
        outDir: 'target/dist'
    },
    resolve: {
        alias: {
            '@': resolve('./src')
        }
    }
});
