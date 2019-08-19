'use strict';

const bcrypt = require("bcrypt");

async function hashPassword() {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash("123456", salt);
    return password;
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            firstName: 'Amir',
            lastName: 'Hamdy',
            username: 'amir',
            email: 'amirhamdy4@gmail.com',
            password: await hashPassword(),
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            firstName: 'Ahmed',
            lastName: 'Hamdy',
            username: 'ahmed',
            email: 'ahmed_hamdy@gmail.com',
            password: await hashPassword(),
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};