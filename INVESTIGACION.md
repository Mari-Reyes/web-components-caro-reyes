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

## Parte 2. Investigación: frameworks, librerías y Node.js

### 1. Explica con un ejemplo la diferencia entre estándar del navegador, librería, framework y entorno de ejecución.
Un *estándar del navegador* (como los Web Components) es una especificación nativa soportada directamente por los motores de los navegadores sin instalar librerías externas. Una *librería* (como React) es un conjunto de funciones y componentes enfocados en construir interfaces de usuario de forma modular. Un *framework* (como Angular) es una plataforma estructurada y completa con reglas estrictas para aplicaciones grandes. Finalmente, un *entorno de ejecución* (como Node.js) permite ejecutar código JavaScript fuera del navegador, en el servidor o máquina local.

### 2. Tabla comparativa

| Criterio | Web Components nativos | React / Vue | Angular |
| :--- | :--- | :--- | :--- |
| *Tipo* (estándar, librería o framework) | Estándar web nativo del navegador. | React es una librería; Vue es un framework progresivo. | Framework completo de desarrollo. |
| *Cómo se crea un componente* | Mediante Clases JS que extienden ⁠ HTMLElement ⁠ y ⁠ customElements.define() ⁠. | Usando funciones/clases con JSX (React) o archivos ⁠ .vue ⁠ con sintaxis de plantilla. | Mediante clases de TypeScript decoradas con ⁠ @Component() ⁠. |
| *Necesita instalar herramientas (⁠ npm ⁠)* | No estrictamente; funciona con vainilla JS nativo en el navegador. | Sí, requiere Node.js y un empaquetador (Vite, Webpack). | Sí, requiere Node.js y Angular CLI para su gestión. |
| *Ventajas principales* | Estándar puro, sin dependencias, alto rendimiento y reutilizable en cualquier framework. | Ecosistema gigantesco, gran comunidad, renderizado rápido y JSX intuitivo. | Estructura robusta, inyección de dependencias y TypeScript integrado de serie. |
| *Desventajas principales* | Requiere más código repetitivo (boilerplate) para gestión de estado avanzada. | Depende de actualizaciones de terceros y requiere herramientas de compilación. | Curva de aprendizaje muy pronunciada y mayor peso inicial en la aplicación. |



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
   