class UploadImage extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('showModalDestroy', event => {
      const trashModal = this.shadow.querySelector('.upload-modal')
      trashModal.classList.add('active')
    })

    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
            
        </style>
  
      
      <div class="upload-modal">
        <div class="trash-window">
          <button>
              Galería
          </button>
          <button>
              Subir Imagen
          </button>
          <div class="form-row">
            <div class="select-button">
              <button>
                Elegir Imagen
              </button>
            </div>
          </div>
        </div>
      </div>            
      `

    const trashModal = this.shadow.querySelector('.trash-modal')

    trashModal?.addEventListener('click', async (event) => {
      if (event.target.closest('.button-cancelation')) {
        trashModal.classList.remove('active')
      }

      if (event.target.closest('.button-confirmation')) {
        trashModal.classList.remove('active')
      }
    })
  }
}

customElements.define('upload-image', UploadImage)
