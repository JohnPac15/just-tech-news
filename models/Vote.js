const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')


class Vote extends Model{}

Vote.init(
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowaNull: false,
            reference:{
                model:'user',
                ket:'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowaNull: false,
            reference: {
                model: 'post',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote'
    }
)

module.exports = Vote