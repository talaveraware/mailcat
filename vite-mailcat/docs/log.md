# Code Log

Este archivo contiene el registro (log) de desarrollo del proyecto. Su objetivo es mantener un historial cronológico y estructurado de las decisiones técnicas, implementaciones, corrección de errores y características añadidas a lo largo del tiempo.

## Formato de cada entrada

Para mantener la consistencia y facilitar la lectura, cada nueva entrada en este documento debe seguir estrictamente este formato:

1. **Encabezado (H2):** Debe comenzar con la fecha en formato `DD-MM-YY` seguida de un guion y una descripción general de los cambios del día. (Ejemplo: `## 12-02-26 - Starting the code log`).
2. **Tareas Principales:** Usar una lista de viñetas (`- `) para describir las tareas mayores hechas durante ese día de manera resumida.
3. **Subtareas / Checklist:** Utilizar listas anidadas con casillas de verificación de Markdown para detallar los pasos y su estado:
   - `- [x]` para tareas completadas.
   - `- [ ]` para tareas pendientes.
   - `- [-]` para tareas en las que se empezó a trabajar pero aún no concluyen.
4. **Separación:** Al finalizar todas las tareas de una entrada, se debe añadir un separador de línea (`---`) como cierre antes de la siguiente fecha.

### Ejemplo visual:

```markdown
## 12-02-26 - Starting the code log

- Started the project in vite, the goal is create simple components such as login form, dashboard, etc. Components that we can re use in the future.

- Install tailwindcss and @tailwindcss/vite via npm.
  - [x] Create the vite project.
  - [x] Install tailwindcss and @tailwindcss/vite via npm.

---
```

---

## 24-03-26 - Initial project setup

- [x] Initial project setup
- [x] Cleaned up unnecessary files
- [x] Set up basic project structure
- [x] Generate SRS document
  - [x] Create the Software Requirements Specification (SRS.md) document for MailCat.
    - [x] Document the project summary and core goals.
    - [x] Define the project architecture (Vite, JS, MVC) and independent components.
    - [x] Document the AI core features powered by Gemini 3 Flash.
    - [x] Establish backend and data management guidelines for the MVP.
    - [x] Outline the styling guide reference.

---

## 31-03-26 - Definición de Arquitectura Frontend y Actualización de Agent Skill

- Establecimiento de la Arquitectura estricta MVC en Frontend y adaptación de skills de IA.
  - [x] Creación del documento de arquitectura (`architecture.md`) con especificaciones de enrutamiento (SPA), almacenamiento exclusivo (LocalStorage) y convenciones CSS.
  - [x] Definición del patrón arquitectónico en el documento, requiriendo 4 archivos clave por componente (Model, View, Controller, Factory).
  - [x] Estandarización obligatoria del renderizado seguro mediante inyección de strings generados por `DOMParser`.
  - [x] Actualización de la instrucción del agente (`.agents/skills/apply_mvc_pattern/SKILL.md`) para acatar estrictamente todas las nuevas capas arquitectónicas documentadas.

---

## 14-04-26 - Integración de Sistema de Diseño (Mobile First & Dark Mode)

- Integración del diseño visual desde Google Stitch hacia la SPA, configurando CSS estricto y estructura DOM para modo oscuro.
  - [x] Extracción de tokens de colores de diseño (Slate & Indigo) hacia variables CSS en formato Dark Mode (`style.css`).
  - [x] Implementación y estructuración de layout `Mobile First` siguiendo la directriz de "The Intelligent Workspace" (e.g. no-line rules).
  - [x] Remplazo de estructura DOM estática en `main.js` por el template Dark Mode exportado de Stitch.
  - [x] Configuración de tipografía Inter e iconos de Material Symbols integrados en `index.html`.
  - [x] Validación visual y testing de responsividad en el preview local con subagente de navegador.

---

## 27-04-26 - Implementation of Smart Code Log Skill and Rules

- Analyzed and redesigned the project's chronological logging system.
  - [x] Conducted in-depth analysis of `docs/log.md` structure and formatting.
  - [x] Developed and implemented the `smart_code_log` skill with conditional append logic.
  - [x] Established an "always_on" project rule to mandate the use of the new logging skill.
  - [x] Removed obsolete logging rules to ensure system integrity and prevent conflicts.

- Implemented the Sidebar component using strict MVC architecture.
  - [x] Created the Sidebar directory under `src/components`.
  - [x] Developed `SidebarModel.js` for theme state management.
  - [x] Developed `SidebarView.js` using `DOMParser` for secure rendering.
  - [x] Developed `SidebarController.js` for unidirectional data flow.
  - [x] Created `SidebarFactory.js` for dependency injection.
  - [x] Refactored `main.js` to mount the component dynamically and removed static HTML/logic.

---

## 28-04-26 - Sidebar Component Restructuring

- Applied the `create_component_structure` skill to the Sidebar component and relocated its Factory.
  - [x] Conducted an in-depth analysis of the `src/components/Sidebar` component.
  - [x] Moved MVC files (`SidebarController.js`, `SidebarModel.js`, `SidebarView.js`) to their corresponding subdirectories.
  - [x] Created the global `src/factory/` directory and moved `SidebarFactory.js` there.
  - [x] Updated path references and imports in `src/main.js` and `src/factory/SidebarFactory.js`.
  - [x] Verified successful compilation and ensured component functionality remained intact.

