const calculatorScreen = document.querySelector(".calculator-screen")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')
const percentage = document.querySelector('.percentage')
const pangkat = document.querySelector('.pangkat')
const dlt = document.querySelector('.delete')


let prevNumber = ''
let DoublePrevNumber = ''
let calculationOperator = ''
let currentNumber = '0'
let cekResult = false
let cekDlt = false
let countOperator = 0
let calculationResult = ''


// menampilkan update an input dan hasil di calculator screen
const updateScreen = (number) => {
    if (calculatorScreen.value === '0' || cekResult === true || cekDlt === true ){
        calculatorScreen.value = number
    } else{
        calculatorScreen.value = calculatorScreen.value.concat(number)
    }
    cekResult = false
    cekDlt = false

}


//fungsi untuk menginput number
const inputNumber = (number) =>{
    currentNumber = number
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
    countOperator += 1
    if (countOperator >= 2){
        DoublePrevNumber = prevNumber
    }
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber = ''
}


// ketika operator diklik akan menampilkan/mengupdate operator di calculator screen
operators.forEach((operator) =>{
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
    })
})



const Inputpangkat = (pangkat) => {
    calculationOperator = pangkat
    currentNumber = ''
}

pangkat.addEventListener('click', (event) => {
    Inputpangkat(event.target.value)
    updateScreen(calculationOperator)
})



// function untuk input simbol persen
const inputPercentage  = (percentage) => {
    calculationOperator = percentage
}



//mengatur saat tombol persen diklik
percentage.addEventListener('click', (event) => {
    inputPercentage(event.target.value)
})



// function untuk mengkalkulasikan semua operasi yang ada di calculator screen
const calculate = () =>{
    var strOnScreen = calculatorScreen.value
    if (calculatorScreen.value.includes('x')) {
        strOnScreen = strOnScreen.replace(/x/g, "*")
    }

    if (strOnScreen.includes('^')){
        var lengthOperation = strOnScreen.length
        const currentNumber = []
        for (var i = 0; i <= lengthOperation; i++){
            if (strOnScreen[i] === "^"){
                a = strOnScreen[i].replace("^", "**")
                currentNumber.push(a)
            } else{
                currentNumber.push(strOnScreen[i])
            }
        }
        strOnScreen = String(currentNumber).replace(/,/g, '')
    }

    if (calculatorScreen.value.includes('%')) {
        strOnScreen = strOnScreen.replace(/%/g, "/100")
    }
    
    currentNumber = String(eval(strOnScreen))
    calculationOperator = ''
}



// ketika tanda equal-sign diklik akan menampilkan hasil kalkulasi pada function calculate() dan menupdate beberapa nilai ke nilai semula
equalSign.addEventListener('click', () => {
    cekResult = true
    calculate()
    updateScreen(currentNumber)
    cekSqrt= false
})



// function untuk mengembalikan semua nilai ke nilai awal
const clearAll = () =>{
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
    cekResult = true
    cekSqrt = false
    countOperator = 0
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
    currentNumber = dot
}



// ketika tanda koma(.) diklik maka akan menampilkan tanda koma di calculator screen
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})



//menghapus operasi kalkulasi pada calculator-screen satu-satu dari belakang
dlt.addEventListener('click', (event) =>{
    cekDlt = true
    currentNumber = ''
    prevNumber = DoublePrevNumber
    updateScreen(calculatorScreen.value.slice(0,-1))
    if (calculatorScreen.value.length === 0){
        clearAll()
    }
})
