---
trigger: always_on
description: Ensure the AI always uses the extract_dashboard_component skill when creating, generating, or moving a component from the Dashboard.
---

# Uso Obligatorio de la Skill "Extract Dashboard Component"

Esta regla es de cumplimiento **estricto y obligatorio** para cualquier asistente o IA que trabaje en este proyecto.

## Condición de Activación

Cualquier solicitud del usuario que implique interactuar, pedir crear, generar, mover, o extraer un nuevo componente que sea parte de la vista del componente `Dashboard` (en concreto `DashboardView.js`).

## Reglas a Seguir

1. **Uso de la Skill:** Antes de intentar escribir código o mover bloques HTML de forma independiente, debes **siempre** consultar y ejecutar estrictamente los pasos de la skill definida en el archivo `.agents/skills/extract_dashboard_component/SKILL.md`.
2. **Aplicación Estricta:** Las instrucciones de la skill referenciada (preguntar obligatoriamente el nombre e identificador, no alterar las clases CSS ni la grilla, e inyectar componentes conservando la fidelidad visual comprobándolo en el navegador) toman precedencia absoluta frente a cualquier otra suposición de la IA.
3. **No Excepciones:** Bajo ninguna circunstancia se debe extraer un componente de `DashboardView.js` alterando su maquetación original o sin haber consultado los identificadores al usuario tal como exige la skill.
