document.addEventListener('DOMContentLoaded', () => {
    const verevka = document.querySelector('.verevka');
    verevka.addEventListener('mouseenter', () => {
        console.log('Наведение на элемент!');
    });

    verevka.addEventListener('mouseleave', () => {
        console.log('Уход с элемента!');
    });
});
