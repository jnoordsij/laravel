import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        webfontDownload([
            'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
            'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'
        ]),
    ],
});
