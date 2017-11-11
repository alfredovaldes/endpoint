/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parada', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    latitud: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    longitud: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'parada'
  });
};
