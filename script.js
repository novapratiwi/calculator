const calculatorScreen = document.querySelector(".calculator-screen")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')
const percentage = document.querySelector('.precentage')
const sqr = document.querySelector('.sqr')
const dlt = document.querySelector('.delete')

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
let cekResult = false
let cekPercentage = false
cekDlt = false
let count = 0
let countOperator = 0
let calculationResult = ''



// menampilkan update an input dan hasil di calculator screen
const updateScreen = (number) => {
    if (calculatorScreen.value === '0' || cekResult === true || count >= 2 || cekPercentage === true || cekDlt === true){
        calculatorScreen.value = number
    } else{
        calculatorScreen.value += number
    }
    cekResult = false
    cekDlt = false
}


//fungsi untuk menginput number
const inputNumber = (number) =>{
    if (currentNumber === '0') {
        currentNumber = number
    } else{
        currentNumber += number
    }
    count += 1
}


// ketika number diklik akan menampilkan/mengupdate number di calculator screen
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})


// function untuk input operator
const inputOperator = (operator) =>{
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
    count = 0
    countOperator += 1
}


// ketika operator diklik akan menampilkan/mengupdate operator di calculator screen
operators.forEach((operator) =>{
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
    })
})



// function untuk mengkalkulasikan semua operasi yang ada di calculator screen
const calculate = () =>{
    var strOnScreen = calculatorScreen.value
    if (calculatorScreen.value.includes('x')) {
        strOnScreen = strOnScreen.replace(/x/g, "*")
    }
    calculationResult = eval(strOnScreen)
    currentNumber = calculationResult
    calculationOperator = ''
}



// ketika tanda equal-sign diklik akan menampilkan hasil kalkulasi pada function calculate() dan menupdate beberapa nilai ke nilai semula
equalSign.addEventListener('click', () => {
    cekResult = true
    calculate()
    updateScreen(currentNumber)
    cekPercentage = false
    countOperator = 0
    cekSqrt = false
})



// function untuk mengembalikan semua nilai ke nilai awal
const clearAll = () =>{
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
    cekResult = true
    countOperator = 0
    cekSqrt = false
}



// ketika tanda all-clear diklik akan menjalankan function clearAll() dan menampilkan nilai 0
clearBtn.addEventListener('click', () =>{
    clearAll()
    updateScreen(currentNumber)
})


// function untuk menginput tanda decimal
inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}



// ketika tanda koma(.) diklik maka akan menampilkan tanda koma di calculator screen
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})



//menghapus operasi kalkulasi pada calculator-screen satu-satu dari belakang
dlt.addEventListener('click', (event) =>{
    cekDlt = true
    updateScreen(calculatorScreen.value.slice(0,-1))
    if (calculatorScreen.value.length === 0){
        clearAll()
    }
})




// KODINGAN DIBAWAH MASIH DALAM PERBAIKAN KARENA MASIH PUTAR OTAK MEMIKIRKAN LOGIKA, EAAAAA HAHAH. 
// NGERI SEKALI BISA PUTAR OTAK NI, SILUMAN KAH APA NI HAHAHAH


// const InputSqr = (number) => {
//     currentNumber = currentNumber*currentNumber
// }

// sqr.addEventListener('click', (event) => {
//     cekSqrt = true
//     InputSqr(event.target.value)
//     updateScreen(currentNumber+'**(2)')
// })


// const inputPercentage  = (percentage) => {
//     calculationOperator = percentage
//     // currentNumber = parseFloat(currentNumber)/100
// }


// percentage.addEventListener('click', (event) => {
//     cekPercentage = true
//     inputPercentage(event.target.value)
//     // updateScreen(currentNumber + calculationOperator)
//     // currentNumber = parseFloat(currentNumber)/100
// })


// const isTherePrecentage = () =>{
//     if (calculatorScreen.value.includes("%")){
//         console.log('ada persen')
//     }
// }