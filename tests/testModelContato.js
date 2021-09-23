const { Contato, sequelize } = require('../database/models');
/*
async function teste(){
    let resultado = await Contato.create({
        nome:'Jorge', 
        email: 'jorge@email.com',
        usuarios_id: 1
    });

    //let contatos = await Contato.findAll();
    //console.log(contatos.map(c=>c.toJSON()));

    console.log(resultado.map(c=>c.toJSON()));

    sequelize.close(); // Fecha conexão 
} 

teste();
*/
Contato.findByPk(3,{include:'telefones'}).then(
    c => {
        console.log(c.numero)
        sequelize.close()
    }
)