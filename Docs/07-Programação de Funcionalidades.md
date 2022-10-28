# Programação de Funcionalidades

Visualização de vídeos e atividade de fixação (RF-04 e RF-08)
A tela principal do sistema apresenta um vídeo de destaque de um tema abordado sobre educação ambiental e uma atividade relacionada ao vídeo apresentado. O vídeo e a atividade de fixação são armazenados no LocalStorage com estruturas dados baseada em JSON. Um exemplo da tela é apresentado na Figura X. 

![image](https://user-images.githubusercontent.com/114036574/198420558-76215eb4-4a42-4622-b416-d7940d53534c.png)




Requisitos atendidos
●	RF-04 - 
●	RF-08 - 

Artefatos da funcionalidade
●	index.html
●	style.css
●	script.js

Estrutura de Dados

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Save The Planet">
    <link rel="icon" type="image/x-icon" href="logo.png">
    <title>Save The Planet</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <!-- header section starts here-->
    <header class="header">
        <a href="#" class="logo">
            <img src="logo.png" alt="logo">
        </a>

        <div id="Busca">
            <input type="text" id="txtBusca" placeholder="Buscar..." />
            <button id="btnBusca"></button>
        </div>

        <nav class="navbar">
            <a href="#home">home</a>
            <a href="about">sobre</a>
            <a href="contacts">contato</a>
        </nav>

    </header>

    <main>
        <section class="section">
            <h1>RECICLAR | CORES DAS LIXEIRAS | MEIO AMBIENTE | ENSINO FUNDAMENTAL | EDUCAÇÃO INFANTIL</h1>

            <div class="video">
                
                <iframe width="560" height="315" src="https://www.youtube.com/embed/6G6f2stDCN0"
                    title="RECICLAR | CORES DAS LIXEIRAS | MEIO AMBIENTE | ENSINO FUNDAMENTAL | EDUCAÇÃO INFANTIL"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            
            </div>

                <div class="atividade">
                    
                    <h1>Atividade de fixação</h1>
                    <h3>Escolha a alternativa correta</h3>

                </div>
                <div class="perguntas">
                    <div id="wrapper">
                        <div id="titulo"> </div>

                        <ul>
                            <li class="alternativa"></li>
                            <li class="alternativa"></li>
                            <li class="alternativa"></li>
                            <li class="alternativa"></li>
                        </ul>

                        <div id="result"></div>
                        <div id="pontos"></div>
                    </div>
            </section>
            <script type="text/javascript" src="script.js"></script>


            
        </footer>

    </main>
  

       

</html>


  
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;800&display=swap');
  
@import url('https://www.remessaonline.com.br/blog/tabela-de-cores-html-veja-os-codigos-para-aplicar-cores-nas-tags-html/');

 *{
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: capitalize;
    transition: 2s linear;
    }
  
.header{
  
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 7%;
    border-bottom: var(--border);
    top: 0; left: 0; right: 0;
}
  
.header .logo img{
    height: 3.5rem;
}
  
.header .navbar a{
    margin: 0 1rem;
    font-size: 20px;
    text-decoration: none;
    justify-content: space-between;
    font-weight: bold;
    color: rgb(8, 8, 8);
}
  
#Busca{
    background-color: #ffffff;
    border: solid 1px #114d23;
    border-radius: 5px;
    width: 300px;
    height: 32px;
    padding: right 100px;
}
  
#txtBusca{
    text-align: left;
    align-items: center;
    background-color: transparent;
    font-size: 15px;
    padding: 10px;
    border: none;
    height: 28px;
    width: 191px;
}
  
.section{
    position: absolute;
    top: 10%;
    width: 100%;
    text-align: center-left;
    padding: 60px;
    border: none;
}
  
.video{
    display: table;
    border: transparent thin solid;
    padding: 1px;
    width: 410px;
    height: 410px;
    position: fixed;
    float: right;
}
  
.atividade{
    display: table-cell;
    align-items: right;
    float: right;
}
  
