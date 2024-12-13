


let currentScroll = 0; // Текущая позиция прокрутки

document.addEventListener('wheel', (event) => {
    event.preventDefault(); // Отключаем стандартное поведение
    currentScroll += event.deltaY; // Изменяем текущую позицию скролла
    const maxScroll = 1567 - window.innerHeight; // Ограничение вниз по высоте изображения

    if (currentScroll < 0) currentScroll = 0; // Ограничение вверх
    if (currentScroll > maxScroll) currentScroll = maxScroll; // Ограничение вниз

    window.scrollTo(0, currentScroll); // Применяем новый скролл
}, { passive: false });






