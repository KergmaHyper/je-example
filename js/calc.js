const calcForm = document.getElementById('form-calc');

function calculate(x, y, oper) {
    switch (oper) {
        case '+':
            return +x + +y;
        case '-':
            return +x - +y;
        case 'х':
            return +x * +y;
        case '÷':
            return +x / +y;
    }
}
function setResultCalc(result) {
    document.querySelector('.calc__result').innerText = result;
}

function doCalc(event) {
    const btn = event.target.closest('.calc__btn');
    if (btn) {
        const symbOper = btn.innerText;
        const x = document.getElementById('x').value;
        const y = document.getElementById('y').value;
        if (x && y) { setResultCalc(calculate(x, y, symbOper)); }
    }
}


calcForm.addEventListener('click', doCalc);




