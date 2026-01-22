// Ожидаем полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {

    // ===== Мобильное меню (бургер) =====
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', function() {
            // Переключаем класс 'active' у списка меню
            navList.classList.toggle('active');

            // Меняем иконку бургера на крестик (опционально)
            const isExpanded = navList.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);

            // Анимация для линий бургера (простой вариант)
            const hamburger = this.querySelector('.hamburger');
            if (isExpanded) {
                hamburger.style.backgroundColor = 'transparent';
                hamburger.style.transform = 'rotate(180deg)';
                hamburger.style.transition = 'transform 0.3s, background-color 0.3s';
            } else {
                hamburger.style.backgroundColor = '#333';
                hamburger.style.transform = 'rotate(0)';
            }
        });

        // Закрыть меню при клике на ссылку (на мобильных)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                // Вернуть бургер в исходное состояние
                const hamburger = navToggle.querySelector('.hamburger');
                hamburger.style.backgroundColor = '#333';
                hamburger.style.transform = 'rotate(0)';
            });
        });
    }

    // ===== Плавная прокрутка к якорям (опционально) =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Учитываем фиксированный хедер
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Простой пример динамического года в футере =====
    const copyrightElement = document.querySelector('.footer-copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = copyrightElement.textContent.replace('2023', currentYear);
    }

    console.log('Сайт загружен и готов!');
});