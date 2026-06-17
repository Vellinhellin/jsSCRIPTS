
const clicker = () => {
const first = document.querySelector("p")
first.textContent = "Текст изменен"
}
const mybtn =document.querySelector(".mybtn")
mybtn.addEventListener("click", clicker)


const block = document.getElementById('myBlock');

block.addEventListener('mouseenter', function() {
    block.classList.add('hovered');
});

block.addEventListener('mouseleave', function() {
    block.classList.remove('hovered');
});


const button = document.getElementById('toggleButton');
const div = document.getElementById('myDiv');

button.addEventListener('click', () => {
    if (div.style.display === 'none') {
    div.style.display = 'block';
    button.textContent = 'Скрыть элемент';
    } 
    else {
    div.style.display = 'none';
    button.textContent = 'Показать элемент';
    }
});

function changeBg() {
    let block = document.getElementById('block1');
    if (block.style.background === 'red') {
    block.style.background = 'skyblue';
    } 
    else {
    block.style.background = 'red';
    }
}
function changeFont() {
    let block = document.getElementById('block2');
    if (block.style.fontSize === '40px') {
    block.style.fontSize = '16px';
    }
    else {
    block.style.fontSize = '40px';
    }
}
function changeStyle() {
    let block = document.getElementById('block3');
    if (block.style.border === '6px solid green') {
    block.style.border = 'none';
    } 
    else{
    block.style.border = '6px solid green';
    }
}