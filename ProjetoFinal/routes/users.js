var express = require('express');
var router = express.Router();
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));

//ligação ao banco
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BancoUsuarios'
})

//teste para ver se o banco ta conectado
pool.getConnection((err, connection) =>{
    if (err){
        console.error('Erro ao conectar ao banco de dados', err.stack);
        return;
    }
    console.log('Conectado ao banco de Dados! Com o ID' + connection.threadId);
    connection.release();
});

async function inserirUsuarios(nome, email, senha){
  const sql = `INSERT INTO Usuarios (NomeUsuario, emailUsuario, SenhaUsuario) VALUES (?, ?, ?)`;
  try {
    const [results] = await pool.query(sql, [nome, email,  senha]);
    return results;
  } catch (err) {
    throw err;
  }
}


/* GET users listing. */
router.post('/insert-data', async (req, res) =>{
  const {nome, email, senha} = req.body;

  try{
    await inserirUsuarios(nome, email, senha);
    res.json({success:true});
  } catch (err){
    console.error('Erro ao inserir usuário: ' +err.stack);
    res.json({success: false, message: 'Erro ao cadastrar Usuário.'});
  }
})


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

router.get('/usuarios', async (req, res) =>{
  try{
    const [rows] = await pool.query('SELECT * FROM Usuario');
    res.json(rows);
  } catch (err){
    console.log('Erro ao buscar Usuários: ', +err.stack);
    res.status(500).send('Erro ao buscar usuários');
  }
})

//module exports
module.exports = router;


