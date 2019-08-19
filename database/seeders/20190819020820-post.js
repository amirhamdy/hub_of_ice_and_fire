'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Posts', [{
            content: 'This is a test post has @ahmed and @ali mentions also has #first_hashtag and #second_hashtag',
            userId: '1',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            content: 'This is a test post has @amir and @mostafa mentions also has #new_hashtag',
            userId: '2',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Posts', null, {});
    }
};
