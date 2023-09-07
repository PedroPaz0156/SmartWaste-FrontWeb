/*n sei configurar isso*/
var cpf = document.getElementById("cpf")
var senha = document.getElementById("senha")

entrar(){ /**testes q falharam */
    if(cpf.textContent=="12312312312"||senha.textContent=="123456"){
        alert("login realizado com sucesso");
    } else{
        document.getElementById("erro").textContent = "usuario ou senha incorretos";
    }
}


/*
entrar() {mandar os dados para fachada
    cpf.textContent;
    senha.textContent;
};
*/