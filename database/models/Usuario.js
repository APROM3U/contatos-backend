// Model é uma função que recebe dois params
// primeiro param é a conexão e o segundo é os tipos de dados
module.exports = (sequelize, DataTypes) => {
    
    // recebe 3 params
    const u = sequelize.define(
        // 1º param - Nome do model
        'Usuario', 
        // 2º param - Colunas
        {
            //id: { type: DataTypes.INTEGER, autoIncrement: true,  primarykey: true },
            nome: DataTypes.STRING, // irá mapear para varchar
            email: {type: DataTypes.STRING, allwNull: false},
            senha: DataTypes.SRING
        }, 
        // 3º pram - Algumas opções
        {
            // nome da tabela
            tableName: "usuarios",
            // duas opções criar duas colun create e update na tabela ou passar timestamps como false
            timestamps: false
        }
    );

    return u;

}