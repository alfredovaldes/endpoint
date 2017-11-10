/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_has_parada', {
    user_codUsuario: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'uid'
      }
    },
    parada_codParada: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'parada',
        key: 'codParada'
      }
    }
  }, {
    timestamps: false,
    tableName: 'user_has_parada'
  });
};
