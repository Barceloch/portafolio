<script lang="ts">
	import { messages } from '$lib/i18n';
	import { base } from '$app/paths';
	import { Mail, Smartphone, Download, Heart } from '@lucide/svelte';

	let m = $derived($messages);

	const year = new Date().getFullYear();

	const githubIcon = `<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.48v-1.69c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.43a9.3 9.3 0 0 1 2.5.34c1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .26.18.58.69.48A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>`;

	const whatsappIcon = `<svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;
</script>

<footer id="contact" class="border-t border-base-300/40 bg-base-200/40">
	<div class="mx-auto max-w-6xl px-4 py-14 sm:px-6">
		<div class="flex items-center gap-4">
			<span class="font-mono text-xs uppercase tracking-[0.3em] text-primary">05 // contacto</span>
			<span class="h-px flex-1 bg-base-300/40"></span>
		</div>

		<div class="mt-10 grid gap-10 md:grid-cols-[1.4fr_0.7fr_1fr]">
			<div class="space-y-5">
				<div class="flex items-center gap-3 font-mono">
					<span class="flex h-9 w-9 items-center justify-center rounded-lg bg-base-300/80 text-sm font-bold text-primary ring-1 ring-base-300">YB</span>
					<span class="text-lg text-base-content">barceloch@dev<span class="text-primary">/</span></span>
				</div>
				<p class="max-w-md text-base leading-relaxed text-base-content/80">
					{m.footer.tagline}
				</p>
				<p class="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-base-content/70">{m.footer.built}</p>
			</div>

			<div>
				<h4 class="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-base-content/75">{m.footer.links}</h4>
				<ul class="mt-5 space-y-3 font-mono text-[0.82rem] uppercase tracking-wider">
					<li><a href="#about" class="text-base-content/75 transition-colors hover:text-primary">→ {m.nav.about}</a></li>
					<li><a href="#skills" class="text-base-content/75 transition-colors hover:text-primary">→ {m.nav.skills}</a></li>
					<li><a href="#projects" class="text-base-content/75 transition-colors hover:text-primary">→ {m.nav.projects}</a></li>
					<li><a href="#location" class="text-base-content/75 transition-colors hover:text-primary">→ {m.nav.location}</a></li>
				</ul>
			</div>

			<div>
				<h4 class="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-base-content/75">{m.footer.contact}</h4>
				<div class="mt-5 flex flex-wrap gap-2">
					<a href="https://github.com/Barceloch" target="_blank" rel="noopener" class="btn btn-sm gap-2 rounded-lg border border-base-300 bg-base-100/50 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-base-content/80 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300">
						{@html githubIcon}
						GitHub
					</a>
					<a href="https://www.apklis.cu/developer/barcelo" target="_blank" rel="noopener" class="btn btn-sm gap-2 rounded-lg border border-base-300 bg-base-100/50 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-base-content/80 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300">
						<Smartphone class="h-3.5 w-3.5" />
						APKLIS
					</a>
					<a href="mailto:barceloch@gmail.com" class="btn btn-sm gap-2 rounded-lg border border-base-300 bg-base-100/50 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-base-content/80 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300">
						<Mail class="h-3.5 w-3.5" />
						Email
					</a>
					<a href="https://wa.me/5353592879?text=Hi%20Yunior%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener" class="btn btn-sm gap-2 rounded-lg border border-base-300 bg-base-100/50 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-base-content/80 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300">
						{@html whatsappIcon}
						WhatsApp
					</a>
					<a href="{base}/cv_ENG.pdf" target="_blank" rel="noopener" download class="btn btn-sm gap-2 rounded-lg border border-base-300 bg-base-100/50 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-base-content/80 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-300">
						<Download class="h-3.5 w-3.5" />
						CV
					</a>
				</div>
				<p class="mt-5 font-mono text-[0.78rem] leading-relaxed text-base-content/70">barceloch@gmail.com<br />Cuba · UTC-5</p>
				<img
					src="https://visitor-badge.laobi.icu/badge?page_id=barceloch.portafolio&left_color=gray&right_color=blue"
					alt="Contador de visitas"
					class="h-5 w-auto opacity-70 transition-opacity hover:opacity-100"
					loading="lazy"
				/>
			</div>
		</div>

		<div class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-base-300/40 pt-7 font-mono text-[0.72rem] uppercase tracking-wider text-base-content/70 sm:flex-row">
			<p>© {year} Yunior Barceló Chávez. {m.footer.rights}</p>
			<p class="flex items-center gap-1.5">{m.common.madeWithLeft} <Heart class="h-3 w-3 text-primary" /> {m.common.madeWithRight}</p>
		</div>
	</div>
</footer>