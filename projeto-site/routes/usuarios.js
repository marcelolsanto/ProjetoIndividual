var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;
let sessoes = [];
/* Recuperar usuário por login e senha */
router.post('/autenticar', (req, res) => {
    console.log('Recuperando usuário por nome e senha');
    var email = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de login
    var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	
    let instrucaoSql = `select * from usuario where email= '${email}' and senha = '${senha}'`;
    sequelize.query(instrucaoSql, { model: Usuario })
        .then(resultado => {
        if (resultado.length == 1) {
            sessoes.push(resultado[0].dataValues.email);
            res.json(resultado[0]);
        } else if (resultado.length == 0) {
            res.status(403).send('nome e/ou senha inválido(s)');
        } else {
            res.status(403).send('Mais de um usuário com o mesmo nome e senha!');
        }
        }).catch(error => {
            console.error(error);
            res.status(500).send(error.message);
    });
});
/* Cadastrar usuário */
router.post('/cadastrar', (req, res) => {
    console.log('Criando um usuário');
    Usuario.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }).then(resultado => {
        console.log(`Registro criado: ${resultado}`);
        res.send(resultado);
    }).catch(erro => {
        console.error(erro);
        res.status(500).send(erro.message);
    });
});
/* Verificação de usuário */
router.get('/sessao/entrar/:email', function(req, res) {
        let email = req.params.email;
        let tem_sessao = false;
    for (let i = 0; i < sessoes.length; i++) {
            if (sessoes[i] == email) {
                tem_sessao = true;
                break;
            }
        }
        try {
            if (tem_sessao) {
                let mensagem = `Usuário ${email} possui sessão ativa!`;
                console.log(mensagem);
                res.send(mensagem);
            }
        } catch (error) {
            console.error(error);
            res.status(403).send(error.message);
        }
    });
/* Logoff de usuário */
router.get('/sessao/sair/:email', (req, res) => {// /sessao/entrar
    let email = req.params.email;
let nova_sessoes = [];
	for (let i=0; i<sessoes.length; i++) {
        if (sessoes[i] != email) {
			nova_sessoes.push(sessoes[i]);
		}
     }
	sessoes = nova_sessoes;
    res.send(`Sessão do usuário ${email} finalizada com sucesso!`);
 });
/* Recuperar todos os usuários */
router.get('/', (_req, res) => {
 console.log('Recuperando todos os usuários'),
   Usuario.findAndCountAll().then(resultado => {
   console.log(`${resultado.count} registros`),
        res.json(resultado.rows);
   }).catch(erro => {
    console.error(erro),
        res.status(500).
            send(erro.message)
   });
});
module.exports = router;
