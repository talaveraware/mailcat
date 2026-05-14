# 004-Frontend: Integración de Red y Estados Visuales (CardResultados)

## Estado
Status: `no completado`

## Reglas Mandatorias (MANDATORY)
1. **Preguntas Requeridas:** Debes preguntar al usuario: a) ¿Cuál será la URL base del backend para configurar el `fetch` en el entorno de desarrollo? b) ¿Existen directrices específicas para el manejo de errores (ej. mostrar un toast, modificar el UI de error) si el backend falla o la IA rechaza el prompt? NO DEBES INFERIR las URIs del backend ni el flujo de error visual. NO DEBES continuar hasta que el usuario responda.
2. **Cumplimiento de Skills:** Aplicar `use_mvc_skill.md`. Toda llamada `fetch()` debe residir estrictamente en el `Model.js`. La Vista solo debe reaccionar a órdenes del Controller.

## Objetivo Principal
Implementar la llamada HTTP (fetch) al nuevo backend Node.js desde el modelo del Frontend, y conectar esta petición con los estados visuales correspondientes en el componente de resultados (mostrar overlay de carga, ocultarlo e inyectar el resultado).

## Detalles de Implementación (Spec)

1.  **Lógica de Red en el Modelo (`CardResultadosModel.js`):**
    *   Implementar un método asíncrono (ej. `async fetchTransformation(text, action)`).
    *   Este método realizará el `fetch` POST al endpoint `/api/transform` del backend.
    *   Debe enviar el payload JSON con `text` y `action`.
    *   Debe retornar la promesa con el resultado generado o lanzar un error claro si la petición falla.
2.  **Manejo de Estados Visuales en la Vista (`CardResultadosView.js`):**
    *   Crear métodos para controlar el overlay:
        *   `showLoadingState()`: Muestra el overlay glass y activa el indicador de carga (ocultando mensaje idle).
        *   `showIdleState()`: Muestra el overlay con el mensaje inicial (listo para trabajar).
        *   `hideOverlay()`: Oculta completamente el `#status-overlay` permitiendo ver el textarea inferior.
    *   Crear método para inyectar texto:
        *   `setResultText(text)`: Inserta el string generado en el `<textarea id="text-result">`.
3.  **Orquestación en el Controlador (`CardResultadosController.js`):**
    *   Recibir la señal/evento (configurada en la Tarea 003) con el payload `(text, action)`.
    *   **Flujo:**
        1. Ordenar a la vista `showLoadingState()`.
        2. Invocar `this.model.fetchTransformation(text, action)`.
        3. Al resolverse la promesa con éxito: ordenar a la vista `hideOverlay()` y luego `setResultText(resultado)`.
        4. Al fallar (catch): manejar el error visualmente (según respuesta del usuario) y restaurar un estado seguro.

## Criterios de Aceptación
*   El componente puede comunicarse con el backend Node.js en el endpoint `/api/transform`.
*   El overlay de carga ("glass panel") se muestra mientras se espera la respuesta del servidor.
*   Una vez recibida la respuesta, el overlay desaparece y el texto procesado por Gemini se inyecta en el textarea de resultados.
*   Los errores de red o servidor son manejados sin romper la interfaz gráfica.