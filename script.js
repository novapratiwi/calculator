const calculatorScreen = document.querySelector(".calculator-screen")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')
const percentage = document.querySelector('.precentage')

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
let cekResult = false
let cekPercentage = false
let count = 0


const updateScreen = (number) => {
    if (calculatorScreen.value === '0' || cekResult === true || count >= 2){
        calculatorScreen.value = number
    } else{
        calculatorScreen.value += number
    }
    cekResult = false
}


// const inputNumber = (number) =>{
//     if (currentNumber === '0') {
//         currentNumber = number
//     } else if (countOperator >= 1){
//         temporaryNumber = number
//     } else{
//         currentNumber += number
//     }
// }


const inputNumber = (number) =>{
    if (currentNumber === '0') {
        currentNumber = number
    } else{
        currentNumber += number
    }
    count += 1
}


numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})


const inputOperator = (operator) =>{
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
    count = 0
}


operators.forEach((operator) =>{
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
    })
})


const inputPercentage  = (percentage) => {
    calculationOperator = percentage
    currentNumber += calculationOperator
}


percentage.addEventListener('click', (event) => {
    cekPercentage = true
    inputPercentage(event.target.value)
    updateScreen(calculationOperator)
})



const calculate = () =>{
    // let result = ''
    // switch(calculationOperator){
    //     case "+":
    //         result = parseFloat(prevNumber) + parseFloat(currentNumber)
    //         break
    //     case "-":
    //         result = parseFloat(prevNumber) - parseFloat(currentNumber)
    //         break
    //     case "*":
    //         result = parseFloat(prevNumber) * parseFloat(currentNumber)
    //         break
    //     case "/":
    //         result = parseFloat(prevNumber) / parseFloat(currentNumber)
    //         break
    //     default:
    //         return
    // }
    if (cekPercentage === true) {
        currentNumber = parseFloat(currentNumber) / 100
        cekPercentage = false
    }
    if (cekPercentage === false){
        let calculationResult = eval(calculatorScreen.value)
        currentNumber = calculationResult
    }
    calculationOperator = ''
}


equalSign.addEventListener('click', () => {
    cekResult = true
    calculate()
    updateScreen(currentNumber)
})


clearBtn.addEventListener('click', () =>{
    clearAll()
    updateScreen(currentNumber)
})


const clearAll = () =>{
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
    cekResult = true
}


decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})


inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}