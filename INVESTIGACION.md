# Investigación: Web Components, HTML Templates y Frameworks

## Parte 1: Web Components

### 1. ¿Qué problema resuelven los Web Components y qué aporta cada tecnología: Custom Elements, Shadow DOM y HTML Templates?
* **Respuesta:** Principalmente, los Web Components solucionan la fragmentación y la falta de modularidad nativa en el desarrollo web, permitiendo construir componentes reutilizables y encapsulados sin depender de librerías o frameworks pesados. Esto es posible gracias a tres tecnologías clave: los Custom Elements, que posibilitan la creación de etiquetas HTML propias y semánticas; el Shadow DOM, que aísla los estilos CSS y la estructura interna para evitar colisiones con el resto de la página; y los HTML Templates, que definen fragmentos de marcado latentes e inactivos, listos para ser clonados e insertados dinámicamente cuando se requiera.

### 2. ¿En qué se diferencia un <template> de un <div> oculto con display: none?
* **Respuesta:** La diferencia fundamental radica en su procesamiento y ciclo de vida dentro del navegador. Un elemento <template> permanece completamente inactivo al cargar la página; por lo tanto, si contiene imágenes o scripts, estos no se cargan ni se ejecutan a menos que se acceda explícitamente a su contenido por código. En cambio, un <div> con display: none sí es procesado, parseado e integrado en su totalidad dentro del árbol del DOM por el navegador, consumiendo recursos y ejecutando sus contenidos internos aunque no sean visibles en pantalla.

### 3. ¿Qué cambia entre el Shadow DOM en modo "open" y en modo "closed"?
* **Respuesta:** La principal diferencia se encuentra en el nivel de acceso y encapsulamiento permitido desde el código JavaScript externo. Cuando se configura un Shadow DOM en modo open, la propiedad element.shadowRoot devuelve la referencia directa al nodo raíz sombra, lo que facilita su inspección, depuración y manipulación desde fuera del componente. Por el contrario, en el modo closed, dicha propiedad devuelve null de manera intencional, lo que bloquea el acceso externo a los elementos internos y ofrece un encapsulamiento más estricto, aunque dificulta su testeo e inspección en las herramientas de desarrollo.

### 4. ¿Qué es un <slot> y para qué sirve en un componente reutilizable?
* **Respuesta:** (Escribe aquí 3 a 6 líneas[cite: 1] explicando que es un punto de inserción (placeholder) dentro del Shadow DOM que permite proyectar contenido personalizado escrito por el usuario fuera del componente, logrando flexibilidad en la reutilización[cite: 1]).

### 5. ¿Qué navegadores soportan hoy los Web Components? Indica la fuente y la fecha de consulta.
* **Respuesta:** (Escribe aquí 3 a 6 líneas[cite: 1] indicando que cuentan con soporte nativo en todos los navegadores modernos (Chrome, Firefox, Safari, Edge). Añade la fuente y fecha de consulta).

---

## Parte 2: Frameworks, librerías y Node.js

### 1. Explica con un ejemplo la diferencia entre estándar del navegador, librería, framework y entorno de ejecución.
* **Respuesta:** Para entenderlo de forma práctica mediante la construcción de una interfaz, podemos usar la analogía de la construcción de una casa:

  * *Estándar del navegador:* Son las especificaciones y herramientas que trae nativas la plataforma web (como los cimientos y ladrillos universales), los cuales funcionan directamente en cualquier navegador sin instalar nada externo.
  * *Librería (ej. React):* Es un conjunto de piezas prefabricadas y especializadas (como un kit de carpintería modular) que tú decides cuándo y dónde utilizar para resolver partes específicas de la interfaz, manteniendo el control total de la estructura.
  * *Framework (ej. Angular):* Es un sistema estructural completo (como un plano arquitectónico rígido y predefinido) que te impone reglas estrictas, carpetas y normativas sobre cómo debes construir toda la aplicación de principio a fin.
  * *Entorno de ejecución (ej. Node.js):* Es la infraestructura base o el taller completo (herramientas de obra, electricidad y maquinaria) que permite ejecutar código JavaScript fuera de los límites del navegador, procesando servidores y dependencias.

### 2. Tabla comparativa

