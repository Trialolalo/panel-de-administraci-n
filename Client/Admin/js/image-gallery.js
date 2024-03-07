class ImageGallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('showModalUpload', event => {
      const uploadModal = this.shadow.querySelector('.upload-modal')
      uploadModal.classList.add('active')
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

            input[type="file"]{
              display: none;
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
              z-index: 1004;
              visibility: hidden;
            }

            .upload-modal.active{
              opacity: 1;
              visibility: visible;
            }

            .top{
              display: flex;
              justify-content: space-between;
            }

            .top svg{
              width: 3rem;
              cursor: pointer;
            }

            .top svg:hover{
              fill: hsl(0, 77%, 66%)
            }

            .upload-modal h2{
              font-family: 'Roboto Condensed', sans-serif;
              font-weight: bold;
              margin-bottom: 1.5rem;
              font-size: 1.5rem;
            }

            .upload-modal .select-button{
              margin-left: auto;
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

            .tab button{
              color: hsl(225, 54%, 33%);
              font-family: 'Roboto Condensed', sans-serif;
              font-weight: 400;
              font-size: 2rem;
              cursor: pointer;
            }

            .tab{
              height: 100%;
              cursor: pointer;
              box-sizing: border-box;
            }

            .tab button{
              font-family: 'Roboto Condensed', sans-serif;
              font-weight: 700;
              font-size: 1.3rem;
              background: transparent;
              cursor: pointer;
              padding: 1rem;
            }

            .tab-content.active{
              width: 120vh;
              height: 50vh;
              display: flex;
              gap: 6rem;
              opacity: 1;
            }

            .form-row{
              display: flex;
              gap: 1rem;
            }
            
            .form-element-images{
              flex: 1;
              width: 100%;
              height: 12rem;
            }
            
            .form-element-label{
              background-color: hsl(225, 54%, 33%);
              padding: 0.2rem;
              width: auto;
            }

            label{
              color: hsl(0, 0%, 100%);
              font-size: 1rem;
              border: none;
              padding: 0.5rem;
              font-family: 'Roboto Condensed', sans-serif;
              width: auto;
            }

            input{
              background: none;
              border: none;
              height: 2rem;
              width: auto;
            }

            .form-element-input{
              margin-bottom: 1rem;
              background-color: hsl(0, 0%, 100%);
            }

            .form-element-input textarea{
              background-color: hsl(0, 0%, 100%);
            }

            .images img{
              height: 12rem;
              width: 12rem;
              object-fit: cover;
              box-sizing: border-box;
              border: 5px solid white;
            }

            .images{
              height: 12rem
            }

            .images:hover img{
              opacity: 0.6;
            }

            .input-file{
              display: flex;
              cursor: pointer;
              background-color: hsl(225, 54%, 33%);
              padding: 2rem;
              height: 8rem;
              width: 8rem;
              align-items: center;
              justify-content: center;
            }

            .input-file label{
              font-family: 'Roboto Condensed', sans-serif;
              color: hsl(0, 0%, 100%);
              font-weight: 400;
              cursor: pointer;
            }

            .input-file svg{
              fill: hsl(0, 0%, 100%);
              width: 8rem;
            }

            .select-button button{
              font-family: 'Roboto Condensed', sans-serif;
              font-weight: 700;
              font-size: 1rem;
              background-color: hsl(88, 67%, 62%);
              padding: 1rem;
              cursor: pointer;
              width: 9rem;
            }

        </style>
  
      
      <div class="upload-modal">
        <div class="upload-window">
          <div class="top">
            <h2>Imagen destacada</h2>
            <div class="button-close">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
              </svg>
            </div>
          </div>
          <div class="tabs">
            <div class="tab-selector">
              <div class="tab" data-tab="gallery">
                <button>
                  Galería
                </button>
              </div>
            </div>
          </div>
          <div class="tab-content active" data-tab="gallery">
            <div class="form-row">
              <div class="form-element-images">
                <div class="input-file">
                  <label>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                    </svg>
                    <input type="file" name="file"/>
                  </label>
                </div>
              </div>
              <div class="images">
                <img src="https://img.asmedia.epimg.net/resizer/Nk2QA3MjvO_H_VZsRkCDOShkhCU=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/QNDS4LEKNRDY7MMSIX6C43OE7A.jpg">
              </div>
              <div class="images">
                <img src="https://technoahora.com/wp-content/uploads/2023/10/dragons-dogma-2-capcom-tokyo-gam-1024x650.webp">
              </div>
              <div class="images">
                <img src="https://cdn.dlcompare.com/others_jpg/upload/news/image/dragons-dogma-2-desvela-su-nueva-a9509372-image-a9509356.jpg">
              </div>
            </div>
            <aside>
              <div class="form-element">
                <div class="form-element-label">
                    <label>
                        Título
                    </label>
                </div>
                <div class="form-element-input">
                    <input  name="submitted-name" autocomplete="name" />
                </div>
              </div>
              <div class="form-element">
                <div class="form-element-label">
                    <label>
                        Título alternativo
                    </label>
                </div>
                <div class="form-element-input">
                    <input  name="submitted-name" autocomplete="name" />
                </div>
              </div>
            </aside>
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
        if (tabActive) {
          tabActive.classList.remove('active')
        }
        event.preventDefault()
        tabClicked.closest('.upload-window').querySelector(`.tab-content.active[data-tab="${tabActive ? tabActive.dataset.tab : ''}"]`).classList.remove('active')
        tabClicked.closest('.upload-window').querySelector(`.tab-content[data-tab="${tabClicked.dataset.tab}"]`).classList.add('active')
      } else if (event.target.closest('.button-close')) {
        uploadModal.classList.remove('active')
      }
    })

    const uploadFile = this.shadow.querySelector('input')

    uploadFile.addEventListener('change', (event) => {
      this.uploadFile(event.target.files[0])
    })
  }

  async uploadFile (file) {
    const formData = new FormData()
    formData.append('file', file)

    const result = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/images`, {
      method: 'POST',
      body: formData
    })
  }
}

customElements.define('image-gallery-component', ImageGallery)
