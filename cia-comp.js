customElements.define('hello-comp', class extends HTMLElement {
    connectedCallback() {
      this.textContent = 'Ciao !';
    }
  });
  
