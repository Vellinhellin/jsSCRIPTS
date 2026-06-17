const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const resultDiv = document.getElementById('result');

const btnAdd = document.getElementById('btnAdd');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');
const btnPow = document.getElementById('btnPow');
const btnMod = document.getElementById('btnMod');
const btnClear = document.getElementById('btnClear');

function add() {
    resultDiv.innerHTML = Number(input1.value) + Number(input2.value);
}
btnAdd.addEventListener('click', add);

function sub() {
    resultDiv.innerHTML = Number(input1.value) - Number(input2.value);
}
btnSub.addEventListener('click', sub);

function mul() {
    resultDiv.innerHTML = Number(input1.value) * Number(input2.value);
}
btnMul.addEventListener('click', mul);

function div() {
    let b = Number(input2.value);
    if (b === 0) {
        resultDiv.innerHTML = 'На ноль делить нельзя';
    } else {
        resultDiv.innerHTML = Number(input1.value) / b;
    }
}
btnDiv.addEventListener('click', div);

function pow() {
    resultDiv.innerHTML = Number(input1.value) ** Number(input2.value);
}
btnPow.addEventListener('click', pow);

function mod() {
    let b = Number(input2.value);
    if (b === 0) {
        resultDiv.innerHTML = 'На ноль делить нельзя';
    } else {
        resultDiv.innerHTML = Number(input1.value) % Number(input2.value);
    }
}
btnMod.addEventListener('click', mod);

function clearInputs() {
    input1.value = '';
    input2.value = '';
    resultDiv.innerHTML = '';
}
btnClear.addEventListener('click', clearInputs);