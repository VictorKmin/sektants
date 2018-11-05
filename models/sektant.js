const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SektantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
    },
    age: {
        type: Number
    },
    prestige: {
        type: Number,
        default: 0
    },
    health: {
        type: Number,
        default: 100
    }
});
const model = mongoose.model('sektant', SektantSchema);
module.exports = model;