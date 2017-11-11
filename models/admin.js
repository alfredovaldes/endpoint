/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admin', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
