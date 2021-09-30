const {Usuario} = require('../database/models');

const bcrypt = require('bcrypt');

const AuthController = {
    registrar: async (req, res)=>{
        // as infor virão req.body
        // {"nome": "xxx", "email":"mail@mail", "senha":"123456"}
        
        console.log(req.body);
        let {nome, email, senha} = req.body;

       //let cad = await Usuario.create({nome: req.body.nome, email: req.body.email, senha: req.body.senha})
       
        let cad = await Usuario.create({
            nome:nome,
            email:email,
            senha:bcrypt.hashSync(senha,10)
        });

        delete cad.senha;

        return res.json(cad);

    },
    login: (req, res) => {
        console.log('logando...');
       return res.send('logando...');
    }
}

module.exports = AuthController;