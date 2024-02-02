class UploadImage extends HTMLElement {
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
          button{
            background: none;
            border: none;
          }

          .upload-modal{
            display: flex;
            gap: 1rem;
          }
          
          .form-element{
            flex: 1;
            display: flex;
            justify-content: space-between;
          }

          .form-element-label label{
            min-width: 9rem;
            display: inline-block;
          }

          label{
            background-color: hsl(225, 54%, 33%);
            color: hsl(0, 0%, 100%);
            font-size: 1rem;
            border: none;
            padding: .5rem;
            font-family: 'Roboto Condensed', sans-serif;
          }

          .upload-button{
            height: 10rem;
            width: 10rem;
            object-fit: cover;
            box-sizing: border-box;
            transition: opacity 0.3s ease;
            background-color: hsl(0, 0%, 100%);
            cursor: pointer;
          }

          .upload-button:hover{
            opacity: 0.6;
          }

          .upload-button button{
            height: 10rem;
            width: 10rem;
          }
          
          .upload-button svg{
            width: 4rem;
            cursor: pointer;
            position: relative;
          }

        </style>

      <div class="upload-modal">
        <div class="form-element">
          <div class="form-element-label">
            <label>
                Subir imagen
            </label>
            <div class="upload-button">
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />
              </svg>
              </button>
            </div>
          </div>
          <div class="form-element-label">
            <label>
                Subir imagen
            </label>
            <div class="upload-button">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />
                </svg>
              </button>
            </div>
          </div>
          <div class="form-element-label">
            <label>
                Subir imagen
            </label>
            <div class="upload-button">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      `
    const uploadModal = this.shadow.querySelector('.upload-modal')

    uploadModal?.addEventListener('click', async (event) => {
      if (event.target.closest('button')) {
        document.dispatchEvent(new CustomEvent('showModalUpload'))
      }
    })
  }
}

customElements.define('upload-image-component', UploadImage)
