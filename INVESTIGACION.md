# Investigación: Web Components, HTML Templates y Frameworks

## Parte 1: Web Components

### 1. ¿Qué problema resuelven los Web Components y qué aporta cada tecnología: Custom Elements, Shadow DOM y HTML Templates?
* **Respuesta:** (Escribe aquí 3 a 6 líneas explicando que resuelven la modularidad y reutilización del código sin frameworks pesados[cite: 1]. Menciona brevemente que los Custom Elements permiten crear etiquetas propias, el Shadow DOM aísla los estilos y el HTML Templates define la estructura reutilizable[cite: 1]).

### 2. ¿En qué se diferencia un <template> de un <div> oculto con display: none?
* **Respuesta:** (Escribe aquí 3 a 6 líneas[cite: 1] explicando que el `<template>` no se renderiza ni ejecuta sus contenidos al cargar la página (sus scripts/imágenes están inactivos) y `document.querySelector` no entra a su contenido interno de forma directa, a diferencia de un `<div>` con `display: none` que sí se procesa en el DOM[cite: 1]).

### 3. ¿Qué cambia entre el Shadow DOM en modo "open" y en modo "closed"?
* **Respuesta:** (Escribe aquí 3 a 6 líneas[cite: 1] indicando que en modo `open` es posible acceder al Shadow Root desde el exterior usando JavaScript (`element.shadowRoot`), mientras que en modo `closed` devuelve `null`, ofreciendo mayor encapsulamiento pero limitando la inspección externa[cite: 1]).

### 4. ¿Qué es un <slot> y para qué sirve en un componente reutilizable?
* **Respuesta:** (Escribe aquí 3 a 6 líneas[cite: 1] explicando que es un punto de inserción (placeholder) dentro del Shadow DOM que permite proyectar contenido personalizado escrito por el usuario fuera del componente, logrando flexibilidad en la reutilización[cite: 1]).

### 5. ¿Qué navegadores soportan hoy los Web Components? Indica la fuente y la fecha de consulta.
* **Respuesta:** (Escribe aquí 3 a 6 líneas[cite: 1] indicando que cuentan con soporte nativo en todos los navegadores modernos (Chrome, Firefox, Safari, Edge). Añade la fuente y fecha de consulta).

---

## Parte 2: Frameworks, librerías y Node.js

### 1. Explica con un ejemplo la diferencia entre estándar del navegador, librería, framework y entorno de ejecución.
* **Respuesta:** 
  * *Estándar del navegador:* ...
  * *Librería (ej. React):* ...
  * *Framework (ej. Angular):* ...
  * *Entorno de ejecución (ej. Node.js):* ...

### 2. Tabla comparativa

| Criterio | Web Components nativos | React / Vue | Angular |
| :--- | :--- | :--- | :--- |
| **Tipo (estándar, librería o framework)** | Estándar del navegador[cite: 2] | Librería / Framework progresivo[cite: 2] | Framework completo[cite: 2] |
| **Cómo se crea un componente** | Mediante clases JS y Shadow DOM | (Escribe cómo se crea en React/Vue)[cite: 2] | (Escribe cómo se crea en Angular)[cite: 2] |
| **Necesita instalar herramientas (npm)** | No es estrictamente obligatorio | Sí | Sí |
| **Ventajas principales** | (Indica una ventaja)[cite: 2] | (Indica una ventaja)[cite: 2] | (Indica una ventaja)[cite: 2] |
| **Desventajas principales** | (Indica una desventaja)[cite: 2] | (Indica una desventaja)[cite: 2] | (Indica una desventaja)[cite: 2] |

### 3. ¿Qué es Node.js, para qué se usa y qué relación tiene npm con React, Vue y Angular? Si una tienda en línea usa React y Node.js, ¿qué hace cada uno?
* **Respuesta:** 
  * *Node.js y npm:* (Explica Node.js como entorno para ejecutar JavaScript fuera del navegador[cite: 4] y npm como su gestor de paquetes para instalar dependencias).
  * *Caso de la tienda en línea:* (Explica que React se encarga de la interfaz de usuario en el cliente/navegador y Node.js del servidor, backend y APIs).

### 4. Elige la herramienta que usarías en cada caso y justifica en 3 a 5 líneas:
* **a. Un botón de chat que varias empresas pegan en sus propias páginas:**
  * *Herramienta elegida:* Web Components nativos.
  * *Justificación:* (Escribe 3 a 5 líneas justificando que al ser un estándar nativo, funciona en cualquier sitio web sin importar si usan React, Vue o HTML plano, evitando conflictos de dependencias).
* **b. Una aplicación web grande para un banco, con muchos equipos de desarrollo:**
  * *Herramienta elegida:* Angular o React.
  * *Justificación:* (Escribe 3 a 5 líneas justificando que ofrecen una arquitectura estructurada, enrutamiento, manejo de estado robusto y convenciones estrictas ideales para grandes equipos corporativos).

---

## 📚 Fuentes de Investigación
1. **[Título del recurso, ej: MDN Web Docs - Using templates and slots]**  
   * Enlace: `https://developer.mozilla.org/...`  
   * Fecha de consulta: [Ej: 17 de noviembre de 2026][cite: 3]
2. **[Título del recurso, ej: web.dev - Web Components]**  
   * Enlace: `https://web.dev/...`  
   * Fecha de consulta: [Ej: 17 de noviembre de 2026][cite: 3]
3. **[Título del recurso, ej: Documentación oficial de Node.js]**  
   * Enlace: `https://nodejs.org/...`  
   * Fecha de consulta: [Ej: 17 de noviembre de 2026][cite: 3]
   