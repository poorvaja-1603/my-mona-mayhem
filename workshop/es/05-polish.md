# Parte 5: Pulido y trabajo en paralelo

---

Ahora que la app funciona y se ve genial, es el momento de pulirla. Esta parte trata de dividir el trabajo para mejorar la capacidad de respuesta, el manejo de errores y la calidad sin hacer todo en un único bucle serial.

<!-- track:vscode:start -->
## Tarea 1: Agente en segundo plano para diseño responsive

1. En el panel de chat, haz clic en **+** para un nuevo chat
2. En la parte inferior de la ventana verás que **Local** cambia a **Copilot CLI**
3. Escribe este prompt:

   ```
   Add responsive CSS media queries: at 1024px switch comparison to single column,
   at 768px reduce font sizes, stack inputs vertically, and make the layout
   mobile-friendly. Also improve keyboard accessibility — ensure tab order works,
   Enter triggers battle, and focus states are visible.
   ```

4. Déjalo ejecutar de forma independiente: no necesitas vigilarlo.
5. Cuando termine, **revisa** los cambios y haz clic en **Apply**.

## Tarea 2: Agente en segundo plano para UX de errores

1. Inicia otro agente en segundo plano.
2. Escribe este prompt:

   ```
   Improve the error experience: add a shake animation for errors, styled error
   messages with red (#ff3366) neon glow effects matching the arcade theme, and
   better input validation feedback. Show clear error messages when usernames are
   empty or invalid.
   ```

3. Revisa los cambios cuando el agente termine y haz clic en **Apply**.

## Tarea 3: Agente en la nube para variaciones (opcional)

1. En el panel de chat, haz clic en **+** para un nuevo chat
2. En la parte inferior de la ventana verás que **Local** cambia a **Cloud**
3. Escribe este prompt:

   ```
   Create an alternative color theme for the battle page — keep the retro arcade
   style but use blue (#00f5ff) and orange (#ff6b35) instead of green and purple.
   Create it as a CSS custom property theme that could be toggled.
   ```

4. Comprueba las **sesiones del agente** para seguir el progreso.
5. Revisa la variación de diseño en la PR que crea el agente en la nube.

## Tarea 4: Verifica todo
<!-- track:vscode:end -->

<!-- track:cli:start -->
## Tarea 1: Divide el trabajo con `/fleet`

En Copilot CLI, usa `/fleet` para dividir el trabajo entre subagentes en paralelo y luego revisa el resultado combinado:

```text
/fleet Improve the app in parallel:
1. Add responsive CSS media queries so the comparison collapses to one column at 1024px and the inputs stack on small screens.
2. Improve keyboard accessibility and focus visibility.
3. Improve the error experience with stronger validation feedback and arcade-style neon error states.
```

Deja que la CLI orqueste el trabajo y luego inspecciona el resultado combinado con `/diff` antes de aprobar nada.

## Tarea 2: Delega una variación (opcional)

Si quieres probar un flujo asíncrono en la nube, delega una variación de diseño:

```text
/delegate Create an alternative color theme for the battle page that keeps the retro arcade look but swaps in blue (#00f5ff) and orange (#ff6b35). Make it easy to toggle.
```

Esa tarea delegada debería crear una pull request que puedas revisar por separado mientras sigues trabajando localmente.

## Tarea 3: Ejecuta una revisión agentic

Antes de cerrar, pide a Copilot CLI una pasada de revisión:

```text
/review Focus on potential bugs, accessibility issues, and UX regressions in the current branch.
```

Revisa los resultados, corrige lo que estés de acuerdo y vuelve a ejecutar `/diff` para quedar claro sobre qué ha cambiado.

## Tarea 4: Verifica todo
<!-- track:cli:end -->

> **⚠️ ¿No ves cambios?** Si alguna de las mejoras de pulido no se muestra, detén el servidor (`Ctrl+C`) y reinícialo con `npm run dev`, luego haz una recarga forzada (`Ctrl+Shift+R`) en tu navegador.

Pasa por estos escenarios de prueba para asegurarte de que todo funciona:

| Prueba | Resultado esperado |
|--------|--------------------|
| Campos vacíos, haz clic en Battle | Error con estilo y animación de sacudida |
| Usuarios válidos | Se muestran los gráficos de contribución |
| Nombre de usuario no válido | Error de la API con estilo retro |
| Tecla Enter en el input | Dispara la batalla |
| Anchura móvil | Diseño responsive en una sola columna |
| Cuadrados de contribución al pasar el ratón | Tooltip con fecha y conteo |

Genera la versión de producción y confirma que no hay errores:

```bash
npm run build && npm run preview
```

Cuando todo se vea bien, haz commit de tu código funcionando.

---

## ✅ ¡Parte 5 completada!

**Lo que aprendiste:**

- Divide el trabajo de pulido en **tareas paralelas más pequeñas**
- Revisa los cambios generados antes de fusionarlos en tu rama principal
- Usa Copilot para **pasadas de calidad y exploraciones opcionales**, no solo para la implementación
