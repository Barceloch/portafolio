<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { initLocale, messages, locale } from '$lib/i18n';

	let { children } = $props();

	let m = $derived($messages);

	onMount(() => {
		initLocale();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{$messages.seo.title}</title>
	<meta name="description" content={$messages.seo.description} />
	<meta name="author" content="Yunior Barceló Chávez" />
	<meta property="og:title" content={$messages.seo.title} />
	<meta property="og:description" content={$messages.seo.description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="{base}/photo.jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$messages.seo.title} />
	<meta name="twitter:description" content={$messages.seo.description} />
	<link rel="canonical" href="https://yuniorbarcelo.dev" />
</svelte:head>

{@render children()}
