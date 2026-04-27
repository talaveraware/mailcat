---
trigger: always_on
description: Asegurar que la IA siempre utilice la skill Git Commit Standard al crear o proponer mensajes de commit.
---

# Uso Obligatorio de la Skill "Git Commit Standard"

Esta regla es de cumplimiento **estricto y obligatorio** para cualquier asistente o IA que trabaje en este proyecto.

## Condición de Activación

Cualquier solicitud del usuario que implique hacer, crear, realizar, redactar o proponer un "commit", mensaje de commit, o registrar cambios en el sistema de control de versiones Git.

## Reglas a Seguir

1. **Delegación de Responsabilidad:** Antes de proponer o ejecutar un comando de commit de forma genérica, debes **siempre** instanciar o usar la herramienta de visualización para consultar y seguir al pie de la letra la skill definida en el archivo `.agents/skills/git_commit_standard/SKILL.md`.
2. **Aplicación Estricta:** Las instrucciones de la skill referenciada (idioma inglés, formato con título corto y cuerpo detallado con viñetas, uso estricto del comando `git commit -m`) toman precedencia absoluta frente a cualquier comportamiento o estilo genérico de la IA.
3. **No Excepciones:** Bajo ninguna circunstancia se debe generar o proponer un mensaje de commit que no cumpla con la estructura requerida (Título imperativo + Cuerpo con viñetas) dictada por la skill.
