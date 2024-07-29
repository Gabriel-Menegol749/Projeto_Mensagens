const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Usuario = sequelize.define('Usuario', {
    ID_Usuario: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    NomeUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SenhaUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'Usuario',
    timestamps: false,
  });

  Usuario.associate = function(models) {
    Usuario.hasMany(models.Info_Usuarios, { foreignKey: 'ID_Usuario' });
    Usuario.hasMany(models.Comentarios, { foreignKey: 'ID_Usuario' });
  };

  return Usuario;
};
