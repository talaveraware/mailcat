# 001-Configuración Inicial del Servidor Node.js

## Estado

Status: `completado`

## Reglas Mandatorias (MANDATORY)

1. **Preguntas Requeridas:** Antes de escribir cualquier código o ejecutar comandos de inicialización, **DEBES** hacer cualquier pregunta necesaria para aclarar dudas sobre la estructura deseada, el nombre del paquete, la versión de Node.js a asumir, o los scripts de inicio. NO DEBES INFERIR nada. NO DEBES continuar hasta que el usuario responda todas tus dudas.
2. **Cumplimiento de Skills:** Debes revisar y aplicar obligatoriamente cualquier regla aplicable definida en `@vite-mailcat/.agents/rules/` y `@vite-mailcat/.agents/skills/`. Particularmente, si esto requiere actualizar el log, debes usar `smart_code_log` y documentarlo con `git_commit_standard`.

## Objetivo Principal

Crear la estructura base para el nuevo servidor backend Node.js, configurando las dependencias necesarias y el archivo principal del servidor (Express) siguiendo la arquitectura definida en `vite-mailcat/docs/gemini_backend_proposal.md`.

## Detalles de Implementación (Spec)

1.  **Creación de Directorio:** Crear una carpeta `server/` en la raíz del repositorio (dentro de `vite-mailcat/`).
2.  **Inicialización:** Ejecutar `npm init -y` dentro de la carpeta `server/`.
3.  **Dependencias:** Instalar las dependencias requeridas para esta etapa:
    - `express`
    - `cors`
    - `dotenv`
    - `@google/genai` (SDK oficial de Gemini)
    - _Sugerencia opcional para dev:_ `nodemon` (como dev dependency).
4.  **Estructura Base del Código:**
    - Crear el archivo `server/src/server.js`.
    - Configurar una instancia básica de Express.
    - Habilitar middleware: `cors()` y `express.json()` (para procesar payloads JSON).
    - Cargar las variables de entorno usando `dotenv`.
    - Configurar el servidor para escuchar en un puerto (ej. `3000` o el definido en `.env`).
    - Crear una ruta de prueba temporal (ej. `GET /api/health`) para verificar que el servidor levanta correctamente.
5.  **Entorno:**
    - Crear un archivo `server/.env.example` indicando que se requiere la variable `GEMINI_API_KEY`.
    - Asegurarse de que el directorio `server/` tenga su propio archivo `.gitignore` que excluya la carpeta `node_modules/` y el archivo `.env`.
6.  **Scripts:** Configurar los scripts `start` y `dev` (si aplica) en el `package.json` del servidor.

## Criterios de Aceptación

- La carpeta `server/` existe con su propio `package.json`.
- Las dependencias están instaladas.
- El archivo `server.js` levanta un servidor Express que responde a la ruta de health check.
- El archivo `.gitignore` previene la subida del `.env` al repositorio.
