const display = document.getElementById('display');
const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', (event) => {
    const { target } = event;
    const { value } = target;

    if (!target.matches('button')) {
        return;
    }

    switch (value) {
        case 'clear':
            display.value = '';
            break;
        case '=':
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
            break;
        default:
            display.value += value;
    }
});
