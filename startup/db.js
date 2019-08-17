const Sequelize = require('sequelize');
const config = require('config');

module.exports = function () {
    const dbConfig = config.get('dbConfig');

    const sequelize = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, {
        host: dbConfig.host,
        dialect: 'mysql'
    });
    
    sequelize.authenticate().then(() => {
        console.log(`Connection to ${dbConfig.name} has been established successfully.`);
    }).catch(err => {
        console.error(`Unable to connect to ${dbConfig.name} database:`, err);
    });
};