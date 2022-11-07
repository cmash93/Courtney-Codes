const { User } = require('../models')

const userData = [
    {
        "username": "courtAF",
        "email": "cmash93@gmail.com",
        "github": "cmash93",
        "password": "121414"
    },
    {
        "username": "hamidAF",
        "email": "hamid@gmail.com",
        "github": "hamid93",
        "password": "121414"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;