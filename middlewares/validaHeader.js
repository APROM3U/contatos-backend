const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    // Verifica se o campo authorization existe nos headers
    if(!req.headers.authorization){
        return res.status(403).json({"err":"Requisição sem campo de autorização"});
    }

    // Capturar o token
    let token = req.headers.authorization.replace('Bearer ','');

    // Validar o token extraindo seu conteúdo
    let user;

    try{
        user = jwt.verify(token, 'jacarenosecoanda');
    } catch (error) {
        return res.error(403).json({"msg":"Token inválido"})
    }

    // "Pregar" as infos extraidas do token no req
    req.user = user;

    // Chamo o next 
    console.log(req.user);
    next();

}