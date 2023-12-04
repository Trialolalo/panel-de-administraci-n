export default (() => {

    const filterModal = document.querySelector(".filter-modal");
    const buttonCancel = document.querySelector(".button-cancel");
     

    document.addEventListener("showModalFilter", (event => {
        filterModal.classList.add('active')

    }));
    
    filterModal.addEventListener('click', async (event) => {

        if (event.target.closest('.button-filter')) {
            event.preventDefault();
        }

        if (event.target.closest('.button-cancel')) {
            event.preventDefault();
            filterModal.classList.toggle("active");
        }

    });
   
})();