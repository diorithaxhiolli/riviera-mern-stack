const menuContent = require('../models/menuContent');

exports.create = async (req, res) => {
    try {
        // const {name, description, price, category} = req.body;
        // res.json(await new menuContent({name, description, price, category}).save());
        res.json(await new menuContent(req.body).save());
    } catch (err) {
        res.status(400).send('Create menu content failed');
    }
}

exports.list = async (req, res) => {
    try {
        let MenuContent = await menuContent.find().populate('category').sort({createdAt: -1}).exec();
    } catch (error) {
        res.status(400).send('List menu content failed');
    }
};

exports.read = async (req, res) => {
    try {
        let MenuContent = await menuContent.find().populate('category').exec()  
        res.json(MenuContent); 
    } catch (error) {
        res.status(400).send('Read menu content failed');
    }
}

exports.remove = async (req, res) => {
    try {
        res.json(await menuContent.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).send('Delete menu content failed');
    }
}

exports.update = async (req, res) => {
    const {name, description, price, category} = req.body;
    try {
        res.json(await menuContent.findByIdAndUpdate(req.params.id, {name, description, price, category}, {new: true}));
    } catch (error) {
        res.status(400).send('Update menu content failed');
    }
}