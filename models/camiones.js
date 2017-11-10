/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('camiones', {
    codCamion: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    tiempoMuerto: {
      type: DataTypes.DATE,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    calificacionCamion: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rating_codRating: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'rating',
        key: 'codRating'
      }
    }
  }, {
    timestamps: false,
    tableName: 'camiones'
  });
};
