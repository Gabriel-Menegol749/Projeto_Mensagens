var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Login');
});

router.get('/Login', (req, res) => {
  res.render('Login');
})
router.post('/Login', (req, res) => {
  res.redirect('/TelaPrincipal')
})
router.get('/cadastro', (req, res) => {
  res.render('cadastro');
})
router.get('/TelaPrincipal', (req, res) => {
  res.render('TelaPrincipal');
})

module.exports = router;
