const expressUser = require('express');
const routerUser = expressUser.Router();
const User = require('../models/user');

routerUser.post('/', async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        next(error);
    }
});

routerUser.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.send(user);
    } catch (error) {
        next(error);
    }
});

routerUser.get('/', async (req, res, next) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        next(error);
    }
});

module.exports = routerUser;