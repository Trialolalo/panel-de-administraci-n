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
            button{
              background: none;
              border: none;
            }

            .form-row{
              display: flex;
              gap: 1rem;
            }

            .upload-modal{
              display: flex;
              flex-wrap: wrap;
              align-items: center;
              justify-content: center;
              background-color: hsla(0, 0%, 14%, 0.555);
              position: fixed;
              height: 100vh;
              width: 100%;
              left: 0;
              top: 0;
              overflow: hidden;
              transition: opacity 200ms ease-in, visibility 0ms ease-in 0ms;
              z-index: 1002;
              visibility: hidden;
            }

            .upload-modal h2{
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: 700;
                margin-bottom: 1.5rem;
                font-size: 1.5rem;
            }

            .upload-modal:lastchild{

            }

            .upload-window{
              display: flex;
              flex-wrap: wrap;
              flex-direction: column;
              background-color: hsl(195, 50%, 79%);
              padding: 1rem;
            }

            .tabs{
              display: flex;
              background-color: hsl(0, 0%, 100%);
              justify-content: space-between;
              width: 100%;
              margin-bottom: 1rem;
            }

            .tab-selector{
              display: flex;
              justify-content: flex-start;
              gap: 0.5rem;
              box-sizing: border-box;
              align-items: center;
              width: 100%;
            }

            .tab.active{
              background-color: hsl(225, 54%, 33%);
              height: 100%;
              cursor: pointer;
              box-sizing: border-box;
            }

            .tab.active button{
              color: hsl(0, 0%, 100%);
              font-family: 'Roboto Condensed', sans-serif;
              font-weight: 400;
              font-size: 1rem;
            }

            .tab{
              background-color: transparent;
              height: 100%;
              cursor: pointer;
              box-sizing: border-box;
            }

            .tab button{
              font-family: 'Roboto Condensed', sans-serif;
              font-weight: 700;
              font-size: 1rem;
              background: transparent;
              cursor: pointer;
              padding: 1rem;
            }

            .image-gallery{
              width: 90vh;
              height: 60vh;
            }

            .select-button{
              font-family: 'Roboto Condensed', sans-serif;
              font-weight: 700;
              font-size: 1.5rem;
              background-color: hsl(88, 67%, 62%);
              padding: 1rem;
              cursor: pointer;
              width: 9rem;
            }
        </style>
  
      
      <div class="upload-modal">
        <div class="upload-window">
          <h2>Imagen destacada</h2>
          <div class="tabs">
            <div class="tab-selector">
              <div class="tab active" data-tab="gallery">
                <button>
                    Galería
                </button>
              </div>
              <div class="tab" data-tab="upload">
                <button>
                    Subir Imagen
                </button>
              </div>
            </div>
          </div>
            <div class="image-gallery">

            </div>
            <div class="select-button">
              <button>
                Elegir Imagen 
              </button>
            </div>
        </div>
      </div>            
      `

    const uploadModal = this.shadow.querySelector('.upload-modal')

    uploadModal.addEventListener('click', (event) => {
      if (event.target.closest('.tab')) {
        if (event.target.closest('.tab').classList.contains('active')) {
          return
        }

        const tabClicked = event.target.closest('.tab')
        const tabActive = tabClicked.parentElement.querySelector('.active')

        tabClicked.classList.add('active')
        tabActive.classList.remove('active')
        event.preventDefault()
        tabClicked.closest('section').querySelector(`.tab-content.active[data-tab="${tabActive.dataset.tab}"]`).classList.remove('active')
        tabClicked.closest('section').querySelector(`.tab-content[data-tab="${tabClicked.dataset.tab}"]`).classList.add('active')
      }
    })
  }
}

customElements.define('upload-image-component', UploadImage)
