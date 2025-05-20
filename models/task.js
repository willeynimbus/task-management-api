const mongooseTask = require('mongoose');

const taskSchema = new mongooseTask.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, required: true },
    assignedUserId: { type: mongooseTask.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongooseTask.model('Task', taskSchema);