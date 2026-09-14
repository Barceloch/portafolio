<script lang="ts">
	import { onMount } from 'svelte';
	import { messages, locale, setLocale } from '$lib/i18n';
	import type { Locale } from '$lib/i18n';
	import { base } from '$app/paths';
	import { Menu, X, Globe, Download, Sun, Moon } from '@lucide/svelte';

	let m = $derived($messages);
	let currentLocale = $derived($locale);

	let isMenuOpen = $state(false);
	let scrolled = $state(false);
	let theme = $state<'telemetry' | 'telemetry-light'>('telemetry');

	onMount(() => {
		const t = document.documentElement.getAttribute('data-theme');
		theme = t === 'telemetry-light' ? 'telemetry-light' : 'telemetry';
	});

	function changeLocale(l: Locale) {
		setLocale(l);
	}

	function toggleTheme() {
		theme = theme === 'telemetry' ? 'telemetry-light' : 'telemetry';
		document.documentElement.setAttribute('data-theme', theme);
		try {
			localStorage.setItem('theme', theme);
		} catch (e) {}
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<svelte:window on:scroll={() => (scrolled = window.scrollY > 10)} />

<nav
	class="navbar fixed top-0 z-50 border-b transition-all duration-500
		{scrolled
		? 'bg-base-100/90 backdrop-blur-2xl border-base-300/40 shadow-lg shadow-black/20'
		: 'bg-transparent border-transparent'}"
>
	<div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 lg:px-6">
		<a href="{base}/" class="group flex items-center gap-3">
			<span class="flex h-9 w-9 items-center justify-center rounded-lg bg-base-200 font-mono text-sm font-bold text-primary ring-1 ring-base-300 transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(6,182,212,0.35)]">
				YB
			</span>
			<span class="font-mono text-sm text-base-content/85 transition-colors group-hover:text-base-content">
				barceloch<span class="text-primary">@</span>dev
				<span class="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 bg-primary animate-blink"></span>
			</span>
		</a>

		<div class="hidden items-center gap-1 lg:flex">
			<a href="#about" class="btn btn-ghost btn-sm font-mono text-xs uppercase tracking-[0.2em] text-base-content/80 hover:text-base-content transition-colors">{m.nav.about}</a>
			<a href="#skills" class="btn btn-ghost btn-sm font-mono text-xs uppercase tracking-[0.2em] text-base-content/80 hover:text-base-content transition-colors">{m.nav.skills}</a>
			<a href="#projects" class="btn btn-ghost btn-sm font-mono text-xs uppercase tracking-[0.2em] text-base-content/80 hover:text-base-content transition-colors">{m.nav.projects}</a>
			<a href="#location" class="btn btn-ghost btn-sm font-mono text-xs uppercase tracking-[0.2em] text-base-content/80 hover:text-base-content transition-colors">{m.nav.location}</a>
			<a href="{base}/cv_ENG.pdf" target="_blank" rel="noopener" download class="btn btn-ghost btn-sm font-mono text-xs uppercase tracking-[0.2em] text-base-content/80 gap-1.5 hover:text-base-content transition-colors">
				<Download class="h-3.5 w-3.5" />
				CV
			</a>
			<a href="#contact" class="btn btn-primary btn-sm ml-2 font-mono text-xs uppercase tracking-[0.2em] text-primary-content font-bold shadow-md shadow-primary/20">{m.nav.contact}</a>
		</div>

		<div class="flex items-center gap-1.5">
			<div class="hidden items-center gap-0.5 rounded-lg border border-base-300 bg-base-200/60 p-1 font-mono sm:flex">
				<button
					onclick={() => changeLocale('es')}
					class="rounded-md px-3 py-1.5 text-xs font-bold transition-all duration-300 {currentLocale === 'es'
						? 'bg-primary text-primary-content shadow-md shadow-primary/20'
						: 'text-base-content/80 hover:text-base-content hover:bg-base-300/50'}">ES</button>
				<button
					onclick={() => changeLocale('en')}
					class="rounded-md px-3 py-1.5 text-xs font-bold transition-all duration-300 {currentLocale === 'en'
						? 'bg-primary text-primary-content shadow-md shadow-primary/20'
						: 'text-base-content/80 hover:text-base-content hover:bg-base-300/50'}">EN</button>
				<button
					onclick={() => changeLocale('pt')}
					class="rounded-md px-3 py-1.5 text-xs font-bold transition-all duration-300 {currentLocale === 'pt'
						? 'bg-primary text-primary-content shadow-md shadow-primary/20'
						: 'text-base-content/80 hover:text-base-content hover:bg-base-300/50'}">PT</button>
			</div>

			<button
				onclick={toggleTheme}
				class="btn btn-ghost btn-sm btn-circle"
				aria-label={theme === 'telemetry' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
			>
				{#if theme === 'telemetry'}
					<Sun class="h-4 w-4" />
				{:else}
					<Moon class="h-4 w-4" />
				{/if}
			</button>

			<div class="dropdown dropdown-end sm:hidden">
				<div tabindex="0" role="button" class="btn btn-ghost btn-sm btn-circle">
					<Globe class="h-4 w-4" />
				</div>
				<ul class="dropdown-content menu bg-base-200 rounded-box z-10 mt-2 w-40 p-2 shadow-xl border border-base-300">
					<li><button onclick={() => changeLocale('es')} class:font-bold={currentLocale === 'es'}>🇪🇸 Español</button></li>
					<li><button onclick={() => changeLocale('en')} class:font-bold={currentLocale === 'en'}>🇺🇸 English</button></li>
					<li><button onclick={() => changeLocale('pt')} class:font-bold={currentLocale === 'pt'}>🇧🇷 Português</button></li>
				</ul>
			</div>

			<a href="{base}/cv_ENG.pdf" target="_blank" rel="noopener" download class="btn btn-ghost btn-sm btn-circle sm:hidden" aria-label="Download CV">
				<Download class="h-4 w-4" />
			</a>

			<button onclick={() => (isMenuOpen = !isMenuOpen)} class="btn btn-ghost btn-sm btn-circle lg:hidden" aria-label="Menu">
				{#if isMenuOpen}
					<X class="h-5 w-5" />
				{:else}
					<Menu class="h-5 w-5" />
				{/if}
			</button>
		</div>
	</div>

	{#if isMenuOpen}
		<div
			class="absolute left-0 top-full w-full border-t border-base-300/40 bg-base-100/95 backdrop-blur-xl p-5 shadow-2xl lg:hidden"
			style="animation: fade-in-up 0.3s ease-out"
		>
			<div class="flex flex-col gap-1.5">
				<a href="#about" onclick={closeMenu} class="btn btn-ghost justify-start font-mono text-sm uppercase tracking-[0.2em]">{m.nav.about}</a>
				<a href="#skills" onclick={closeMenu} class="btn btn-ghost justify-start font-mono text-sm uppercase tracking-[0.2em]">{m.nav.skills}</a>
				<a href="#projects" onclick={closeMenu} class="btn btn-ghost justify-start font-mono text-sm uppercase tracking-[0.2em]">{m.nav.projects}</a>
				<a href="#location" onclick={closeMenu} class="btn btn-ghost justify-start font-mono text-sm uppercase tracking-[0.2em]">{m.nav.location}</a>
				<a href="{base}/cv_ENG.pdf" target="_blank" rel="noopener" download onclick={closeMenu} class="btn btn-ghost justify-start font-mono text-sm uppercase tracking-[0.2em] gap-2">
					<Download class="h-4 w-4" />
					{m.common.downloadCv}
				</a>
				<a href="#contact" onclick={closeMenu} class="btn btn-primary justify-start font-mono text-sm uppercase tracking-[0.2em] text-primary-content font-bold">{m.nav.contact}</a>
				<div class="mt-3 flex gap-2 font-mono">
					<button onclick={() => changeLocale('es')} class="btn btn-sm flex-1 font-bold {currentLocale === 'es' ? 'btn-primary text-primary-content' : 'btn-outline'}">ES</button>
					<button onclick={() => changeLocale('en')} class="btn btn-sm flex-1 font-bold {currentLocale === 'en' ? 'btn-primary text-primary-content' : 'btn-outline'}">EN</button>
					<button onclick={() => changeLocale('pt')} class="btn btn-sm flex-1 font-bold {currentLocale === 'pt' ? 'btn-primary text-primary-content' : 'btn-outline'}">PT</button>
				</div>
			</div>
		</div>
	{/if}
</nav>

<div class="h-16"></div>