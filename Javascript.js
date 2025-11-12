const botones = document.querySelectorAll('.like-btn');

botones.forEach(boton => {
    boton.addEventListener('click',  function() {
        boton.previousElementSibling.textContent = parseInt(boton.previousElementSibling.textContent) + 1;
    });
});