'use strict';
const bcrypt = require('bcrypt');
module.exports = {
  up: async (queryInterface, Sequelize) => {

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return await queryInterface.bulkInsert('usuarios', [
      {
        id:1,
        email:'Alexandre@email.com',
        senha:bcrypt.hashSync('123456',10),
        nome:'Alexandre'
      },
      {
        id:2,
        email:'jennifer@email.com',
        senha:bcrypt.hashSync('123456',10),
        nome:'Jennifer'
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('usuarios', null, {});

  }
};
