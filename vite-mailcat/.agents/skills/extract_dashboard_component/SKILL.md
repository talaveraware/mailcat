---
name: extract_dashboard_component
description: Skill para extraer bloques HTML específicos de DashboardView.js hacia componentes MVC independientes y reinyectarlos sin alterar diseño ni funcionalidad.
---

# Extracción de Componentes del Dashboard

Cuando el usuario te solicite crear, generar, mover o extraer un nuevo componente que sea parte de la vista del componente `Dashboard` (específicamente de `DashboardView.js`), **DEBES** ejecutar esta skill siguiendo estrictamente los siguientes pasos y restricciones.

## 1. Preguntas Obligatorias (MANDATORY)

Antes de comenzar cualquier modificación, **DEBES** preguntar al usuario:
1. ¿Cómo se va a llamar el nuevo componente?
2. ¿Cuál es el identificador exacto (ej. el atributo `id` o las clases principales) del contenedor `<div>` o cualquier otra etiqueta que se vaya a mover del archivo `vite-mailcat/src/components/Dashboard/View/DashboardView.js` a la vista del nuevo componente?

**ESTO ES MANDATORIO Y NO NEGOCIABLE.** No asumas estos valores.

## 2. Aplicación de Reglas y Skills (MANDATORY)

**DEBES** asegurarte de ocupar cualquier regla de proyecto o skill disponible para cumplir la tarea (por ejemplo, la skill `apply_mvc_pattern` para garantizar que el nuevo componente siga estrictamente la arquitectura MVC y Factory). **ESTO ES MANDATORIO Y NO NEGOCIABLE.**

## 3. Preservación de Funcionalidad (MANDATORY)

**DEBES** asegurarte de **NO** modificar ni alterar ninguna otra funcionalidad. El layout original en la grilla (ej. `col-span-12 lg:col-span-7`) donde habitaba el bloque debe permanecer inalterado, inyectando un contenedor vacío (ej. `<div id="nuevo-componente-root"></div>`) en su lugar. La vista del nuevo componente debe llevarse **exactamente** el mismo HTML y clases del contenedor extraído. **ESTO ES MANDATORIO Y NO NEGOCIABLE.**

## 4. Proceso de Implementación (Basado en Historial de Éxito)

Al implementar, basate en los siguientes aprendizajes e historial de análisis y tareas:

### A. Tareas y Análisis Previos
- **Análisis:** Siempre revisa `DashboardView.js` para comprender las clases CSS del contenedor a mover y asegúrate de no alterarlas ni agregar clases como `w-full h-full` por error (error que ocurrió y fue revertido previamente). Analiza `dash_factory.js` y `SidebarFactory.js` para emular exactamente el patrón de inyección.
- **Carpetas/Archivos creados:** Se debe crear la estructura `Model`, `View`, `Controller` en `vite-mailcat/src/components/{NombreComponente}/`, más su `Factory.js` en `vite-mailcat/src/factory/`.

### B. Ejemplos de Código Críticos

**1. El contenedor que se mueve:**
```html
<!-- En DashboardView.js, este bloque se extrae por completo -->
<div id="identificador-dado-por-usuario" class="clases-originales-intactas">
  <!-- todo el contenido interno -->
</div>
```

**2. La Vista del Nuevo Componente:**
```javascript
export class NuevoComponenteView {
  constructor(rootElement) {
    this.$root = rootElement;
  }
  render() {
    const template = `
      <div id="identificador-dado-por-usuario" class="clases-originales-intactas">
        <!-- HTML exacto movido desde DashboardView.js -->
      </div>
    `;
    const parser = new DOMParser();
    const doc = parser.parseFromString(template, 'text/html');
    this.$root.appendChild(doc.body.firstElementChild);
  }
}
```

**3. El Factory:**
```javascript
import { NuevoComponenteModel } from '../components/NuevoComponente/Model/NuevoComponenteModel.js';
import { NuevoComponenteView } from '../components/NuevoComponente/View/NuevoComponenteView.js';
import { NuevoComponenteController } from '../components/NuevoComponente/Controller/NuevoComponenteController.js';

export class NuevoComponenteFactory {
  static create(rootElement) {
    const model = new NuevoComponenteModel();
    const view = new NuevoComponenteView(rootElement);
    view.render();
    const controller = new NuevoComponenteController(model, view);
    return { model, view, controller };
  }
}
```

**4. Modificación e Inyección:**
```javascript
// En DashboardView.js (template)
<div id="nuevo-componente-root"></div>

// En DashboardView.js (constructor)
this.$nuevoComponenteRoot = this.root.querySelector('#nuevo-componente-root');

// En dash_factory.js
import { NuevoComponenteFactory } from './NuevoComponenteFactory.js';
if (view.$nuevoComponenteRoot) {
  NuevoComponenteFactory.create(view.$nuevoComponenteRoot);
}
```

## 5. Comprobación Visual Obligatoria (MANDATORY)

Una vez terminada la implementación, **DEBES** verificar que el nuevo componente sea mostrado correctamente en el `DashboardView.js`. 
Para esto, **DEBES** abrir el navegador (iniciando el servidor de desarrollo `npm run dev` de ser necesario) y correr el proyecto para asegurarte visualmente de que la interfaz se vea **exactamente igual** a como estaba antes de la implementación. **ESTO ES MANDATORIO Y NO NEGOCIABLE.**
