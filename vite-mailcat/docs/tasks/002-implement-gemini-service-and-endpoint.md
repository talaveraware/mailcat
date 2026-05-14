# 002-Implementación del Servicio Gemini y Endpoint de Transformación

## Estado
Status: `completado`

## Reglas Mandatorias (MANDATORY)
1. **Preguntas Requeridas:** Antes de crear los archivos o escribir el código de los prompts, **DEBES** consultar con el usuario la lista exacta de `action` (tipos de transformación) que el endpoint debe soportar en esta primera versión (ej. 'formalize', 'shorten') y si el usuario tiene preferencias específicas para el "System Prompt" de cada acción. NO DEBES INFERIR los prompts ni la lista de acciones sin confirmación. NO DEBES continuar hasta que el usuario responda.
2. **Cumplimiento de Skills:** Debes adherirte a las directrices de arquitectura y seguridad descritas en `vite-mailcat/docs/gemini_backend_proposal.md`. Usa `smart_code_log` para registrar avances y `git_commit_standard` para el control de versiones.

## Objetivo Principal
Crear la lógica del backend encargada de comunicarse de forma segura con la API de Google Gemini utilizando el SDK `@google/genai` y exponer esta lógica a través del endpoint `POST /api/transform`.

## Detalles de Implementación (Spec)

1.  **Servicio Gemini (`server/src/services/gemini.service.js`):**
    *   Crear un módulo/clase dedicado a manejar la interacción con la API de Gemini.
    *   Importar el SDK `@google/genai`.
    *   Inicializar el cliente utilizando la variable de entorno `GEMINI_API_KEY`.
    *   Implementar una función (ej. `generateTransformation(text, action)`) que reciba el texto y el tipo de acción.
    *   Dentro de la función, construir dinámicamente el prompt combinando las "System Instructions" correspondientes a la `action` con el `text` proporcionado por el usuario.
    *   Realizar la llamada asíncrona al modelo (se asume `gemini-3-flash` según la propuesta).
    *   Manejar adecuadamente los errores (ej. llave inválida, fallo de red) y retornar el texto generado.
2.  **Rutas de la API (`server/src/routes/api.routes.js`):**
    *   Crear un router de Express.
    *   Definir el endpoint `POST /transform`.
    *   Validar que el body de la petición contenga `text` y `action`. Retornar error HTTP 400 si faltan.
    *   Invocar la función del servicio Gemini con los parámetros recibidos.
    *   Estructurar la respuesta de éxito (HTTP 200) con el resultado (ej. `{ "success": true, "result": "..." }`).
    *   Manejar los errores del servicio y retornar el status HTTP correspondiente (ej. 500).
3.  **Integración en el Servidor (`server/src/server.js`):**
    *   Importar las rutas creadas.
    *   Montar las rutas en el servidor Express bajo el prefijo `/api` (resultando en `/api/transform`).

## Criterios de Aceptación
*   El servicio `gemini.service.js` está creado y se conecta a Google correctamente (usable con llaves de prueba locales).
*   El endpoint `POST /api/transform` está operativo.
*   El endpoint valida el body de la petición y devuelve los errores correctamente.
*   El endpoint retorna la estructura JSON esperada con el texto transformado.