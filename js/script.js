const allBoxes = document.querySelectorAll('.box')


allBoxes.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        } else {
            allBoxes.forEach((item1) => {
                item1.classList.remove('active')
            })
            item.classList.add('active')
        }
    })
})