#wrapper, .perguntas {
    margin-top: 40px;
    width: 100%;
    display: table-cell;
    flex-direction: column;
    align-items: center;
    float: right;
    width: 300px;
    margin-top: 5px;
    margin-left: 589px;
}
  
#wrapper div, #wrapper ul {
    width: 50%;
    max-width: 300px;
    display: table-cell;
    align-items: center;
    float: right;
    width: 300px;
    margin-top: 5px;
}
  
ul {
    padding: 0px;
}

#titulo {
    font-size: 18px;
    font-weight: bold;
    background: #32CD32;
    padding: 10px;
    width: 300px;
    max-width: 300px;
    text-align: center;
      
}

.alternativa {
    list-style-type: none;
    margin-bottom: 4px;
    padding: 10px;
    background: #32CD32;
    text-align-last: center;
    text-decoration-color: black;
   
}

.alternativa:hover {
    cursor: pointer;
    opacity: 0.8;
    background: black;
    
}

#result {
    font-weight: bold;
    width: 20px;
    max-width: 300px;
    
}

#pontos, #result {
    color: black;
}

.atividade{
 
        font-family: 'Georgia' !important;   
        font-size:20px;
        margin: 0 ;
        padding: 0 00%;
        font-weight: 0;
        text-align: center;
        font-display: center;
        
        
     
}


let perguntas = [

    { 
        titulo: 'Em qual lixeira devemos descartar os papeis ?',
        alternativas:['Amarelo', 'Azul', 'Vermelha', 'Verde'],
        correta: 1
    },
    { 
        titulo: 'Como devemos descartar o lixo que produzimos ?',
        alternativas:['Rua', 'Boeiro', 'Lixeira', 'Rios'],
        correta: 2
    },
    { 
        titulo: 'Em qual lixeira devemos descartar os vidros ?',
        alternativas:['Amarelo', 'Azul', 'Vermelha', 'Verde'],
        correta: 3
    },
    { 
        titulo: 'Em qual lixeira devemos descartar os metais ?',
        alternativas:['Amarelo', 'Azul', 'Vermelha', 'Verde'],
        correta: 0
    }
    ]
    let app= {
    start: function(){
    
        this.Atualpos = 0;
        this.Totalpontos = 0;
    
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element, index)=>{
                  element.addEventListener('click', ()=>{
                this.checaResposta(index);
          })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },
    
    mostraquestao: function(q){
        this.qatual = q;
        // mostrando o titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
    
        // mosrando as alternativas
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function (element, index) {
            element.textContent = q.alternativas[index];
        });
    
    
    },
    
    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            this.Atualpos = 0;
        }
    },
    
    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correta")
            this.Totalpontos++;
            this.mostraresposta();
        }
        else{
            console.log("Errada")
            this.mostraresposta();
        }
    this.atualizaPontos();
    this.Proximaperg();
    this.mostraquestao(perguntas[this.Atualpos]);
    },
    
    atualizaPontos: function(){
        let scoreDiv = document.getElementById('pontos');
        scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
    
    },
    
    mostraresposta: function(correta){

        let resultDiv = document.getElementById('result');
        let result = '';
        // formatar com a mensagem será exibida
        if(correta){
            
            result = 'Parabéns! Você acertou!';
        }
        else{
            // obtendo a questão atual
            let pergunta = perguntas[this.Atualpos];
            // obtenha o indice da resposta correta da questão atual
            let cindice = pergunta.correta;
            // obtenha o texto da resposta correta da questão atual
            let ctexto = pergunta.alternativas[cindice];
            result = `Resposta correta: ${ctexto}`;
        }
        resultDiv.textContent = result;
    
    }
    
    }
    app.start();

  
Instruções de acesso
1.	Faça o download do arquivo do projeto (ZIP) ou clone do projeto no GitHub;
2.	Descompacte o arquivo em uma pasta específica;
3.	Abra o Visual Studio Code e execute o Live Server;
4.	Abra um navegador de Internet e informe a seguinte URL:
http://localhost:5500/index.html 


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
