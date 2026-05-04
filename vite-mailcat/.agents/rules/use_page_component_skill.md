---
trigger: always_on
description: Ensure the AI always uses the create_page_component skill when creating new navigation pages like Dashboard, Borradores, Settings, etc.
---

# Uso Obligatorio de la Skill "Create Page Component"

Esta regla es de cumplimiento **estricto y obligatorio** para cualquier asistente o IA que trabaje en este proyecto.

## Condición de Activación

Cualquier solicitud del usuario que implique crear una nueva "Página de Navegación", es decir, un componente raíz que se asocia a una ruta URL (por ejemplo: Dashboard, Borradores, Estadísticas, Configuración, Soporte).

## Reglas a Seguir

1. **Invocación de la Skill:** Antes de intentar escribir el código para una página de navegación de forma independiente, debes **siempre** consultar y aplicar estrictamente la skill definida en `.agents/skills/create_page_component/SKILL.md`.
2. **Jerarquía de Skills:** Esta regla complementa y asume el conocimiento previo de las skills `create_component_structure` (para crear carpetas) y `apply_mvc_pattern` (para los 4 archivos MVC base).
3. **Restricción Estricta del DOM (CRÍTICO):** Se prohíbe tajantemente intentar adjuntar vistas nuevas en el DOM haciendo uso explícito de `document.getElementById('app').append(...)` dentro de las funciones de `main.js`. Toda página solo debe ser *retornada* hacia el Router nativo para su delegación como se detalla en la skill principal.
