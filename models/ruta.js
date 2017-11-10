/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ruta', {
    codRuta: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    latitudPP: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    longitudPP: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nombreLargo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    nombreOrden: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    trayecto: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    activo: {
      type: DataTypes.BOOLEAN(),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'ruta'
  });
};
