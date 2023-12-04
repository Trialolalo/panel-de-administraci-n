export default (() => {
    const trashModal = document.querySelector(".trash-modal")

    document.addEventListener("showModalDestroy", (event => {
        trashModal.classList.add('active')
    }));

    trashModal?.addEventListener('click', async (event) => {

        if (event.target.closest('.button-cancelation')) {
            trashModal.classList.remove('active')
        }

        if (event.target.closest('.button-confirmation')) {
            trashModal.classList.remove('active')
        }
    });



})();