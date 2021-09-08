document.querySelectorAll('.drop-item').forEach(el => {
    const dropItemContent = el.querySelector('.drop-item__content');
    el.querySelector('.drop-item__header').addEventListener('click', () => {
        if (el.classList.contains('drop-item--active')) {
            dropItemContent.style.height = '0';
        } else {
            dropItemContent.style.height = `${el.querySelector('.drop-item__content-inner').offsetHeight.toString()}px`;
        }
        el.classList.toggle('drop-item--active')
    })
})