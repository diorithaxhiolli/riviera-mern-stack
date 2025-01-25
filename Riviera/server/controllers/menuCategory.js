const menuCategories = require('../models/menuCategories');

exports.create = async (req, res) => {
    try { 
        const {name} = req.body;
        res.json(await new menuCategories({name}).save());
    } catch(err) {
        res.status(400).send('Create menu category failed');
    }
}

exports.list = async (req, res) => {
    res.json(await menuCategories.find({}).sort({createdAt: -1}).exec());
};

exports.read = async (req, res) => {
    let MenuCategory = await menuCategories.findById(req.params.id);
    
    // might need to add menuContent later !!!!!!!
    
    res.json(MenuCategory);
}

exports.remove = async (req, res) => {
    try {
        res.json(await menuCategories.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).send('Delete menu category failed');
    }
}

exports.update = async (req, res) => {
    const {name} = req.body;
    try {
        res.json(await menuCategories.findByIdAndUpdate(req.params.id, {name}, {new: true}));
    } catch (error) {
        res.status(400).send('Update menu category failed');
    }
}