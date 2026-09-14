<script lang="ts">
	import { onMount } from 'svelte';
	import { messages } from '$lib/i18n';
	import { gsap, prefersReducedMotion } from '$lib/utils/anim';
	import { reveal } from '$lib/actions/reveal';
	import { GraduationCap, Terminal, Award, Code2 } from '@lucide/svelte';

	let m = $derived($messages);

	const stats = $derived([
		{ value: m.about.stats.experienceValue, label: m.about.stats.experience },
		{ value: m.about.stats.projectsValue, label: m.about.stats.projects },
		{ value: m.about.stats.techValue, label: m.about.stats.tech }
	]);

	const cards = $derived([
		{ icon: Terminal, title: m.about.cards.freeSoftware.title, desc: m.about.cards.freeSoftware.desc },
		{ icon: Award, title: m.about.cards.focus.title, desc: m.about.cards.focus.desc },
		{ icon: GraduationCap, title: m.about.cards.education.title, desc: m.about.cards.education.desc }
	]);

	let root: HTMLElement | undefined = $state();

	onMount(() => {
		const node = root;
		if (!node) return;
		const reduce = prefersReducedMotion();
		const els = Array.from(node.querySelectorAll<HTMLElement>('.stat-value'));
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (!e.isIntersecting) continue;
					const el = e.target as HTMLElement;
					const target = Number(el.dataset.value ?? '0');
					const suffix = el.dataset.suffix ?? '';
					if (reduce) {
						el.textContent = target + suffix;
					} else {
						const obj = { v: 0 };
						gsap.to(obj, {
							v: target,
							duration: 1.4,
							ease: 'power2.out',
							onUpdate: () => {
								el.textContent = Math.round(obj.v) + suffix;
							}
						});
					}
					io.unobserve(el);
				}
			},
			{ threshold: 0.4 }
		);
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	});

	function numParts(value: string) {
		const num = value.replace(/[^\d]/g, '');
		const suffix = value.replace(/\d+/g, '');
		return { num, suffix };
	}
</script>

<section id="about" bind:this={root} class="bg-base-100 py-20 lg:py-28">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div use:reveal class="flex items-center gap-4">
			<span class="font-mono text-xs uppercase tracking-[0.3em] text-primary">01 // terminal</span>
			<span class="h-px flex-1 bg-base-300/40"></span>
		</div>

		<div class="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
			<div use:reveal>
				<span class="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-200/50 px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-base-content/80">
					<Code2 class="h-3.5 w-3.5 text-primary" />
					{m.about.subtitle}
				</span>
				<h2 class="mt-6 text-4xl font-light tracking-[-0.03em] text-base-content sm:text-5xl">{m.about.title}</h2>

				<ul class="mt-8 space-y-2.5 font-mono text-[0.8rem] leading-relaxed text-base-content/75">
					<li>foco&nbsp;<span class="text-base-content/40">:</span>&nbsp;<span class="text-base-content/80">soluciones web escalables</span></li>
					<li>vía&nbsp;<span class="text-base-content/40">:</span>&nbsp;<span class="text-base-content/80">{m.about.title} · Software Libre</span></li>
					<li>formación&nbsp;<span class="text-base-content/40">:</span>&nbsp;<span class="text-base-content/80">derecho + computación</span></li>
				</ul>

				<div class="mt-10 grid grid-cols-3 gap-4">
					{#each stats as stat}
						{@const p = numParts(stat.value)}
						<div class="rounded-xl border border-base-300 bg-base-200/40 px-3 py-5 text-center transition-all duration-300 hover:border-primary/40 hover:bg-base-200/60">
							<div class="font-mono text-2xl font-bold text-primary">
								<span class="stat-value" data-value={p.num} data-suffix={p.suffix}>{stat.value}</span>
							</div>
							<div class="mt-1.5 text-[0.7rem] font-medium uppercase tracking-wider text-base-content/75">
								{stat.label}
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div use:reveal={{ direction: 'none' }}>
				<div class="space-y-5">
					<p class="text-xl leading-[1.85] text-base-content/80">{m.about.p1}</p>
					<p class="text-xl leading-[1.85] text-base-content/80">{m.about.p2}</p>
					<p class="text-xl leading-[1.85] text-base-content/80">{m.about.p3}</p>
					<p class="text-xl leading-[1.85] text-base-content/80">{m.about.p4}</p>
				</div>
			</div>
		</div>

		<div class="about-cards mt-12 grid gap-5 md:grid-cols-3">
			{#each cards as card, i}
				<div
					use:reveal={{ delay: i * 90 }}
					class="about-card rounded-2xl shell-border p-px transition-shadow duration-300 hover:shadow-[0_0_26px_rgba(6,182,212,0.12)]"
				>
					<div class="flex h-full flex-col gap-4 rounded-[calc(1rem-1px)] bg-base-200/50 p-6 backdrop-blur-xl">
						<div class="flex items-center gap-3">
							<div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-base-300/60 font-mono text-xs font-bold text-primary ring-1 ring-base-300">
								<span class="text-[0.62rem] uppercase tracking-widest">0{i + 1}</span>
							</div>
							<card.icon class="h-5 w-5 text-primary/80" />
						</div>
						<div class="min-w-0">
							<h3 class="font-semibold text-base-content">{card.title}</h3>
							<p class="mt-1.5 text-base leading-relaxed text-base-content/80">{card.desc}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>