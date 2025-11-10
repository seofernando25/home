import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'home-components': [
						'$lib/components/home/HomePage2.svelte',
						'$lib/components/home/History.svelte'
					]
				}
			}
		},
		chunkSizeWarningLimit: 1000
	}
});
