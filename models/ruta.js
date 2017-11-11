/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ruta', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nombreLargo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    nombreOrden: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    trayecto: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    activo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    timestamps: false,
    tableName: 'ruta'
  });
};
