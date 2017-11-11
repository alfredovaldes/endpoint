/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('camionChofer', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    idCamion: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'camion',
        key: 'id'
      }
    },
    idChofer: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'chofer',
        key: 'id'
      }
    }
  }, {
    timestamps: false,
    tableName: 'camionChofer'
  });
};
