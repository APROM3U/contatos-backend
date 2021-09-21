module.exports = (sequelize, DataTypes) =>{

    const c = sequelize.define(
        'Contato',
        {
            //id: { type: DataTypes.INTEGER, autoIncrement: true,  primarykey: true },
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER
        },
        {
            tableName: 'contatos',
            timestamps: false
        }
    )
    return c;
}