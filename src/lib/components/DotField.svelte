<script lang="ts">
	import { onMount } from 'svelte';

	interface Dot {
		x: number;
		y: number;
		base: number;
		amp: number;
		phase: number;
		accent: boolean;
	}

	let canvas: HTMLCanvasElement | undefined = $state();

	onMount(() => {
		const el = canvas;
		if (!el) return;
		const rc = el.getContext('2d');
		if (!rc) return;

		const host: HTMLCanvasElement = el;
		const ctx: CanvasRenderingContext2D = rc;

		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		const gap = 28;
		const pointer = { x: -9999, y: -9999 };
		let raf = 0;
		let w = 0;
		let h = 0;
		let dots: Dot[] = [];

		function build() {
			w = host.offsetWidth;
			h = host.offsetHeight;
			host.width = Math.max(1, w * dpr);
			host.height = Math.max(1, h * dpr);
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			dots = [];
			const cols = Math.ceil(w / gap) + 1;
			const rows = Math.ceil(h / gap) + 1;
			for (let j = 0; j < rows; j++) {
				for (let i = 0; i < cols; i++) {
					const accent = Math.random() < 0.07;
					dots.push({
						x: i * gap,
						y: j * gap,
						base: accent ? 0.7 + Math.random() * 0.3 : 0.16 + Math.random() * 0.22,
						amp: accent ? 0.5 + Math.random() * 0.4 : 0.18 + Math.random() * 0.2,
						phase: Math.random() * Math.PI * 2,
						accent
					});
				}
			}
		}

		function draw(t: number) {
			ctx.clearRect(0, 0, w, h);
			for (const d of dots) {
				const pulse = reduced ? 1 : 0.55 + 0.45 * Math.sin(t / 800 + d.phase) * 0.5;
				const dx = pointer.x - d.x;
				const dy = pointer.y - d.y;
				const dist = Math.hypot(dx, dy);
				let ox = 0;
				let oy = 0;
				if (dist < 150 && dist > 0) {
					const f = (1 - dist / 150) * 4;
					ox += (dx / dist) * f;
					oy += (dy / dist) * f;
				}
				const a = d.base * (0.5 + pulse);
				ctx.beginPath();
				ctx.arc(d.x + ox, d.y + oy, d.accent ? 1.4 : 1.05, 0, Math.PI * 2);
				ctx.fillStyle = d.accent
					? `rgba(34,211,238,${Math.min(1, a).toFixed(3)})`
					: `rgba(203,213,225,${(a * 0.5).toFixed(3)})`;
				ctx.fill();
				}
		}

		function loop(t: number) {
			draw(t);
			raf = requestAnimationFrame(loop);
		}

		build();
		if (reduced) {
			draw(0);
		} else {
			raf = requestAnimationFrame(loop);
		}

		const onPointer = (e: PointerEvent) => {
			pointer.x = e.clientX;
			pointer.y = e.clientY;
		};
		const onLeave = () => {
			pointer.x = -9999;
			pointer.y = -9999;
		};
		const onResize = () => build();

		window.addEventListener('pointermove', onPointer, { passive: true });
		window.addEventListener('pointerdown', onPointer, { passive: true });
		window.addEventListener('pointerleave', onLeave);
		window.addEventListener('resize', onResize);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('pointermove', onPointer);
			window.removeEventListener('pointerdown', onPointer);
			window.removeEventListener('pointerleave', onLeave);
			window.removeEventListener('resize', onResize);
		};
	});
</script>

<canvas
	bind:this={canvas}
	class="pointer-events-none absolute inset-0 h-full w-full"
	aria-hidden="true"
></canvas>