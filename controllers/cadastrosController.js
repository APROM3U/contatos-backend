const fs = require('fs').promises;
const path = require('path');
let CadastrosController = {
    index: () => {
        let cadastros = require('../database/cadastros.json');
        return cadastros;
    },
    create: cadastro => {
        let cadastros = require('../database/cadastros.json');
        cadastros.push(cadastro);
        fs.writeFile(path.join(__dirname,'../database/cadastros.json'),JSON.stringify(cadastros))
        .then(
            () => console.log("Escreveu com sucesso")
        )
    }
}
CadastrosController.create({nome:"Rômulo", email:"romulo@taverna.com"});
module.exports = CadastrosController;