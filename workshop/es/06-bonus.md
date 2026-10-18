# 🎉 Bonus y extensiones

---

¡Ya has construido una app de GitHub Battle completamente funcional! Ahora es el momento de ir más allá con **retos abiertos**.

<!-- track:vscode:start -->
Usa **Agent Mode** para todos estos retos: describe lo que quieres y deja que Copilot te ayude a construirlo.
<!-- track:vscode:end -->

<!-- track:cli:start -->
Usa Copilot CLI para todos estos retos: mezcla `@file`, `/plan`, modo normal y `/review` según haga falta.
<!-- track:cli:end -->

---

## 🏆 Reto 1: Banner ganador

Después de que ambos gráficos de contribución carguen, compara los totales y muestra un anuncio dinámico del ganador.

**Qué construir:**
- Compara el total de contribuciones de ambos usuarios
- Muestra **"🏆 {username} WINS! 🏆"** con un estilo celebratorio si hay un ganador claro
- Muestra **"🤝 IT'S A TIE! 🤝"** si las contribuciones son iguales
- Añade animación o confeti para un toque extra

**Sugerencia de prompt:**
> After both users' contribution data loads, compare total contributions and display a winner banner. Show "🏆 {username} WINS! 🏆" if one user has more contributions, or "🤝 IT'S A TIE! 🤝" if equal. Make it visually exciting with CSS animations.

---

## 🏆 Reto 2: Contador de rachas

Calcula y muestra la racha consecutiva más larga de contribuciones de cada usuario.

**Qué construir:**
- Analiza los datos de contribución día a día
- Busca la ejecución más larga de días consecutivos con al menos una contribución
- Muestra el conteo de la racha de forma destacada para cada usuario
- Destaca quién tiene la racha más larga

**Sugerencia de prompt:**
> Add a streak counter feature that analyzes each user's contribution data to find their longest consecutive contribution streak. Display "🔥 Longest Streak: X days" for each user below their contribution graph.

---

## 🏆 Reto 3: Historial de batallas

Guarda los resultados de las batallas para que los usuarios puedan ver sus enfrentamientos anteriores.

**Qué construir:**
- Guarda cada resultado de batalla en `localStorage` (nombres de usuario, totales, ganador, marca temporal)
- Añade una sección **"Recent Battles"** debajo del área principal de batalla
- Muestra las últimas 5–10 batallas con sus resultados
- Añade un botón **"Clear History"**

**Sugerencia de prompt:**
> Save battle results to localStorage after each comparison. Add a "Recent Battles" section that displays the last 10 battles with usernames, contribution totals, the winner, and when the battle happened. Include a "Clear History" button.

---

## 🏆 Reto 4: Efectos de sonido

Añade efectos de sonido retro arcade usando la Web Audio API: no hace falta archivos externos.

**Qué construir:**
- Sonido de **coin insert** cuando se hace clic en el botón "Battle!"
- Sonido de **power up** cuando los resultados cargan correctamente
- Sonido de **explosion** cuando ocurre un error (usuario no encontrado, fallo de API)
- Un botón de silencio/activar sonido

**Sugerencia de prompt:**
> Add retro arcade sound effects using the Web Audio API (no audio files). Play a coin insert sound on battle start, a power-up sound when results load, and an explosion sound on errors. Generate the sounds programmatically with oscillators and gain nodes. Include a mute toggle.

---

## 🏆 Reto 5: Secuencia animada de batalla

Genera suspense con una cuenta atrás dramática antes de revelar los resultados.

**Qué construir:**
- Cuando se haga clic en "Battle!", muestra una superposición a pantalla completa
- Anima: **"3..."** → **"2..."** → **"1..."** → **"⚡ FIGHT! ⚡"**
- Luego revela los gráficos de contribución con una entrada dramática
- Usa animaciones CSS o temporizadores en JavaScript

**Sugerencia de prompt:**
> Add an animated battle sequence when the user clicks "Battle!". Show a countdown overlay: "3..." then "2..." then "1..." then "⚡ FIGHT! ⚡" with each step lasting about 1 second. After the countdown, reveal the results with a slide-in animation.

