const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const menuContentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: ObjectId,
        ref: 'MenuCategories',
    },
}, { timestamps: true });

module.exports = mongoose.model('MenuContent', menuContentSchema)