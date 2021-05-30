const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CharacterClass extends Model {}

CharacterClass.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        characterId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'character',
                key: 'id',
            },
        },
        classId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'class',
                key: 'id',
            },
        },
        subclassId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'subclass',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'characterclass',
    }
);

module.exports = CharacterClass;
