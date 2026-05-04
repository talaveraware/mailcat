---
name: create_page_component
description: Skill estricta para crear componentes de tipo "Página de Navegación" (ej. Dashboard, Settings, Soporte) integrando el patrón MVC, el enrutador global y previniendo errores de renderizado DOM.
---

# Creación de Componentes de Página (SPA Navigation Pages)

Cuando el usuario solicite crear una nueva vista o página principal para la aplicación (ej. "Crea el componente Borradores", "Página de Estadísticas"), **DEBES** seguir rigurosamente estos pasos para asegurar su correcta integración con el Router y la Arquitectura MVC.

## 1. Aplicación de Estructura Base (Pre-requisitos)
Una "Página" sigue siendo un componente en este proyecto. Por ende:
1. **DEBES** solicitar al usuario el nombre (PascalCase) e invocar mentalmente la regla `use_component_structure_skill` para crear las carpetas `Controller`, `Model`, `View` y `Icons` en `src/components/{NombrePagina}/`.
2. **DEBES** aplicar las reglas establecidas en `apply_mvc_pattern` para la lógica interna de la triada MVC.

## 2. El Factory de Página (Ubicación y Ensamblaje)
A diferencia de los componentes menores, las fábricas (Factories) de las páginas principales y elementos estructurales (como el Sidebar) se centralizan globalmente.
- **Ubicación:** Crea el factory en `src/factory/{nombre}_factory.js` (ej. `borradores_factory.js`).
- **Inyección de Layout (Sidebar):** El factory es el responsable absoluto de ensamblar la página. Si la vista contiene el contenedor `<div id="sidebar-root">`, el Factory de la página **DEBE** importar e invocar `SidebarFactory.create(view.$sidebarRoot)`.
- **Retorno Limpio (CRÍTICO):** El método asíncrono creador del Factory **NUNCA** debe inyectar directamente la vista al documento. Únicamente ensambla y retorna el nodo principal.
  ```javascript
  // Correcto
  return { element: view.root };
  ```

## 3. Renderizado de la Vista (View)
- Al igual que en todos los componentes, la vista debe usar de forma obligatoria `DOMParser`.
- El método de renderizado debe retornar el nodo raíz de la plantilla HTML (usualmente un contenedor general), utilizando `doc.body.firstElementChild;`.
- La vista debe capturar y exponer explícitamente sus contenedores secundarios, por ejemplo: `this.$sidebarRoot = this.root.querySelector('#sidebar-root');`.

## 4. Cableado del Enrutador en `src/main.js` (Lección Aprendida)
Toda nueva página debe registrarse en el enrutador global.
- Abre y edita `src/main.js`.
- Importa el nuevo Factory de la página.
- Agrega la ruta al objeto `routes`.
- **PREVENCIÓN DE ERRORES (CRÍTICO):** Un error histórico común es intentar que el `main.js` adjunte la vista al DOM explícitamente (`document.getElementById("app").append(element)`). **ESTO ESTÁ PROHIBIDO PARA PÁGINAS**.
- El `router.js` interno es el único encargado de montar la vista en `<div id="app">`. La función de ruta en `main.js` se debe limitar únicamente a retornar el `element`:
  ```javascript
  // main.js - Objeto routes
  "/borradores": async () => {
    const { element, modalError } = await BorradoresFactory.createPage();
    if (modalError) document.body.append(modalError); // Los modales globales sí van al body
    return element; // El router se encargará de inyectar 'element' en #app
  }
  ```

## 5. Resumen de Ejecución Correcta
1. Crear Carpetas (Controller, Model, View, Icons).
2. Crear MVC en `src/components/{Página}/`.
3. Crear Factory en `src/factory/` (Retornando `element`).
4. Modificar `src/main.js` añadiendo la ruta (Retornando `element` sin hacer append explícito).
