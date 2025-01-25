const express = require('express');
const Reservation = require('../models/reservation');

exports.create = async (req, res) => {
    try {
        const {user, date, time, numberOfPeople, specialRequests} = req.body;
        const reservation = new Reservation({
            user,
            date,
            time,
            numberOfPeople,
            specialRequests,
        });
        await reservation.save()
    }catch(err){
        res.status(400).send('Create reservation failed');
    }
}

exports.listByUser = async (req, res) => {
    try {
        const reservations = await Reservation.find({user: req.params.id}).sort({date: -1}).exec();
        res.json(reservations);
    } catch (error) {
        res.status(400).send('List reservation by user failed');
    }
}

exports.list = async (req, res) => {
    try {
        const reservations = await Reservation.find({}).populate('user').sort({date: -1}).exec();
        res.json(reservations);
    } catch (error) {
        res.status(400).send('List reservation failed');
    }
}

exports.cancel = async (req, res) => {
    try {
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, {status: 'cancelled'}, {new: true});
        res.json(reservation);
    } catch(error) {
        res.status(400).send('Cancel reservation failed');
    }
}

exports.requestChange = async (req, res) => {
    try {
        const {date, time, numberOfPeople, specialRequests} = req.body;
        const reservation = await Reservation.findByIdAndUpdate(req.params.id, {date, time, numberOfPeople, specialRequests, status: 'pending'}, {new: true});
        res.json(reservation);
    } catch (error) {
        res.json(400).send('Request change reservation failed');
    }
}