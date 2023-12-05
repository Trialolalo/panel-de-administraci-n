class Table extends HTMLElement {

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

        .filter-slide{
            background: transparent;
            border: none;
            cursor: pointer;
        }

        .table-buttons {
            background-color: hsl(0, 0%, 100%);
            padding: 0.5rem;
            margin-bottom: 1rem;
        }

        .tables{
            flex: 1;
        }

        .table-registers{
            max-height: 70vh;
            overflow-y: scroll;
        }

        ::-webkit-scrollbar-thumb{
            background: hsl(219, 79%, 66%);
        }

        .table-top{
            background-color: hsl(225, 54%, 33%);
        }

        .table-edit{
            display: flex;
            justify-content: flex-end;
        }

        .table-info{
            background-color: hsl(0, 0%, 100%);
        }   

        .table-info ul{
            list-style: none;
            padding: 1rem;
            font-weight: bold;
            color: hsl(0, 0%, 15%);
            font-family: 'Roboto Condensed', sans-serif;
            margin: 0;
            margin-bottom: 1rem;
        }

        .table-buttons svg{
            fill: hsl(219, 79%, 66%);
            width: 2rem;
        }

        .pencil svg{
            width: 2rem;
            height: 2rem;
            fill: hsl(0, 0%, 100%);
            cursor: pointer;
        }

        .pencil svg:hover{
            fill: hsl(88, 67%, 62%);
        }

        .trash svg{
            width: 2rem;
            height: 2rem;
            fill: hsl(0, 0%, 100%);
            cursor: pointer;
        }

        .trash svg:hover{
            fill: hsl(0, 77%, 66%);
        }    

        </style>
  
      
        <div class="tables">
            <div class="table-buttons">
                <button class="table-button filter-slide">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
                </button>
            </div>
            <div class="table-registers">
            
                <div class="table-register">
                    <div class="table-top">
                        <div class="table-edit">
                            <div class="pencil">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                                </button>
                            </div>
                            <div class="trash">
                                <button class="trash-slide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                                </button>
                            </div>                  
                        </div>
                    </div>
                    <div class="table-info">
                        <ul>
                            <li>Email:</li>
                            <li>Nombre:</li>
                            <li>Apellidos:</li>
                        </ul>
                    </div>
                </div>
                <div class="table-register">
                    <div class="table-top">
                        <div class="table-edit">
                            <div class="pencil">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                            </div>
                            <div class="trash">
                                <button class="trash-slide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="table-info">
                        <ul>
                            <li>Email:</li>
                            <li>Nombre:</li>
                            <li>Apellidos:</li>
                        </ul>
                    </div>
                </div>
                <div class="table-register">
                    <div class="table-top">
                        <div class="table-edit">
                            <div class="pencil">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                            </div>
                            <div class="trash">
                                <button class="trash-slide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="table-info">
                        <ul>
                            <li>Email:</li>
                            <li>Nombre:</li>
                            <li>Apellidos:</li>
                        </ul>
                    </div>
                </div>
                <div class="table-register">
                    <div class="table-top">
                        <div class="table-edit">
                            <div class="pencil">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
                            </div>
                            <div class="trash">
                                <button class="trash-slide">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="table-info">
                        <ul>
                            <li>Email:</li>
                            <li>Nombre:</li>
                            <li>Apellidos:</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      `
  
        const tableSection = this.shadow.querySelector(".tables");

        tableSection?.addEventListener('click', async (event) => {
            if (event.target.closest('.trash')) {
                document.dispatchEvent(new CustomEvent('showModalDestroy'))
            }

            if (event.target.closest('.filter-slide')){
                document.dispatchEvent(new CustomEvent('showModalFilter'))
            }
        });
    }
}
  
customElements.define('table-component', Table);
