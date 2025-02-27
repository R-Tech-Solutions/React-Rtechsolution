// backend/models/PospricingAdmin.js
const mongoose = require('mongoose');

const PospricingSchema = new mongoose.Schema({
    packageName: { type: String, required: true },
    duration: { type: String, required: true },
    pricing: { type: Number, required: true },
    image: { type: String, required: true } // Base64 image
}, { timestamps: true });

module.exports = mongoose.model('PospricingAdmin', PospricingSchema);