/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    uid: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    displayName: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    calificacionChofer: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    calificacionCamion: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'user'
  });
};
