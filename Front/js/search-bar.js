class Search extends HTMLElement {

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

            .search{
                margin: 2rem 2rem;
            }

            .search-button{
                cursor: pointer;
                background: transparent;
                border: none;
            }

            .search-button.active{
                display: none;
            }

            .search-button svg{
                width: 2rem;
            }

            .search-bar{
                display: none;
            }

            .search-bar.active{
                display: flex;
                align-items: center;
                justify-content: center;
                animation: slideIn 0.4s ease-in-out;
            }

            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            .search-bar input[type="text"] {
                padding: 8px;
                margin-right: 5px;
                border: 1px solid #ccc;
                border-radius: 15px;
                max-width: 8rem;
            }

            .search-bar button .close-button{
                top: 5px;
                right: 5px;
                background: transparent;
                border: none;
                cursor: pointer;
            }

            .close-button{
                cursor: pointer;
                background: transparent;
                border: none;
            }

            .close-button svg{
                width: 2rem;
                background: transparent;
                border: none;
            }

        </style>
        
        <section class="header-menu">
            <div class="search">
                <button class="search-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                    </svg>
                </button>
                <div class="search-bar">
                    <button class="close-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" />
                        </svg>
                    </button>
                    <input type="text" placeholder="Nyaaa..."> 
                </div>
            </div>
        </section>     
      `
      const searchButton = this.shadow.querySelector('.search-button');
      const searchBar = this.shadow.querySelector('.search-bar');
      const closeButton = this.shadow.querySelector('.close-button');
      
      searchButton.addEventListener('click', () => {
        searchBar.classList.add('active');
        searchButton.classList.add('active');
      });
      
      closeButton.addEventListener('click', () => {
        searchBar.classList.remove('active');
        searchButton.classList.remove('active');
      });

    }

}
  
customElements.define('search-component', Search);