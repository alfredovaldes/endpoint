/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('camiones_has_chofer', {
    camiones_codCamion: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'camiones',
        key: 'codCamion'
      }
    },
    chofer_codChofer: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'chofer',
        key: 'codChofer'
      }
    }
  }, {
    timestamps: false,
    tableName: 'camiones_has_chofer'
  });
};
