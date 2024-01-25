class UserArea extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' });
      this.cartClicked = false;
    }
  
    connectedCallback () {

        this.render()
        const cartIcon = this.shadow.querySelector('.cart-icon');
        cartIcon.addEventListener('click', () => this.toggleCart());

        const checkoutButton = this.shadow.querySelector('.checkout-button');
        checkoutButton.addEventListener('click', () => this.openModal());
    }
  
    render () {
        this.shadow.innerHTML =
        /*html*/`
        <style>     
            .header-menu{
                margin: 0.3rem 0;
            }

            .user-area{
                display: flex;
                align-items: center;
                position: relative;
            }

            .user-area span{
                display: block;
                height: 3rem;
                background: hsl(0, 0%, 0%);
                box-sizing: border-box;
                width: 4px;
                border-radius: 5px;
                margin: 10px;
            }

            .account-icon svg{
                width: 2.5rem;
                cursor: pointer;
            }

            .cart-icon{
                position: relative;
                display: inline-block;
            }

            .cart-icon .cart-notification {
                position: absolute;
                top: -8px;
                right: -8px;
                background-color: red;
                font-family: 'Exo 2', sans-serif;
                color: hsla(0, 0%, 100%);
                font-size: 10px;
                font-weight: bold;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .cart-icon svg{
                width: 2.5rem;
                cursor: pointer;
            }

            .cart-dropdown {
                display: none;
                position: absolute; /* Coloca el menú sobre el contenido */
                background: hsla(0, 0%, 0%, 0.94);
                color: hsla(0, 0%, 100%);
                font-family: 'Exo 2', sans-serif;
                font-size: 0.8rem;
                width: 150px;
                padding: 10px;
                z-index: 1;
                border-radius: 10px;
                top: 100%; 
                right: 0; 
            }

            .cart-icon.clicked{
                fill: green;
            }

            .user-area .cart-separator {
                display: block;
                height: 12px;
                background: hsl(0, 0%, 100%);
                box-sizing: border-box;
                height: 2px;
                width: 80%;
                border-radius: 5px;
                margin: .5rem 0rem;
                margin-bottom: 0.5rem;
            }

            .user-area .cart-product{
                display: flex;
            }

            .user-area .cart-product svg{
                fill: hsl(0, 0%, 100%);
                width: 1rem;
                margin-left: auto;
            }

            .checkout-button{
                display: flex;
                margin-left: auto;
                background: transparent;
                border: 1px hsl(0, 0%, 100%);
                cursor: pointer;
                gap: 0.5rem;
            }

            .checkout-button p{
                color: hsl(0, 0%, 100%);
                
            }

            .check-icon{
                display:flex;
                width: 1rem;
                margin-left:auto;
            }

        </style>
        
        <section class="header-menu">
            <div class="user-area">
                <div class="cart-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19 20C19 21.11 18.11 22 17 22C15.89 22 15 21.1 15 20C15 18.89 15.89 18 17 18C18.11 18 19 18.9 19 20M7 18C5.89 18 5 18.89 5 20C5 21.1 5.89 22 7 22C8.11 22 9 21.11 9 20S8.11 18 7 18M7.2 14.63L7.17 14.75C7.17 14.89 7.28 15 7.42 15H19V17H7C5.89 17 5 16.1 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2H4.27L5.21 4H20C20.55 4 21 4.45 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63M8.5 11H10V9H7.56L8.5 11M11 9V11H14V9H11M14 8V6H11V8H14M17.11 9H15V11H16L17.11 9M18.78 6H15V8H17.67L18.78 6M6.14 6L7.08 8H10V6H6.14Z" />
                    </svg>
                    <span class="cart-notification">3</span>
                    <div class="cart-dropdown">
                        <div class="cart-product">
                            <p>Stray</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                            </svg>
                        </div>
                        <span class="cart-separator"></span>
                        <div class="cart-product">
                            <p>Baldur's Gate 3</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                            </svg>
                        </div>
                        <span class="cart-separator"></span>
                        <div class="cart-product">
                            <p>Dragon's Dogma II</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                            </svg>
                        </div>
                        <button class="checkout-button">
                            <p>Checkout</p>
                            <svg class="check-icon"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <span></span>
                <div class="account-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                    </svg>
                </div>
            </div>
        </section>     
      `;
    }

    toggleCart() {
        const cartIcon = this.shadow.querySelector('.cart-icon');
        const cartDropdown = this.shadow.querySelector('.cart-dropdown');
        this.cartClicked = !this.cartClicked;

        if (this.cartClicked) {
            cartIcon.classList.add('clicked');
            cartDropdown.style.display = 'block'; // Muestra el menú desplegable
        } else {
            cartIcon.classList.remove('clicked');
            cartDropdown.style.display = 'none'; // Oculta el menú desplegable
        }
    }


    
}
  
customElements.define('user-area-component', UserArea);