
function enviarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    if (nombre && email) {
        document.getElementById("mensaje").innerText = `Gracias, ${nombre}. Tu consulta ha sido enviada.`;

        document.getElementById("contact-form").reset();
    } else {
        document.getElementById("mensaje").innerText = "Por favor, completa todos los campos.";
    }
}
