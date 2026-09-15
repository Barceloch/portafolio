<script lang="ts">
	import { onMount } from 'svelte';
	import { messages } from '$lib/i18n';
	import { gsap, prefersReducedMotion, ScrollTrigger } from '$lib/utils/anim';
	import { iconFor, skillColors } from '$lib/data/skillIcons';

	let m = $derived($messages);

	const items = $derived([
		...(m.skills.languages as unknown as string[]),
		...(m.skills.frameworks as unknown as string[]),
		...(m.skills.data as unknown as string[]),
		...(m.skills.devops as unknown as string[]),
		...(m.skills.advanced as unknown as string[]),
		...(m.skills.design as unknown as string[])
	]);

	let track: HTMLDivElement | undefined = $state();

	onMount(() => {
		const el = track;
		if (!el || prefersReducedMotion()) return;
		const ctx = gsap.context(() => {
			const tween = gsap.to(el, { xPercent: -50, duration: 42, ease: 'none', repeat: -1 });
			ScrollTrigger.create({
				trigger: el,
				start: 'top bottom',
				end: 'bottom top',
				onToggle: (self) => {
					if (self.isActive) tween.play();
					else tween.pause();
				}
			});
		}, el);
		return () => ctx.revert();
	});
</script>

<div class="relative overflow-hidden border-y border-base-300/40 bg-base-200/40 py-3">
	<div class="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-base-100 to-transparent z-10"></div>
	<div class="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base-100 to-transparent"></div>

	<div bind:this={track} class="flex w-max whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.3em] text-base-content/80">
		{#each items as item}
			<span class="flex items-center gap-10 pr-10">
				<span class="flex items-center gap-2.5 transition-colors hover:text-primary">
					{#if iconFor(item)}
						<span
							class="block h-4 w-4"
							style="color: {skillColors[item]}"
						>{@html iconFor(item)!}</span>
					{/if}
					{item}
				</span>
				<span class="text-primary/60">//</span>
			</span>
		{/each}
		{#each items as item}
			<span class="flex items-center gap-10 pr-10" aria-hidden="true">
				<span class="flex items-center gap-2.5">
					{#if iconFor(item)}
						<span
							class="block h-4 w-4"
							style="color: {skillColors[item]}"
						>{@html iconFor(item)!}</span>
					{/if}
					{item}
				</span>
				<span class="text-primary/60">//</span>
			</span>
		{/each}
	</div>
</div>