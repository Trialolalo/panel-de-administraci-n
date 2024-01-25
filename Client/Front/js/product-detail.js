class ProductDetail extends HTMLElement {

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

        .titles{
            display: flex;
            align-items: center;
            gap: 0.8rem;
            max-height: 2rem;
            margin-top: 4rem;
        }

        .titles svg{
            width: 2.8rem;
        }

        .titles h2{
            font-size: 2rem;
            font-family: 'Exo 2', sans-serif;
            font-weight: 700;
        }

        .divider{
            display: block;
            height: 12px;
            background: hsl(0, 0%, 0%);
            box-sizing: border-box;
            height: 5px;
            width: 100%;
            border-radius: 5px;
            margin: .5rem 0rem;
            margin-bottom: 1rem;
        }
        
        .product-data{
            display: flex;
            background-color: hsla(0, 0%, 0%, 0.651);
            border-radius: 10px;
            margin-bottom: 2rem;
            text-wrap: wrap;
            word-wrap: break-word;
            font-family: 'Exo 2', sans-serif;  
            font-weight: 100;
            
        }

        .product-detail img{
            width: 20rem;
            object-fit: cover;
            box-sizing: border-box;
            padding: 1rem;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .product-detail:hover{
            background-color: hsla(0, 0%, 0%, 0.842);
            border-radius: 10px;
        }

        .product-detail:hover img{
            opacity: 0.08;
        }

        .description-box{
            padding: 1rem;
            color: hsl(0, 0%, 100%);
        }

        .description-box p{
            margin-bottom: 1.5rem;
            margin: 0;
        }

        .genres{
            display:flex;
            gap: 0.6rem;
            flex-wrap: wrap;

        }

        .genre{
            background-color: hsla(0, 0%, 0%, 0.651);
            border-radius: 10px;
            font-family: 'Exo 2', sans-serif;  
            font-weight: 100;
            font-size: 0.8rem;
        }

        .genre p{
            padding: 0.5rem;
            margin: 0;
        }

        .gallery {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin: 2rem 0;
        }

        .thumbnails {
            display: flex;
        }

        .thumbnails img {
            width: 100px;
            height: auto;
            margin-right: 10px;
            cursor: pointer;
        }

        main .price{
            justify-content: flex-end;
        }

        .price{
            display: flex;
            background-color: hsla(0, 0%, 0%, 0.808);
            border-radius: 10px;
            font-family: 'Exo 2', sans-serif;  
            font-weight: 100;
            color: hsl(0, 0%, 100%);
            justify-content: flex-end;
            height: 2rem;
            max-width: 8rem;
            align-items: center;
            padding: 2rem;
            margin-left: auto;
            cursor: pointer;
        }

        .price:hover{
            background-color: hsla(0, 0%, 0%, 0.9);
        }

        .price svg{
            fill: hsla(0, 0%, 100%);
            width: 2rem;
            margin-left: 0.8rem;
        }



        </style>
        
        <main>
            <div class="titles">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M8.35,3C9.53,2.83 10.78,4.12 11.14,5.9C11.5,7.67 10.85,9.25 9.67,9.43C8.5,9.61 7.24,8.32 6.87,6.54C6.5,4.77 7.17,3.19 8.35,3M15.5,3C16.69,3.19 17.35,4.77 17,6.54C16.62,8.32 15.37,9.61 14.19,9.43C13,9.25 12.35,7.67 12.72,5.9C13.08,4.12 14.33,2.83 15.5,3M3,7.6C4.14,7.11 5.69,8 6.5,9.55C7.26,11.13 7,12.79 5.87,13.28C4.74,13.77 3.2,12.89 2.41,11.32C1.62,9.75 1.9,8.08 3,7.6M21,7.6C22.1,8.08 22.38,9.75 21.59,11.32C20.8,12.89 19.26,13.77 18.13,13.28C17,12.79 16.74,11.13 17.5,9.55C18.31,8 19.86,7.11 21,7.6M19.33,18.38C19.37,19.32 18.65,20.36 17.79,20.75C16,21.57 13.88,19.87 11.89,19.87C9.9,19.87 7.76,21.64 6,20.75C5,20.26 4.31,18.96 4.44,17.88C4.62,16.39 6.41,15.59 7.47,14.5C8.88,13.09 9.88,10.44 11.89,10.44C13.89,10.44 14.95,13.05 16.3,14.5C17.41,15.72 19.26,16.75 19.33,18.38Z" />
                </svg>
                <h2>Stray</h2>
            </div>
            <span class="divider"></span>
            
            <div class="product-data">
                <div class="product-detail">
                    <img alt="Stray" src="img/stray.webp">
                </div>
                <div class="description-box">
                    <h3>
                        Description
                    </h3>
                    <p>
                        Stray is a third-person action-adventure video game starring a cat set in the neon-lit alleys of a decadent cybercity and its murky corners. In Stray, our feline companion, lost, alone, and separated from its family, must roam the city inhabited by innocent androids and dangerous creatures, fend off unforeseen threats, and solve an ancient mystery to escape from a forgotten city.
                    </p>
                    <h3>
                        Players
                    </h3>
                    <p>
                        1 (Competitive: No / Cooperative: No)
                    </p>
                    <h3>
                        Genre
                    </h3>
                    <div class="genres">
                        <div class="genre">
                            <p>Action</p>
                        </div>
                        <div class="genre">
                            <p>Adventure</p>
                        </div>
                        <div class="genre">
                            <p>Cats</p>
                        </div>
                    </div>
                    <div class="gallery">
                        <div class="thumbnails">
                            <img alt="Stray Thumbnail 1" src="img/stray_thumbnail.webp" data-index="0">
                            <img alt="Stray Thumbnail 2" src="img/stray_thumbnail1.webp" data-index="1">
                            <img alt="Stray Thumbnail 3" src="img/stray_thumbnail2.webp" data-index="2">
                        </div>
                    </div>                    
                </div> 
            </div>   
            <div class="price">
                <h2>
                    18.47€
                </h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 20C19 21.11 18.11 22 17 22C15.89 22 15 21.1 15 20C15 18.89 15.89 18 17 18C18.11 18 19 18.9 19 20M7 18C5.89 18 5 18.89 5 20C5 21.1 5.89 22 7 22C8.11 22 9 21.11 9 20S8.11 18 7 18M7.2 14.63L7.17 14.75C7.17 14.89 7.28 15 7.42 15H19V17H7C5.89 17 5 16.1 5 15C5 14.65 5.09 14.32 5.24 14.04L6.6 11.59L3 4H1V2H4.27L5.21 4H20C20.55 4 21 4.45 21 5C21 5.17 20.95 5.34 20.88 5.5L17.3 11.97C16.96 12.58 16.3 13 15.55 13H8.1L7.2 14.63M8.5 11H10V9H7.56L8.5 11M11 9V11H14V9H11M14 8V6H11V8H14M17.11 9H15V11H16L17.11 9M18.78 6H15V8H17.67L18.78 6M6.14 6L7.08 8H10V6H6.14Z" />
                </svg>
            </div>  
        </main>
      `;
    //   this.setupGallery();
    }
  
    // setupGallery() {
    //   const thumbnails = this.shadow.querySelectorAll('.thumbnails img');
    //   const previewImage = this.shadow.querySelector('.preview-image');
  
    //   thumbnails.forEach(thumbnail => {
    //     thumbnail.addEventListener('click', () => {
    //       const index = thumbnail.getAttribute('data-index');
    //       const imageUrl = thumbnail.getAttribute('src');
    //       previewImage.setAttribute('src', imageUrl);
    //       previewImage.setAttribute('data-current-index', index);
    //     });
    //   });
    // }
}
  
customElements.define('product-detail-component', ProductDetail);