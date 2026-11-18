
class TarjetaEvento extends HTMLElement {
    constructor() {
        super();
        // R2: Clonar el template dentro del Shadow DOM en modo open
        const template = document.getElementById('evento-template');
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
    }

    // R3: Atributos - Observar los atributos definidos
    static get observedAttributes() {
        return ['titulo', 'fecha', 'lugar', 'cupos'];
    }

    // R3: Actualizar contenido cuando los atributos cambian o al conectar
    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        // R3: Recibe al menos 3 datos por atributos y los muestra en el template
        const titulo = this.getAttribute('titulo') || 'Evento Cultural';
        const fecha = this.getAttribute('fecha') || 'Por definir';
        const lugar = this.getAttribute('lugar') || 'Por definir';
        const cupos = this.getAttribute('cupos') || 'Cupos ilimitados';

        this.shadowRoot.getElementById('slot-titulo').textContent = titulo;
        this.shadowRoot.getElementById('val-fecha').textContent = fecha;
        this.shadowRoot.getElementById('val-lugar').textContent = lugar;
        this.shadowRoot.getElementById('val-cupos').textContent = cupos;
    }
}

// Registro del Custom Element con nombre con guion
customElements.define('tarjeta-evento', TarjetaEvento);