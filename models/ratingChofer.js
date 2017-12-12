/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ratingChofer', {
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
    idChofer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'chofer',
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
    tableName: 'ratingChofer'
  });
};
