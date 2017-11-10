/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ruta_has_parada', {
    ruta_codRuta: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ruta',
        key: 'codRuta'
      }
    },
    parada_codParada: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'parada',
        key: 'codParada'
      }
    }
  }, {
    timestamps: false,
    tableName: 'ruta_has_parada'
  });
};
