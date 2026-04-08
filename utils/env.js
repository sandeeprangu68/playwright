require('dotenv').config({
    path: `.env.${process.env.ENV || 'dev'}`
});

exports.env = {
    baseURL: process.env.BASE_URL,
    admin: {
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    },
    user: {
        email: process.env.USER_EMAIL,
        password: process.env.USER_PASSWORD
    }
};

console.log('Running ENV:', process.env.ENV);