var express = require('express');
var router = express.Router();
const BancoDados = require('../routes/BancoConect')

router.get('/', (req, res) => {
  BancoDados.query('SELECT * FROM ')
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cadastro', (req, res) => {
  res.render('cadastro');
})

module.exports = router;
