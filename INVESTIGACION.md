# Investigación: Web Components, HTML Templates y Frameworks

## Parte 1. Investigación: Web Components

### 1. ¿Qué problema resuelven los Web Components y qué aporta cada tecnología: Custom Elements, Shadow DOM y HTML Templates?
Los Web Components resuelven el problema de la modularidad y reutilización de código en la web sin depender de librerías externas o frameworks pesados. 
* **Custom Elements:** Permiten crear etiquetas HTML personalizadas y definir su comportamiento mediante clases de JavaScript.
* **Shadow DOM:** Aporta encapsulamiento al aislar el DOM interno y los estilos del componente para evitar conflictos con el resto de la página.
* **HTML Templates (`<template>`):** Permiten definir estructuras HTML reutilizables que permanecen ocultas y latentes hasta que se instancian mediante JavaScript.

### 2. ¿En qué se diferencia un `<template>` de un `<div>` oculto con display: none?
* **Lo que se muestra:** Un `<template>` no se renderiza ni se muestra visualmente en el DOM al cargar la página, mientras que un `<div>` con `display: none` sí está presente en el DOM, solo que oculto visualmente.
* **Lo que se ejecuta:** Los elementos multimedia o scripts dentro de un `<template>` no se ejecutan ni cargan recursos hasta que son clonados e insertados; en cambio, un `<div>` oculta el contenido visualmente pero sus recursos internos y scripts se cargan y procesan de inmediato.
* **Lo que encuentra `document.querySelector`:** El contenido dentro de un `<template>` es inaccesible directamente mediante selectores comunes (como `querySelector`) a menos que se acceda a su propiedad `.content`, mientras que el contenido de un `<div>` oculto es encontrado y manipulado de forma inmediata por el DOM general.

### 3. ¿Qué cambia entre el Shadow DOM en modo "open" y en modo "closed"?
La diferencia radica en el nivel de acceso externo al Shadow Root:
* **Modo "open":** Permite que desde el script principal (fuera del componente) se pueda acceder al Shadow DOM usando la propiedad `element.shadowRoot`. Es el modo más común.
* **Modo "closed":** Bloquea el acceso externo devolviendo `null` al intentar consultar `element.shadowRoot` desde el exterior, proporcionando un encapsulamiento más cerrado (aunque poco efectivo contra inspecciones avanzadas de navegador).

### 4. ¿Qué es un `<slot>` y para qué sirve en un componente reutilizable?
Un `<slot>` es un marcador de posición (placeholder) dentro del Shadow DOM de un Web Component que permite inyectar contenido HTML personalizado desde el exterior. Sirve para hacer que el componente sea altamente reutilizable, ya que la estructura fija se queda en el template, pero el texto o los elementos internos (como notas o descripciones libres) pueden cambiar dinámicamente en cada instancia sin romper el encapsulamiento.

### 5. ¿Qué navegadores soportan hoy los Web Components? Indica la fuente y la fecha de consulta.
Hoy en día, los Web Components (Custom Elements, Shadow DOM y HTML Templates) cuentan con soporte nativo completo en todos los navegadores modernos, incluyendo Google Chrome, Mozilla Firefox, Apple Safari y Microsoft Edge.

* **Fuente:** MDN Web Docs ("Web Components") y Can I use.
* **Fecha de consulta:** 17 de noviembre de 2026.

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
   