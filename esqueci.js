// Formulário de recuperação de senha

const formularioRecuperacao =
document.getElementById("formulario-recuperacao");

if(formularioRecuperacao){

    formularioRecuperacao.addEventListener(
        "submit",
        function(event){

            event.preventDefault();

            alert(
                "As instruções para redefinição de senha foram enviadas para seu e-mail."
            );
        }
    );
}