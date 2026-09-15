<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import StackMarquee from '$lib/components/StackMarquee.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Services from '$lib/components/Services.svelte';
	import LocationNote from '$lib/components/LocationNote.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<main>
	<Hero />
	<StackMarquee />
	<About />
	<Skills />
	<Projects />
	<Services />
	<LocationNote />
</main>
<Footer />