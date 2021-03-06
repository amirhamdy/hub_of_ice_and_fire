'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            content: {
                allowNull: false,
                type: Sequelize.STRING
            },
            mentions: {type: Sequelize.STRING},
            hashtags: {type: Sequelize.STRING},
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            userId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {model: 'Users', key: 'id'}
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Posts');
    }
};