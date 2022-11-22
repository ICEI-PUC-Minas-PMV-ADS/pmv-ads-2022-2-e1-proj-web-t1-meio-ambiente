
function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha  == "admin"){
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
