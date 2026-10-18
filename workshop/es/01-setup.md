# Parte 1: Configuración e ingeniería del contexto

---

En esta parte configurarás tu entorno de desarrollo **y** enseñarás a Copilot sobre el código base para que cada futuro prompt empiece con el contexto correcto.

## Sección 1: Configuración inicial

### Paso 1: Crea tu repositorio

1. Abre [github.com/copilot-dev-days/mona-mayhem](https://github.com/copilot-dev-days/mona-mayhem)
2. Crea tu propio repositorio de cualquiera de estas formas:
   - haciendo clic en **Use this template** → **Create a new repository**, o
   - haciendo fork del repositorio.
3. Nómbralo `my-mona-mayhem` y establece la visibilidad en **Public** (si lo creaste a partir de la plantilla)

<!-- track:vscode:start -->
### Paso 2: Elige tu entorno de desarrollo

#### Opción A: VS Code local

1. Abre VS Code y ejecuta **Git: Clone** → **Clone from GitHub**
2. Selecciona tu repositorio `my-mona-mayhem`
3. Cuando te lo pida, instala las **extensiones recomendadas**

#### Opción B: GitHub Codespaces

1. Abre tu repositorio en GitHub
2. Haz clic en **Code** → **Codespaces** → **Create codespace on main**
3. Espera a que el entorno se inicie y se instalen las dependencias

### Paso 3: Instala dependencias y arranca la app

1. Abre el terminal integrado en tu repositorio.
2. Instala dependencias:

   ```bash
   npm install
   ```

3. Inicia la app:

   ```bash
   npm run dev
   ```

> ✅ **La aplicación está ejecutándose en tu navegador.**
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Paso 2: Instala GitHub Copilot CLI

Usa la ruta de instalación que mejor se adapte a tu máquina:

- **npm (multiplataforma, requiere Node.js 22+)**

  ```bash
  npm install -g @github/copilot
  ```

- **Homebrew (macOS/Linux)**

  ```bash
  brew install copilot-cli
  ```

- **WinGet (Windows)**

  ```bash
  winget install GitHub.Copilot
  ```

### Paso 3: Inicia la app y autentica la CLI

1. Clona tu repositorio localmente y abre una terminal en la raíz del proyecto.
2. Instala dependencias e inicia la app:

   ```bash
   npm install
   npm run dev
   ```

3. Abre un **segundo terminal** en el mismo repositorio y lanza Copilot CLI:

   ```bash
   copilot
   ```

4. En la sesión interactiva, escribe:

   ```
   /login
   ```

5. Sigue las indicaciones del flujo del dispositivo y confirma que confías en el repositorio cuando la CLI te lo pida.

> ✅ **Ya tienes la vista previa de la app en un terminal y Copilot CLI listo en otro.**
<!-- track:cli:end -->

## Sección 2: Ingeniería de contexto

La ingeniería de contexto consiste en enseñar a la IA sobre tu código base. Cuanto mejor sea el contexto, mejor será cada respuesta futura.

<!-- track:vscode:start -->
### Tarea 1: Genera instrucciones del workspace con /init

Vamos a usar el comando integrado `/init` para generar un archivo de instrucciones del workspace para Copilot:

1. Abre **Copilot Chat** y escribe:

   ```
   /init simple instructions with a project overview, build/dev commands, and Astro best practices, (ignore the workshop).
   ```

2. Revisa el archivo generado: Copilot analizará tu proyecto y creará un `.github/copilot-instructions.md`.
3. Acepta los cambios y **haz commit** del archivo de instrucciones.

> **Resultado:** Todas las futuras solicitudes de Copilot ahora tienen un mapa de tu workspace incorporado.

### Tarea 2: Agentes en segundo plano

**Agente local en segundo plano:**

1. En el panel de chat, haz clic en **+** para un nuevo chat
2. En la parte inferior de la ventana verás que **Local** cambia a **Copilot CLI**
3. Escribe el siguiente prompt:

   > "Add linting rules for unused vars and improve code style; fix any errors"

4. Cuando termine, **Revisa y aplica** los cambios y archiva la sesión si quieres.

**Agente en la nube:**

1. En el panel de chat, haz clic en **+** para un nuevo chat
2. En la parte inferior de la ventana verás que **Local** cambia a **Cloud**

   > "Make the README more engaging as a landing page"

> **Resultado:** Se añadieron reglas de linting, se corrigieron errores y se mejoró el README, todo sin salir del editor.

### Tarea 3: Explora el proyecto

Abre **Copilot Chat** en **Ask mode** e intenta estos prompts:

- `"Explain the architecture of this project"`
- `"What files are in the src directory and what do they do?"`
- `"What would I need to build to make the Battle button work?"`

> 💡 Usa **@workspace** para dar a Copilot contexto global del proyecto y obtener respuestas más precisas.
<!-- track:vscode:end -->

<!-- track:cli:start -->
### Tarea 1: Genera instrucciones del repositorio con /init

Vamos a usar `/init` para generar un archivo de instrucciones del workspace para Copilot:

1. En Copilot CLI, escribe:

   ```
   /init simple instructions with a project overview, build/dev commands, and Astro best practices, (ignore the workshop).
   ```

2. Revisa el archivo generado: Copilot analizará tu proyecto y creará un `.github/copilot-instructions.md`.
3. Haz commit del archivo de instrucciones.

> **Resultado:** Las futuras sesiones de la CLI heredan automáticamente instrucciones específicas del repositorio desde `.github/copilot-instructions.md`.

### Tarea 2: Ajusta tu entorno de CLI

Practica los controles de la CLI que harán más suaves los siguientes pasos:

1. Ejecuta `/help` para revisar los comandos disponibles.
2. Usa `/model` para ver los modelos disponibles para ti.
3. Si Copilot ha aprendido demasiadas aprobaciones durante tus experimentos, reinícialas con:

   ```
   /reset-allowed-tools
   ```

4. Si tu repositorio vive dentro de un directorio padre más grande, usa `/add-dir PATH` para ampliar explícitamente el espacio de trabajo permitido.

> 💡 La documentación de la CLI recomienda instrucciones personalizadas breves y permisos explícitos para que Copilot siga siendo rápido y predecible.

### Tarea 3: Explora el proyecto desde la terminal

Prueba estos prompts dentro de Copilot CLI:

- `Give me an overview of this project.`
- `@src/pages/api/contributions/[username].ts What is this file for and what needs to be built here?`
- `@src/pages/index.astro What exists here and what would I need to add to build the battle page?`

Si quieres una respuesta rápida fuera de la sesión interactiva, prueba:

```bash
copilot -p "Summarize the architecture of this repo in 5 bullet points"
```

> **Resultado:** Ya tienes instrucciones, conocimiento de comandos y una idea de cómo introducir archivos en el contexto de Copilot CLI.
<!-- track:cli:end -->

## ✅ Parte 1 completada

Has aprendido cómo:

- **Configurar** el repositorio y el entorno local de desarrollo
- **Generar instrucciones** con `/init` para que Copilot entienda tu proyecto y dirección de diseño
- **Establecer un hábito de revisión** antes de aplicar cambios generados
- **Explorar la base de código** con prompts ricos en contexto
