---
name: smart_code_log
description: Crea o actualiza inteligentemente entradas en docs/log.md. Si la fecha actual ya existe, anexa las tareas a esa entrada sin borrar nada. Si no, crea una nueva entrada cronológica.
---

# Smart Code Log

Esta skill define las instrucciones exactas para registrar los avances, decisiones técnicas y tareas realizadas en el archivo `vite-mailcat/docs/log.md`. El objetivo es mantener el historial cronológico estructurado, evitando duplicidad de fechas y preservando los datos existentes en todo momento.

## 1. Reglas Generales y Fechas (MANDATORIO)

1. **Ubicación del Archivo:** Las entradas SIEMPRE deben gestionarse en el archivo `vite-mailcat/docs/log.md`.
2. **Fecha Actual Estricta:** Las entradas SIEMPRE deben utilizar la fecha actual exacta en la que estás trabajando (formato `DD-MM-YY`). Tienes **estrictamente prohibido** inventar fechas, suponer fechas pasadas o ingresar fechas futuras.
3. **Idioma:** Escribe las tareas registradas en la bitácora **estrictamente en inglés**, independientemente del idioma en el que el usuario interactúe contigo.

## 2. Formato del Log

Toda entrada debe seguir exactamente la siguiente estructura de listas y encabezados:

```markdown
## DD-MM-YY - Título general descriptivo (solo necesario si es entrada nueva)

- Tarea principal resumida (lo que se logró a alto nivel)
  - [x] Detalle de subtarea o paso completado
  - [ ] Detalle de subtarea pendiente
  - [-] Subtarea en progreso
```

- **Separador:** El separador horizontal `---` se utiliza única y exclusivamente al final de **toda** la entrada de un día. Rodea el separador con líneas en blanco.

## 3. Lógica de Ejecución (MANDATORIO)

Cuando debas registrar actividades en el log, sigue obligatoriamente este flujo de trabajo:

1. **Lectura Previa Obligatoria:** Debes usar la herramienta `view_file` para leer el contenido actual de `vite-mailcat/docs/log.md` antes de intentar editarlo.
2. **Contexto Temporal:** Obtén la fecha actual proporcionada por la información del sistema en tu contexto.
3. **Manejo de Inserción (Condicional Estratégico):**
   - **CASO A - Si el encabezado `## DD-MM-YY` de hoy YA EXISTE en el archivo:**
     - **NUNCA** crees un encabezado duplicado.
     - Ubica la sección correspondiente a la fecha de hoy.
     - Encuentra la línea separadora `---` que cierra esa entrada en específico.
     - Usa las herramientas de modificación (ej. `multi_replace_file_content` o `replace_file_content`) para insertar tus nuevas listas de tareas (`- Nueva tarea...\n  - [x] ...`) **exactamente antes** de ese separador `---`.
     - **NUNCA REEMPLACES**, modifiques o elimines las tareas que ya estaban escritas bajo ese encabezado ni en otras fechas. El objetivo es estrictamente **ANEXAR** el contenido al final de la lista del día.
   - **CASO B - Si el encabezado de la fecha de hoy NO EXISTE:**
     - Dirígete al final del archivo.
     - Crea la nueva estructura cronológica completa respetando los espacios:
       
       ```markdown
       ## DD-MM-YY - Título resumido de las tareas
       
       - [Tu nueva lista de tareas principales y subtareas]
       
       ---
       ```

4. **Verificación de Integridad:** Tras el cambio, es tu responsabilidad garantizar que el documento sigue siendo un Markdown válido, que no sobrescribiste información previa y que la entrada termina correctamente con un `---` precedido y seguido por una línea en blanco.
