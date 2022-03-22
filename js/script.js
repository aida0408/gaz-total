const allBoxes = document.querySelectorAll('.box')
const inputLiters = document.querySelector('.inputLiters')
const billBtn = document.querySelector('.print-bill')
const petrolTypeBill = document.querySelector(".petrolTypeBill span")
const priceForOneBill = document.querySelector(".priceForOneBill span")
const totalLitersBill = document.querySelector(".totalLitersBill span")
const vatBill = document.querySelector(".vatBill span")
const totalPriceBill = document.querySelector(".totalPriceBill span")

let petrolStation = 'AI92'
let oneLiterPrice = '67'
let vat = 5

billBtn.addEventListener('click', () => {
    if(inputLiters.value.length === 0){
        alert{'Введите количество литров'}
    }
    //Какая колонка выбрана
    //Сколько стоит 1 литр бензина?
    //Сколько литров хочу залить?
    //Размер налога (5%)
    petrolTypeBill.textContent = petrolStation
    priceForOneBill.innerText = oneLiterPrice
    totalLitersBill.textContent = inputLiters.value
    vatBill.textContent = `${vat}%`
    totalPriceBill.innerText = (oneLiterPrice * inputLiters.value) * 1.05

})
// allBoxes.forEach((item) => {
//     item.addEventListener('click', () => {
//         allBoxes.forEach((item) => {
//             item.classList.remove('active')
//         })
//         item.classList.add('active')
//     })
//
// })
