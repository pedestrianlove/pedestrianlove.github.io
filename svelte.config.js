import mdsvex from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js"
//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	"extensions": [".svelte", ...mdsvexConfig.extensions],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	},
	preprocess: vitePreprocess(),
	prerender: {
		crawl: true,
		enabled: true,
		onError: 'continue',
		default: true
	},
};

export default config;
