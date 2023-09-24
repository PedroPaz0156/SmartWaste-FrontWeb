/*receber objetos*/
var cpf = document.querySelector("#cpf");
var senha = document.querySelector("#senha");
var erro = document.querySelector("#erro");

function  entrar(){ /**testes para o login*/
    if(cpf.textContent=="12312312312" && senha.textContent=="123456"){
        alert("login realizado com sucesso");
    } else{
        erro.textContent = "usuario ou senha incorretos";
    }
}


/*
entrar() {mandar os dados para fachada algum dia
    cpf.textContent;
    senha.textContent;
};
*/