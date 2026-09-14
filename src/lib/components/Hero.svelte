<script lang="ts">
	import { onMount } from 'svelte';
	import { messages } from '$lib/i18n';
	import { base } from '$app/paths';
	import { gsap, prefersReducedMotion, ScrollTrigger } from '$lib/utils/anim';
	import DotField from './DotField.svelte';
	import { ArrowRight, ChevronDown, Download } from '@lucide/svelte';

	let m = $derived($messages);

	const whatsappIcon = `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;

	let hero: HTMLElement | undefined = $state();

	onMount(() => {
		if (!hero || prefersReducedMotion()) return;

		const ctx = gsap.context(() => {
			gsap.from('[data-hero-intro]', {
				y: 34,
				opacity: 0,
				duration: 0.85,
				ease: 'power3.out',
				stagger: 0.09,
				delay: 0.15
			});

			gsap.to('#hero-dotfield', {
				yPercent: 18,
				ease: 'none',
				scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
			});

			gsap.to('#hero-panel', {
				y: -36,
				ease: 'none',
				scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true }
			});
		}, hero);

		document.fonts?.ready.then(() => ScrollTrigger.refresh());

		return () => ctx.revert();
	});
</script>

<section
	bind:this={hero}
	id="top"
	class="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-base-100"
>
	<div id="hero-dotfield" class="absolute inset-0">
		<DotField />
	</div>
	<div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_75%_-10%,rgba(6,182,212,0.10),transparent_60%),radial-gradient(ellipse_45%_40%_at_10%_110%,rgba(34,211,238,0.07),transparent_60%)]"></div>

	<div class="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
		<div class="space-y-8">
			<div data-hero-intro>
				<span class="inline-flex items-center gap-2.5 rounded-full border border-base-300 bg-base-200/50 px-4 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-base-content/80">
					<span class="relative flex h-2 w-2">
						<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60"></span>
						<span class="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
					</span>
					{m.hero.badge}
				</span>
			</div>

			<div data-hero-intro class="space-y-5">
				<p class="font-mono text-sm uppercase tracking-[0.3em] text-primary/90">{m.hero.name}</p>
				<h1 class="text-[clamp(2.6rem,7vw,4.9rem)] font-light leading-[1.02] tracking-[-0.035em] text-base-content">
					{m.hero.title}
					<span class="ml-1 inline-block h-[0.85em] w-[0.12em] translate-y-[0.08em] bg-primary animate-blink"></span>
				</h1>
				<p class="max-w-xl text-xl leading-relaxed text-base-content/80">
					{m.hero.description}
				</p>
			</div>

			<div data-hero-intro class="flex flex-wrap gap-3.5">
				<a
					href="https://wa.me/5353592879?text=Hi%20Yunior%2C%20I%27d%20like%20to%20discuss%20a%20project."
					target="_blank"
					rel="noopener"
					class="btn btn-primary gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-primary-content shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]"
				>
					{@html whatsappIcon}
					{m.location.cta}
				</a>
				<a href="#projects" class="btn btn-outline gap-2.5 font-mono text-xs uppercase tracking-[0.18em] border-base-content/15 text-base-content hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300">
					{m.hero.ctaProjects}
					<ArrowRight class="h-4 w-4" />
				</a>
				<a href="{base}/cv_ENG.pdf" target="_blank" rel="noopener" download class="btn btn-ghost gap-2.5 font-mono text-xs uppercase tracking-[0.18em] border border-base-300 text-base-content/80 hover:bg-base-200 hover:text-base-content transition-all duration-300">
					<Download class="h-4 w-4" />
					{m.common.downloadCv}
				</a>
			</div>

			<div data-hero-intro class="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 font-mono text-[0.78rem] uppercase tracking-[0.2em] text-base-content/70">
				<span>cuba :: utc−5</span>
				<span class="h-3 w-px bg-base-300"></span>
				<span>go · python · typescript</span>
				<span class="h-3 w-px bg-base-300"></span>
				<span>git · docker · aws</span>
			</div>
		</div>

		<div
			id="hero-panel"
			data-hero-intro
			class="relative mx-auto w-full max-w-md lg:ml-auto"
		>
			<div class="rounded-2xl shell-border p-px shadow-2xl shadow-black/30">
				<div class="overflow-hidden rounded-[calc(1rem-1px)] bg-base-200/70 backdrop-blur-xl">
					<div class="flex items-center gap-1.5 border-b border-base-300/40 bg-base-100/60 px-4 py-2.5">
						<span class="h-2.5 w-2.5 rounded-full bg-error/70"></span>
						<span class="h-2.5 w-2.5 rounded-full bg-warning/70"></span>
						<span class="h-2.5 w-2.5 rounded-full bg-success/70"></span>
						<span class="ml-2 font-mono text-[0.72rem] tracking-widest text-base-content/70">node — barceloch@dev</span>
						<span class="ml-auto font-mono text-[0.62rem] uppercase tracking-[0.2em] text-success">● online</span>
					</div>

					<div class="flex gap-4 p-4">
						<div class="w-40 shrink-0">
							<div class="overflow-hidden rounded-lg">
								<img
									src="{base}/photo.jpeg"
									alt="Yunior Barceló"
									class="aspect-[4/5] w-full object-cover object-top"
									loading="eager"
								/>
							</div>
						</div>
						<div class="min-w-0 flex-1 font-mono text-[0.82rem] leading-[1.8]">
							<p class="text-base-content/75">nombre&nbsp;<span class="text-base-content/40">:&nbsp;</span><span class="text-base-content/85">Yunior Barceló</span></p>
							<p class="text-base-content/75">rol&nbsp;<span class="text-base-content/40">:&nbsp;</span><span class="text-primary">{m.hero.title}</span></p>
							<p class="text-base-content/75">base&nbsp;<span class="text-base-content/40">:&nbsp;</span><span class="text-base-content/85">Cuba</span></p>
							<p class="text-base-content/75">zona&nbsp;<span class="text-base-content/40">:&nbsp;</span><span class="text-base-content/85">UTC−5</span></p>
							<p class="text-base-content/75">xp&nbsp;<span class="text-base-content/40">:&nbsp;</span><span class="text-base-content/85">17+ años</span></p>
							<p class="mt-1.5 flex items-center gap-1.5 text-base-content/75">
								status&nbsp;:&nbsp;<span class="text-success">disponible</span>
							</p>
							<p class="text-base-content/75">modo&nbsp;<span class="text-base-content/40">:&nbsp;</span><span class="text-base-content/85">remoto / híbrido</span></p>
						</div>
					</div>

					<div class="border-t border-base-300/40 bg-base-100/40 px-4 py-2.5 font-mono text-[0.72rem] text-base-content/75">
						<span class="text-success">$</span> &nbsp;git commit -m <span class="text-primary">"open_to_work"</span>
						<span class="ml-1 inline-block h-3.5 w-[7px] translate-y-[3px] bg-primary animate-blink"></span>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="relative flex justify-center pb-7">
		<a href="#about" class="flex flex-col items-center gap-1 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-base-content/70 transition-colors hover:text-primary">
			{m.hero.scroll}
			<ChevronDown class="h-4 w-4 animate-bounce" />
		</a>
	</div>
</section>