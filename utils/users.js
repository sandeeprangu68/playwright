const { env } = require('./env');

exports.users = {
    admin: env.admin,
    user: env.user
};