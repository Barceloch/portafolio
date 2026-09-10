import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: true
	},
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: true,
			strict: true
		}),
		paths: {
			// para GitHub Pages si el repo no es user.github.io, descomentar y ajustar:
			// base: process.env.BASE_PATH ? `/${process.env.BASE_PATH}` : ''
		},
		prerender: {
			entries: ['*']
		}
	}
};

export default config;
