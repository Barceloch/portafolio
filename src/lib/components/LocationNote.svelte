<script lang="ts">
	import { messages } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { MapPin, Laptop, Zap, Wifi, Globe } from '@lucide/svelte';

	let m = $derived($messages);

	const icons = [Laptop, Zap, Wifi, Globe];

	const whatsappIcon = `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;
</script>

<section id="location" class="border-t border-base-300/40 bg-base-100 py-20 lg:py-28">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div use:reveal class="flex items-center gap-4">
			<span class="font-mono text-xs uppercase tracking-[0.3em] text-primary">04 // disponibilidad</span>
			<span class="h-px flex-1 bg-base-300/40"></span>
		</div>

		<div class="location-card mt-12 rounded-2xl shell-border p-px shadow-2xl shadow-black/20">
			<div class="grid rounded-[calc(1rem-1px)] bg-base-200/50 backdrop-blur-xl lg:grid-cols-[1.15fr_0.85fr]">
				<div use:reveal class="p-7 lg:p-10">
					<span class="inline-flex items-center gap-2 rounded-full border border-base-300 bg-base-100/60 px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-base-content/80">
						<MapPin class="h-3.5 w-3.5 text-primary" />
						{m.location.badge}
					</span>
					<h2 class="mt-6 text-4xl font-light tracking-[-0.03em] text-base-content sm:text-5xl">{m.location.title}</h2>
					<p class="mt-4 whitespace-pre-line text-lg leading-[1.8] text-base-content/80">
						{m.location.description}
					</p>

					<ul class="mt-8 grid gap-3 sm:grid-cols-2">
						{#each m.location.points as point, i}
							{@const Icon = icons[i % icons.length]}
							<li use:reveal={{ delay: i * 60 }} class="flex items-start gap-3 rounded-xl border border-base-300 bg-base-100/50 px-4 py-3.5 transition-all duration-300 hover:border-primary/40 hover:bg-base-100/70">
								<span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-base-300/60 font-mono text-[0.7rem] text-success ring-1 ring-base-300">
									<Icon class="h-4 w-4" />
								</span>
								<span>
									<span class="block text-[0.95rem] font-semibold leading-snug text-base-content">{point.title}</span>
									<span class="block text-sm leading-snug text-base-content/80">{point.desc}</span>
								</span>
							</li>
						{/each}
					</ul>

					<div class="mt-9">
						<a
							href="https://wa.me/5353592879?text=Hi%20Yunior%2C%20I%27d%20like%20to%20discuss%20a%20project."
							target="_blank"
							rel="noopener"
							class="btn btn-primary gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-primary-content shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]"
						>
							{@html whatsappIcon}
							{m.location.cta}
						</a>
					</div>
				</div>

				<div use:reveal class="relative flex flex-col justify-between gap-8 overflow-hidden border-t border-base-300/40 bg-base-100/40 p-7 lg:border-l lg:border-t-0 lg:p-10">
					<div class="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/[0.12] blur-3xl"></div>

					<div class="relative">
						<div class="inline-flex items-center gap-2.5 rounded-full border border-success/30 bg-success/10 px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-success">
							<span class="h-2 w-2 rounded-full bg-success animate-pulse"></span>
							{m.location.highlight.chip}
						</div>
						<h3 class="mt-6 text-2xl font-semibold leading-tight text-base-content">{m.location.highlight.title}</h3>
						<p class="mt-3 text-base leading-relaxed text-base-content/80">
							{m.location.highlight.desc}
						</p>
					</div>

					<div class="relative grid grid-cols-3 gap-3 text-center">
						<div class="rounded-xl border border-base-300 bg-base-200/50 px-3 py-4 transition-all duration-300 hover:border-primary/40">
							<div class="font-mono text-lg font-bold text-primary">UTC-5</div>
							<div class="mt-1 text-xs text-base-content/75">{m.location.highlight.timezone}</div>
						</div>
						<div class="rounded-xl border border-base-300 bg-base-200/50 px-3 py-4 transition-all duration-300 hover:border-primary/40">
							<div class="font-mono text-lg font-bold text-primary">100%</div>
							<div class="mt-1 text-xs text-base-content/75">{m.location.highlight.remote}</div>
						</div>
						<div class="rounded-xl border border-base-300 bg-base-200/50 px-3 py-4 transition-all duration-300 hover:border-primary/40">
							<div class="font-mono text-lg font-bold text-primary">∞</div>
							<div class="mt-1 text-xs text-base-content/75">{m.location.highlight.available}</div>
						</div>
					</div>

					<p class="relative font-mono text-[0.72rem] uppercase tracking-[0.2em] text-base-content/70">
						{m.location.highlight.footnote}
					</p>
				</div>
			</div>
		</div>
	</div>
</section>