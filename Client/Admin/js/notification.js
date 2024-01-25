class Form extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
           
            .notification{
                background: hsl(225, 54%, 33%);;
                height: 8vh;
                width: 30vh;
                bottom: 10vh;
                position: fixed;
                right: -100vh;
                z-index: 1003;
                padding: 1rem;
                transition: right 0.5s ease-in-out;
            }

            .notification.active{
                right: 0;
                transition: right 0.5s;
            }

            .notification h3{
                color: hsl(0, 0%, 100%);
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: 400;
            }

            .tab-content{
            visibility: hidden;
            display: none;
            }

            .tab-content.active{
            visibility: visible;
            display: block;
            }

        </style>
  
            <div class="notification">
                <h3>Formulario guardado</h3>
            </div>        
      `

    const notificationButton = this.shadow.querySelector('.form-save-button')
    const notification = this.shadow.querySelector('.notification')

    notificationButton.addEventListener('click', () => {
      notification.classList.toggle('active')
      notificationButton.classList.toggle('active')

      setTimeout(() => {
        notification.classList.remove('active')
      }, 2500)
    })
  }
}

customElements.define('form-component', Form)
