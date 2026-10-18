# 🎮 Mona Mayhem — Taller de GitHub Copilot

---

> **Duración:** ~1 hora  
> **Nivel:** Intermedio  
> **Stack:** Astro / Node.js / TypeScript

Construye una aplicación retro de comparación de contribuciones de GitHub — **Mona Mayhem** — mientras aprendes todo el espectro de flujos de trabajo de GitHub Copilot. El taller admite **dos recorridos**: una experiencia en VS Code y otra en GitHub Copilot CLI.

---

## 🎯 Elige tu recorrido

- **Recorrido de VS Code** — permanece dentro del editor y practica Chat, Plan Mode, Agent Mode, agentes en segundo plano y el bucle de revisión integrado.
- **Recorrido de CLI** — permanece en la terminal y practica `copilot`, contexto con `@file`, `/plan`, ediciones autónomas, `/fleet`, `/delegate` y `/review`.

Sigue el recorrido que mejor se ajuste a tu flujo de trabajo preferido.

---

## 📋 Lista rápida

Antes de empezar, comprueba:

- [ ] GitHub Copilot está habilitado para tu cuenta
- [ ] Node.js instalado
- [ ] Git instalado y configurado
- [ ] Tu navegador y tu terminal están listos

<!-- track:vscode:start -->
- [ ] VS Code **v1.107+** (sin actualizaciones pendientes)
- [ ] Conectado a la extensión **GitHub Copilot**
- [ ] Panel de Chat abierto y Agent listo
<!-- track:vscode:end -->

<!-- track:cli:start -->
- [ ] GitHub Copilot CLI instalado y disponible como `copilot`
- [ ] Autenticado en la CLI con `/login`
- [ ] Cómodo usando comandos con barra como `/help`, `/plan` y `/review`
<!-- track:cli:end -->

> 💡 **Consejo:** usa el DevContainer para un entorno preconfigurado si quieres empezar rápido en VS Code.

---

## 🧠 Lo que aprenderás

| # | Habilidad | Descripción |
|---|-----------|-------------|
| 1 | **Ingeniería de contexto** | Enseña a Copilot sobre tu código base con instrucciones, referencias y restricciones claras |
| 2 | **Planificación primero** | Redacta la arquitectura antes de implementar |
| 3 | **Implementación agentic** | Deja que Copilot lleve a cabo trabajo de codificación en varios pasos con tu supervisión |
| 4 | **Diseño iterativo** | Usa Copilot para transformar los elementos visuales y refinar detalles de interacción |
| 5 | **Flujos de trabajo en paralelo** | Divide el trabajo entre agentes, sesiones o tareas delegadas |

<!-- track:vscode:start -->
### Enfoque de funciones de VS Code

- **Chat + Ask mode** para explorar
- **Plan Mode** para arquitectura y prompts de diseño
- **Agent Mode** para implementación multiarchivo
- **Agentes en segundo plano y en la nube** para pulido paralelo
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Enfoque de funciones de Copilot CLI

- **Sesiones interactivas de CLI** con `copilot`
- **`/plan` y Shift+Tab** para planificación estructurada
- **Ediciones autónomas** con aprobaciones en línea y `/diff`
- **`/fleet`, `/delegate` y `/review`** para paralelismo y puertas de calidad
<!-- track:cli:end -->

---

## 📚 Partes del laboratorio

| Parte | Título | Descripción |
|------|--------|-------------|
| [**01**](01-setup.md) | Configuración e ingeniería del contexto | Crea tu repositorio, prepara tu entorno y da a Copilot el contexto adecuado |
| [**02**](02-plan-and-scaffold.md) | Planificación y estructura | Diseña la API y la arquitectura de la página antes de implementar |
| [**03**](03-agent-mode.md) | Construir el juego | Conecta la página de batalla y los gráficos de contribución con ayuda agentic |
| [**04**](04-design-vibes.md) | Tematización basada en el diseño | Convierte el esquema en una experiencia retro arcade |
| [**05**](05-polish.md) | Pulido y trabajo en paralelo | Usa flujos multiagente para mejorar UX, robustez y calidad |
| [**06**](06-bonus.md) | Bonus y extensiones | Explora funciones abiertas, flujos de compartir y experimentos extra |

---

## 💡 Consejos profesionales

1. **Mantén el navegador abierto** — observa las actualizaciones en vivo mientras codificas.
2. **Haz commits con frecuencia** — guarda puntos de control limpios mientras iteras.
3. **Refina el plan antes de implementar** — los planes mejores llevan a mejores resultados.
4. **Revisa los cambios de Copilot** — usa la vista de diff o las herramientas de revisión de la CLI en lugar de aceptarlos a ciegas.

<!-- track:vscode:start -->
5. **Usa puntos de control y Deshacer** en el chat si una iteración se sale de control.
<!-- track:vscode:end -->

<!-- track:cli:start -->
5. **Usa `/session`, `/context` y `/share file`** cuando quieras inspeccionar o conservar tu trabajo.
<!-- track:cli:end -->
