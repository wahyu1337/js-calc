// adding & Editing HTML element
const title = document.createElement('h1');
title.textContent = "CALCULATOR";

// container / main content
const container = document.createElement('div');
container.classList.add('container');

// adding display
const display = document.createElement("textarea")
display.classList.add('display');
display.textContent = "";

// create a button number
const button = {};
for (let i = 0; i <= 9; i++) {
    button[i] = document.createElement('button');
    button[i].textContent = i;
    button[i].classList.add(`number${i}`)
};

// adding HTML operator element
const sum = document.createElement('button');
sum.textContent = '+';
sum.classList.add('sum');
const subtract = document.createElement('button');
subtract.textContent = '-';
subtract.classList.add('subtract');
const multiply = document.createElement('button');
multiply.textContent = '*';
multiply.classList.add('multiply');
const divide = document.createElement('button');
divide.textContent = '/';
divide.classList.add('divide');
const result = document.createElement('button');
result.textContent = '=';
result.classList.add('result')
// adding decimal button
const decimal = document.createElement('button');
decimal.textContent = '.';
decimal.classList.add('decimal');
// adding clear button
const clearButton = document.createElement('button');
clearButton.textContent = 'C'
clearButton.classList.add('clear');

// create backspace button
const backspace = document.createElement('button');
backspace.classList.add('backspace');
backspace.textContent = "⌫";

// append the HTML element into html document/body
document.body.append(title);
document.body.append(container);
container.appendChild(display);
// append button to container / main content

// unused space row & backspace
for (let i = 0; i <= 2; i++) {
    // creating unusedButton for empty space
    let unusedButton = document.createElement('button');
    unusedButton.classList.add(`${unusedButton[i]}`)
    unusedButton.textContent = "";
    unusedButton.setAttribute("style", "opacity: 0; cursor: default;");

    // appen the unused button
    container.appendChild(unusedButton)
}
container.appendChild(backspace);
// row 1:
container.appendChild(button[1]);
container.appendChild(button[2]);
container.appendChild(button[3]);
container.appendChild(multiply);

// row 2:
container.appendChild(button[4]);
container.appendChild(button[5]);
container.appendChild(button[6]);
container.appendChild(divide);

// row 3:
container.appendChild(button[7]);
container.appendChild(button[8]);
container.appendChild(button[9]);
container.appendChild(subtract);

// row 4:
container.appendChild(decimal);
container.appendChild(button[0]);
container.appendChild(result);
container.appendChild(sum);
container.appendChild(clearButton);

// button tester
