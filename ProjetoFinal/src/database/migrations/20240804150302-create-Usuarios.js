'use strict';

const database = require('../../config/database');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //no metodo up, vamos colocar o que vai ser criado, uma tabela, coluna, linha, etc, se formos mudar ou adicionar algo na tabela
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('Usuarios',{
      ID_Usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      NomeUsuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      emailUsuario: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      SenhaUsuario: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    }
  )},


  //no metodo down, vamos colocar o que vai ser desfeito o que foi realizado no metodo up
  async down (queryInterface, Sequelize) {

  }
};
