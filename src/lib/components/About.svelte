<script lang="ts">
	import { messages } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { GraduationCap, Terminal, Heart, Award } from '@lucide/svelte';

	let m = $derived($messages);
</script>

<section id="about" class="bg-base-100 py-20 lg:py-28">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div use:reveal class="mx-auto mb-14 max-w-2xl text-center">
			<div class="badge badge-outline badge-primary badge-lg mb-5 gap-2 text-sm">
				<Heart class="h-4 w-4" />
				{m.about.subtitle}
			</div>
			<h2 class="text-4xl font-black tracking-tight sm:text-5xl">{m.about.title}</h2>
			<div class="mx-auto mt-4 h-1.5 w-16 rounded-full bg-accent"></div>
		</div>

		<div class="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
			<div use:reveal={{ delay: 100 }} class="space-y-6">
				<p class="text-lg leading-[1.85] text-base-content/75">{m.about.p1}</p>
				<p class="text-lg leading-[1.85] text-base-content/75">{m.about.p2}</p>
				<p class="text-lg leading-[1.85] text-base-content/75">{m.about.p3}</p>

				<div class="grid grid-cols-3 gap-4 pt-6">
					<div class="rounded-2xl border border-base-300 bg-base-200/40 p-5 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/30">
						<div class="text-3xl font-black text-primary">{m.about.stats.experienceValue}</div>
						<div class="mt-1 text-sm font-medium text-base-content/55">{m.about.stats.experience}</div>
					</div>
					<div class="rounded-2xl border border-base-300 bg-base-200/40 p-5 text-center transition-all duration-300 hover:shadow-lg hover:border-accent/30">
						<div class="text-3xl font-black text-accent">{m.about.stats.projectsValue}</div>
						<div class="mt-1 text-sm font-medium text-base-content/55">{m.about.stats.projects}</div>
					</div>
					<div class="rounded-2xl border border-base-300 bg-base-200/40 p-5 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/30">
						<div class="text-3xl font-black text-primary">{m.about.stats.techValue}</div>
						<div class="mt-1 text-sm font-medium text-base-content/55">{m.about.stats.tech}</div>
					</div>
				</div>
			</div>

			<div use:reveal={{ delay: 200 }} class="space-y-4">
				<div class="card bg-base-200/40 border border-base-300 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20">
					<div class="card-body gap-3 p-6">
						<div class="flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-content shadow-sm shadow-primary/20">
								<Terminal class="h-5 w-5" />
							</div>
							<h3 class="font-bold text-lg">{m.about.cards.freeSoftware.title}</h3>
						</div>
						<p class="text-base leading-relaxed text-base-content/65">
							{m.about.cards.freeSoftware.desc}
						</p>
					</div>
				</div>

				<div class="card bg-base-200/40 border border-base-300 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/20">
					<div class="card-body gap-3 p-6">
						<div class="flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-content shadow-sm shadow-accent/20">
								<Award class="h-5 w-5" />
							</div>
							<h3 class="font-bold text-lg">{m.about.cards.focus.title}</h3>
						</div>
						<p class="text-base leading-relaxed text-base-content/65">
							{m.about.cards.focus.desc}
						</p>
					</div>
				</div>

				<div class="card bg-gradient-to-br from-primary to-primary/80 text-primary-content shadow-lg shadow-primary/20">
					<div class="card-body p-6">
						<div class="flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
								<GraduationCap class="h-5 w-5" />
							</div>
							<h3 class="font-bold text-lg">{m.about.cards.education.title}</h3>
						</div>
						<p class="text-base leading-relaxed opacity-90">{m.about.cards.education.desc}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
