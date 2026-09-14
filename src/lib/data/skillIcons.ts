// Mapa skill -> SVG oficial (simple-icons). Los sin "path" usan fallback neutro en los badges.
import cplusplus from 'simple-icons/icons/cplusplus.svg?raw';
import go from 'simple-icons/icons/go.svg?raw';
import openjdk from 'simple-icons/icons/openjdk.svg?raw';
import python from 'simple-icons/icons/python.svg?raw';
import javascript from 'simple-icons/icons/javascript.svg?raw';
import php from 'simple-icons/icons/php.svg?raw';
import gnubash from 'simple-icons/icons/gnubash.svg?raw';
import html5 from 'simple-icons/icons/html5.svg?raw';
import css from 'simple-icons/icons/css.svg?raw';
import odoo from 'simple-icons/icons/odoo.svg?raw';
import erpnext from 'simple-icons/icons/erpnext.svg?raw';
import django from 'simple-icons/icons/django.svg?raw';
import fastapi from 'simple-icons/icons/fastapi.svg?raw';
import flask from 'simple-icons/icons/flask.svg?raw';
import wordpress from 'simple-icons/icons/wordpress.svg?raw';
import cakephp from 'simple-icons/icons/cakephp.svg?raw';
import laravel from 'simple-icons/icons/laravel.svg?raw';
import nextdotjs from 'simple-icons/icons/nextdotjs.svg?raw';
import vuedotjs from 'simple-icons/icons/vuedotjs.svg?raw';
import svelte from 'simple-icons/icons/svelte.svg?raw';
import quasar from 'simple-icons/icons/quasar.svg?raw';
import react from 'simple-icons/icons/react.svg?raw';
import jquery from 'simple-icons/icons/jquery.svg?raw';
import astro from 'simple-icons/icons/astro.svg?raw';
import androidstudio from 'simple-icons/icons/androidstudio.svg?raw';
import qt from 'simple-icons/icons/qt.svg?raw';
import gtk from 'simple-icons/icons/gtk.svg?raw';
import tailwindcss from 'simple-icons/icons/tailwindcss.svg?raw';
import bootstrap from 'simple-icons/icons/bootstrap.svg?raw';
import mongodb from 'simple-icons/icons/mongodb.svg?raw';
import firebase from 'simple-icons/icons/firebase.svg?raw';
import appwrite from 'simple-icons/icons/appwrite.svg?raw';
import strapi from 'simple-icons/icons/strapi.svg?raw';
import git from 'simple-icons/icons/git.svg?raw';
import docker from 'simple-icons/icons/docker.svg?raw';
import cpanel from 'simple-icons/icons/cpanel.svg?raw';
import pfsense from 'simple-icons/icons/pfsense.svg?raw';
import proxmox from 'simple-icons/icons/proxmox.svg?raw';
import kubernetes from 'simple-icons/icons/kubernetes.svg?raw';
import apachekafka from 'simple-icons/icons/apachekafka.svg?raw';
import tensorflow from 'simple-icons/icons/tensorflow.svg?raw';
import n8n from 'simple-icons/icons/n8n.svg?raw';
import figma from 'simple-icons/icons/figma.svg?raw';
import stripe from 'simple-icons/icons/stripe.svg?raw';
import elementor from 'simple-icons/icons/elementor.svg?raw';
import woocommerce from 'simple-icons/icons/woocommerce.svg?raw';
import gutenberg from 'simple-icons/icons/gutenberg.svg?raw';
import android from 'simple-icons/icons/android.svg?raw';
import sqlite from 'simple-icons/icons/sqlite.svg?raw';
import linux from 'simple-icons/icons/linux.svg?raw';
import debian from 'simple-icons/icons/debian.svg?raw';
import postgresql from 'simple-icons/icons/postgresql.svg?raw';
import mysql from 'simple-icons/icons/mysql.svg?raw';

const withClass = (raw: string) =>
	raw.replace('<svg ', '<svg class="h-full w-full fill-current" ');

