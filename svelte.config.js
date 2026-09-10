import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// ⚠️ IMPORTANTE: El nombre debe coincidir EXACTAMENTE con tu repositorio
		paths: {
			base: '/portafolio' 
		},
		adapter: adapter({
			fallback: '404.html', // Vital para que funcionen las rutas al recargar
			precompress: true
		})
	}
};

export default config;
