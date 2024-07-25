let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function appendCharacter(char) {
    display.innerText += char;
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '(', ')', '.', 'Enter', 'Backspace', 'c', 'C'].includes(key)) {
        event.preventDefault();
    }

    if (!isNaN(key) || key === '.') {
        appendCharacter(key);
    }

    if (['+', '-', '*', '/', '(', ')'].includes(key)) {
        appendCharacter(key);
    }

    if (key === 'Enter') {
        calculateResult();
    }

    if (key.toLowerCase() === 'c') {
        clearDisplay();
    }

    if (key === 'Backspace') {
        deleteLast();
    }
});
