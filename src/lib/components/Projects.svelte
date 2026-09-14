<script lang="ts">
	import { messages } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { iconFor, skillColors } from '$lib/data/skillIcons';
	import { ExternalLink, Layers, Smartphone, Box, Globe } from '@lucide/svelte';

	let m = $derived($messages);

	let activeFilter = $state('All');

	const filters = $derived([
		{ label: m.projects.filterAll, value: 'All', icon: Layers },
		{ label: m.projects.filterWeb, value: 'Web', icon: Globe },
		{ label: m.projects.filterMobile, value: 'Móvil', icon: Smartphone },
		{ label: m.projects.filterOSS, value: 'Open Source', icon: Box }
	]);

	const filteredProjects = $derived(
		activeFilter === 'All'
			? (m.projects.items as unknown as Array<any>)
			: (m.projects.items as unknown as Array<any>).filter((p) => p.category === activeFilter)
	);

	const githubIcon = `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.48v-1.69c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 7.43a9.3 9.3 0 0 1 2.5.34c1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .26.18.58.69.48A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>`;
</script>

<section id="projects" class="border-t border-base-300/40 bg-base-100 py-20 lg:py-28">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div use:reveal class="flex items-center gap-4">
			<span class="font-mono text-xs uppercase tracking-[0.3em] text-primary">03 // proyectos</span>
			<span class="h-px flex-1 bg-base-300/40"></span>
			<span class="hidden font-mono text-[0.7rem] uppercase tracking-[0.2em] text-base-content/70 sm:inline">{filteredProjects.length} registros</span>
		</div>

		<div use:reveal class="mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
			<div class="max-w-2xl">
				<h2 class="text-4xl font-light tracking-[-0.03em] text-base-content sm:text-5xl">{m.projects.title}</h2>
				<p class="mt-4 text-xl text-base-content/80">{m.projects.subtitle}</p>
			</div>

			<div class="flex flex-wrap gap-2">
				{#each filters as f}
					<button
						onclick={() => (activeFilter = f.value)}
						class="cursor-pointer rounded-full border px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-all duration-300
						{activeFilter === f.value
							? 'border-primary/50 bg-primary/15 text-primary shadow-[0_0_18px_rgba(6,182,212,0.15)]'
							: 'border-base-300 bg-base-200/40 text-base-content/80 hover:border-primary/30 hover:text-base-content'}"
					>
						{f.label}
					</button>
				{/each}
			</div>
		</div>

		<div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as project, i (project.title)}
				<div
					use:reveal={{ delay: (i % 3) * 70 }}
					class="pj-card group rounded-2xl shell-border p-px transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.16)] {i === 0
						? 'md:col-span-2'
						: ''}"
				>
					<div class="flex h-full flex-col rounded-[calc(1rem-1px)] bg-base-100/60 p-7 backdrop-blur-xl">
						<div class="flex items-center justify-between gap-3">
							<span class="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-base-content/70">
								pjt/{String(i + 1).padStart(3, '0')}
							</span>
							<span
								class="rounded-full border border-base-300 bg-base-200/60 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.2em]
								{project.category === 'Web'
									? 'text-primary'
									: project.category === 'Móvil'
										? 'text-secondary'
										: 'text-base-content/75'}"
							>
								{project.category}
							</span>
						</div>

						<h3 class="mt-4 text-xl font-semibold leading-snug text-base-content transition-colors duration-300 group-hover:text-primary">
							{project.title}
						</h3>

						<p class="mt-3 text-[1rem] leading-relaxed text-base-content/80 line-clamp-3">
							{project.description}
						</p>

						<div class="mt-5 flex flex-wrap gap-2">
							{#each project.stack as tech}
								{#if iconFor(tech)}
									<span
										class="badge badge-outline gap-1.5 rounded-full border-base-300 bg-base-200/50 py-3 pl-2.5 pr-3 font-mono text-[0.68rem] uppercase tracking-wider transition-colors duration-300 hover:border-primary/40"
										style="color: {skillColors[tech] ?? 'var(--color-base-content)'}"
									>
										<span class="block h-3.5 w-3.5">{@html iconFor(tech)!}</span>
										{tech}
									</span>
								{:else}
									<span class="badge badge-outline gap-1.5 rounded-full border-base-300 bg-base-200/50 py-3 pl-2.5 pr-3 font-mono text-[0.68rem] uppercase tracking-wider text-base-content/80 transition-colors duration-300 hover:border-primary/40 hover:text-primary">
										<span class="block h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60"></span>
										{tech}
									</span>
								{/if}
							{/each}
						</div>

						{#if project.link && project.link !== '#'}
							<div class="mt-auto pt-7">
								<a
									href={project.link}
									target="_blank"
									rel="noopener"
									class="btn btn-sm gap-2 rounded-lg bg-primary/15 border border-primary/30 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary hover:bg-primary/25 hover:border-primary/50 transition-all duration-300"
								>
									<ExternalLink class="h-4 w-4" />
									{m.projects.viewLive}
								</a>
							</div>
						{:else if project.github}
							<div class="mt-auto pt-7">
								<a
									href={project.github}
									target="_blank"
									rel="noopener"
									class="btn btn-sm gap-2 rounded-lg bg-base-300/70 border border-base-300 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-base-content/90 hover:bg-primary/15 hover:border-primary/40 hover:text-primary transition-all duration-300"
								>
									{@html githubIcon}
									{m.projects.viewCode}
								</a>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>