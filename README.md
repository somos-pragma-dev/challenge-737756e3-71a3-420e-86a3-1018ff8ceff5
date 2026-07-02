# Optimización de Core Web Vitals en una aplicación React

El equipo de frontend ha identificado una brecha en la comprensión y aplicación de Core Web Vitals en las aplicaciones que desarrollan. El objetivo es que los candidatos demuestren su capacidad para aplicar conceptos de Core Web Vitals y tomar decisiones de código que mejoren el rendimiento de la aplicación en términos de tiempo de carga, interactividad y estabilidad visual. La aplicación en cuestión es una plataforma de comercio electrónico que muestra productos, permite la búsqueda y filtrado, y gestiona el carrito de compras. Los productos se cargan desde una API externa con una latencia promedio de 200ms. La aplicación debe mostrar al menos 20 productos por página con imágenes de alta resolución. Los usuarios reportan tiempos de carga lentos y falta de interactividad durante la navegación.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Core Web Vitals |
| **Nivel** | trainee-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Análisis de rendimiento inicial

**Objetivo:** Identificar los principales cuellos de botella en el rendimiento de la aplicación utilizando herramientas de medición de Core Web Vitals.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Utiliza herramientas como Lighthouse para analizar la aplicación y generar un informe de rendimiento.
- Identifica las métricas de Core Web Vitals (Largest Contentful Paint, First Input Delay, Cumulative Layout Shift) y determina cuáles están por debajo de los umbrales recomendados.

**Entregable:** Informe de rendimiento con métricas de Core Web Vitals y áreas de mejora identificadas.

<details>
<summary>Pistas de conocimiento</summary>

- Herramientas de medición de rendimiento
- Conceptos básicos de Core Web Vitals

</details>

### Fase 2: Optimización de la carga de imágenes

**Objetivo:** Mejorar el tiempo de carga de la página optimizando la carga de imágenes.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Implementa técnicas de optimización de imágenes como compresión, formatos modernos (WebP) y carga diferida.
- Verifica que el Largest Contentful Paint (LCP) mejore después de las optimizaciones.

**Entregable:** Aplicación con imágenes optimizadas y mejora en el LCP verificada.

<details>
<summary>Pistas de conocimiento</summary>

- Técnicas de optimización de imágenes
- Carga diferida de imágenes

</details>

### Fase 3: Reducción del First Input Delay

**Objetivo:** Mejorar la interactividad de la aplicación reduciendo el First Input Delay (FID).

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identifica y optimiza el código JavaScript que bloquea la interacción del usuario.
- Utiliza técnicas como code splitting, lazy loading y memoization para reducir el FID.
- Verifica que el FID mejore después de las optimizaciones.

**Entregable:** Aplicación con mejora en el FID verificada.

<details>
<summary>Pistas de conocimiento</summary>

- Técnicas para reducir el FID
- Code splitting y lazy loading

</details>

### Fase 4: Eliminación de cambios de diseño inesperados

**Objetivo:** Evitar cambios de diseño inesperados y mejorar la estabilidad visual de la aplicación reduciendo el Cumulative Layout Shift (CLS).

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Identifica y corrige los elementos que causan cambios de diseño inesperados.
- Aplica técnicas como reservar espacio para imágenes y recursos externos, y establecer tamaños explícitos para los elementos.
- Verifica que el CLS mejore después de las correcciones.

**Entregable:** Aplicación con mejora en el CLS verificada.

<details>
<summary>Pistas de conocimiento</summary>

- Técnicas para reducir el CLS
- Reserva de espacio para imágenes y recursos externos

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los Core Web Vitals y por qué son importantes para el rendimiento de una aplicación?
- **paraQueSirve**: ¿Cómo se utilizan los Core Web Vitals para identificar y solucionar problemas de rendimiento en una aplicación React?
- **comoSeUsa**: ¿Qué técnicas y herramientas se pueden aplicar para optimizar los Core Web Vitals en una aplicación React?
- **erroresComunes**: ¿Cuáles son los errores comunes al intentar optimizar los Core Web Vitals y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones de diseño y de código se deben tomar para mejorar los Core Web Vitals en una aplicación React?

## Criterios de Evaluacion

- Identificación correcta de los principales cuellos de botella en el rendimiento de la aplicación.
- Implementación efectiva de técnicas de optimización de imágenes para mejorar el LCP.
- Reducción significativa del FID a través de la optimización del código JavaScript.
- Eliminación de cambios de diseño inesperados y mejora del CLS mediante la aplicación de técnicas adecuadas.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
