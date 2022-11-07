const { User } = require('../models')

const userData = [
    {
        "username": "courtAF",
        "email": "cmash93@gmail.com",
        "github": "cmash93",
        "password": "Password1234"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;