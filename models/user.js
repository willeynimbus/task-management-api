const mongooseUser = require('mongoose');

const userSchema = new mongooseUser.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
}, { timestamps: true });

module.exports = mongooseUser.model('User', userSchema);