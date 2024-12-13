// // Проверка на существование значения в Local Storage
// if (localStorage.getItem('isInverted') === null) {
//     localStorage.setItem('isInverted', 'true'); // Устанавливаем начальное состояние на true
// }

let isInverted = localStorage.getItem('isInverted') === 'true'; // Получаем состояние инверсии

function invertPage() {
    if (isInverted) {
        document.documentElement.style.filter = 'invert(100%)'; // Применяем к html
    } else {
        document.documentElement.style.filter = 'invert(0%)'; 
    }

       // Исключаем элемент с ID "photo"
       const noInvertElement = document.getElementById('photo');
       if (noInvertElement) {
           noInvertElement.style.filter = 'invert(0%)'; 
        //    noInvertElement.style.opacity= 0.4;
       }

            // Получаем все элементы с классом "no-invert"
        const noInvertElements = document.querySelectorAll('.no-invert');
        
        // Убираем инверсию для каждого элемента с классом "no-invert"
        noInvertElements.forEach(element => {
            element.style.filter = 'invert(0%)'; 
            // element.style.opacity= 0.4;
        });

   
      
}

function invertClick() {
    isInverted = !isInverted; // Переключаем состояние
    localStorage.setItem('isInverted', isInverted); // Сохраняем новое состояние в Local Storage
    invertPage(); // Вызываем функцию инвертирования страницы
}

// Вызов функции инвертирования при загрузке страницы
window.onload = invertPage;
// window.onbeforeunload = localStorage.removeItem('isInverted'); // Удаляем значение из Local Storage
