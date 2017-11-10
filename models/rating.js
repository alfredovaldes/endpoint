/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rating', {
    codRating: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    calificacionChofer: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    calificacionCamion: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    fechaCalificacion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'rating'
  });
};
