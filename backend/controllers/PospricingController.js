    // backend/controllers/PospricingController.js
const PospricingAdmin = require('../models/PosPricingAdmin');

// Add new pricing package
exports.addPricing = async (req, res) => {
    try {
        const { packageName, duration, pricing, image } = req.body;
        
        const newPricing = new PospricingAdmin({ packageName, duration, pricing, image });
        await newPricing.save();

        res.status(201).json({ message: 'Pricing added successfully', data: newPricing });
    } catch (error) {
        res.status(500).json({ message: 'Error adding pricing', error: error.message });
    }
};

// Get all pricing packages
exports.getAllPricing = async (req, res) => {
    try {
        const pricingList = await PospricingAdmin.find();
        res.status(200).json(pricingList);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving pricing', error: error.message });
    }
};