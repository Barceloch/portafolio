import type { Action } from 'svelte/action';

interface RevealOptions {
	delay?: number;
	duration?: number;
	y?: number;
	distance?: number;
	once?: boolean;
	threshold?: number;
}

export const reveal: Action<HTMLElement, RevealOptions | undefined> = (node, options) => {
	const {
		delay = 0,
		duration = 600,
		y = 24,
		distance = 0,
		once = true,
		threshold = 0.15
	} = options ?? {};

	const translateY = y ?? distance;

	node.style.opacity = '0';
	node.style.transform = `translateY(${translateY}px)`;
	node.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;
	node.style.willChange = 'opacity, transform';

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.style.opacity = '0';
					node.style.transform = `translateY(${translateY}px)`;
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
