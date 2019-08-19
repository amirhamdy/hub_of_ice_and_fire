'use strict';
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        content: DataTypes.STRING,
        mentions: {
            type: DataTypes.STRING,
            set(val) {
                this.setDataValue('mentions', val.join(','));
            }
        },
        hashtags: {
            type: DataTypes.STRING,
            set(val) {
                this.setDataValue('hashtags', val.join(','));
            }
        }
    }, {});
    Post.associate = function (models) {
        Post.belongsTo(models.User, {foreignKey: 'userId', as: 'owner'});
    };
    return Post;
};