import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: '404.html', // Vital para rutas SPA en GitHub Pages
			precompress: true
		}),
		paths: {
			// ⚠️ Esto debe ser el nombre exacto de tu repositorio
			base: '/portafolio' 
		}
	}
};

export default config;
