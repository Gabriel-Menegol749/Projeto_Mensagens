const sequelize = require('sequelize');
const ConfigBaseDados = require('../config/Database.js');

try {
    connection.authenticate();
    console.log('A conexão com a base de dados foi realizada com sucesso!');
} catch(error){
    console.error('Não foi possível conectar com a base de dados...', error);

}
