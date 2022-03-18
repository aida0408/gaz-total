const allBoxes = document.querySelectorAll('.box')
const gasInput = document.querySelectorAll('.input')
const priceAI = document.querySelectorAll('.price-AI')
const totalLiters = document.querySelectorAll('.total-liters')
const priceOneLiter = document.querySelector('.one_liter')

let AI95 = ""
let AI98 = ""
let AI100 = ""
let total = ""
allBoxes.forEach((item) => {
    item.addEventListener('click', () => {
        allBoxes.forEach((item) => {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })

})
