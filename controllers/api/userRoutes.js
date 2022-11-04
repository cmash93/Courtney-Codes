const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk({
            where: {
                id: req.params.id
            },
            attributes: {
                exclude: ['password']
            },
            include: [
                {
                    model: Post,
                    attributes: [
                        'id', 'title', 'post_body', 'date_created'
                    ]
                },
                {
                    model: Comment,
                    attributes: [
                        'id', 'comment_body', 'date_created'
                    ],
                    include: {
                        model: Post,
                        attributes: ['title'],
                    }
                }
            ]
        })

        if(!userData) {
            res.status(404).json({message: 'No user found'})
        }

        res.status(200).json(userData)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;

            res.status(200).json({message: 'Successfully created new user'})
        })
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {username: req.body.username}
        })

        if(!userData) {
            res.status(404).json({message:'Username not found'});
            return;
        }

        const checkPassword = await userData.checkPassword(req.body.password);

        if(!checkPassword) {
            res.status(404).json({message: 'Incorrect password. Please try again.'});
            return;
        }
        
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;

            res.status(200).json({user: userData, message: 'You are now logged in!'})
        })
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/logout', async (req, res) => {
    try {
        if (req.session.logged_in) {
            const userData = await req.session.destroy(() => {
                res.status(204).end();
            })
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).end();
    }
});