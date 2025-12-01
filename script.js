// Cambiar estilo del botón
const boton = document.getElementById('myButton');
boton.style.backgroundColor = 'lightblue';
boton.style.padding = '10px';

// Añadir la función de clic
boton.addEventListener('click', saludar);

// Función de saludar
function saludar() {
    alert("Hola Nerea Sanchez!");
}

