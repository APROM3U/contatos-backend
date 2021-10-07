const {Usuario} = require('../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const AuthController = {
    registrar: async (req, res)=>{
        // as infor virão req.body
        // {"nome": "xxx", "email":"mail@mail", "senha":"123456"}
        
        //console.log(req.body);
        let {nome, email, senha} = req.body;

       //let cad = await Usuario.create({nome: req.body.nome, email: req.body.email, senha: req.body.senha})
       try {
            let cad = await Usuario.create({
                nome:nome,
                email:email,
                senha:bcrypt.hashSync(senha,10)
            });
            return res.status(201).json(cad);
        } catch (error) {
            return res.status(409).json({error: 1, msg:"Usuário já cadastrado com este email."});
        }

    },
    login: async (req, res) => {
       //console.log('logando...');
       //return res.send('logando...');
    
       const { email, senha } = req.body;

       const usuario = await Usuario.findOne({where:{email}});

       // Verifica se user não existi
       if(!usuario){
           return res.status(403).json({erro:1, msg: "Acesso negado"});
       }

       // Existindo o usuário, valida a senha
       if(!bcrypt.compareSync(senha, usuario.senha)){
           return res.status(403).json({erro:1, msg:"Acesso negado"});
       }

       // Removendo informação sensível do usuário
       usuario.senha = undefined;
       // Gerando token com os dados do user e senha
        let token = jwt.sign(usuario.toJSON(),"jacarenosecoanda");
    
       res.status(200).json({msg:"ok", token});

       // Se a senha for ok, retornar msg sucesso (por enquanto...)
       //res.status(200).json({msg:"We're the champions, my frieends!!!"});
    }
}

module.exports = AuthController;