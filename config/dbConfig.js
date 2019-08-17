module.exports = {
    'development': {
        'username': 'amir',
        'password': process.env.MYSQL_PASS_DEV,
        'database': 'task_development',
        'host': process.env.MYSQL_HOST_DEV || '127.0.0.1',
        'dialect': 'mysql'
    },
    'test': {
        'username': 'amir',
        'password': process.env.MYSQL_PASS_TEST,
        'database': 'task_testing',
        'host': process.env.MYSQL_HOST_TEST || '127.0.0.1',
        'dialect': 'mysql'
    },
    'production': {
        'username': 'amir',
        'password': process.env.MYSQL_PASS_PRO,
        'database': 'task_production',
        'host': process.env.MYSQL_HOST_PRO,
        'dialect': 'mysql'
    }
};
