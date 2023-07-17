const template = document.createElement('template');
template.innerHTML = `
<link rel="stylesheet" href="../style.css" />
<style>
</style>
<div class="root">
    <slot name="open"></slot>
    <dialog>
        <div class="flex items-center justify-between  mb-4">
            <div>
                <slot name="title"><slot/>
            </div>
    
            <div>
                <slot name="close"><slot/>  
            </div>  
        </div> 
        <slot name="content"></slot>
  </dialog>
</div>
`

class DialogElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});

        const templateClone = template.content.cloneNode(true);
        this.shadow.append(templateClone);
        const dialog = this.shadow.querySelector('dialog');
        const openBtn = this.shadow.querySelector('[name="open"]');
        const closeBtn = this.shadow.querySelector('[name="close"]');

        openBtn.addEventListener(
            'click',
            () => {
                dialog.showModal()
            },
        );

        closeBtn.addEventListener(
            'click',
            () => {
                dialog.close()
            },
        );

    }


    // define the allowed attributes
    static get observedAttributes() {
        return ['dialog-class']
    }

    // sync attributes with properties as you want
    get dialogClass() {
        return this.getAttribute('dialog-class')
    }

    set dialogClass(options) {
        return this.setAttribute('dialog-class', options)
    }

    //handle options and clicks to attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
        const root = this.shadow.querySelector('.root')
        if (attrName.includes('dialog-class')) {
            const dialog = root.querySelector('dialog') || document.createElement('dialog');
            dialog.className += newVal
            root.append(dialog)
        }
    }
}

customElements.define('dialog-element', DialogElement);
