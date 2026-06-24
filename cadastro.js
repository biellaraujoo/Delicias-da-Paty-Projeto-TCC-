const formularioCadastro =
document.getElementById("formulario-cadastro");

if(formularioCadastro){

    formularioCadastro.addEventListener(
        "submit",
        function(event){
            event.preventDefault();
            const senha =
            document.getElementById("senha").value;
            const confirmarSenha =
            document.getElementById("confirmar-senha").value;

            // Verifica se as senhas são iguais

            if(senha !== confirmarSenha){
                alert(
                    "As senhas não coincidem."
                );
                return;
            }
            alert(
                "Cadastro realizado com sucesso!"
            );
        }
    );
}