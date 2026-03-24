// Botón con mensaje
document.getElementById("btnSaludo").addEventListener("click", () => {
    alert("¡Hola! Esto es una página de prueba con estilo 😎");
});

// Caja que cambia de color aleatoriamente
const box = document.querySelector(".color-box");

box.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    box.style.background = randomColor;
});