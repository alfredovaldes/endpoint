const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

//Relaciones de las tablas

//db.camion.hasMany(db.camionChofer, {foreignKey: 'idCamion', as: 'Camion'})
//db.chofer.hasMany(db.camionChofer, {foreignKey: 'idChofer', as: 'Chofer'})
db.camionChofer.belongsTo(db.camion, {foreignKey: 'idCamion', targetKey: 'id'})
db.camionChofer.belongsTo(db.chofer, {foreignKey: 'idChofer', targetKey: 'id'})

//db.ruta.hasMany(db.rutaCamion, {foreignKey: 'idRuta', as: 'Ruta'})
//db.camion.hasMany(db.rutaCamion, {foreignKey: 'idCamion', as: 'Camion'})
db.rutaCamion.belongsTo(db.ruta, {foreignKey: 'idRuta', targetKey: 'id'})
db.rutaCamion.belongsTo(db.camion, {foreignKey: 'idCamion', targetKey: 'id'})

//db.ruta.hasMany(db.rutaParada, {foreignKey: 'idRuta', as: 'Ruta'})
//db.parada.hasMany(db.rutaParada, {foreignKey: 'idParada', as: 'Parada'})
db.rutaParada.belongsTo(db.ruta, {foreignKey: 'idRuta', targetKey: 'id'})
db.rutaParada.belongsTo(db.parada, {foreignKey: 'idParada', targetKey: 'id'})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
