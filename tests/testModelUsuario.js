// Importando a função utilizando desconstrução
const { Usuario, sequelize } = require('../database/models');

// Encontre pela primary key
Usuario.findByPk(1, {include:'contatos'}).then(
    
    // retorn o usuario com id = 1
    u => console.log(u.toJSON()),
    sequelize.close()
);

// retorna todos users
Usuario.findAll().then(
    user => console.log(user.map( u => u.toJSON())),
    sequelize.close()
);

// insert dados na tabela
Usuario.create({nome: "Alexandre", email: "email@email.com", senha: "passwords"})