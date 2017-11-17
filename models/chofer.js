/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chofer', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nomChofer: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fotoChofer: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'chofer'
  });
};
