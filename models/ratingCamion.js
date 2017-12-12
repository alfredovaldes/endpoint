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
    idCamion: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'camion',
        key: 'id'
      }
    },
    idUsuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    }
  }, {
    timestamps: false,
    tableName: 'ratingCamion'
  });
};
