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
        /*html*/`
        <style>
            
            button{
                background: none;
                border: none;
            }
            .form{
                flex: 2;
            }

            .form-row{
                display: flex;
                gap: 1rem;
            }
            
            .form-element{
                flex: 1;
            }

            .form-element-label{
                background-color: hsl(225, 54%, 33%);
                padding: 0.2rem;
            }

            label{
                color: hsl(0, 0%, 100%);
                font-size: large;
                border: none;
                padding: 1rem;
                font-family: 'Roboto Condensed', sans-serif;
            }

            .form-element-input{
                margin-bottom: 1rem;
                background-color: hsl(0, 0%, 100%);
            }

            .form-element-input textarea{
                background-color: hsl(0, 0%, 100%);
                width: 100%;
            }

            input{
                box-sizing: border-box;
                padding: 0.5rem;
                width: 100%;
                height: 2rem;
            }

            .validate.active{
                border-color: hsl(0, 100%, 50%);
                border-width: 0.25rem;
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

            .form-buttons {
                display: flex;
                gap: 0.5rem;
                justify-content: flex-end;
                align-items: center;
                padding: 0.5rem;
            }
            
            .form-clean-button button,
            .form-save-button button {
                border: none;
                background: none;
            }

            .form-clean-button button svg,
            .form-save-button button svg {
                width: 2rem;
            }
            
            .form-clean-button button svg path,
            .form-save-button button svg path {
                fill: hsl(219, 79%, 66%);
            }
            
            .form-clean-button button:hover svg path,
            .form-save-button button:hover svg path {
                fill: hsl(225, 54%, 33%);
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
  
      
        <section class="form">
            <div class="tabs">
                <div class="tab-selector">
                    <div class="tab active" data-tab="main">
                        <button>
                            Principal
                        </button>
                    </div>
                    <div class="tab" data-tab="images">            
                        <button>
                            Imágenes
                        </button>
                    </div> 
                </div>
                <div class="form-buttons">
                    <div class="form-clean-button">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg>
                        </button>
                    </div>
                    <div class="form-save-button">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <form action=""> 
                <div class="tab-content active" data-tab="main">
                    <div class="form-row">
                        <div class="form-element">
                            <div class="form-element-label">
                                <label>
                                    Nombre
                                </label>
                            </div>
                            <div class="form-element-input">
                                <input class="validate" name="submitted-name" autocomplete="name" data-onlyletters="true" />
                            </div>
                        </div>
                        <div class="form-element">
                            <div class="form-element-label">
                                <label>
                                    Email
                                </label>
                            </div>
                            <div class="form-element-input">
                                <input class="validate" data-mail="true" name="submitted-name" autocomplete="name" />
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-element">
                            <div class="form-element-label">
                                <label>
                                    Password
                                </label>
                            </div>
                            <div class="form-element-input">
                                <input class="validate" data-minlength="8" type="password" name="submitted-name" autocomplete="name" />
                            </div>
                        </div>
                        <div class="form-element">
                            <div class="form-element-label">
                                <label>
                                    Confirm Password
                                </label>
                            </div>
                            <div class="form-element-input">
                                <input name="submitted-name" autocomplete="name" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content" data-tab="images">
                    <div class="form-row">
                        <div class="form-element">
                            <div class="form-element-label">
                                <label>
                                    Avatar
                                </label>
                            </div>
                            <div class="form-element-input">
                                <input type="file" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>            
      `
  
    const tabSelector = this.shadow.querySelector(".tab-selector")
    const tabContents = this.shadow.querySelectorAll(".tab-content")
     
        tabSelector.addEventListener('click', async (event) => {
  
            if (event.target.closest('.tab')) {
              const tab = event.target.closest('.tab');
              tab.parentElement.querySelector('.active').classList.remove('active');
              tab.classList.add('active');
  
              tab.closest('section').querySelector(".tab-content.active").classList.remove('active');
              tab.closest('section').querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`).classList.add('active')
            }
        });

    

    const form = this.shadow.querySelector('.form');

        form.addEventListener("input", (event) => {

            if(event.target.closest('.validate')){
                const validate = event.target.closest('.validate');

                
                if(validate.dataset.minlength){
                    let text = validate.value;

                    if(text.length < validate.dataset.minlength) {
                        validate.classList.add('active');

                        if (text.length == 0) {
                            validate.classList.remove('active');
                        }
                    }
                    else {
                        validate.classList.remove('active');

                    }
                }
                

                if(validate.dataset.onlyletters){
                    event.target.value = event.target.value.replace(/[^A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]/g, '');
                }
            
                if(validate.dataset.mail){
                    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    
                }
            }
        });
    
    }

}
  
customElements.define('form-component', Form);