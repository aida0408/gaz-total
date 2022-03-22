const allBoxes = document.querySelectorAll('.box')
const oneLitersPriceInputs = document.querySelectorAll('.inputName')
const inputLiters = document.querySelector('.inputLiters')
const billBtn = document.querySelector('.print-bill')
const petrolTypeBill = document.querySelector(".petrolTypeBill span")
const priceForOneBill = document.querySelector(".priceForOneBill span")
const totalLitersBill = document.querySelector(".totalLitersBill span")
const vatBill = document.querySelector(".vatBill span")
const totalPriceBill = document.querySelector(".totalPriceBill span")

let petrolStation = 'AI95'
let oneLiterPrice
let vat = 5
const petrols = ['AI95', 'AI98', 'AI100']

allBoxes.forEach((onePetrolStation, idx) => {
    onePetrolStation.addEventListener('click', () => {
        allBoxes.forEach((item) => {
            item.classList.remove('active')
        })
        onePetrolStation.classList.add('active')
        petrolStation = petrols[idx]
       oneLiterPrice = oneLitersPriceInputs[idx].value
    })

})
billBtn.addEventListener('click', () => {
    if (inputLiters.value.length === 0) {
        alert('Введите количество литров')
    } else {
        petrolTypeBill.textContent = petrolStation
        priceForOneBill.innerText = oneLiterPrice
        totalLitersBill.textContent = inputLiters.value
        vatBill.textContent = `${vat}%`
        totalPriceBill.innerText = (oneLiterPrice * inputLiters.value * 1.05).toFixed(2)

    }


})


//Какая колонка выбрана
//Сколько стоит 1 литр бензина?
//Сколько литров хочу залить?
//Размер налога (5%)