const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const { ALIGNMENT_ENUM } = require('./_ENUM');

class Character extends Model {}

Character.init(
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
        raceId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'race',
                key: id,
            },
            allowNull: false,
        },
        alignment: {
            type: DataTypes.ENUM(ALIGNMENT_ENUM),
        },
        experience: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        level: {
            type: DataTypes.INTEGER,
        },
        baseStats: {
            type: DataTypes.STRING,
        },
        proficiencies: {
            type: DataTypes.STRING,
        },
        maxHitpoints: {
            type: DataTypes.INTEGER,
        },
        currentHipoints: {
            type: DataTypes.INTEGER,
        },
        inspired: {
            type: DataTypes.BOOLEAN,
        },
        backgroundId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'background',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'character',
    }
);

module.exports = Character;
