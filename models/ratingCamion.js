/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ratingCamion', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    calificacion: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    idCamion: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    idUsuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    }
  }, {
    timestamps: false,
    tableName: 'ratingCamion'
  });
};
