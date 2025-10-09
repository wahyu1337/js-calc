// variable/content holder
let firstNumber = '';
let operator = '';
let secondOperator = '';
let waitingSecondNumber = false;


// handle number function
function numberHandle(num){
    if (waitingSecondNumber){
        display.value = num;
        waitingSecondNumber = false;
    } else {
        display.value += num;
    }
}

// handle operator function
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


function equalHandle(){
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

function clearHandle(){
        // clear all the values..
        firstNumber = '';
        operator = '';
        waitingSecondNumber = false;

        // clear the display
        display.value = '';
        
        console.log('CLEARED!')
}