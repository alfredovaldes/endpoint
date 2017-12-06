/* jshint indent: 2 */
const uuidv1 = require('uuid/v1');

module.exports = function(sequelize, DataTypes) {
  const chofer = sequelize.define('chofer', {
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
      type: DataTypes.UUID,
      //defaultValue: DataTypes.UUIDV1,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'chofer'
  })
  chofer.prototype.generateUUID = function () {
    return uuidv1();
  }
  
  return chofer
};
