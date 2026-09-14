import { browser } from '$app/environment';

interface RevealOpts {
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    distance?: number;
    once?: boolean;
    threshold?: number;
    rootMargin?: string;
}

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

export function reveal(node: HTMLElement, opts: RevealOpts = {}) {
    if (!browser) return;

    const {
        delay = 0,
        direction = 'up',
        distance = 30,
        once = true,
        threshold = 0.18,
        rootMargin = '0px 0px -48px 0px'
    } = opts;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let start = 'translate3d(0,0,0)';
    if (direction === 'up') start = `translate3d(0,${distance}px,0)`;
    else if (direction === 'down') start = `translate3d(0,${-distance}px,0)`;
    else if (direction === 'left') start = `translate3d(${distance}px,0,0)`;
    else if (direction === 'right') start = `translate3d(${-distance}px,0,0)`;

    node.style.opacity = '0';
    node.style.transform = start;
    node.style.transition = `opacity 0.75s ${EASE} ${delay}ms, transform 0.75s ${EASE} ${delay}ms`;

    const io = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                node.style.opacity = '1';
                node.style.transform = 'translate3d(0,0,0)';
                if (once) io.disconnect();
            } else if (!once) {
                node.style.opacity = '0';
                node.style.transform = start;
            }
        },
        { threshold, rootMargin }
    );

    io.observe(node);

    return {
        destroy() {
            io.disconnect();
        },
        update(newOpts: RevealOpts = {}) {
            io.unobserve(node);
            const updates = { ...opts, ...newOpts };
            node.style.opacity = '1';
            node.style.transform = 'translate3d(0,0,0)';
            return reveal(node, updates);
        }
    };
}