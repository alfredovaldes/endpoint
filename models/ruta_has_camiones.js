/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ruta_has_camiones', {
    ruta_codRuta: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ruta',
        key: 'codRuta'
      }
    },
    camiones_codCamion: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'camiones',
        key: 'codCamion'
      }
    }
  }, {
    timestamps: false,
    tableName: 'ruta_has_camiones'
  });
};
