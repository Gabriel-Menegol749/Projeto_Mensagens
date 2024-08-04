var express = require('express');
var router = express.Router();
const app = express();
app.use(express.json());

const usuarios = require("../config/Database");

//Essa parte do sistema serve para definir minhas rotas, metodos get e post e para definir aonde o meu sistema deve ir

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Login');
});

router.get('/Login', (req, res) => {
  res.render('Login');
});

router.post('/Login', async (req, res) => {
    res.redirect('/TelaPrincipal');

});

router.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

router.post('/cadastro', (req, res) => {
  //verficação se usuario existe e insere
  res.redirect('/TelaPrincipal');
});

router.get('/TelaPrincipal', (req, res) => {
  res.render('TelaPrincipal');
});

//tela principal para novas tarefas
router.get('/TelaPrincipal', (req, res) => {
  res.redirect('/novasTarefas');
});

router.get('/novasTarefas', (req, res) => {
  res.render('novasTarefas');
});

//tela principal para Tarefas
router.get('/TelaPrincipal', (req, res) => {
  res.redirect('/Tarefas');
});

router.get('/Tarefas', (req, res) => {
  res.render('Tarefas');
});

//novastarefas para tarefas
router.get('/novasTarefas', (req, res) => {
  res.redirect('/Tarefa');
});

router.get('/Tarefa', (req, res) => {
  res.render('Tarefa');
});

//tarefas para novas tarefas
router.get('/Tarefa', (req, res) => {
  res.redirect('/novasTarefas');
});

router.get('/novasTarefas', (req, res) => {
  res.render('novasTarefas');
});

module.exports = router;
