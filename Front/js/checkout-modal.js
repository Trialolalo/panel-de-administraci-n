class Checkout extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' });
      this.cartClicked = false;
    }
  
    connectedCallback () {

        this.render()
    }
  
    render () {
        this.shadow.innerHTML =
        /*html*/`
        <style>     
           
        </style>
        
        
      `;
    }

    
}
  
customElements.define('checkout-component', Checkout);