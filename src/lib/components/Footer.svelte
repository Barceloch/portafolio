<script lang="ts">
	import { messages } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { base } from '$app/paths';
	import { Mail, Smartphone, Heart, Download } from '@lucide/svelte';

	let m = $derived($messages);

	const year = new Date().getFullYear();
</script>

<footer id="contact" class="bg-neutral text-neutral-content">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div use:reveal class="grid gap-12 py-14 md:grid-cols-[1.5fr_0.8fr_1fr]">
			<div class="space-y-5">
				<div class="flex items-center gap-2.5 text-xl font-black">
					<span class="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-content text-sm shadow-md shadow-primary/20">YB</span>
					Yunior Barceló
				</div>
				<p class="max-w-md text-base leading-relaxed opacity-70">
					{m.footer.tagline}
				</p>
				<p class="text-sm opacity-45">{m.footer.built}</p>
			</div>

			<div>
				<h4 class="mb-5 text-sm font-bold uppercase tracking-widest opacity-50">{m.footer.links}</h4>
				<ul class="space-y-3 text-base">
					<li><a href="#about" class="link link-hover opacity-75 hover:opacity-100 transition-opacity">→ {m.nav.about}</a></li>
					<li><a href="#skills" class="link link-hover opacity-75 hover:opacity-100 transition-opacity">→ {m.nav.skills}</a></li>
					<li><a href="#projects" class="link link-hover opacity-75 hover:opacity-100 transition-opacity">→ {m.nav.projects}</a></li>
					<li><a href="#location" class="link link-hover opacity-75 hover:opacity-100 transition-opacity">→ {m.nav.location}</a></li>
				</ul>
			</div>

			<div>
				<h4 class="mb-5 text-sm font-bold uppercase tracking-widest opacity-50">{m.footer.contact}</h4>
				<div class="flex flex-wrap gap-2.5">
					<a href="https://github.com/Barceloch" target="_blank" rel="noopener" class="btn btn-sm bg-white text-neutral hover:bg-white/90 gap-2.5 border-0 font-semibold shadow-md transition-all duration-300 hover:shadow-lg">
						<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.48v-1.69c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.43a9.3 9.3 0 0 1 2.5.34c1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .26.18.58.69.48A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>
						GitHub
					</a>
					<a href="https://www.apklis.cu/developer/barcelo" target="_blank" rel="noopener" class="btn btn-sm btn-outline border-white/20 text-white hover:bg-white hover:text-neutral gap-2.5 font-semibold transition-all duration-300">
						<Smartphone class="h-4 w-4" />
						APKLIS
					</a>
					<a href="mailto:barceloch@gmail.com" class="btn btn-sm btn-primary gap-2.5 text-white font-semibold shadow-md shadow-primary/20 transition-all duration-300 hover:shadow-lg">
						<Mail class="h-4 w-4" />
						Email
					</a>
					<a href="{base}/cv_ENG.pdf" target="_blank" rel="noopener" download class="btn btn-sm btn-outline border-white/20 text-white hover:bg-white hover:text-neutral gap-2.5 font-semibold transition-all duration-300">
						<Download class="h-4 w-4" />
						CV
					</a>
				</div>
				<p class="mt-5 text-sm opacity-50">barceloch@gmail.com<br />Cuba · UTC-5</p>
			</div>
		</div>

		<div class="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-7 text-sm opacity-50 sm:flex-row">
			<p>© {year} Yunior Barceló Chávez. {m.footer.rights}</p>
			<p class="flex items-center gap-1.5">{m.common.madeWithLeft} <Heart class="h-3.5 w-3.5 text-accent" /> {m.common.madeWithRight}</p>
		</div>
	</div>
</footer>
