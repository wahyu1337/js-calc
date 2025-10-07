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
    // adding clear button
    const clearButton = document.createElement('button');
        clearButton.textContent = 'C'

    // append the HTML element into html document/body
document.body.append(title);
document.body.append(container);
container.appendChild(display);
    // append a button number
    for (let i = 0; i <= 9; i++){
        const button = document.createElement('button');
            button.textContent = i;
            button.classList.add(`number${i}`)
            container.appendChild(button);
    };
    // append a operator & clear button to container
    container.appendChild(sum);
    container.appendChild(subtract);
    container.appendChild(multiply);
    container.appendChild(divide);
    container.appendChild(clearButton);
    container.appendChild(result);