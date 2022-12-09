
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

     if(login == "allicirp@gmail.com" && senha  == "Pri235689" || login == "roberta.freitas90@gmail.com" && "Abacaxi21" ){
alert('Login efetuado com sucesso');
    location.href = "home.html";
    }
    else{
        alert('Usuário ou senha incorreta');
    }
}
function home(){
    location.href = "home.html";
}
function cadastro(){
       location.href = "cadastro.html";
}
