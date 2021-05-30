const Armor = require('./Armor');
const Character = require('./Character');
const CharacterClass = require('./CharacterClass');
const Class = require('./Class');
const Effect = require('./Effect');
const Race = require('./Race');
const Spell = require('./Spell');
const Subclass = require('./Subclass');
const Weapon = require('./Weapon');

Character.belongsToMany(Class, {
    through: CharacterClass,
})

Character.belongsToMany(Subclass, {
    through: CharacterClass,
})











module.exports = {
    Armor,
    Character,
    Class,
    Effect,
    Race,
    Spell,
    Subclass,
    Weapon,
    CharacterClass,
};
