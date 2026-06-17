//массив с контейнерами
const containers = [
    document.querySelector('#first'),
    document.querySelector('#second'),
    document.querySelector('#third')
];

const vperBtn = document.querySelector('#vperBtn');
const nazBtn = document.querySelector('#nazBtn');

let schet = 1; //начинаем со второго контейнера

//функция показа контейнера
function pokazKont(index) {
    containers[0].classList.add('hidden');
    containers[1].classList.add('hidden');
    containers[2].classList.add('hidden');
    containers[index].classList.remove('hidden');
    schet = index;
}

//функция для кнопки Назад
function nazad() {
    if (schet === 0) {
        pokazKont(2);
    } else {
        pokazKont(schet - 1);
    }
}

//функция для кнопки Вперёд
function vpered() {
    if (schet === 2) {
        pokazKont(0);
    } else {
        pokazKont(schet + 1);
    }
}

//привязываем именные функции к кнопкам
vperBtn.addEventListener('click', nazad);
nazBtn.addEventListener('click', vpered);