let login = prompt("Введите свой логин", "");
let pass = prompt("Введите свой пароль", "");
let admin = 'admin'
let password = 'password'
if (login === admin && pass === password) {alert('Успешный вход')}
else {alert('не правильно')}