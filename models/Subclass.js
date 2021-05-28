const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Subclass extends Model {}

Subclass.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        classId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'class',
                key: 'id',
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'subclass',
    }
);

module.exports = Subclass;
