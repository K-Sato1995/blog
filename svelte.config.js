import preprocess from 'svelte-preprocess';
import { resolve } from 'path';
import adapter from '@sveltejs/adapter-vercel';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	vite: {
		resolve: {
			alias: {
				$data: resolve('./src/data')
			}
		}
	},
	kit: {
		adapter: adapter()
	}
};

export default config;
