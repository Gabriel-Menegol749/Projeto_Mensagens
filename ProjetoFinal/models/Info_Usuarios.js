const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Info_Usuarios = sequelize.define('Info_Usuarios', {
    ID_InfoUsuarios: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ID_Usuario: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Usuario',
        key: 'ID_Usuario',
      },
      allowNull: false,
    },
    NomeUsuario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'Info_Usuarios',
    timestamps: false,
  });

  return Info_Usuarios;
};
  