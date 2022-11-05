const router = require('express').Router();
const sequelize= require('../config/connection');
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/new', withAuth, async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});