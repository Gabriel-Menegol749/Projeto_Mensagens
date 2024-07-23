var express = require('express');
var router = express.Router();



//teste para ver se o banco ta conectado
pool.getConnection((err, connection) =>{
    if (err){
        console.error('Erro ao conectar ao banco de dados', err.stack);
        return;
    }
    console.log('Conectado ao banco de Dados! Com o ID' + connection.threadId);
    connection.release();
});


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/Login', (req, res) => {
  res.render('Login');
})
router.get('/cadastro', (req, res) => {
  res.render('cadastro');
})
router.get('/TelaPrincipal', (req, res) => {
  res.render('TelaPrincipal');
})

//module exports
module.exports = router;


