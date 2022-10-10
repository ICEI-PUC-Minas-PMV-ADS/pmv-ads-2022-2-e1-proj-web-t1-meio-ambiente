# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Nesta seção são apresentados os detalhes técnicos da solução criada pela equipe, tratando dos componentes que fazem parte da solução e do ambiente de hospedagem da solução.
 

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.
Os componentes que fazem parte da solução são apresentados na Figura que se segue.

![WhatsApp Image 2022-10-09 at 05 57 27](https://user-images.githubusercontent.com/114036574/194940324-221b084a-ec98-47d6-861c-9e98e298ac46.jpeg)


  
A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de notícias apresentadas 
     - **Atividades de fixação** - seções de atividades apresentadas para a fixação do conteúdo
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
     - **Maps API** - plataforma que permite o acesso aos mapas de localização de coleta seletiva exibidas no site.
     - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador.
     - **YouTube API** - plataforma que permite o acesso aos vídeos exibidas no site.
     


## Hospedagem

O site utiliza a plataforma do Heroku como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL:

https://link_exemplo.herokuapp.com
 
A publicação do site no Heroku é feita por meio de uma submissão do projeto (push) via git para o repositório remoto que se encontra no endereço:
https://git.heroku.com/link_exemplo.git


