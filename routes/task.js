const expressTask = require('express');
const routerTask = expressTask.Router();
const Task = require('../models/task');
const UserTask = require('../models/user');

routerTask.post('/', async (req, res, next) => {
    try {
        const user = await UserTask.findById(req.body.assignedUserId);
        if (!user) {
            return res.status(400).send({ message: 'Assigned user not found' });
        }
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        next(error);
    }
});

routerTask.get('/:id', async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send({ message: 'Task not found' });
        }
        res.send(task);
    } catch (error) {
        next(error);
    }
});

routerTask.get('/', async (req, res, next) => {
    try {
        const query = {};
        if (req.query.status) {
            query.status = req.query.status;
        }
        if (req.query.assignedUserId) {
            query.assignedUserId = req.query.assignedUserId;
        }
        const tasks = await Task.find(query);
        res.send(tasks);
    } catch (error) {
        next(error);
    }
});

routerTask.put('/:id', async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send({ message: 'Task not found' });
        }
        if (req.body.title) task.title = req.body.title;
        if (req.body.description) task.description = req.body.description;
        if (req.body.dueDate) task.dueDate = req.body.dueDate;
        if (req.body.status) task.status = req.body.status;
        if (req.body.assignedUserId) {
            const user = await UserTask.findById(req.body.assignedUserId);
            if (!user) {
                return res.status(400).send({ message: 'Assigned user not found' });
            }
            task.assignedUserId = req.body.assignedUserId;
        }
        await task.save();
        res.send(task);
    } catch (error) {
        next(error);
    }
});

routerTask.delete('/:id', async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send({ message: 'Task not found' });
        }
        res.send({ message: 'Task deleted' });
    } catch (error) {
        next(error);
    }
});

module.exports = routerTask;