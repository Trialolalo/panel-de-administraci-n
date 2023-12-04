export default (() => {
    const tabSelector = document.querySelector(".tab-selector")
    const tabContents = document.querySelectorAll(".tab-content")
   
    tabSelector.addEventListener('click', async (event) => {

        if (event.target.closest('.tab')) {
            const tab = event.target.closest('.tab');
            tab.parentElement.querySelector('.active').classList.remove('active');
            tab.classList.add('active');

            tab.closest('section').querySelector(".tab-content.active").classList.remove('active');
            tab.closest('section').querySelector(`.tab-content[data-tab="${tab.dataset.tab}"]`).classList.add('active')
        }
    });

   
})(); 