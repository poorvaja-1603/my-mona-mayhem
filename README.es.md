🌐 [English](README.md) | Español | [Português (Brasil)](README.pt_BR.md) | [한국어](README.ko.md)

# 🎮 Mona Mayhem

**Taller de VS Code y GitHub Copilot CLI** — Crea una arena de batalla de contribuciones GitHub

Un template de taller para crear un sitio web retro tipo arcade con Astro que compara los gráficos de contribución de GitHub de dos usuarios. Este es el **punto de partida**: construirás la aplicación paso a paso usando GitHub Copilot.

![Mona Mayhem Screenshot](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)
*Lo que construirás al final del taller*

## 📚 Taller

El taller admite dos recorridos; sigue el que coincida con tu flujo de trabajo preferido:

- **Recorrido de VS Code** — Chat, Plan Mode, Agent Mode, agentes en segundo plano y bucles de revisión nativos del editor
- **Recorrido de CLI** — `copilot`, contexto con `@file`, `/plan`, ediciones autónomas, `/fleet`, `/delegate` y `/review`

| Parte | Título | Enfoque de Copilot |
|------|--------|--------------------|
| [00](workshop/es/00-overview.md) | Visión general | Selección de recorrido y objetivos de aprendizaje |
| [01](workshop/es/01-setup.md) | Configuración e ingeniería del contexto | Instrucciones, permisos y preparación del entorno |
| [02](workshop/es/02-plan-and-scaffold.md) | Planificación y estructura | Planificación de la API y la arquitectura de la página |
| [03](workshop/es/03-agent-mode.md) | Construir el juego | Implementación y iteración con agentes |
| [04](workshop/es/04-design-vibes.md) | Tematización basada en el diseño | Planificación e implementación del diseño visual |
| [05](workshop/es/05-polish.md) | Pulido y trabajo en paralelo | Paralelismo, revisiones y pasadas de calidad |
| [06](workshop/es/06-bonus.md) | Bonus y extensiones | Ideas abiertas y experimentos extra con Copilot |

## 🚀 Inicio rápido

1. **Crea tu propio repositorio primero** con cualquiera de estas opciones:
   - hacer clic en **Use this template** para crear un repositorio nuevo, o
   - bifurcar este repositorio.
2. Elige tu recorrido del taller:
   - **VS Code:** clona tu repositorio y ábrelo en VS Code.
   - **GitHub Copilot CLI:** clona tu repositorio localmente, instala `copilot` y trabaja desde tu terminal.
3. Sigue la [guía del taller](workshop/es/00-overview.md)

## Prerrequisitos

### Compartidos

- GitHub Copilot (Pro, Business o Enterprise)
- Git
- Node.js

### Recorrido de VS Code

- VS Code v1.107+
- Extensión de GitHub Copilot iniciada sesión

### Recorrido de CLI

- GitHub Copilot CLI (`copilot`)
- Node.js 22+ si planeas instalar la CLI con `npm install -g @github/copilot`
- O Homebrew / WinGet si prefieres un gestor de paquetes nativo

## Stack tecnológico

- **Framework**: [Astro](https://astro.build/) v6
- **Runtime**: Node.js con el adaptador [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/)
- **Fuente**: Press Start 2P (fuente retro de videojuegos)
- **API**: API de gráficos de contribución de GitHub

## Notas de despliegue

### Configuración actual de GitHub Pages

El flujo de trabajo en `.github/workflows/deploy.yml` despliega actualmente contenido estático de taller en `docs/` y `workshop/` a GitHub Pages. No compila ni despliega la app Astro desde `src/`.

### Si quieres desplegar la app Astro en GitHub Pages

GitHub Pages es alojamiento estático, así que la app de Astro debe usar salida estática.

1. Cambia `output` en `astro.config.mjs` de `server` a `static`.
2. Elimina el adaptador de Node (`@astrojs/node`) de `astro.config.mjs` y `package.json`.
3. Actualiza el flujo de trabajo de GitHub Actions para ejecutar `npm ci` y `npm run build`, y luego subir `dist/` como artefacto de Pages.
4. Si despliegas en una página de proyecto (`https://<usuario>.github.io/<repositorio>/`), configura `site` y `base` en `astro.config.mjs`.

Si planeas mantener las rutas de API funcionando en producción, usa una plataforma de servidor en su lugar (por ejemplo, Vercel, Netlify o un host de Node).

## Licencia

MIT