export const skillIcons: Record<string, string> = {
	'C/C++': withClass(cplusplus),
	Go: withClass(go),
	Java: withClass(openjdk),
	Python: withClass(python),
	JavaScript: withClass(javascript),
	PHP: withClass(php),
	Bash: withClass(gnubash),
	HTML: withClass(html5),
	CSS: withClass(css),
	Odoo: withClass(odoo),
	ERPNext: withClass(erpnext),
	Django: withClass(django),
	FastAPI: withClass(fastapi),
	Flask: withClass(flask),
	WordPress: withClass(wordpress),
	CakePHP: withClass(cakephp),
	Laravel: withClass(laravel),
	'Next.js': withClass(nextdotjs),
	Vue: withClass(vuedotjs),
	Svelte: withClass(svelte),
	Quasar: withClass(quasar),
	React: withClass(react),
	jQuery: withClass(jquery),
	Astro: withClass(astro),
	'Android Studio': withClass(androidstudio),
	QT: withClass(qt),
	GTK: withClass(gtk),
	'Tailwind CSS': withClass(tailwindcss),
	Bootstrap: withClass(bootstrap),
	'NoSQL (MongoDB)': withClass(mongodb),
	Firebase: withClass(firebase),
	Appwrite: withClass(appwrite),
	Strapi: withClass(strapi),
	Git: withClass(git),
	Docker: withClass(docker),
	cPanel: withClass(cpanel),
	Pfsense: withClass(pfsense),
	Proxmox: withClass(proxmox),
	Kubernetes: withClass(kubernetes),
	'Apache Kafka': withClass(apachekafka),
	TensorFlow: withClass(tensorflow),
	'n8n': withClass(n8n),
	Figma: withClass(figma),
	Stripe: withClass(stripe),
	Elementor: withClass(elementor),
	WooCommerce: withClass(woocommerce),
	Gutenberg: withClass(gutenberg),
	Android: withClass(android),
	SQLite: withClass(sqlite),
	Linux: withClass(linux),
	Debian: withClass(debian),
	PostgreSQL: withClass(postgresql),
	MySQL: withClass(mysql),
	'Tailwind': withClass(tailwindcss),
	'C++': withClass(cplusplus),
	Qt4: withClass(qt)
};

export const iconFor = (name: string): string | undefined => skillIcons[name];

// Colores de marca legibles en ambos temas (dark + light). Los tonos muy oscuros
// del brand se sustituyen por variantes luminosas equivalentes.
export const skillColors: Record<string, string> = {
	'C/C++': '#3d8ee0',
	Go: '#00ADD8',
	Java: '#e76f00',
	Python: '#4B8BBE',
	JavaScript: '#F7DF1E',
	PHP: '#777BB4',
	Bash: '#4EAA25',
	HTML: '#E34F26',
	CSS: '#4E8BF5',
	Odoo: '#a06fa2',
	ERPNext: '#0089FF',
	Django: '#44B78B',
	FastAPI: '#009688',
	Flask: '#8b96a5',
	WordPress: '#2F9BD3',
	CakePHP: '#D33C43',
	Laravel: '#FF2D20',
	'Next.js': '#8b9bb0',
	Vue: '#4FC08D',
	Svelte: '#FF3E00',
	Quasar: '#409CFF',
	React: '#61DAFB',
	jQuery: '#3E9CE0',
	Astro: '#FF5D01',
	'Android Studio': '#3DDC84',
	QT: '#41CD52',
	GTK: '#7FE719',
	'Tailwind CSS': '#06B6D4',
	Bootstrap: '#7952B3',
	'NoSQL (MongoDB)': '#47A248',
	Firebase: '#FFCA28',
	Appwrite: '#FD366E',
	Strapi: '#4945FF',
	Git: '#F05032',
	Docker: '#2496ED',
	cPanel: '#FF6C2C',
	Pfsense: '#D2122E',
	Proxmox: '#E57000',
	Kubernetes: '#4A7DF0',
	'Apache Kafka': '#9aa2ae',
	TensorFlow: '#FF6F00',
	'n8n': '#EA4B71',
	Figma: '#F24E1E',
	Stripe: '#635BFF',
	Elementor: '#C6386F',
	WooCommerce: '#96588A',
	Gutenberg: '#4A90C0',
	Android: '#3DDC84',
	SQLite: '#5FA8D0',
	Linux: '#FCC624',
	Debian: '#A81D33',
	PostgreSQL: '#4D7EF0',
	MySQL: '#4690C9',
	Tailwind: '#06B6D4',
	'C++': '#3d8ee0',
	Qt4: '#41CD52'
};