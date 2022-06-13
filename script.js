const number = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const equalSign = document.querySelector(".equal-sign");
const operators = document.querySelectorAll(".operator")
const clearBtn = document.querySelector(".all-clear")
const decimal = document.querySelector(".decimal")


// Var
let prevNumber = '';
let calculatoionOperator = '';
let currentNumber = '0';


// Function
const updateScreen = (number) => {
    calculatorScreen.value=number;
}

const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

const inputOperator = (operator) => {
    if(calculatoionOperator === '' ){
        prevNumber = currentNumber;
    }
    calculatoionOperator = operator;
    currentNumber = '';
}

const calculate = () => {
    let result = '';
    switch(calculatoionOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculatoionOperator ='';
}

const clearAll = () => {
    prevNumber = '';
    calculatoionOperator = '';
    currentNumber = '0'
}

const inputDecimal = (dot) => {
    currentNumber += dot;
}


// OnClickBTN
number.forEach((number) => {
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value);
    })
})

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
})

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})


