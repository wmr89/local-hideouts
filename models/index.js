const Category = require('./Category');
const Comment = require('./Comment');
const Location = require('./Location');
const LocationCategory = require('./LocationCategory');
const LocationTag = require('./LocationTag');
const State = require('./State');
const Tag = require('./Tag');
const User = require('./User');

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Location, {
    foreignKey: 'location_id',
});

Location.belongsTo(State, {
    foreignKey: 'state_id'
});

Location.belongsToMany(Category, {
    through: LocationCategory,
    foreignKey: 'location_id',
    onDelete: 'CASCADE',
});

Category.belongsToMany(Location, {
    through: LocationCategory,
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

Location.belongsToMany(Tag, {
    through: LocationTag,
    foreignKey: 'location_id',
    onDelete: 'CASCADE',
});

Tag.belongsToMany(Location, {
    through: LocationTag,
    foreignKey: 'tag_id',
    onDelete: 'CASCADE',
});

module.exports = {
    Category,
    Comment,
    Location,
    LocationCategory,
    LocationTag,
    State,
    Tag,
    User,
};