const calcForm = document.getElementById('form-calc');

function calulate(x, y, oper) {
    switch (oper) {
        case '+':
            return +x + +y;
        case '-':
            return +x - +y;
        case 'х':
            return +x * +y;
        case '÷':
            return +x / +y;
        // default:
        //     break;
    }
}
function setResultCalc(result) {
    const elAnswer = document.querySelector('.calc__result');
    elAnswer.innerText = result;
}

function doCalc(event) {
    const btn = event.target.closest('.calc__btn');
    if (btn) {
        const symbOper = btn.innerText;
        const elX = document.getElementById('x');
        const elY = document.getElementById('y');
        const x = elX.value;
        const y = elY.value;
        if (x && y) {
            const result = calulate(x, y, symbOper);
            setResultCalc(result);
        }

    }
}


calcForm.addEventListener('click', doCalc);




