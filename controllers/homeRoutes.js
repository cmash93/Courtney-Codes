const router = require('express').Router();
const sequelize= require('../config/connection');
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/login', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/signup', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/posts/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/comments', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err)
    }
});