---

## 🏆 Reto 6: Leyenda de contribuciones

Añade una escala de colores que coincida con la paleta del gráfico de contribución.

**Qué construir:**
- Una leyenda horizontal con niveles de intensidad de contribución
- Etiquetas de **"Less"** a **"More"**
- Usa la paleta real de colores de la respuesta de la API de contribuciones
- Colócala cerca de los gráficos de contribución

**Sugerencia de prompt:**
> Add a contribution legend below the graphs showing the color scale from the API's color palette. Display a row of colored squares ranging from "Less" (lightest) to "More" (darkest), matching the actual contribution level colors returned by the API.

---

## 🏆 Reto 7: Compartir resultados

Permite a los usuarios compartir sus resultados de batalla con un solo clic.

**Qué construir:**
- Un botón **"📋 Share Results"** que aparece después de una batalla
- Copia un resumen de texto formateado al portapapeles
- Incluye nombres de usuario, totales de contribución y el ganador
- Muestra un breve mensaje de confirmación **"Copied!"**

**Sugerencia de prompt:**
> Add a "📋 Share Results" button that copies a formatted battle summary to the clipboard. The summary should include both usernames, their contribution totals, and who won. Use the Clipboard API and show a brief "Copied to clipboard!" confirmation.

---

<!-- track:cli:start -->
## 💻 Extras de CLI

Si quieres explorar más la funcionalidad de Copilot CLI después del taller principal:

- Usa `copilot -p "Write a conventional commit message for the current git diff"` para generar una respuesta lista para pegar en Git.
- Ejecuta `/share file` para guardar tu sesión como Markdown para consultarla más tarde.
- Usa `/session` y `/session plan` para inspectar cómo la CLI está siguiendo tu trabajo actual.
<!-- track:cli:end -->

## 🎊 ¡Felicidades!

¡Has completado el taller **Mona Mayhem: GitHub Battle**! Esto es lo que has conseguido:

### Qué has construido

- ✅ Una **aplicación web completa de varias páginas** a partir de una especificación de diseño
- ✅ Una **landing page** con tematización retro arcade y diseño responsive
- ✅ Un **arena de batalla** que obtiene y compara datos reales de GitHub
- ✅ **Gráficos de contribución interactivos** con niveles de actividad codificados por color
- ✅ **Manejo de errores, estados de carga y mejoras de accesibilidad**
- ✅ **Diseño responsive** que funciona en dispositivos diversos

### Qué has practicado

| Habilidad | Qué has practicado |
|-----------|--------------------|
| **Ingeniería de contexto** | Dar a Copilot los archivos, instrucciones y restricciones adecuadas |
| **Planificación** | Generar y refinar planes de implementación antes de codificar |
| **Codificación agentic** | Delegar trabajo multiarchivo y multipaso a Copilot |
| **Iteración de diseño** | Empezar desde una dirección visual y refinar hasta un resultado pulido |
| **Disciplina de revisión** | Inspeccionar los cambios generados por IA antes de hacer commit |

### 🚀 Sigue adelante

- 📺 [Canal de YouTube de VS Code](https://www.youtube.com/@code) — consejos, tutoriales y novedades
- 📖 [Documentación de GitHub Copilot](https://docs.github.com/en/copilot) — documentación oficial y guías
- 💻 [Documentación de GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli) — instalación, comandos con barra y mejores prácticas
- 🌟 [Awesome GitHub Copilot](https://github.com/stefanprodan/awesome-github-copilot) — recursos y ejemplos de la comunidad
- 🛠️ [Copilot Dev Days Workshops](https://github.com/github/copilot-dev-days) — más talleres prácticos como este

---

## 🙏 Gracias

¡Gracias por participar en este taller! Has experimentado cómo GitHub Copilot puede acelerar cada fase del desarrollo: desde la planificación y el diseño hasta la implementación y el pulido. Las técnicas que has practicado aquí se aplican a cualquier proyecto, cualquier framework y cualquier escala. ¡Ahora ve y construye algo increíble! 🚀
