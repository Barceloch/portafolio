<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import LocationNote from '$lib/components/LocationNote.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<main>
	<Hero />
	<About />
	<Skills />
	<Projects />
	<LocationNote />
</main>
<Footer />
