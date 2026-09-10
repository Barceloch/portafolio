<script lang="ts">
    import { base } from '$app/paths';
	import { messages } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { ArrowRight, Mail, ChevronDown, Code2, Sparkles, Download } from '@lucide/svelte';

	let m = $derived($messages);
</script>

<section class="relative overflow-hidden bg-gradient-to-b from-base-100 via-base-100 to-base-200/40">
	<div class="pointer-events-none absolute inset-0">
		<div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:56px_56px]"></div>
		<div class="absolute -top-40 right-0 h-[560px] w-[560px] rounded-full bg-primary/[0.07] blur-[100px]"></div>
		<div class="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/[0.07] blur-[100px]"></div>
	</div>

	<div class="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
		<div class="space-y-8">
			<div use:reveal={{ delay: 0, y: 20 }}>
				<div class="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
					<span class="flex h-2.5 w-2.5 animate-pulse rounded-full bg-accent"></span>
					<Sparkles class="h-4 w-4" />
					{m.hero.badge}
				</div>
			</div>

			<div use:reveal={{ delay: 100, y: 24 }} class="space-y-4">
				<h1 class="text-[2.5rem] font-black tracking-tight leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
					<span class="block text-base-content">{m.hero.name}</span>
					<span class="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent"
						>{m.hero.title}</span
					>
				</h1>
				<p class="max-w-xl text-xl leading-relaxed text-base-content/65">
					{m.hero.description}
				</p>
			</div>

			<div use:reveal={{ delay: 200, y: 20 }} class="flex flex-wrap gap-4">
				<a href="#projects" class="btn btn-primary btn-lg gap-2.5 text-white shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02]">
					{m.hero.ctaProjects}
					<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
				</a>
				<a href="#contact" class="btn btn-outline btn-lg gap-2.5 bg-base-100 transition-all duration-300 hover:scale-[1.02]">
					<Mail class="h-5 w-5" />
					{m.hero.ctaContact}
				</a>
				<a href="/cv_ENG.pdf" target="_blank" rel="noopener" download class="btn btn-ghost btn-lg gap-2.5 border border-base-300 bg-base-100 transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:bg-primary/5">
					<Download class="h-5 w-5" />
					{m.common.downloadCv}
				</a>
			</div>

			<div use:reveal={{ delay: 300, y: 16 }} class="flex items-center gap-6 pt-2 text-base text-base-content/55">
				<span class="flex items-center gap-2.5"><Code2 class="h-5 w-5 text-primary" /> Go · Python · TypeScript</span>
				<span class="hidden h-5 w-px bg-base-300 sm:block"></span>
				<span class="hidden sm:flex items-center gap-2.5">Git · Docker · AWS</span>
			</div>
		</div>

		<div use:reveal={{ delay: 200, y: 30, duration: 800 }} class="relative mx-auto w-full max-w-md lg:ml-auto">
			<div class="relative overflow-hidden rounded-[2rem] border border-base-300/60 bg-base-100 p-3 shadow-2xl shadow-primary/10 transition-shadow duration-500 hover:shadow-3xl hover:shadow-primary/15">
				<div class="overflow-hidden rounded-[1.4rem] bg-gradient-to-br from-primary/10 via-base-200 to-accent/10">
					<img
						src="{base}/photo.jpeg"
						alt="Yunior Barceló"
						class="aspect-[4/4.6] w-full object-cover object-top transition-transform duration-700 hover:scale-105"
						loading="eager"
					/>
				</div>

				<div class="absolute -left-3 top-10 hidden rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-xl animate-float sm:flex sm:flex-col" style="animation-delay: 0s">
					<span class="text-xs font-medium text-base-content/50">Experiencia</span>
					<span class="text-lg font-black text-primary">17+ años</span>
				</div>
				<div class="absolute -right-2 bottom-14 hidden rounded-2xl border border-base-300 bg-base-100 px-4 py-3 shadow-xl animate-float sm:block" style="animation-delay: 1.5s">
					<span class="text-xs font-medium text-base-content/50">Stack</span>
					<span class="text-sm font-bold">C++ · Go · Python · JS</span>
				</div>
			</div>

			<div class="mt-5 hidden rounded-2xl border border-base-300/60 bg-base-100 p-5 font-mono text-[0.8rem] leading-relaxed shadow-sm lg:block">
				<div class="flex items-center gap-1.5 pb-3">
					<span class="h-3 w-3 rounded-full bg-error/80"></span>
					<span class="h-3 w-3 rounded-full bg-warning/80"></span>
					<span class="h-3 w-3 rounded-full bg-success/80"></span>
					<span class="ml-2 text-base-content/35 font-sans text-xs">server.py — Starlette + Pydantic</span>
				</div>
				<pre class="text-base-content/75"><span class="text-primary font-semibold">@app.route</span>(<span class="text-accent">"/api/projects"</span>)
<span class="text-primary font-semibold">async def</span> get_projects():
    data = await db.projects.find()
    <span class="text-primary font-semibold">return</span> ProjectSchema(data)
<span class="text-accent font-semibold">→ JAMSTACK · scalable</span></pre>
			</div>
		</div>
	</div>

	<div class="relative flex justify-center pb-8">
		<a href="#about" class="flex flex-col items-center gap-1.5 text-sm text-base-content/40 transition-colors hover:text-primary">
			<span>{m.hero.scroll}</span>
			<ChevronDown class="h-5 w-5 animate-bounce" />
		</a>
	</div>
</section>
