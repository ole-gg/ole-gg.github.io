function showModal(name) {
    const modal = document.getElementById(name);
    modal.style.display = "block";
}

function closeModal(name) {
    const modal = document.getElementById(name);
    modal.style.display = "none";
}

function ToAnotherPage(url) {
    window.location.href = url;
}

function changeImage(element, newSrc) {
    element.querySelector('img').src = newSrc;
}



// // ---------------Закрытие модального окна при клике вне его 

// window.onclick = function(event) {
//     const modal_name = document.getElementById("nameModal");
//     const modal_message = document.getElementById("messageModal");
//     if (event.target === modal_name)
//     {
//         closeModal('nameModal');
//     }
//     else if (event.target === modal_message)
//     {
//         closeModal('messageModal');
//     }
// };

