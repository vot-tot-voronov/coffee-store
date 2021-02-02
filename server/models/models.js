const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Coffee = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING},
    cookMethod: {type: DataTypes.STRING},
    series: {type: DataTypes.STRING},
    name: {type: DataTypes.STRING},
    weight: {type: DataTypes.INTEGER},
    price: {type: DataTypes.INTEGER}
})

module.exports = {
    Coffee
}


