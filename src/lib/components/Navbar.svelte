<script lang="ts">
	import { messages, locale, setLocale } from '$lib/i18n';
	import type { Locale } from '$lib/i18n';
	import { base } from '$app/paths';
	import { Menu, X, Sun, Moon, Globe, Download } from '@lucide/svelte';

	let m = $derived($messages);
	let currentLocale = $derived($locale);

	let isMenuOpen = $state(false);
	let isDark = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		const onScroll = () => (scrolled = window.scrollY > 10);
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			isDark = true;
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
		}
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});

	function toggleTheme() {
		isDark = !isDark;
		const theme = isDark ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}

	function changeLocale(l: Locale) {
		setLocale(l);
	}

	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<svelte:window
	on:scroll={() => (scrolled = window.scrollY > 10)}
/>

<nav
	class="navbar fixed top-0 z-50 border-b transition-all duration-500
		{scrolled
		? 'bg-base-100/90 backdrop-blur-2xl shadow-lg shadow-base-content/5 border-base-300/50'
		: 'bg-base-100/60 backdrop-blur-md border-transparent'}"
>
	<div class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 lg:px-6">
		<a href="{base}/" class="group flex items-center gap-2.5 font-bold tracking-tight">
			<span class="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-content text-sm font-black shadow-md shadow-primary/20 transition-shadow group-hover:shadow-lg group-hover:shadow-primary/30">YB</span>
			<span class="text-[1.1rem]">Yunior Barceló</span>
			<span class="hidden text-primary font-light text-xl sm:inline">.</span>
		</a>

		<div class="hidden items-center gap-1 lg:flex">
			<a href="#about" class="btn btn-ghost btn-sm font-semibold text-[0.9rem]">{m.nav.about}</a>
			<a href="#skills" class="btn btn-ghost btn-sm font-semibold text-[0.9rem]">{m.nav.skills}</a>
			<a href="#projects" class="btn btn-ghost btn-sm font-semibold text-[0.9rem]">{m.nav.projects}</a>
			<a href="#location" class="btn btn-ghost btn-sm font-semibold text-[0.9rem]">{m.nav.location}</a>
			<a href="{base}/cv_ENG.pdf" target="_blank" rel="noopener" download class="btn btn-ghost btn-sm font-semibold text-[0.9rem] gap-1.5">
				<Download class="h-3.5 w-3.5" />
				CV
			</a>
			<a href="#contact" class="btn btn-primary btn-sm ml-2 text-white font-semibold text-[0.9rem] shadow-md shadow-primary/20">{m.nav.contact}</a>
		</div>

		<div class="flex items-center gap-1.5">
			<div class="hidden items-center gap-0.5 rounded-full border border-base-300 bg-base-200/60 p-1 sm:flex">
				<button
					onclick={() => changeLocale('es')}
					class="rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-300 {currentLocale === 'es'
						? 'bg-primary text-primary-content shadow-md shadow-primary/20'
						: 'text-base-content/60 hover:text-base-content hover:bg-base-300/50'}">ES</button>
				<button
					onclick={() => changeLocale('en')}
					class="rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-300 {currentLocale === 'en'
						? 'bg-primary text-primary-content shadow-md shadow-primary/20'
						: 'text-base-content/60 hover:text-base-content hover:bg-base-300/50'}">EN</button>
				<button
					onclick={() => changeLocale('pt')}
					class="rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-300 {currentLocale === 'pt'
						? 'bg-primary text-primary-content shadow-md shadow-primary/20'
						: 'text-base-content/60 hover:text-base-content hover:bg-base-300/50'}">PT</button>
			</div>

			<div class="dropdown dropdown-end sm:hidden">
				<div tabindex="0" role="button" class="btn btn-ghost btn-sm btn-circle">
					<Globe class="h-4 w-4" />
				</div>
				<ul class="dropdown-content menu bg-base-100 rounded-box z-10 mt-2 w-36 p-2 shadow-xl border border-base-200">
					<li><button onclick={() => changeLocale('es')} class:font-bold={currentLocale === 'es'}>🇪🇸 Español</button></li>
					<li><button onclick={() => changeLocale('en')} class:font-bold={currentLocale === 'en'}>🇺🇸 English</button></li>
					<li><button onclick={() => changeLocale('pt')} class:font-bold={currentLocale === 'pt'}>🇧🇷 Português</button></li>
				</ul>
			</div>

			<a href="{base}/cv_ENG.pdf" target="_blank" rel="noopener" download class="btn btn-ghost btn-sm btn-circle sm:hidden" aria-label="Download CV">
				<Download class="h-4 w-4" />
			</a>

			<button onclick={toggleTheme} class="btn btn-ghost btn-sm btn-circle transition-transform duration-300 hover:rotate-45" aria-label="Toggle theme">
				{#if isDark}
					<Sun class="h-4.5 w-4.5" />
				{:else}
					<Moon class="h-4.5 w-4.5" />
				{/if}
			</button>

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
			class="absolute left-0 top-full w-full border-t border-base-300 bg-base-100/95 backdrop-blur-xl p-5 shadow-2xl lg:hidden"
			style="animation: fade-in-up 0.3s ease-out"
		>
			<div class="flex flex-col gap-1.5">
				<a href="#about" onclick={closeMenu} class="btn btn-ghost justify-start text-base font-semibold">{m.nav.about}</a>
				<a href="#skills" onclick={closeMenu} class="btn btn-ghost justify-start text-base font-semibold">{m.nav.skills}</a>
				<a href="#projects" onclick={closeMenu} class="btn btn-ghost justify-start text-base font-semibold">{m.nav.projects}</a>
				<a href="#location" onclick={closeMenu} class="btn btn-ghost justify-start text-base font-semibold">{m.nav.location}</a>
				<a href="{base}/cv_ENG.pdf" target="_blank" rel="noopener" download onclick={closeMenu} class="btn btn-ghost justify-start text-base font-semibold gap-2">
					<Download class="h-4 w-4" />
					{m.common.downloadCv}
				</a>
				<a href="#contact" onclick={closeMenu} class="btn btn-primary justify-start text-white font-semibold text-base">{m.nav.contact}</a>
				<div class="mt-3 flex gap-2">
					<button onclick={() => changeLocale('es')} class="btn btn-sm flex-1 font-bold {currentLocale === 'es' ? 'btn-primary text-white' : 'btn-outline'}">ES</button>
					<button onclick={() => changeLocale('en')} class="btn btn-sm flex-1 font-bold {currentLocale === 'en' ? 'btn-primary text-white' : 'btn-outline'}">EN</button>
					<button onclick={() => changeLocale('pt')} class="btn btn-sm flex-1 font-bold {currentLocale === 'pt' ? 'btn-primary text-white' : 'btn-outline'}">PT</button>
				</div>
			</div>
		</div>
	{/if}
</nav>

<div class="h-16"></div>
