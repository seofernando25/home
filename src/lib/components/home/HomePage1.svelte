<script lang="ts">
	import TextSlashList from '../TextSlashList.svelte';

	const imA = [
		'Full-Stack Developer',
		'Learner',
		'Programmer',
		'Arch User 🐧 BTW',
		'Tinkerer',
		'Web Purist',
		'Aspiring Computer Wizard'
	];
</script>

<section class="min-h-screen h-dvh flex flex-col" >
	<div class="hero flex-grow">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<div class="avatar mb-4">
					<div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img src="./favicon.webp" alt="SeoFernando" />
					</div>
				</div>
				<h1 class="text-5xl font-bold">
					Hello 👋 I'm <span class="text-primary">Fernando</span>
				</h1>
				<div class="py-6">
					<div class="flex items-center justify-center gap-2 text-lg">
						<span>I'm a</span>
						<TextSlashList strings={imA} />
					</div>
				</div>

				<div class="flex justify-center gap-4 mb-8">
					<a href="https://github.com/SeoFernando25" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-circle" aria-label="GitHub">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-2xl w-6 h-6"><!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
					</a>
					<a href="https://www.linkedin.com/in/fernando-n/" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-circle" aria-label="LinkedIn">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="text-2xl w-6 h-6"><!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"/></svg>
					</a>
					<a href="https://stackexchange.com/users/11740005/seofernando?tab=accounts" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-circle" aria-label="Stack Overflow">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="text-2xl w-6 h-6"><!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M291 311l-195.7-41.3-8.2 39.3 195.7 41 8.2-39zm51-87L188.5 95.7 163 126.5 316.5 254.8 342 224zm-31.2 39.7L129.5 179 112.8 215.5 294 300 310.8 263.7zM262.3 32l-32 24 119.3 160.3 32-24-119.3-160.3zm20.5 328l-200 0 0 39.7 200 0 0-39.7zm39.7 80l-279.5 0 0-120-40 0 0 160 359.5 0 0-160-40 0 0 120z"/></svg>
					</a>
					<a href="https://seofer.itch.io/" target="_blank" rel="noopener noreferrer" class="btn btn-ghost btn-circle" aria-label="Itch.io">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="text-2xl w-6 h-6"><!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M71.9 34.8C50.2 47.7 7.4 96.8 7 109.7l0 21.3c0 27.1 25.3 50.8 48.2 50.8 27.6 0 50.5-22.8 50.5-50 0 27.1 22.2 50 49.8 50s49-22.8 49-50c0 27.1 23.6 50 51.2 50l.5 0c27.6 0 51.2-22.8 51.2-50 0 27.1 21.5 50 49 50s49.8-22.8 49.8-50c0 27.1 23 50 50.5 50 23 0 48.3-23.8 48.3-50.8l0-21.3c-.4-12.9-43.2-62.1-64.9-75-67.4-2.3-114.2-2.7-184-2.7S91.1 33.1 71.9 34.8zM204.2 169.2c-22 38.4-77.9 38.7-99.8 .2-13.2 23.1-43.2 32.1-56 27.7-3.9 40.2-13.7 237.1 17.7 269.2 80 18.7 302.1 18.1 379.8 0 31.6-32.3 21.3-232 17.7-269.2-12.9 4.4-42.9-4.6-56-27.7-22 38.5-77.8 38.1-99.8-.2-7.1 12.5-23 28.9-51.8 28.9-10.4 .3-20.8-2.2-29.9-7.3s-16.7-12.6-21.9-21.6l0 0zm-41.6 53.8c16.5 0 31.1 0 49.2 19.8 29.3-3 58.9-3 88.2 0 18.2-19.7 32.8-19.7 49.2-19.7 52.3 0 65.2 77.5 83.9 144.4 17.3 62.2-5.5 63.7-34 63.7-42.1-1.6-65.5-32.2-65.5-62.8-39.3 6.4-101.9 8.8-155.6 0 0 30.6-23.3 61.2-65.5 62.8-28.4-.1-51.2-1.6-33.9-63.7 18.7-67 31.6-144.4 83.9-144.4l0-.1zM256 270.8s-44.4 40.8-52.4 55.2l29-1.2 0 25.3c0 1.5 21.3 .2 23.3 .2 11.6 .5 23.3 1 23.3-.2l0-25.3 29 1.2c-8-14.5-52.4-55.2-52.4-55.2l.1 0z"/></svg>
					</a>
					<a href="resume" class="btn btn-ghost btn-circle" aria-label="Résumé">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="text-2xl w-6 h-6"><!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M176 48L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-240-88 0c-39.8 0-72-32.2-72-72l0-88zM316.1 160L224 67.9 224 136c0 13.3 10.7 24 24 24l68.1 0zM0 64C0 28.7 28.7 0 64 0L197.5 0c17 0 33.3 6.7 45.3 18.7L365.3 141.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"/></svg>
					</a>
				</div>

				<a href="mailto:abert036@uottawa.ca" class="btn btn-primary">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="mr-2 w-4 h-4"><!--! Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"/></svg>
					Get in touch
				</a>
			</div>
		</div>
	</div>
</section>

