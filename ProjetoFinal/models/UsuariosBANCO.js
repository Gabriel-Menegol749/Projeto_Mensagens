const { Sequelize, DataTypes} = require('sequelize')

//fazendo a conexão entre js e mysql existente no sistema

//configuração do sequelize para acessar o banco desejado
const sequelize = new Sequelize('bancousuarios', 'root', '', {
  dialect: 'mysql',
});

//configurando uma nova tabela no sql
const Usuario = sequelize.define('Usuario', {
    ID_Usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    NomeUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SenhaUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'Usuario',
    timestamps: false,
  });



  //exporta a variavel de acesso acima para o banco de dados.
  module.exports = Usuario;

