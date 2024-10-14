// script.js
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;

    // Crear un contenedor para el mensaje de agradecimiento
    const mensajeContenedor = document.createElement("div");
    mensajeContenedor.innerHTML = `<p>¡Gracias por tu reseña, ${nombre}!</p>`;

    // Mostrar el mensaje solo una vez
    const existingMessage = document.querySelector(".thank-you-message");
    if (existingMessage) {
        existingMessage.remove();
    }
    mensajeContenedor.classList.add("thank-you-message");

    // Añadir el mensaje debajo del formulario
    document.querySelector("form").appendChild(mensajeContenedor);

    // Limpiar los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").value = "";
});
