/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rutaCamion', {
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
    idCamion: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'camion',
        key: 'id'
      }
    }
  }, {
    timestamps: false,
    tableName: 'rutaCamion'
  });
};
