<script lang="ts">
	import { onMount } from 'svelte';
	import { reveal } from '$lib/actions/reveal';
	import { iconFor, skillColors } from '$lib/data/skillIcons';
	import { messages } from '$lib/i18n';
	import type { ServiceCategory, ServiceCategoryKey } from '$lib/data/services';
	import { gsap, ScrollTrigger, prefersReducedMotion } from '$lib/utils/anim';
	import {
		Monitor,
		ShoppingCart,
		Building2,
		Plug,
		Server,
		Sparkles,
		PenTool,
		Smartphone,
		ChevronDown
	} from '@lucide/svelte';
	import type { Component } from 'svelte';
	import type { LucideProps } from '@lucide/svelte';

	const catIcons: Record<ServiceCategoryKey, Component<LucideProps>> = {
		web: Monitor,
		ecommerce: ShoppingCart,
		erp: Building2,
		backend: Plug,
		devops: Server,
		automation: Sparkles,
		design: PenTool,
		mobile: Smartphone
	};

	let m = $derived($messages);
	const categories = $derived(m.services.categories as unknown as ServiceCategory[]);
	const quickList = $derived(m.services.quick.items as unknown as string[]);

	let openKeys = $state<string[]>(['web']);

	function isOpen(key: string) {
		return openKeys.includes(key);
	}

	function toggle(key: string) {
		openKeys = openKeys.includes(key) ? openKeys.filter((k) => k !== key) : [...openKeys, key];
	}

	let root: HTMLElement | undefined = $state();

	onMount(() => {
		if (!root || prefersReducedMotion()) return;

		const ctx = gsap.context(() => {
			ScrollTrigger.batch('.sv-card', {
				once: true,
				onEnter: (batch) => {
					gsap.fromTo(
						batch,
						{ opacity: 0, y: 40 },
						{
							opacity: 1,
							y: 0,
							duration: 0.7,
							ease: 'power3.out',
							stagger: 0.09,
							overwrite: true
						}
					);
				}
			});

			ScrollTrigger.batch('.sv-qi', {
				once: true,
				onEnter: (batch) => {
					gsap.fromTo(
						batch,
						{ opacity: 0, x: -12 },
						{
							opacity: 1,
							x: 0,
							duration: 0.45,
							ease: 'power2.out',
							stagger: 0.04,
							overwrite: true
						}
					);
				}
			});

			const cta = root!.querySelector<HTMLElement>('.sv-cta');
			if (cta) {
				gsap.fromTo(
					cta,
					{ opacity: 0, y: 28, scale: 0.98 },
					{
						opacity: 1,
						y: 0,
						scale: 1,
						duration: 0.8,
						ease: 'power3.out',
						scrollTrigger: { trigger: cta, start: 'top 88%', once: true }
					}
				);
			}
		}, root);

		return () => ctx.revert();
	});

	const whatsappIcon = `<svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>`;
</script>

