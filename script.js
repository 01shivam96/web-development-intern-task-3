const buttons = document.querySelectorAll('.btn');
const display = document.getElementById('display');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            currentInput = '';
            operator = '';
            previousInput = '';
            display.textContent = '0';
        } else if (value === '=') {
            if (currentInput !== '' && previousInput !== '' && operator !== '') {
                currentInput = eval(previousInput + operator + currentInput).toString();
                operator = '';
                previousInput = '';
                display.textContent = currentInput;
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            if (currentInput !== '') {
                if (previousInput !== '') {
                    previousInput = eval(previousInput + operator + currentInput).toString();
                } else {
                    previousInput = currentInput;
                }
                operator = value;
                currentInput = '';
                display.textContent = previousInput;
            }
        } else {
            if (currentInput === '0') {
                currentInput = value;
            } else {
                currentInput += value;
            }
            display.textContent = currentInput;
        }
    });
});
