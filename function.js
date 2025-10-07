// variable/content holder
let firstNumber = '';
let operator = '';
let waitingSecondNumber = false;


// handle a number and display it.
for (let i = 0; i <= 9; i++){
    document.querySelector(`.number${i}`).onclick = function(){
        // start fresh for second number
        if(waitingSecondNumber){
            display.value = i;
            console.log(display.value);
            waitingSecondNumber = false;
        } else {
            display.value += i; // add current number
        }
    }
}

// operator handle
function operatorHandle(op){
    firstNumber = display.value;

    //console first number after picking operator
    console.log(`first number: ${firstNumber}`);
    operator = op; // store the operator
    waitingSecondNumber = true; // enable the second number (new number pop into display)
}

// selected operator
document.querySelector('.sum').onclick = function(){
    operatorHandle('+')
    display.value = '+';
    console.log(`operator: ${operator}`);
}

document.querySelector('.subtract').onclick = function(){
    operatorHandle('-');
    display.value = '-';
    console.log(`operator: ${operator}`);
}

document.querySelector('.multiply').onclick = function(){
    operatorHandle('*')
    display.value = '*';
    console.log(`operator: ${operator}`);
}

document.querySelector('.divide').onclick = function(){
    operatorHandle('/');
    display.value = '/';
    console.log(`operator: ${operator}`);
}


// Handle Equal Buttons
document.querySelector('.result').onclick = function(){
    let secondNumber = display.value;

    let total;

    switch(operator){
        case "+":
            total = parseFloat(firstNumber) + parseFloat(secondNumber);
            display.value = total;
            console.log(`total sum: ${total}`)
            break;
        case "-":
            total = parseFloat(firstNumber) - parseFloat(secondNumber);
            display.value = total;
            console.log(`total subtract: ${total}`);
            break;
        case '*':
            total = parseFloat(firstNumber) * parseFloat(secondNumber);
            display.value = total;
            console.log(`total multiply: ${total}`);
            break;
        case '/':
            total = parseFloat(firstNumber) / parseFloat(secondNumber);
            display.value = total;
            console.log(`total divided: ${total}`);
    }
}


// clear button
document.querySelector('.clear').onclick = () => {
    // clear all the values..
    firstNumber = '';
    operator = '';
    waitingSecondNumber = false;

    // clear the display
    display.value = '';
    
    console.log('CLEARED!')
}
