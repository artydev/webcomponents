customElements.define('ciao-comp', class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = '<h1>Ciao !</h1>';
    }
  });
  
