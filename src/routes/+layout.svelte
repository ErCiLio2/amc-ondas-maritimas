<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();

	function initReveal() {
		requestAnimationFrame(() => {
			const SELECTOR = [
				'section h1',
				'section h2',
				'section h3',
				'section > .max-w-7xl > p',
				'section > .max-w-7xl > div > p',
				'article',
				'.grid > div',
				'.grid > a',
				'.grid > article',
				'.divide-y > div',
				'.space-y-3 > div',
				'.space-y-6 > div',
				'section > .max-w-7xl > .flex',
				'section img',
			].join(', ');

			const targets = [...document.querySelectorAll<HTMLElement>(SELECTOR)];

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							const el = entry.target as HTMLElement;
							el.classList.add('sr-visible');
							observer.unobserve(el);
						}
					});
				},
				{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
			);

			targets.forEach((el, i) => {
				// stagger siblings inside the same parent
				const siblings = [...(el.parentElement?.children ?? [])];
				const sibIdx = siblings.indexOf(el);
				el.style.transitionDelay = `${sibIdx * 80}ms`;
				el.classList.add('sr');
				observer.observe(el);
			});
		});
	}

	onMount(initReveal);
	afterNavigate(initReveal);
</script>

<Nav />
{@render children()}
<Footer />
