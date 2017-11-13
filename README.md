# Desenvolvendo uma API RESTful com Node + Express & MongoDB
Código desenvolvido durante a gravação das videos aulas sobre: CRUD com Node.Js + MongoDb + Express.js, através do meu canal do Youtube: [AQUI](https://www.youtube.com/user/l32759)

## Recursos utilizados no desenvolvimento:

- Node.Js - [DOWNLOAD AQUI](https://nodejs.org/en/)
- Express.Js ~ v.4.0;
- Conceito RestFul;
- MongoDb - [DOWNLOAD AQUI](https://www.mongodb.com/)
- Visual Studio Code - [DOWNLOAD AQUI](https://code.visualstudio.com/)
- Mongoose ~4.x;
- JSON data (para retornar os dados);
- PostMan (testar a API criada);

## Conteúdo do Curso: (* em desenvolvimento)

- [Aula 01 - Introdução](https://www.youtube.com/watch?v=qwgDzi8TGco);
- [Aula 02 - Configurando o Ambiente de Desenvolvimento](https://www.youtube.com/edit?o=U&video_id=yBx35VkBWD4);
- [Aula 03 - Estruturando o projeto](https://www.youtube.com/watch?v=SmlEZ8Ipj0M);
- [Aula 04 - Desenvolvendo o arquivo 'server.js'](https://www.youtube.com/watch?v=gqRAgXBkOXY);
- [Aula 05 - Criando a Classe 'Produto' com Mongoose](https://www.youtube.com/watch?v=gSutX_3L9WE);
- [Aula 06 - Criando conta no MLab e Configuração do Ambiente para o BD](https://youtu.be/kjb3CFvAwbU);
- [Aula 07 - Desenvolvendo uma Rota Middleware via Express](https://youtu.be/A0IPtXULRPM);
- [Aula 08 - Desenvolvendo a Rota: POST](https://youtu.be/onPlF3gC0T4);
- [Aula 09 - Desenvolvendo a Rota: GET ALL](https://youtu.be/2oU7rOe1c3I);
- [Aula 10 - Desenvolvendo a Rota: GET By Id](https://youtu.be/1gGfo3UYq-0);
- [Aula 11 - Desenvolvendo a Rota: PUT](https://youtu.be/tTtaH_ZCQnM);
- [Aula 12 - Desenvolvendo a Rota: DELETE & Persistência de Dados via MongoDb](https://youtu.be/w0H2bsNRuzI);

## Testando a Aplicação no Postman:

Caso queira testar as API's criadas no projeto, primeiro baixe o [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).
Depois de realizar o download do Postman, basta agora realizar os passos abaiaxo para 
poder testar cada API criada!

  ROTA                    |     HTTP(Verbo)   |      Descrição        | 
------------------------- | ----------------- | --------------------- | 
/api/produtos             |       GET         | Selecionar Todos      | 
/api/produtos             |       POST        | Criar Produto         | 
/api/produtos/:produto_id |       GET         | Selecionar Por Id     | 
/api/produtos/:produto_id |       PUT         | Atualizar Por Id      |    
/api/produtos/:produto_id |       DELETE      | Excluir Por Id        |

## Executar Localmente

Caso você deseja executar o projeto na sua máquina local, basta seguir os passos abaixo:

## Começando...

Para começar, você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

### Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

* **Node.Js**: Caso não tenha, basta realizar o download [Aqui](https://nodejs.org/en/)
* **MongoDb**: Caso também não tenha, basta realizar o download [Aqui](https://www.mongodb.com/download-center#community)

p.s.: o MongoDb caso você decida conectar a sua base de dados de maneira local. Caso não, basta usar 
a base de dados do MongoDb em Cloud:

* [MLab](https://mlab.com/)

### Instalando as Dependências

Abre o cmd (caso esteja utilizando o Windows) e digite a path do seu projeto

```
cd "C:\Users\NomeDoComputador\Documents\..."
```

Depois, quando estiver na pasta do projeto, basta digitar no cmd a seguinte instrução:

```
npm install
```

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.json:

* `node_modules` - que contêm os packages do npm que precisará para o projeto.

### Executando a Aplicação

Bom, agora na mesma tela do cmd, basta iniciar o server para o projeto ser executado localmente.

```
npm run dev
```

Depois, você precisará abrir um outro terminal na sua máquina e iniciar o MongoDb. Basta digitar na tela do cmd o seguinte comando:

```
mongod
```

Caso o MongoDb esteja devidamente instalado em sua máquina, ele iniciará o serviço mostrando que a port 27017 foi iniciada.


Agora, abre a página da aplicação em `http://localhost:8000/api`. E pronto a aplicação será executada de maneira local na sua máquina.        

p.s.: no projeto, disponibilizei 2 maneiras de realizar a conexão de dados com o MongoDb através do Mongoose:

* **De maneira local**: utilizando o MongoDb;
* **De maneira em cloud**: utilizando o MLab;

Fiquem à vontade em usar ou até mesmo testar ambas as conexões!! :)  

