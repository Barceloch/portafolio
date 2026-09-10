# Yunior Barceló — Portafolio Profesional

Portafolio profesional estático construido con **SvelteKit** + **Tailwind CSS** + **DaisyUI**, con i18n (ES/EN/PT-BR) y despliegue en **Netlify** y **GitHub Pages**.

> El gestor de paquetes de este proyecto es **pnpm**. El archivo de bloqueo a subir es `pnpm-lock.yaml` (no `package-lock.json` ni `yarn.lock`).

## Requisitos previos

Tener **pnpm** instalado globalmente:

```sh
npm install -g pnpm
```

## Crear el proyecto desde cero (con pnpm)

```sh
# inicializa un proyecto SvelteKit (adapter-static, TypeScript)
pnpm create svelte@latest mi-portafolio

cd mi-portafolio
pnpm install
```

Para recrear este proyecto con la misma configuración:

```sh
pnpm dlx sv@0.17.0 create --template minimal --types ts --add sveltekit-adapter="adapter:static" tailwindcss="plugins:none" --no-install .
pnpm install
```

## Desarrollo

```sh
pnpm dev

# o abre el navegador automáticamente
pnpm dev -- --open
```

## Build de producción

```sh
pnpm build
```

Genera la carpeta `build/` (estática, con `fallback: '404.html'` y `precompress: true` para GitHub Pages).

## Verificación

```sh
pnpm check       # chequeo de tipos + svelte-check
pnpm preview     # previsualiza el build de producción
```

## Despliegue

- **Netlify**: sube el repo y configura build estático — carpeta `build`.
- **GitHub Pages**: el workflow en `.github/workflows/deploy.yml` compila con pnpm y despliega automáticamente al hacer push a `main`/`master`.