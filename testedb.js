// Importanto o sequelize e o QueryTypes
const { Sequelize, QueryTypes } = require('sequelize');

// Importar as minhas configs
const config = require('./database/config/config.json').development;

// Criando minha conexão c/ o banco de dados
const conexao = new Sequelize(config);

// Realizando uma consulta no db
//conexao.query("select * from usuarios");
// Raw Query - Consulta crua
conexao.query("select * from usuarios", {type: QueryTypes.SELECT}).then(
    dados => {
        console.log(dados)
        // Encerra conexão com db
        process.close();
}
)


