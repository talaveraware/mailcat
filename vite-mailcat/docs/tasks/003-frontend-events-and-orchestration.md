# 003-Frontend: Conexión de Eventos en CardOpciones y Comunicación Global

## Estado
Status: `no completado`

## Reglas Mandatorias (MANDATORY)
1. **Preguntas Requeridas:** Debes preguntar al usuario cómo desea gestionar la comunicación de eventos y paso de datos entre el componente `CardOpciones` (donde ocurre el clic), `EntradaUsuario` (donde reside el texto original) y `CardResultados` (quien ejecutará la petición final). ¿Desea utilizar eventos personalizados (CustomEvents), una arquitectura de mediador centralizada en el `DashboardController`, o algún otro patrón de comunicación? NO DEBES INFERIR la arquitectura de comunicación inter-componentes. NO DEBES continuar hasta que el usuario decida.
2. **Cumplimiento de Skills:** Esta tarea impacta directamente en componentes frontend existentes. Debes respetar escrupulosamente la regla `use_mvc_skill.md` (no mezclar responsabilidades, no dependencias cíclicas, mantener flujo unidireccional).

## Objetivo Principal
Preparar el terreno en el Frontend capturando los clics de los botones de opciones y obteniendo el texto original del textarea, estableciendo el canal de comunicación hacia el componente que gestionará la llamada a la red.

## Detalles de Implementación (Spec)

1.  **Mapeo de Acciones en `CardOpcionesView.js` y `CardOpcionesController.js`:**
    *   Actualmente los botones en `CardOpciones` tienen listeners genéricos (stubs).
    *   Asignar un valor de `action` semántico a cada botón (ej. "formalize", "shorten", "changeTone").
    *   El Controller debe interceptar el clic y conocer qué `action` se solicitó.
2.  **Extracción del Texto (`EntradaUsuarioView.js` / `EntradaUsuarioController.js`):**
    *   Asegurar que exista una forma pública y segura (vía getters en la vista o métodos en el modelo/controlador) de obtener el valor actual del textarea `#input-draft-text`.
3.  **Comunicación Inter-Componentes (Orquestación):**
    *   Basado en la respuesta a la pregunta requerida, implementar el flujo:
        *   Usuario hace clic en un botón (ej. "Formalizar").
        *   El sistema recupera el texto actual.
        *   El sistema notifica al componente responsable de la red (probablemente `CardResultadosController` o el `DashboardController`) pasándole un objeto (ej. `{ text: "...", action: "formalize" }`).

## Criterios de Aceptación
*   Hacer clic en cualquier botón de `CardOpciones` dispara un evento o proceso controlado.
*   El proceso obtiene correctamente el texto actualmente escrito en `EntradaUsuario`.
*   El sistema es capaz de ensamblar el payload `(text, action)` y enviarlo a la capa responsable de iniciar la mutación.