

const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="../style.css" />
<style>
/* @import url()*/
button {

}
:host {
/* for the shadow root*/
 display: flex;
 justify-content: center;
 align-items: center;
 margin-left: auto;
 cursor: pointer;
}

/*:host(input-element){*/

/*}*/

/*:host-context(div){*/

/*}*/


</style>
<div class="root w-full flex items-center justify-center">
 <button>
  <slot></slot>
  </button>
</div>
</div>
`

class ButtonElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});

        const templateClone =  template.content.cloneNode(true);
        this.shadow.append(templateClone);
       const button = this.shadow.querySelector('button');
        this.shadow.addEventListener(
            'click',
            () => {
                const action = (this.click && typeof window[this.click] === 'function') ?
                    window[this.click] : this.defaultAction
                action()
            },
            // { once: true }
        );

    }

    defaultAction(){}

    // define the allowed attributes
    static get observedAttributes(){
        return ['type','click']
    }

    // sync attributes with properties as you want
    get type(){
        return this.getAttribute('type')
    }
    set type(options){
        return this.setAttribute('type', options)
    }

    get click(){
        return this.getAttribute('click')
    }
    set click(options){
        return this.setAttribute('click', options)
    }
    //handle options and clicks to attributes
    attributeChangedCallback(attrName, oldVal, newVal){
        const root = this.shadow.querySelector('.root')
        if(attrName.includes('type')) {
            const button = root.querySelector('button') || document.createElement('button');
            button.type = newVal
            root.append(button)
        }
    }

    //life-cycle
    connectedCallback(){
        // when button-element is added to page (mounts)

    }

    disconnectedCallback(){
        // when button-element is removed from page (un-mounts)

    }
}

customElements.define('button-element', ButtonElement );
