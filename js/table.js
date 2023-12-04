export default (() => {
    
    const tableSection = document.querySelector(".tables");

    tableSection?.addEventListener('click', async (event) => {
        if (event.target.closest('.trash')) {
            document.dispatchEvent(new CustomEvent('showModalDestroy'))
        }

        if (event.target.closest('.filter-slide')){
            document.dispatchEvent(new CustomEvent('showModalFilter'))
        }
    });
})();

