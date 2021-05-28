const { Model, DataTypes } = require('sequelize');
const { ARMOR_CATEGORY_ENUM } = require('./_ENUM');

const sequelize = require('../config/connection');


class Armor extends Model {}

Armor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        ac: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        category: {
            type: DataTypes.ENUM(ARMOR_CATEGORY_ENUM),
        },
        stealthDisadvantage: {
            type: DataTypes.BOOLEAN,
        },
        dexModMax: {
            type: DataTypes.INTEGER,
        },
        cost: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'armor',
    }
);

module.exports = Armor;
