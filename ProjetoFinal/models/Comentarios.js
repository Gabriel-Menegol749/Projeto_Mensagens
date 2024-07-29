const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Comentarios = sequelize.define('Comentarios', {
    ID_Comentario: {
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
    Comentario: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'Comentarios',
    timestamps: false,
  });

  return Comentarios;
};
