
/*  FAZ O VERSIONAMENTO DO DB, É UMA ALTERNATIVA DE ALTERAÇÃO
    
    Migrations - é um objeto que tem 2 funções
    
    1º faz uma alteração na estrutura do DB
    2º desfaz a alteração na estrutura do DB


*/

'use strict';

const { sequelize } = require("../models");

module.exports = {
  // FAZER
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable(
      'usuarios', //nome da tabela
      { // colunas da tabela
        id: {type: Sequelize.DataTypes.INTEGER, autoIncrement: true,  primarykey: true },
        nome: {type: Sequelize.DataTypes.STRING(45), allowNull: false},
        email: {type: Sequelize.DataTypes.STRING(45), allowNull: false},
        senha: Sequelize.DataTypes.STRING(256) //para senha necessário 256
      }
    )
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  // DESFAZER
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('usuarios');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};