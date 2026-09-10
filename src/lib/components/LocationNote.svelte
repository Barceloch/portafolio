<script lang="ts">
	import { messages } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { MapPin, Laptop, Zap, Wifi, Globe } from '@lucide/svelte';

	let m = $derived($messages);

	const icons = [Laptop, Zap, Wifi, Globe];

	const whatsappIcon = `<svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;
</script>

<section id="location" class="bg-base-200/30 py-20">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div use:reveal class="card bg-base-100 border border-primary/15 shadow-2xl overflow-hidden">
			<div class="grid lg:grid-cols-[1.1fr_0.9fr]">
				<div class="card-body p-7 lg:p-10">
					<div class="badge badge-accent badge-outline gap-2 text-sm">
						<MapPin class="h-4 w-4" />
						{m.location.badge}
					</div>
					<h2 class="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{m.location.title}</h2>
<p class="mt-4 text-lg leading-[1.8] text-base-content/65 whitespace-pre-line">
					{m.location.description}
				</p>

				<ul class="mt-7 grid gap-3.5 sm:grid-cols-2">
					{#each m.location.points as point, i}
						{@const Icon = icons[i % icons.length]}
						<li class="flex items-start gap-3 rounded-xl border border-base-300 bg-base-200/30 px-4 py-3.5 transition-all duration-300 hover:bg-base-200/60 hover:border-success/20">
							<span class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-success/10 text-success">
								<Icon class="h-4 w-4" />
							</span>
							<span>
								<span class="block text-[0.95rem] font-semibold leading-snug">{point.title}</span>
								<span class="block text-sm leading-snug text-base-content/55">{point.desc}</span>
							</span>
						</li>
					{/each}
				</ul>

					<div class="mt-7">
						<a
							href="https://wa.me/5353592879?text=Hi%20Yunior%2C%20I%27d%20like%20to%20discuss%20a%20project."
							target="_blank"
							rel="noopener"
							class="btn btn-primary btn-lg gap-2.5 text-white shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02]"
						>
							{@html whatsappIcon}
							{m.location.cta}
						</a>
					</div>
				</div>

				<div class="relative bg-gradient-to-br from-primary via-primary/90 to-accent p-7 text-primary-content lg:p-10 flex flex-col justify-between overflow-hidden">
					<div class="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/[0.08] blur-3xl"></div>
					<div class="absolute -left-12 -bottom-12 h-48 w-48 rounded-full bg-white/[0.08] blur-3xl"></div>

					<div class="relative">
						<div class="inline-flex items-center gap-2.5 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-md">
							<span class="h-2.5 w-2.5 rounded-full bg-emerald-300 animate-pulse"></span>
							{m.location.highlight.chip}
						</div>
						<h3 class="mt-5 text-3xl font-black leading-tight">{m.location.highlight.title}</h3>
						<p class="mt-4 text-base leading-relaxed opacity-90">
							{m.location.highlight.desc}
						</p>
					</div>

					<div class="relative mt-8 grid grid-cols-3 gap-3 text-center">
						<div class="rounded-2xl bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.15]">
							<div class="text-xl font-black">UTC-5</div>
							<div class="mt-1 text-sm opacity-75">{m.location.highlight.timezone}</div>
						</div>
						<div class="rounded-2xl bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.15]">
							<div class="text-xl font-black">100%</div>
							<div class="mt-1 text-sm opacity-75">{m.location.highlight.remote}</div>
						</div>
						<div class="rounded-2xl bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.15]">
							<div class="text-xl font-black">∞</div>
							<div class="mt-1 text-sm opacity-75">{m.location.highlight.available}</div>
						</div>
					</div>

					<p class="relative mt-7 text-sm opacity-60">{m.location.highlight.footnote}</p>
				</div>
			</div>
		</div>
	</div>
</section>
