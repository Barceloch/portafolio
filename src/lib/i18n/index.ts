import { writable, derived } from 'svelte/store';
import es from './es.json';
import en from './en.json';
import pt from './pt.json';

export type Locale = 'es' | 'en' | 'pt';
export type Messages = typeof es;

const dictionaries: Record<Locale, Messages> = { es, en, pt };

function getInitialLocale(): Locale {
	if (typeof window !== 'undefined') {
		const saved = localStorage.getItem('locale') as Locale | null;
		if (saved && ['es', 'en', 'pt'].includes(saved)) return saved;
	}
	return 'en';
}

export const locale = writable<Locale>('en');
export const messages = derived(locale, ($locale) => dictionaries[$locale] ?? en);

// t(path) — acceso por dot-notation: t('hero.title')
export const t = derived(messages, ($messages) => {
	return (key: string): string => {
		const parts = key.split('.');
		let cur: unknown = $messages;
		for (const p of parts) {
			if (cur && typeof cur === 'object' && p in (cur as Record<string, unknown>)) {
				cur = (cur as Record<string, unknown>)[p];
			} else {
				return key;
			}
		}
		return typeof cur === 'string' ? cur : key;
	};
});

export function setLocale(newLocale: Locale) {
	locale.set(newLocale);
	if (typeof window !== 'undefined') {
		localStorage.setItem('locale', newLocale);
		document.documentElement.lang = newLocale === 'pt' ? 'pt-BR' : newLocale;
	}
}

export function initLocale() {
	const initial = getInitialLocale();
	locale.set(initial);
	if (typeof document !== 'undefined') {
		document.documentElement.lang = initial === 'pt' ? 'pt-BR' : initial;
	}
}
