const mongoose = require('mongoose');
const hashPassword = require('../utils/hashPassword');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    preferences: [String]
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await hashPassword(this.password);
    next();
});

module.exports = mongoose.model('User', UserSchema);
