export default (() => {
    // const validation = document.querySelector(".validate");
    
    // validation.addEventListener('input', () => {
    //     let text = validation.value;

   
    //     if(text.length < validation.dataset.minlength) {
    //         validation.classList.add('active');
    //     }
    //     else {
    //         validation.classList.remove('active');
    //     }

    // });

    const form = document.querySelector('.form');

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
    })
    
})(); 
   