import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from 'svelte-preprocess'
/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess({
        postcss: true,
    }),
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true
        }),
    },
    vitePlugin: {
        inspector: true,
    },
    // Configure svelte-check to ignore unknown CSS at-rules from Tailwind CSS v4
    onwarn: (warning, handler) => {
        if (warning.code === 'css-unused-selector' ||
            warning.message.includes('@reference') ||
            warning.message.includes('@apply')) {
            return;
        }
        handler(warning);
    },
};

export default config;
