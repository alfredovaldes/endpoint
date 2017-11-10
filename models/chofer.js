/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chofer', {
    codChofer: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    noLicencia: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vigenciaLicencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nomChofer: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dirChofer: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    telChofer: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    celChofer: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    emailChofer: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fechaAlta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fotoChofer: {
      type: "LONGBLOB",
      allowNull: true
    },
    calficacionChofer: {
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
    tableName: 'chofer'
  });
};
