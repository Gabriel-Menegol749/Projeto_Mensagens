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

module.exports = router;
