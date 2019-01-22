
const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr')

const Gardener = db.define('gardener', {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
  })
const Plot = db.define('plot', {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN,
  })
const Vegetable = db.define('vegetable', {
    name: Sequelize.STRING,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE
  })

Plot.belongsTo(Gardener, {as: "TBD"})//update FK
Gardener.hasOne(Plot, {foreignKey: "TBD"})

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})
Vegetable.belongsToMany(Gardener, {through: 'favorite'})

Plot.belongsToMany(Vegetable, {through: 'plotVegetable'})
Vegetable.belongsToMany(Plot, {through: 'plotVegetable'})


module.exports = db