'use strict'


const operandIdOne = document.getElementById('calculator__operand-1');
const operandIdTwo = document.getElementById('calculator__operand-2');
const operatorsId = document.getElementById('calculator__operators');
const buttonId = document.getElementById('calculator__button');
let rezilt;

buttonId.addEventListener('click', (event) => {
    event.preventDefault();

    let numberOperandIdOne = Number(operandIdOne.value);
    let numberOperandIdTwo = Number(operandIdTwo.value);
    
    

    switch (operandIdOne.value) {
        case '':
            console.log('Первое число не указаано');
            break;
        default:
            break;
    };
    switch (operandIdTwo.value) {
        case '':
            console.log('Второе  число не указаано');
            break;
        default:
            break;
    }

    if (isNaN(numberOperandIdOne) === true || isNaN(numberOperandIdTwo) ===true) {
        console.log('Некорректный вводчисел');
        
    }
        
    
    
    switch (operatorsId.value) {
        case '+':
            rezilt = ( + operandIdOne.value) + ( + operandIdTwo.value);
            break;
        case '-':
            rezilt = operandIdOne.value - operandIdTwo.value;
            break;
        case '*':
            rezilt = operandIdOne.value * operandIdTwo.value;
            break;    
        case '/':
            rezilt = operandIdOne.value / operandIdTwo.value;
            break;
        case '':
            console.log('Не введён знак');
            break;         
        
        default:
            console.log('Программа не поддерживает такую операцию');
            break;
    }
    


    if (isNaN(rezilt)) {
        console.log('Операция некорректна');
    };
    if (rezilt === Infinity) {

        console.log('Операция некорректна');
    }else{
        console.log(rezilt);
    };
    
})



