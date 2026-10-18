# Parte 3: Construye el juego con flujos agentic

---

Esta es la parte en la que Copilot pasa de planificador a implementador. En lugar de escribir código línea a línea, describes lo que quieres y dejas que Copilot lleve a cabo el trabajo a través de los archivos que necesitan cambiar.

## Tarea 1: Conecta la batalla

<!-- track:vscode:start -->
1. Cambia a **Agent** mode en Copilot Chat.
2. Escribe este prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Devuelve Copilot CLI a su flujo de codificación estándar (o quédate en autopilot si quieres que Copilot siga avanzando hasta que lo pares).
2. Menciona el archivo de la página si te resulta útil: `@src/pages/index.astro`
3. Escribe este prompt:
<!-- track:cli:end -->

   > Add client-side JavaScript to the battle page that:
   > 1. When the Battle button is clicked, gets both usernames from the inputs
   > 2. Validates both are filled (show error if not)
   > 3. Fetches both users' contribution data in parallel from our API
   > 4. Renders contribution graphs as colored grids — each day is a colored square using GitHub's color palette
   > 5. Shows a VS badge between the two users
   > 6. Displays username, total contributions, and date range for each user
   > 7. Handles loading states and errors
   > 8. Also triggers on Enter key in input fields.
   > 9. Simple UI for now that is already scaffolded.
   >
   > Use TypeScript interfaces for the contribution data structure.

<!-- track:vscode:start -->
3. Deja que Agent Mode trabaje en la implementación a través de `index.astro`.
4. Revisa los cambios propuestos en la vista de diff antes de aceptarlos.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Deja que Copilot CLI trabaje en la implementación a través de `src/pages/index.astro`.
5. Usa `/diff` para revisar los cambios generados y luego aprobalos.
<!-- track:cli:end -->

## Tarea 2: Prueba la batalla

> **⚠️ ¿No ves cambios?** Si la página de batalla no se ha actualizado, para el servidor de desarrollo (`Ctrl+C`) y reinícialo con `npm run dev`, luego recarga el navegador.

1. Introduce `octocat` y `torvalds` como dos usuarios y haz clic en **Battle**.
2. Deberías ver ambos gráficos de contribución renderizados lado a lado con cuadrículas de color.
3. Prueba los casos de error:
   - Deja uno o ambos campos vacíos y haz clic en Battle: debería aparecer un error de validación.
   - Introduce un nombre de usuario no válido: la app debe mostrar un error de la API.
4. Prueba pulsar **Enter** en cualquiera de los campos de entrada: debería iniciar la batalla igual que al hacer clic en el botón.

## Tarea 3: Itera con Copilot

Si algo no queda del todo bien, da a Copilot comentarios de seguimiento directamente. Por ejemplo:

- *"The contribution squares are too large, make them 12x12px"*
- *"Add a hover tooltip showing the date and contribution count"*
- *"The loading state needs a pulse animation"*

<!-- track:vscode:start -->
Agent Mode maneja cambios y iteraciones en varios archivos de forma natural. Cada nuevo prompt se apoya en la conversación anterior, así que puedes refinar la implementación incrementalmente sin empezar desde cero.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Las sesiones de Copilot CLI conservan el historial, así que cada prompt posterior se apoya en el anterior. Usa `/session` o `/context` si quieres inspeccionar lo que Copilot está llevando adelante, y `/review` después de una iteración más grande si quieres una pasada adicional para detectar errores o pulido.
<!-- track:cli:end -->

## Consejos para esta parte

- **Sé específico sobre lo que quieres** — requisitos claros generan mejores resultados.
- **Divide tareas grandes en prompts más pequeños** si Copilot se desvía del rumbo.
- **Revisa los cambios antes de aceptarlos** — el código generado es más rápido de inspeccionar que de reescribir más tarde.
- **Prueba la app inmediatamente después de cada pasada de implementación** para que los problemas se mantengan localizados.

## ✅ Parte 3 completada

Has aprendido cómo:

- Usar Copilot para **trabajos de implementación multiarchivo**
- **Iterar sobre resultados** con prompts de seguimiento específicos
- Manejar el **ciclo completo de la función**: implementación, revisión, prueba y refinamiento
