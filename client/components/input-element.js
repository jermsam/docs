const template = document.createElement('template');
template.innerHTML = `
<style>
input {
    height: 100%;
}
:host {
/* for the shadow root*/
    display:block;
}
</style>
<div class="root relative gap-2">
  <input/>
  <div class="absolute right-2 top-1 cursor-pointer hidden">
      <slot name="clear">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </slot>
  </div>
</div>
`
class InputElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        const templateClone = template.content.cloneNode(true);
        this.shadow.append(templateClone);

        const style = this.shadow.host.closest('html').querySelector('link[rel="stylesheet"]');
        this.shadow.append(style.cloneNode(true));

        const clearSlot = this.shadow.querySelector('[name="clear"]');
        const input = this.shadow.querySelector('input');
        clearSlot.addEventListener('click', () => {
            input.value = '';
            clearSlot.parentElement.classList.add('hidden');
        })
        input.addEventListener(
            'input',
            (e) => {
                if (e.target.value.length > 1) {
                    clearSlot.parentElement.classList.remove('hidden')
                } else if (!clearSlot.parentElement.className.includes('hidden')) {
                    clearSlot.parentElement.classList.add('hidden')
                }
                const action = (this.change && typeof window[this.change] === 'function') ?
                    window[this.change] : this.defaultAction
                action(e)
            },
        );
    }

    defaultAction() {
    }

    // define the allowed attributes
    static get observedAttributes() {
        return ['input-style', 'input-class', 'input-placeholder', 'value', 'change']
    }

    // sync attributes with properties as you want
    get inputStyle() {
        return this.getAttribute('input-style')
    }

    set inputStyle(options) {
        return this.setAttribute('input-style', options)
    }

    get inputClass() {
        return this.getAttribute('input-class')
    }

    set inputClass(options) {
        return this.setAttribute('input-class', options)
    }

    get inputPlaceholder() {
        return this.getAttribute('input-placeholder')
    }

    set inputPlaceholder(options) {
        return this.setAttribute('input-placeholder', options)
    }

    get value() {
        return this.getAttribute('value')
    }

    set value(options) {
        return this.setAttribute('value', options)
    }

    get change() {
        return this.getAttribute('change')
    }

    set change(options) {
        return this.setAttribute('change', options)
    }

    //handle options and changes to attributes
    attributeChangedCallback(attrName, oldVal, newVal) {
        const root = this.shadow.querySelector('.root')
        if (attrName.includes('input')) {
            const input = root.querySelector('input') || document.createElement('input');
            if (attrName.includes('style') && newVal !== oldVal) {
                input.style = newVal
            }
            if (attrName.includes('class')) {
                input.className += newVal
            }
            if (attrName.includes('placeholder')) {
                input.placeholder = newVal
            }
            if (attrName.includes('value')) {
                input.value = newVal
            }
            root.append(input)
        }
    }

    //life-cycle
    connectedCallback() {
        // when input-element is added to page
    }

    disconnectedCallback() {
        // when input-element is removed from page
    }
}

customElements.define('input-element', InputElement);
