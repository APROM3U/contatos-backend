// Importando a função utilizando desconstrução
const { Usuario } = require('../database/models');

// Encontre pela primary key
Usuario.findByPk(1).then(
    
    // retorn o usuario com id = 1
    u => console.log(u.toJSON())
);

// retorna todos users
Usuario.findAll().then(
    user => console.log(user.map( u => u.toJSON()))
);

// insert dados na tabela
Usuario.create({nome: "Alexandre", email: "email@email.com", senha: "passwords"})