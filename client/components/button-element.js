
const template = document.createElement('template');
template.innerHTML = `
<style>
:host {
/* for the shadow root*/
 display: flex;
 justify-content: center;
 align-items: center;
 margin-left: auto;
 cursor: pointer;
}
</style>
<div class="root">
  <slot></slot>
</div>
`

class ButtonElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});

        const templateClone =  template.content.cloneNode(true);
        this.shadow.append(templateClone);
       this.shadow.addEventListener(
            'click',
            () => {
                const action = (this.click && typeof window[this.click] === 'function') ?
                    window[this.click] : this.defaultAction
                action()
            },
        );

    }

    defaultAction(){}

    // define the allowed attributes
    static get observedAttributes(){
        return ['click']
    }

    // sync attributes with properties as you want

    get click(){
        return this.getAttribute('click')
    }
    set click(options){
        return this.setAttribute('click', options)
    }
}

customElements.define('button-element', ButtonElement );