| Criterio | Web Components nativos | React / Vue | Angular |
| :--- | :--- | :--- | :--- |
| **Tipo (estándar, librería o framework)** | Es un estándar nativo del navegador basado en especificaciones oficiales de la W3C y WHATWG.[cite: 2] | React es una librería enfocada en la interfaz de usuario; Vue es un framework progresivo adaptable.[cite: 2] | Es un framework completo y robusto diseñado para desarrollar aplicaciones web empresariales de gran escala.[cite: 2] |
| **Cómo se crea un componente** | Se define una clase en JavaScript que hereda de `HTMLElement`, encapsulando su HTML y CSS mediante Shadow DOM y `<template>`. | En React se crean mediante funciones o clases que retornan sintaxis JSX; en Vue se estructuran en archivos `.vue` que integran plantilla, lógica y estilos. | Se construyen mediante clases de TypeScript decoradas con `@Component` que vinculan una plantilla HTML, hojas de estilo y lógica modular. |
| **Necesita instalar herramientas (npm)** | No requiere instalaciones; funciona directamente en cualquier navegador moderno usando HTML, CSS y JavaScript puro. | Sí, requieren Node.js y `npm` para instalar sus paquetes, gestionar dependencias y compilar el código JSX o `.vue` antes de llevarlo a producción. | Sí, exige instalar Node.js, `npm` y su herramienta de línea de comandos oficial (Angular CLI) para generar, compilar y ejecutar el proyecto. |
| **Ventajas principales** | Son 100 % interoperables entre cualquier tecnología, no generan dependencias externas y cuentan con encapsulamiento nativo de estilos. | Tienen un ecosistema gigante, altísima flexibilidad arquitectónica y un excelente rendimiento gracias al uso del Virtual DOM. | Ofrece una arquitectura estandarizada, tipado estricto con TypeScript y soluciones integradas de fábrica (enrutamiento, formularios y peticiones HTTP). |
| **Desventajas principales** | Requieren escribir más código base (boilerplate) para tareas repetitivas y carecen de un sistema nativo para gestionar estados globales complejos. | Al centrarse solo en la vista, obligan al desarrollador a elegir e integrar librerías de terceros para enrutamiento o manejo de estado global. | Tiene una curva de aprendizaje pronunciada y menor flexibilidad debido a sus reglas estrictas y estructura rígida. |

### 3. ¿Qué es Node.js, para qué se usa y qué relación tiene npm con React, Vue y Angular? Si una tienda en línea usa React y Node.js, ¿qué hace cada uno?
* **Respuesta:** 
  * *Node.js y npm:* Node.js es un entorno de ejecución basado en el motor V8 de Google que permite ejecutar código JavaScript del lado del servidor y fuera del navegador. Por su parte, npm (Node Package Manager) es el gestor de paquetes que acompaña a Node.js y sirve para descargar, actualizar y administrar todas las librerías, dependencias y herramientas necesarias para trabajar con tecnologías como React, Vue o Angular.
  * *Caso de la tienda en línea:* Si un e-commerce utiliza React y Node.js, React opera en el lado del cliente (frontend), encargándose de renderizar de manera fluida y dinámica la interfaz de usuario, los carritos de compras y los filtros visuales en el navegador del usuario. En cambio, Node.js opera en el servidor (backend), encargándose de procesar la lógica de negocio, conectar con la base de datos de productos, gestionar los pagos y responder a las peticiones de la API.

### 4. Elige la herramienta que usarías en cada caso y justifica en 3 a 5 líneas:
* **a. Un botón de chat que varias empresas pegan en sus propias páginas:**
  * *Herramienta elegida:* Web Components nativos.
  * *Justificación:* Al tratarse de un widget que se integrará en portales externos desarrollados con tecnologías completamente distintas (unos con WordPress, otros con React, Angular o PHP), los Web Components nativos garantizan una compatibilidad universal absoluta. Al estar encapsulados con Shadow DOM, se evita que los estilos CSS o scripts del chat entren en conflicto con los de la página anfitriona, funcionando de manera ligera y totalmente independiente.
* **b. Una aplicación web grande para un banco, con muchos equipos de desarrollo:**
  * *Herramienta elegida:* Angular o React.
  * *Justificación:* Un proyecto bancario a gran escala exige convenciones estrictas, tipado robusto y una estructura estandarizada para que decenas de desarrolladores trabajen bajo las mismas reglas sin desordenar el código. Frameworks como Angular ofrecen de forma nativa inyección de dependencias, tipado con TypeScript estricto, enrutamiento oficial y formularios complejos, lo que reduce errores críticos y facilita el mantenimiento a largo plazo en entornos corporativos exigentes.

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
   