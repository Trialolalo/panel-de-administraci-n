class MainBanner extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {

        this.render()
    }
  
    render () {
        this.shadow.innerHTML =
        /*html*/`
        <style>

            .main-banner{
                position: relative;
                margin-bottom: 2rem;
                border: 10px;
                border-color: hsl(0, 0%, 0%);
                border-style: solid;
            }

            .main-banner img{
                width: 100%;
            }

        </style>
        
        <div class="main-banner">
                <img src="img/stray.jpg" alt="Stray">
        </div>   
      `

    }

}
  
customElements.define('main-banner-component', MainBanner);