<script lang="ts">
	import { messages } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
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

<section id="projects" class="bg-base-100 py-20 lg:py-28">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div use:reveal class="mx-auto mb-10 max-w-2xl text-center">
			<h2 class="text-4xl font-black tracking-tight sm:text-5xl">{m.projects.title}</h2>
			<p class="mt-4 text-xl text-base-content/55">{m.projects.subtitle}</p>
			<div class="mx-auto mt-4 h-1.5 w-16 rounded-full bg-accent"></div>
		</div>

		<div use:reveal={{ delay: 100 }} class="mb-10 flex flex-wrap justify-center gap-2.5">
			{#each filters as f}
				<button
					onclick={() => (activeFilter = f.value)}
					class="btn gap-2.5 rounded-full font-semibold transition-all duration-300
					{activeFilter === f.value
						? 'btn-primary btn-md text-white shadow-lg shadow-primary/20'
						: 'btn-ghost border border-base-300 bg-base-100 hover:border-primary/30 hover:bg-primary/5'}"
				>
					<f.icon class="h-4 w-4" />
					{f.label}
				</button>
			{/each}
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as project, i}
				<div use:reveal={{ delay: i * 60 }} class="card bg-base-100 border border-base-300/50 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-400 group overflow-hidden">
					<div class="card-body p-7">
						<div class="flex items-start justify-between gap-3">
							<h3 class="card-title text-[1.05rem] leading-snug group-hover:text-primary transition-colors duration-300">{project.title}</h3>
							<span
								class="badge badge-sm font-bold shrink-0
								{project.category === 'Web'
									? 'badge-primary'
									: project.category === 'Móvil'
										? 'badge-accent'
										: 'badge-neutral'}"
							>
								{project.category}
							</span>
						</div>

						<p class="mt-2 text-[0.95rem] leading-relaxed text-base-content/65 line-clamp-3">
							{project.description}
						</p>

						<div class="mt-4 flex flex-wrap gap-2">
							{#each project.stack as tech}
								<span class="badge badge-outline badge-sm border-base-300 bg-base-200/50 py-3.5 font-semibold">{tech}</span>
							{/each}
						</div>

						{#if project.link && project.link !== '#'}
							<div class="card-actions mt-5">
								<a href={project.link} target="_blank" rel="noopener" class="btn btn-primary btn-sm gap-2 text-white flex-1 shadow-md shadow-primary/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
									<ExternalLink class="h-4 w-4" />
									{m.projects.viewLive}
								</a>
							</div>
						{:else if project.github}
							<div class="card-actions mt-5">
								<a href={project.github} target="_blank" rel="noopener" class="btn btn-primary btn-sm gap-2 text-white flex-1 shadow-md shadow-primary/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
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
