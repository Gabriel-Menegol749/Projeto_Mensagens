var express = require('express');
var router = express.Router();
const app = express();
const UserController = require('../src/controllers/usercontroller');
require('../src/config/database');
app.use(express.json());


// Rotas
router.get('/usuarios', UserController.index);


router.get('/', (req, res) => res.render('Login'));

router.get('/Login', (req, res) => res.render('Login'));

router.post('/Login', async (req, res) => {
    res.redirect('/TelaPrincipal');
});

router.get('/cadastro', (req, res) => res.render('cadastro'));

router.post('/cadastro', (req, res) => res.redirect('/TelaPrincipal'));

router.get('/TelaPrincipal', (req, res) => res.render('TelaPrincipal'));

router.get('/novasTarefas', (req, res) => res.render('novasTarefas'));

router.get('/Tarefas', (req, res) => res.render('Tarefas'));

router.get('/Tarefa', (req, res) => res.render('Tarefa'));
module.exports = router;
