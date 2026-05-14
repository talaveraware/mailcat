# Propuesta de Implementación del Backend (Integración Gemini API)

## 1. Contexto y Objetivo
El proyecto MailCat ha alcanzado una fase de madurez en su interfaz de usuario. Los componentes clave (`EntradaUsuario`, `CardOpciones`, `CardResultados`) operan bajo una arquitectura MVC estricta y el enrutador SPA gestiona la navegación de forma eficiente.

El siguiente paso lógico y crucial es dar vida a la funcionalidad central del proyecto: **la transformación de texto mediante inteligencia artificial**. Este documento propone la estrategia arquitectónica y los pasos técnicos para integrar la API de Gemini 3 Flash.

## 2. Análisis de Arquitectura: ¿Cliente vs. Servidor?

Al integrar APIs de inteligencia artificial, existe la tentación de realizar las llamadas directamente desde el frontend (Vanilla JS) por rapidez. Sin embargo, para MailCat, **es estrictamente necesario implementar un servidor Backend (Node.js)** por las siguientes razones críticas, alineadas con los requisitos del `SRS.md`:

### 2.1. Seguridad Crítica (Exposición de la API Key)
Si la llamada a `generativelanguage.googleapis.com` se realiza desde el `Model.js` del cliente, la llave API de Google (`GEMINI_API_KEY`) debe estar expuesta en el código fuente (incluso si se usa `.env` en Vite, las variables `VITE_*` se compilan estáticamente).
*   **Riesgo:** Cualquier usuario puede inspeccionar el código, robar la llave y consumir la cuota de facturación asociada.
*   **Solución:** El backend actúa como un proxy seguro. El cliente llama al backend, y el backend (donde la llave reside en un entorno protegido) se comunica con Google.

### 2.2. Integridad del Sistema (Prompt Injection & System Instructions)
MailCat se basará en prompts complejos ("System Instructions") para dictar cómo debe actuar la IA (ej. *"Eres un experto en psicología de negocios...*").
*   **Riesgo:** Si estos prompts residen en el cliente, un usuario malintencionado podría modificarlos localmente (Prompt Injection) para eludir los límites de la aplicación o generar contenido inapropiado.
*   **Solución:** El backend es el único que conoce y construye los prompts estructurados. El cliente solo envía el `texto_original` y el `tipo_de_accion`.

### 2.3. Preparación para Escalabilidad
El `SRS.md` especifica: *"Futuras Integraciones: El diseño debe dejar la puerta abierta para la conexión con APIs de envío de correo (SMTP/Gmail)..."*.
*   **Arquitectura:** Las conexiones SMTP o protocolos MCP requieren autenticación de servidor a servidor. Construir el backend en Node.js ahora prepara la infraestructura para estas futuras fases y para el sistema de Login/Autenticación de usuarios.

---

## 3. Arquitectura Propuesta

La arquitectura evolucionará de un cliente estático a un modelo Cliente-Servidor.

### 3.1. Estructura de Directorios
Se propone crear un directorio `server/` hermano de la estructura actual (o integrado según la configuración de despliegue) para alojar el código Node.js.

```text
mailcat/
├── vite-mailcat/       # Frontend (Vanilla JS SPA) - Código actual
│   ├── src/
│   └── ...
└── server/             # Nuevo Backend (Node.js + Express)
    ├── package.json
    ├── .env            # Almacena GEMINI_API_KEY (Ignorado en git)
    ├── src/
    │   ├── server.js   # Inicialización de Express
    │   ├── routes/     # Rutas de la API (ej. api.routes.js)
    │   └── services/   # Lógica de Gemini (ej. gemini.service.js)
    └── ...
```

### 3.2. Stack del Backend
*   **Runtime:** Node.js
*   **Framework:** Express.js (Ligero, rápido y especificado en el `SRS.md`).
*   **SDK de IA:** `@google/genai` (El SDK oficial y más reciente de Google para la API de Gemini).
*   **Seguridad:** `dotenv` (para variables de entorno), `cors` (para permitir la comunicación con el frontend en Vite).

---

## 4. Flujo de Comunicación (Ejemplo de Caso de Uso: "Formalizar")

### Fase 1: Interacción del Usuario (Frontend)
1. El usuario pega un texto en el componente `EntradaUsuario`.
2. El usuario hace clic en el botón "Formalizar" del componente `CardOpciones`.
3. El `CardOpcionesController` intercepta el clic y solicita al `EntradaUsuarioController` el texto actual.

### Fase 2: Petición al Backend
4. El sistema notifica a `CardResultados` para que active la UI de *Loading* (el overlay "glass").
5. El Modelo de `CardResultados` (o un nuevo `ApiService` instanciado por el Model) ejecuta una petición `fetch()` hacia el backend:
   ```javascript
   // Petición desde el Frontend
   POST http://localhost:3000/api/transform
   Body: {
     "text": "Oye, necesito el reporte para ayer, no te tardes.",
     "action": "formalize"
   }
   ```

### Fase 3: Procesamiento Seguro (Backend)
6. Express recibe la petición.
7. El servicio de Gemini en el backend intercepta el parámetro `action: "formalize"` y selecciona el *System Prompt* correspondiente.
8. El backend construye la llamada segura utilizando la `GEMINI_API_KEY` oculta.
   ```javascript
   // Lógica interna del Backend (simplificada)
   const prompt = "Reescribe el siguiente texto en un tono corporativo formal y cortés: " + request.body.text;
   const result = await ai.models.generateContent({
       model: 'gemini-3-flash',
       contents: prompt
   });
   ```

### Fase 4: Respuesta y Renderizado
9. El backend devuelve la respuesta al frontend.
   ```javascript
   // Respuesta al Frontend
   200 OK
   Body: {
     "success": true,
     "result": "Estimado/a, le solicito amablemente que envíe el reporte a la brevedad posible. Quedo a su disposición."
   }
   ```
10. El `Controller` en el frontend instruye a `CardResultadosView` para ocultar el overlay de carga.
11. Se inyecta el texto resultante en el `<textarea id="text-result">` y se habilita para edición o copia.

---

## 5. Plan de Implementación (Próximos Pasos)

Para llevar a cabo esta propuesta, se sugiere dividir el trabajo en dos etapas:

**Etapa 1: Configuración del Servidor y API (Backend)**
1. Inicializar el proyecto Node.js en la carpeta `server/`.
2. Instalar dependencias (`express`, `cors`, `dotenv`, `@google/genai`).
3. Crear el endpoint `POST /api/transform`.
4. Implementar la lógica del servicio de Gemini y probar el endpoint aisladamente (ej. con Postman o cURL).

**Etapa 2: Integración en la Interfaz (Frontend)**
1. Enlazar los botones de `CardOpciones` para que disparen eventos manejables.
2. Implementar la lógica de red (fetch) en el modelo correspondiente, respetando la regla estricta de MVC (sin importar dependencias globales, gestionando la llamada desde el propio componente).
3. Conectar los estados visuales en `CardResultados` (Mostrar overlay de carga -> Mostrar texto generado).

## 6. Conclusión
La implementación de un backend en Node.js no es opcional, sino una necesidad de seguridad y arquitectura. Asegura que MailCat sea una aplicación profesional, escalable y protegida contra abusos, sentando las bases sólidas para las funcionalidades futuras descritas en el SRS.