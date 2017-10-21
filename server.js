/**
 * 
 * Arquivo: server.js
 * Descrição: 
 * Author:
 * Data de Criação: 21/09/2017
 * 
 */

// Configurar o Setup da App:

//Chamadas dos pacotes:
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Produto = require('./app/models/produto');

//URI: MLab
mongoose.connect('mongodb://glemos:glau123@ds062448.mlab.com:62448/node-crud-api', {
    useMongoClient: true
}); 

//Maneira Local: MongoDb:
/*mongoose.connect('mongodb://localhost:27017/node-crud-api', {
    useMongoClient: true
});*/

//Configuração da variável app para usar o 'bodyParser()':
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo a porta onde será executada a nossa api:
var port = process.env.port || 8000;

//Rotas da nossa API:
//=============================================================================

//Criando uma instância das Rotas via Express:
var router = express.Router();

//Middleware para usar em todos os requests enviados para a nossa API- Mensagem Padrão:
router.use(function(req, res, next) {
    console.log('Algo está acontecendo aqui....');
    next(); //aqui é para sinalizar de que prosseguiremos para a próxima rota. E que não irá parar por aqui!!!
});

//Rota de Teste para sabermos se tudo está realmente funcionando (acessar através: GET: http://localhost:8000/api): 
router.get('/', function(req, res) {
    res.json({ message: 'Beleza! Bem vindo(a) a nossa Loja XYZ' })
});

//API's:
//==============================================================================

//Rotas que terminarem com '/produtos' (servir: GET ALL & POST)
router.route('/produtos')

    /* 1) Método: Criar Produto (acessar em: POST http://localhost:8000/api/produtos)  */
    .post(function(req, res) {
        var produto = new Produto();

        //Aqui vamos setar os campos do produto (via request):
        produto.nome = req.body.nome;
        produto.preco = req.body.preco;
        produto.descricao = req.body.descricao;

        produto.save(function(error) {
            if(error)
                res.send('Erro ao tentar salvar o Produto....: ' + error);
            
            res.json({ message: 'Produto Cadastrado com Sucesso!' });
        });
    })

    /* 2) Método: Selecionar Todos Produtos (acessar em: GET http://localhost:8000/api/produtos)  */
    .get(function(req, res) {
        Produto.find(function(error, produtos) {
            if(error) 
                res.send('Erro ao tentar Selecionar Todos os produtos...: ' + error);

            res.json(produtos);
        });
    });


//Definindo um padrão das rotas prefixadas: '/api':
app.use('/api', router);

//Iniciando a Aplicação (servidor):
app.listen(port);
console.log("Iniciando a app na porta " + port);