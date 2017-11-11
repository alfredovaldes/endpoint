/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rutaParada', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    idRuta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ruta',
        key: 'id'
      }
    },
    idParada: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'parada',
        key: 'id'
      }
    }
  }, {
    timestamps: false,
    tableName: 'rutaParada'
  });
};
