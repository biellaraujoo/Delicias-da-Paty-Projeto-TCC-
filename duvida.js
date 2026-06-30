const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("As informações foram enviadas para o WhatsApp da cliente!");

    location.reload();
});


