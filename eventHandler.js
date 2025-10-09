// number button handler
for (let i = 0; i <= 9; i++){
    document.querySelector(`.number${i}`).onclick = () => {
        numberHandle(i);
    }
}

// operator button handler
document.querySelector('.sum').onclick = () => {
    operatorHandle("+");
};

document.querySelector('.subtract').onclick = () => {
    operatorHandle("-");
};

document.querySelector(".multiply").onclick = () => {
    operatorHandle("*");
};

document.querySelector(".divide").onclick = () => {
    operatorHandle("/");
};

// equal button handler
document.querySelector('.result').onclick = () => {
    equalHandle();
}

// clear button handler
document.querySelector('.clear').onclick = () => {
    clearHandle();
}

// handle keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;

    // number handle (in keyboard)
    if (key >= '0' && key <= '9'){
        numberHandle(key);
        return;     
    }

    switch(key){
        // operator handle (in keyboard)
        case "+":
            operatorHandle('+');
            break;
        case "-":
            operatorHandle('-');
            break;
        case "*":
            operatorHandle('*');
            break;
        case "/":
            operatorHandle('/');
            break;

        // equal handle (in keyboard)
        case "Enter":
        case "=":
            equalHandle();
            break;
        
        // clear handle (in keyboard)
        case "C":
        case "c":
            clearHandle();
            break;

        case "Backspace":
            display.value = display.value.slice(0, -1);
            break; 
    }
});