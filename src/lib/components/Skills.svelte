<script lang="ts">
	import { messages } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { iconFor, skillColors } from '$lib/data/skillIcons';
	import { Code2, Layers, Database, Server, Brain, Palette } from '@lucide/svelte';

	let m = $derived($messages);

	const categories = $derived([
		{
			key: 'languages',
			tag: 'LANG',
			icon: Code2,
			title: m.skills.categories.languages,
			items: m.skills.languages as unknown as string[]
		},
		{
			key: 'frameworks',
			tag: 'WEB',
			icon: Layers,
			title: m.skills.categories.frameworks,
			items: m.skills.frameworks as unknown as string[]
		},
		{
			key: 'data',
			tag: 'DATA',
			icon: Database,
			title: m.skills.categories.data,
			items: m.skills.data as unknown as string[]
		},
		{
			key: 'devops',
			tag: 'OPS',
			icon: Server,
			title: m.skills.categories.devops,
			items: m.skills.devops as unknown as string[]
		},
		{
			key: 'advanced',
			tag: 'AI',
			icon: Brain,
			title: m.skills.categories.advanced,
			items: m.skills.advanced as unknown as string[]
		},
		{
			key: 'design',
			tag: 'UX',
			icon: Palette,
			title: m.skills.categories.design,
			items: m.skills.design as unknown as string[]
		}
	]);
</script>

<section id="skills" class="border-t border-base-300/40 bg-base-100 py-20 lg:py-28">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div use:reveal class="flex items-center gap-4">
			<span class="font-mono text-xs uppercase tracking-[0.3em] text-primary">02 // habilidades</span>
			<span class="h-px flex-1 bg-base-300/40"></span>
			<span class="hidden font-mono text-[0.7rem] uppercase tracking-[0.2em] text-base-content/70 sm:inline">stack: {categories.length} módulos</span>
		</div>

		<div use:reveal class="mt-12 max-w-2xl">
			<h2 class="text-4xl font-light tracking-[-0.03em] text-base-content sm:text-5xl">{m.skills.title}</h2>
			<p class="mt-4 text-xl text-base-content/80">{m.skills.subtitle}</p>
		</div>

		<div class="skills-grid mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each categories as cat, i}
				<div
					use:reveal={{ delay: (i % 3) * 80 }}
					class="skill-card group rounded-2xl shell-border p-px transition-all duration-300 hover:shadow-[0_0_26px_rgba(6,182,212,0.14)]"
				>
					<div class="flex h-full flex-col rounded-[calc(1rem-1px)] bg-base-100/60 p-7 backdrop-blur-xl">
						<div class="flex items-center gap-3.5">
							<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-base-200 ring-1 ring-base-300 transition-colors duration-300 group-hover:ring-primary/40">
								<cat.icon class="h-5 w-5 text-base-content/80 transition-colors duration-300 group-hover:text-primary" />
							</div>
							<div>
								<div class="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-base-content/70">[{cat.tag}]</div>
								<h3 class="font-semibold text-base-content transition-colors duration-300 group-hover:text-primary">{cat.title}</h3>
							</div>
						</div>

						<div class="mt-6 flex flex-wrap gap-2">
							{#each cat.items as item}
								{#if iconFor(item)}
									<span
										class="badge badge-outline gap-2.5 rounded-full border-base-300 bg-base-200/40 py-3.5 pl-3 pr-3.5 font-mono text-[0.75rem] font-medium uppercase tracking-wider transition-colors duration-300 hover:border-primary/40"
										style="color: {skillColors[item]}"
									>
										<span class="block h-3.5 w-3.5">{@html iconFor(item)!}</span>
										{item}
									</span>
								{:else}
									<span class="badge badge-outline gap-2 rounded-full border-base-300 bg-base-200/40 py-3.5 pl-3 font-mono text-[0.75rem] font-medium uppercase tracking-wider text-base-content/80 transition-colors duration-300 hover:border-primary/40 hover:text-primary">
										<span class="block h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60"></span>
										{item}
									</span>
								{/if}
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div use:reveal class="mt-12 rounded-2xl border border-primary/15 bg-base-200/40 p-5">
			<div class="flex items-start gap-4">
				<div class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-base-300/80 font-mono text-[0.62rem] font-bold text-primary ring-1 ring-base-300">
					&amp;&amp;
				</div>
				<p class="text-base leading-relaxed text-base-content/80">
					<span class="font-mono text-[0.72rem] uppercase tracking-[0.25em] text-primary">metodología:</span>
					{#if m.skills.advanced[m.skills.advanced.length - 1].includes('AI-First')}
						<span class="ml-2">{m.skills.advanced[m.skills.advanced.length - 1]}</span>
					{:else}
						<span class="ml-2">AI-First — revisión exhaustiva de código generado por agentes antes de producción.</span>
					{/if}
				</p>
			</div>
		</div>
	</div>
</section>