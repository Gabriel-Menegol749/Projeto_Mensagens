const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'BancoUsuarios'
})

conexao.connect((err) =>{
    if (err){
        console.error('Erro ao conectar ao banco de dados', err.stack);
        return
    }
    console.log('Conectado ao banco de Dados! Com o ID' + conexao.threadId);

});

module.exports = conexao;