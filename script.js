const number = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const equalSign = document.querySelector(".equal-sign");
const operators = document.querySelectorAll(".operator")
const clearBtn = document.querySelector(".all-clear")
const decimal = document.querySelector(".decimal")
const calculationS = document.querySelector(".calculation-screen")
const percentage = document.querySelector(".percentage")


// Var
let prevNumber = '';
let calculatoionOperator = '';
let currentNumber = '0';
let calValue = '0';


// Function
const updateScreen = (number) => {
    calculatorScreen.value=number;
}

// Add On Feature
const updateScreenOpeation = (inputValue) => {
    if(inputValue === "clear"){
        calValue = '';
    }else{
        calValue = prevNumber+" "+calculatoionOperator+" "+currentNumber;
    }  
    calculationS.value=calValue;
}

const hitungPresen = () => {
    updateScreen(currentNumber+"%");
    currentNumber = currentNumber / 100;
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
    calValue = '';
    calculatoionOperator ='';
    prevNumber = '';
}

const clearAll = () => {
    prevNumber = '';
    calculatoionOperator = '';
    currentNumber = '0';   
}

const inputDecimal = (dot) => {
    currentNumber += dot;
    calValue += dot;
}


// OnClickBTN
number.forEach((number) => {
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);    
        updateScreenOpeation();
    })
})

operators.forEach((operator) => {
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value);
        updateScreenOpeation();
    })
})

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
    updateScreenOpeation("clear");
})

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
    updateScreenOpeation("clear");
})

percentage.addEventListener('click', () => {
    hitungPresen();
    updateScreenOpeation();
})


