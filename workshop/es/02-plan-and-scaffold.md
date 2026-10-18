# Parte 2: Planificación y estructura

---

Antes de escribir código, usemos los flujos de planificación de Copilot para pensar en la arquitectura. Planificar antes ayuda a diseñar mejores sistemas y da a Copilot el contexto necesario para generar código de mayor calidad.

## Tarea 1: Planifica la arquitectura de la API

<!-- track:vscode:start -->
1. Cambia a **Plan** mode en Copilot Chat (haz clic en el selector del modo en la parte inferior del panel del chat)
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Entra en **plan mode** en Copilot CLI pulsando **Shift+Tab** hasta que cambie el modo, o usando `/plan`.
<!-- track:cli:end -->

2. Escribe este prompt:

   ```
   I need to build a server-side API proxy that fetches GitHub contribution data
   for any username. The endpoint is https://github.com/{username}.contribs which
   returns JSON. We need to bypass CORS restrictions. Plan the implementation
   including the route structure, error handling, and caching strategy.
   ```

3. **Revisa el plan**: aquí es donde la planificación brilla. No aceptes la primera respuesta a ciegas:
   - Pregunta aclaraciones sobre cualquier cosa confusa
   - Sugiere cambios si algo no parece correcto
   - Itera hasta que estés satisfecho con el enfoque

<!-- track:vscode:start -->
4. Cuando estés satisfecho con el plan, pide a Copilot que lo implemente: cambia a **Agent** mode y dile que siga adelante.
<!-- track:vscode:end -->

<!-- track:cli:start -->
4. Cuando estés satisfecho con el plan, pide a Copilot CLI que proceda con la implementación.
5. Revisa los cambios resultantes con `/diff` antes de aprobarlos.
<!-- track:cli:end -->

6. **Resultado:** ahora deberías tener una ruta de API creada en:

   ```
   src/pages/api/contributions/[username].ts
   ```

## Tarea 2: Prueba la API

> **⚠️ ¿No ves cambios?** Si el servidor de desarrollo no detecta la nueva ruta, deténlo (`Ctrl+C`) y reinícialo con `npm run dev`.

1. Asegúrate de que tu servidor de desarrollo está ejecutándose y prueba el endpoint:

   ```bash
   curl http://localhost:4321/api/contributions/octocat
   ```

2. Deberías ver JSON con los datos de contribución devueltos.
3. Prueba también el caso de error: intenta un nombre de usuario no válido y confirma que devuelve una respuesta de error apropiada.

## Tarea 3: Planifica la página de batalla

<!-- track:vscode:start -->
1. Mantente en **Plan** mode y escribe este prompt:
<!-- track:vscode:end -->

<!-- track:cli:start -->
1. Mantente en plan mode (o ejecuta `/plan`) y escribe este prompt:
<!-- track:cli:end -->

   ```
   Now I need the main page. Plan a battle page for "Mona Mayhem - GitHub
   Contribution Battle Arena" with: two username inputs (Player 1 and Player 2),
   a battle button, and a results area. Keep the UI simple — don't over-engineer
   the layout or styling at this stage. Plan the HTML structure, basic styling,
   and how the battle interaction will work.
   ```

2. **Revisa e itera** sobre el plan: haz preguntas, sugiere cambios y refina el enfoque.

<!-- track:vscode:start -->
3. Cuando estés satisfecho, cambia a **Agent** mode y deja que Copilot construya la página.
<!-- track:vscode:end -->

<!-- track:cli:start -->
3. Cuando estés satisfecho, pide a Copilot CLI que implemente el plan aprobado.
4. Usa `/diff` otra vez para inspeccionar el HTML y el CSS de andamiaje antes de aprobar.
<!-- track:cli:end -->

## Tarea 4: Verifica el andamiaje

> **⚠️ ¿No ves cambios?** Si la página no se ve bien o no ha actualizado, detén el servidor (`Ctrl+C`) y reinícialo con `npm run dev`, luego recarga el navegador.

1. Abre http://localhost:4321 en tu navegador.
2. Deberías ver:
   - El título del juego
   - Dos campos de entrada de usuario (Jugador 1 y Jugador 2)
   - Un botón de batalla
3. El botón aún no funcionará: es lo esperado. Todavía no hemos conectado la lógica de interacción. Eso llega más adelante.

---

## ✅ ¡Parte 2 completada!

Has aprendido cómo:

- **Planificar antes de codificar** en lugar de saltar directamente a la implementación
- **Iterar sobre los planes** hasta que la arquitectura se sienta bien
- **Pasar del plan a la implementación** con un flujo más claro y seguro
