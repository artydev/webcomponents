customElements.define('hello-comp', class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = '<h1>Hello</h1>';
    }
  });
  
