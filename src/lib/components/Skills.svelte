<script lang="ts">
	import { messages } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { Code2, Layers, Database, Server, Brain, Check } from '@lucide/svelte';

	let m = $derived($messages);

	const categories = $derived([
		{
			key: 'languages',
			icon: Code2,
			title: m.skills.categories.languages,
			items: m.skills.languages as unknown as string[],
			color: 'bg-primary text-primary-content',
			glow: 'shadow-primary/20'
		},
		{
			key: 'frameworks',
			icon: Layers,
			title: m.skills.categories.frameworks,
			items: m.skills.frameworks as unknown as string[],
			color: 'bg-accent text-accent-content',
			glow: 'shadow-accent/20'
		},
		{
			key: 'data',
			icon: Database,
			title: m.skills.categories.data,
			items: m.skills.data as unknown as string[],
			color: 'bg-neutral text-neutral-content',
			glow: 'shadow-neutral/20'
		},
		{
			key: 'devops',
			icon: Server,
			title: m.skills.categories.devops,
			items: m.skills.devops as unknown as string[],
			color: 'bg-base-300 text-base-content',
			glow: ''
		},
		{
			key: 'advanced',
			icon: Brain,
			title: m.skills.categories.advanced,
			items: m.skills.advanced as unknown as string[],
			color: 'bg-gradient-to-br from-primary to-accent text-white',
			glow: 'shadow-primary/20'
		}
	]);
</script>

<section id="skills" class="bg-base-200/30 py-20 lg:py-28">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div use:reveal class="mx-auto mb-14 max-w-2xl text-center">
			<h2 class="text-4xl font-black tracking-tight sm:text-5xl">{m.skills.title}</h2>
			<p class="mt-4 text-xl text-base-content/55">{m.skills.subtitle}</p>
			<div class="mx-auto mt-4 h-1.5 w-16 rounded-full bg-primary"></div>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each categories as cat, i}
				<div use:reveal={{ delay: i * 80 }} class="card bg-base-100 border border-base-300/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400">
					<div class="card-body p-7">
						<div class="flex items-center gap-3.5">
							<div class="flex h-12 w-12 items-center justify-center rounded-2xl {cat.color} shadow-md {cat.glow}">
								<cat.icon class="h-6 w-6" />
							</div>
							<h3 class="font-bold text-lg">{cat.title}</h3>
						</div>

						<div class="mt-5 flex flex-wrap gap-2">
							{#each cat.items as item}
								<span class="badge badge-outline border-base-300 bg-base-100 font-medium text-sm py-3.5 gap-2">
									<Check class="h-3.5 w-3.5 text-success hidden sm:inline" />
									{item}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div use:reveal={{ delay: 400 }} class="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-5 flex items-start gap-4">
			<div class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-content shadow-sm shadow-primary/20">
				<Brain class="h-4.5 w-4.5" />
			</div>
			<p class="text-base leading-relaxed text-base-content/70">
				<span class="font-bold text-primary">Metodología AI-First:</span>
				{#if m.skills.advanced[m.skills.advanced.length - 1].includes('AI-First')}
					{m.skills.advanced[m.skills.advanced.length - 1]}
				{:else}
					AI-First — revisión exhaustiva de código generado por agentes antes de producción.
				{/if}
			</p>
		</div>
	</div>
</section>
