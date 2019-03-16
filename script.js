const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');

keys.addEventListener('click', e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayNum = display.textContent;
        if (!action) {
            if (displayNum === '0') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayNum + keyContent;
            }
        } else if (action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide') {
            key.classList.add('is-depressed');
        } else if (action === 'decimal') {
            display.textContent = displayNum + '.';
        } else if (action === 'clear') {
            console.log('clear key');
        }  else if (action === 'calculate') {
            console.log('equal key');
        }
        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'));
    }
    
});