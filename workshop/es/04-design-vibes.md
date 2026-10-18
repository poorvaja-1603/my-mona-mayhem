# Parte 4: Tematización basada en el diseño

---

En esta parte usarás los bucles de planificación e implementación de Copilot para diseñar una transformación de tema integral. Este es el desarrollo design-first: empieza con la visión, itera sobre los elementos visuales y deja que Copilot maneje el trabajo pesado del CSS.

## Tarea 1: Planifica el tema retro

<!-- track:vscode:start -->
Cambia a **Plan** mode en GitHub Copilot Chat.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Usa `/plan` en GitHub Copilot CLI, o pulsa **Shift+Tab** hasta que el modo de planificación esté activo.
<!-- track:cli:end -->

Escribe este prompt:

> I want to transform this page into a full retro arcade experience. Plan a comprehensive visual overhaul that includes: CRT scanline effects on the background, neon glow on the title that pulses like a neon sign, animated VS badge with gradient color shifts, shine/shimmer overlay on the user result cards, float-in animations for input fields, color-shifting loading text between green and purple, and hover glow effects on contribution squares. Keep the dark background (`#0a0a1a`) with green (`#5fed83`) and purple (`#8a2be2`) accent colors. Use a dark theme with the Press Start 2P retro gaming font from Google Fonts.

Copilot generará un plan detallado de implementación con todos los efectos visuales. **No lo aceptes de inmediato**: revisa el plan e itera:

- Sugiere ajustes de sincronización de animación (por ejemplo, *"Haz que el pulso neón sea más lento, alrededor de 3 segundos"*)
- Pregunta sobre efectos concretos (por ejemplo, *"¿Cómo funcionará la capa de brillo en las tarjetas de resultados?"*)
- Solicita cambios en el enfoque si algo no te parece bien

## Tarea 2: Implementa el tema

Cuando estés satisfecho con el plan, dile a Copilot que lo implemente.

> Implementa el plan de tema retro arcade que acabamos de diseñar.

Copilot añadirá múltiples animaciones CSS, pseudo-elementos y transiciones en tu hoja de estilos. Esto puede incluir:

- `@keyframes` para scanlines, pulso neón, brillo y efectos de entrada flotante
- Pseudo-elementos (`::before`, `::after`) para capas de superposición
- Propiedades CSS personalizadas para colores del tema
- Estados de transición y hover para elementos interactivos

<!-- track:cli:start -->
Después de que los cambios entren, usa `/diff` para revisar los cambios de estilo antes de aprobarlos.
<!-- track:cli:end -->

## Tarea 3: Ajusta el ambiente visual

> **⚠️ ¿No ves cambios?** Si el nuevo tema o las animaciones no aparecen, detén el servidor de desarrollo (`Ctrl+C`) y reinícialo con `npm run dev`, luego haz una recarga forzada (`Ctrl+Shift+R`) en el navegador.

Mantén abierta la vista previa del navegador e itera sobre el diseño. Prueba prompts como:

> The scanline effect is too strong, reduce opacity to 0.03

> Add a subtle electrical flicker to the title text

> The VS badge should pulse more dramatically

Esto es **desarrollo design-first**: estás iterando sobre la salida visual en tiempo real. Cada prompt refina la experiencia hasta que queda bien. No te conformes con "bastante bueno": empuja el ambiente visual hasta que la página parezca una máquina recreativa.

## Tarea 4: Actualiza las instrucciones

Tus instrucciones deben reflejar las decisiones principales de diseño para que los prompts posteriores sigan alineados.

<!-- track:vscode:start -->
Pregunta a Copilot Chat:

> Add a design guide section to copilot-instructions.md describing our retro arcade theme: colors, fonts, animation style
<!-- track:vscode:end -->

<!-- track:cli:start -->
Pregunta a Copilot CLI:

> Update our repository instructions with a short design guide for the retro arcade theme: colors, fonts, animation style, and the rule that new UI should keep the neon aesthetic.
<!-- track:cli:end -->

Haz commit de tus instrucciones actualizadas y los cambios de diseño cuando la página quede bien.

## ✅ Parte 4 completada

**Lo que aprendiste:**

- Usa flujos de planificación para bosquejar un **sistema de diseño antes de implementar**
- **Itera sobre el resultado visual** con prompts rápidos de seguimiento
- **Actualiza las instrucciones después de decisiones importantes** para que Copilot mantenga la identidad visual de forma consistente
