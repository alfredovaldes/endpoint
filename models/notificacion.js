/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notificacion', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mensaje: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'notificacion'
  });
};