---

## 04-05-26 - SPA Router Implementation, Dashboard Component and Page Skill

- Expanded the technical documentation to detail the Single Page Application (SPA) behavior.
  - [x] Updated `docs/architecture.md` with an in-depth explanation of the custom Router.
  - [x] Documented the `History API` management and the `popstate` event logic.
  - [x] Detailed the dynamic component injection process into the `#app` container without page reloads.
  - [x] Reintroduced and defined the `Factory` layer in the MVC structure summary for consistency.

- Implemented the Dashboard component using strict MVC architecture and SPA routing.
  - [x] Created the Dashboard directory structure under `src/components/Dashboard` (Controller, Model, View, Icons).
  - [x] Developed `DashboardModel.js`, `DashboardView.js` (using DOMParser), and `DashboardController.js`.
  - [x] Created `src/factory/dash_factory.js` for dependency injection and Sidebar integration.
  - [x] Refactored `src/main.js` to initialize the SPA Router using a route map based on `main.example.js`.
  - [x] Fixed a critical bug in `src/router/router.js` ensuring returned elements from routes are correctly appended to the `#app` container.

- Developed a new system skill and rule for creating navigation page components.
  - [x] Created the `create_page_component` skill in `.agents/skills/create_page_component/SKILL.md`.
  - [x] Established the mandatory rule `use_page_component_skill.md` to standardize page creation and prevent direct DOM injection errors in `main.js`.

---

## 05-05-26 - EntradaUsuario Component and Extraction Skill

- Extracted the 'Input Draft' section from the Dashboard into a standalone `EntradaUsuario` component using MVC and Factory patterns.
  - [x] Analyzed `DashboardView.js` and `dash_factory.js` architecture.
  - [x] Created `src/components/EntradaUsuario/` structure (Model, View, Controller).
  - [x] Extracted HTML securely to `EntradaUsuarioView.js` without altering CSS layout.
  - [x] Implemented `src/factory/EntradaUsuarioFactory.js` for injection.
  - [x] Updated `DashboardView.js` and `dash_factory.js` to inject the new component seamlessly.

- Developed an automated system skill and rule for extracting dashboard components.
  - [x] Created the `extract_dashboard_component` skill in `.agents/skills/extract_dashboard_component/SKILL.md` enforcing strict MVC application, visual checks, and DOM structure preservation.
  - [x] Created the mandatory project rule `use_extract_dashboard_component_skill.md` to trigger on Dashboard component manipulation requests.

- Implemented real-time word and character counter for the `EntradaUsuario` component.
  - [x] Modified `EntradaUsuarioView.js` to include element getters and a `updateCounterText` method.
  - [x] Updated the initial UI state of the counter to "0 palabras / 0 caracteres".
  - [x] Implemented the counting logic in `EntradaUsuarioController.js` triggered by the `input` event for real-time updates.
  - [x] Configured word counting to handle whitespace accurately and reflect text additions/deletions.

---

## 06-05-26 - Implementation of Clear All functionality and Voice Dictation for EntradaUsuario

- Developed the feature to clear the input field in the `EntradaUsuario` component.
  - [x] Added `clearButton` getter in `EntradaUsuarioView.js` to access the `#clear-all` button.
  - [x] Updated `EntradaUsuarioController.js` to bind a click event to the clear button.
  - [x] Implemented `clearInput()` method in the controller to reset the textarea and the counter.

- Implemented voice-to-text dictation using the Web Speech API in the `EntradaUsuario` component.
  - [x] Added `startDictation` and `stopDictation` logic to `EntradaUsuarioModel.js` with robust error handling.
  - [x] Implemented dynamic icon switching (microphone to animated wave) in `EntradaUsuarioView.js`.
  - [x] Integrated dictation logic in `EntradaUsuarioController.js`, including success/failure flows and real-time counter updates.
  - [x] Designed and implemented CSS keyframe animations for the voice wave icon in `style.css`.
  - [x] Fixed a bug where the microphone icon remained in the "wave" state when stopping dictation by cleaning up event handlers and UI state synchronously.

---
## 13-05-26 - CardOpciones Component Extraction

- Encapsulated the original `#cardOptions` UI into a new `CardOpciones` component using MVC and Factory patterns.
  - [x] Created `CardOpciones/Icons/svg_icons.js` with icon templates.
  - [x] Created `CardOpciones/Model/CardOpcionesModel.js` (empty model for future logic).
  - [x] Created `CardOpciones/View/CardOpcionesView.js` rendering the exact original markup, exposing getters for the 7 buttons and `bind*Click` methods.
  - [x] Created `CardOpciones/Controller/CardOpcionesController.js` binding all button clicks with stub handlers.
  - [x] Created `src/factory/CardOpcionesFactory.js` following the same static factory pattern.
  - [x] Updated `DashboardView.js` to add `$cardOpcionesRoot` and replace the original `#cardOptions` block with `<div id="card-opciones-root"></div>`.
  - [x] Updated `dash_factory.js` to import and inject `CardOpcionesFactory` into the new placeholder.

