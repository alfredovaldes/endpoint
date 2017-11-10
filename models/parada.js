/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parada', {
    codParada: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    longitud: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    latitud: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'parada'
  });
};
