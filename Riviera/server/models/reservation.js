const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const reservationSchema = new mongoose.Schema({ 
    user: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    numberOfPeople: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'Pending',
    },
    specialRequests: String,
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);