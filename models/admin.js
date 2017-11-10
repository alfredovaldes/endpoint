/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin', {
    codAdmin: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    usario: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    contraseña: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'admin'
  });
};