<section id="services" bind:this={root} class="border-t border-base-300/40 bg-base-100 py-20 lg:py-28">
	<div class="mx-auto max-w-6xl px-4 sm:px-6">
		<div use:reveal class="flex items-center gap-4">
			<span class="font-mono text-xs uppercase tracking-[0.3em] text-primary">04 // {m.services.overline}</span>
			<span class="h-px flex-1 bg-base-300/40"></span>
			<span class="hidden font-mono text-[0.7rem] uppercase tracking-[0.2em] text-base-content/70 sm:inline">{categories.length} {m.services.categoriesLabel}</span>
		</div>

		<div use:reveal class="mt-12 max-w-2xl">
			<h2 class="text-4xl font-light tracking-[-0.03em] text-base-content sm:text-5xl">{m.services.title}</h2>
			<p class="mt-4 text-lg text-base-content/80">{m.services.subtitle}</p>
		</div>

		<div use:reveal class="mt-8 rounded-2xl border border-primary/15 bg-base-200/40 p-5 sm:p-6">
			<p class="text-lg leading-relaxed text-base-content/85">
				{m.services.intro1} <span class="font-medium text-primary">{m.services.intro2}</span>
			</p>
			<p class="mt-3 text-base leading-relaxed text-base-content/75">
				{m.services.introText}
			</p>
		</div>

		<div class="mt-12 grid gap-5 md:grid-cols-2">
			{#each categories as cat}
				{@const Icon = catIcons[cat.key]}
				<div
					class="sv-card rounded-2xl shell-border p-px transition-shadow duration-300 hover:shadow-[0_0_26px_rgba(6,182,212,0.14)]"
				>
					<div class="flex h-full flex-col rounded-[calc(1rem-1px)] bg-base-200/50 backdrop-blur-xl">
						<h3 class="m-0">
							<button
								type="button"
								id="sv-btn-{cat.key}"
								aria-expanded={isOpen(cat.key)}
								aria-controls="sv-panel-{cat.key}"
								onclick={() => toggle(cat.key)}
								class="group/btn flex w-full items-start gap-4 p-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
							>
								<span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-base-200 ring-1 ring-base-300 transition-colors duration-300 group-hover/btn:ring-primary/40">
									<Icon class="h-5 w-5 text-base-content/80 transition-colors duration-300 group-hover/btn:text-primary" />
								</span>
								<span class="min-w-0 flex-1">
									<span class="block font-mono text-[0.62rem] uppercase tracking-[0.28em] text-base-content/70">[{cat.num}] {cat.tag}</span>
									<span class="mt-1 block text-lg font-semibold text-base-content transition-colors duration-300 group-hover/btn:text-primary">{cat.title}</span>
									<span class="mt-1.5 block text-sm leading-relaxed text-base-content/70">{cat.summary}</span>
								</span>
								<span class="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-base-300 bg-base-100/60 transition-colors duration-300">
									<ChevronDown
										class="h-4 w-4 text-base-content/70 transition-transform duration-300 {isOpen(cat.key) ? 'rotate-180 text-primary' : ''}"
									/>
								</span>
							</button>
						</h3>

						<div
							id="sv-panel-{cat.key}"
							role="region"
							aria-labelledby="sv-btn-{cat.key}"
							class="sv-panel {isOpen(cat.key) ? 'sv-panel-open' : ''}"
						>
							<div>
								<div class="px-6 pb-6">
									<span class="mb-5 block h-px w-full bg-base-300/40"></span>
									<ul class="space-y-6">
										{#each cat.items as item}
											<li>
												<article class="{item.highlight ? 'rounded-xl border border-primary/25 bg-primary/5 p-4 sm:p-5' : ''}">
													<div class="flex flex-wrap items-center gap-2">
														<h4 class="min-w-0 text-[1.02rem] font-semibold leading-snug text-base-content">{item.title}</h4>
														{#if item.highlight}
															<span class="badge badge-soft badge-primary badge-sm font-mono uppercase tracking-[0.15em]">AI-First</span>
														{/if}
													</div>
													<p class="mt-2 text-[0.92rem] leading-relaxed text-base-content/80">{item.description}</p>
													<div class="mt-4 flex flex-wrap gap-2">
														{#each item.tech as tech}
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
												</article>
											</li>
										{/each}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<div use:reveal class="mt-16">
			<div class="flex items-center gap-3">
				<span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-base-300 bg-base-200/60">
					<span class="block h-2.5 w-2.5 rounded-[3px] border-2 border-primary/70"></span>
				</span>
				<h3 class="font-mono text-sm uppercase tracking-[0.25em] text-base-content">{m.services.quick.title}</h3>
				<span class="h-px flex-1 bg-base-300/40"></span>
			</div>
			<p class="mt-4 max-w-2xl text-base leading-relaxed text-base-content/75">
				{m.services.quick.subtitle}
			</p>
			<ul class="mt-7 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
				{#each quickList as qs}
					<li
						class="sv-qi group flex items-center gap-3 rounded-xl border border-base-300 bg-base-200/40 px-4 py-3 transition-all duration-300 hover:border-primary/40 hover:bg-base-200/60"
					>
						<span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-base-300/60 font-mono text-[0.68rem] font-bold text-primary ring-1 ring-base-300">$</span>
						<span class="min-w-0 font-mono text-[0.8rem] leading-snug text-base-content/85 transition-colors duration-300 group-hover:text-base-content">{qs}</span>
					</li>
				{/each}
			</ul>
		</div>

		<div class="sv-cta mt-16 rounded-2xl shell-border p-px shadow-2xl shadow-black/20">
			<div class="rounded-[calc(1rem-1px)] bg-base-200/50 backdrop-blur-xl">
				<div class="flex items-center gap-1.5 border-b border-base-300/40 bg-base-100/60 px-4 py-2.5">
					<span class="h-2.5 w-2.5 rounded-full bg-error/70"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-warning/70"></span>
					<span class="h-2.5 w-2.5 rounded-full bg-success/70"></span>
					<span class="ml-2 font-mono text-[0.68rem] tracking-widest text-base-content/70">node — start-project.sh</span>
				</div>
				<div class="p-7 sm:p-9 lg:p-10">
					<p class="font-mono text-[0.82rem]">
						<span class="text-success">$</span><span class="text-primary">&nbsp;./start-project.sh</span>
						<span class="ml-2 inline-block h-4 w-[7px] translate-y-[3px] bg-primary term-cursor"></span>
					</p>
					<h3 class="mt-6 text-2xl font-semibold leading-tight text-base-content">{m.services.cta.title}</h3>
					<p class="mt-3 max-w-xl text-base leading-relaxed text-base-content/80">
						{m.services.cta.subtitle}
					</p>
					<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
						<a
							href="https://wa.me/5353592879?text=Hi%20Yunior%2C%20I%27d%20like%20to%20discuss%20a%20project."
							target="_blank"
							rel="noopener"
							class="btn btn-primary gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-primary-content shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-[0_0_28px_rgba(6,182,212,0.45)]"
						>
							{@html whatsappIcon}
							{m.services.cta.button}
						</a>
						<a
							href="#projects"
							class="btn btn-outline gap-2.5 font-mono text-xs uppercase tracking-[0.18em] border-base-content/15 text-base-content hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300"
						>
							{m.services.cta.seeProjects}
							<ChevronDown class="h-4 w-4 rotate-[-90deg]" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.sv-panel {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.35s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.sv-panel.sv-panel-open {
		grid-template-rows: 1fr;
	}

	.sv-panel > div {
		overflow: hidden;
		min-height: 0;
	}

	.sv-qi,
	.sv-card,
	.sv-cta {
		opacity: 0;
	}

	@media (prefers-reduced-motion: reduce) {
		.sv-panel {
			transition: none;
		}
		.sv-qi,
		.sv-card,
		.sv-cta {
			opacity: 1 !important;
		}
	}
</style>
