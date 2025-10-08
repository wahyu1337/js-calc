// variable/content holder
let firstNumber = '';
let operator = '';
let secondOperator = '';
let waitingSecondNumber = false;


// backspace or delete function 
document.querySelector('.backspace').onclick = function (){
    display.value = display.value.slice(0, -1);
}

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
    if(firstNumber !== ""   && operator !== ""){
        // display current number to the second number
        const secondNumber = display.value;

        let total;

        switch(operator){
            case "+":
                total = parseFloat(firstNumber) + parseFloat(secondNumber);
                console.log(`total sum: ${total}`)
                break;
            case "-":
                total = parseFloat(firstNumber) - parseFloat(secondNumber);
                console.log(`total subtract: ${total}`);
                break;
            case "*":
                total = parseFloat(firstNumber) * parseFloat(secondNumber);
                console.log(`total multiply: ${total}`);
                break;
            case "/":
                total = parseFloat(firstNumber) / parseFloat(secondNumber);
                console.log(`total divided: ${total}`)
                break;
        }   
        // show result total to display
        display.value = total;

        // use the current result to new firstNumber
        firstNumber = total.toString();
    } else {
        firstNumber = display.value;
    }


    //console first number after picking operator
    console.log(`first number: ${firstNumber}`);
    operator = op; // store the operator
    waitingSecondNumber = true; // enable the second number (new number pop into display)
}

// handle decimal (change later)
document.querySelector('.decimal').onclick = () => {
    if(!display.value.includes('.')){
        display.value += '.';
    }
};

// selected operator
document.querySelector('.sum').onclick = function(){
    operatorHandle('+')
    console.log(`operator: ${operator}`);
}

document.querySelector('.subtract').onclick = function(){
    operatorHandle('-');
    console.log(`operator: ${operator}`);
}

document.querySelector('.multiply').onclick = function(){
    operatorHandle('*')
    console.log(`operator: ${operator}`);
}

document.querySelector('.divide').onclick = function(){
    operatorHandle('/');
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
            total = total.toFixed(2)
            display.value = total;
            console.log(`total multiply: ${total}`);
            break;
        case '/':
            total = parseFloat(firstNumber) / parseFloat(secondNumber);
            total = total.toFixed(2)
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