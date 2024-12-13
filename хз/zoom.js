function openWindow() {
    const newWindow = window.open('сайт-портфолио\main\main.html', '_blank');
    
    if (newWindow) {
        newWindow.onload = () => {
            newWindow.document.body.style.zoom = '80%';
        };
    }
}
