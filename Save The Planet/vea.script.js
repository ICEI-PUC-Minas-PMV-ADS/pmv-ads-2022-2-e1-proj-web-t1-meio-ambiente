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
    