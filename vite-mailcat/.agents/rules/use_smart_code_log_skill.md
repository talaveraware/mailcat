---
trigger: always_on
description: Asegura que la IA siempre utilice la skill smart_code_log al crear, modificar, o actualizar el archivo docs/log.md.
---

# Uso Obligatorio de la Skill "Smart Code Log"

Esta regla es de cumplimiento **estricto y obligatorio** para cualquier asistente o IA que trabaje en este proyecto.

## Condición de Activación

Cualquier solicitud del usuario que implique interactuar, crear, escribir, generar, modificar, actualizar o añadir una entrada en el archivo de registro del proyecto (`vite-mailcat/docs/log.md`), ya sea de forma explícita o como parte implícita de la finalización de una tarea.

## Reglas a Seguir

1. **Lectura y Delegación:** Antes de intentar escribir o modificar el archivo `log.md` por cuenta propia, debes **siempre** consultar y seguir estrictamente el protocolo de la skill definida en el archivo `.agents/skills/smart_code_log/SKILL.md`.
2. **Aplicación Estricta:** Las instrucciones contenidas en esa skill (búsqueda de la fecha actual, anexo de tareas sin sobrescribir, uso del idioma inglés, etc.) tienen **prioridad y precedencia absoluta** sobre cualquier comportamiento estándar de la IA.
3. **Cero Excepciones:** Queda estrictamente prohibido modificar o actualizar el archivo `vite-mailcat/docs/log.md` sin acatar línea por línea las validaciones lógicas y condicionales impuestas por la skill `smart_code_log`.
