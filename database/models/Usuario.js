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
            senha: DataTypes.STRING
        }, 
        // 3º pram - Algumas opções
        {
            // nome da tabela
            tableName: "usuarios",
            // duas opções criar duas colun create e update na tabela ou passar timestamps como false
            timestamps: false
        }
    );

    u.associate = (models) => {
        // Associando usuário com contatos (um user possui muitos contatos), The type of the association. One of HasMany, BelongsTo, HasOne, BelongsToMany
        u.hasMany(models.Contato, {as:'contatos', foreignKey: 'usuarios_id'}) //função hasMany - um para muitos
        
        //u.hasMany(models.Post, {})
        // Associando um user com outros users (muitos para muitos)
        u.belongsToMany(models.Usuario, {
            as:'colegas',              // Nome do relacionamento!
            through:'amizades',         // through -> através | Nome da tabela intermediária! 
            foreignKey:'usuarios1_id',  // id do model codade na tbl intermediária
            otherKey:'usuarios2_id',    // id do model relacionado na tbl intermediária
            timestamps:false
        })
        // muitos para muitos
        // um para um
    }

    // um para um
    // u.hasOne(models.Perfil,{as:'perfil', foreignKey:'usuarios_id'});

    return u;

}