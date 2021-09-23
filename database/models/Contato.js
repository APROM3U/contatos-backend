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
    );

    c.associate = (models) => {

        c.hasMany(models.Telefone, {as:'telefones', foreignKey: 'contatos_id'}); //função hasMany - um para muitos
       
        // um contato tem muitos user
        c.belongsTO(models.Usuario, {as:'usuario', foreignKey:id})
    }

    return c;
}