const mongoose = require(mongoose);
const bcrypt = require(bcrypt);

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = UserSchema;