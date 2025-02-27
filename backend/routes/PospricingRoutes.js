// backend/routes/PospricingRoutes.js
const express = require('express');
const router = express.Router();
const PospricingController = require('../controllers/posPricingController');

router.post('/api/pospricing', PospricingController.addPricing);
router.get('/api/pospricing', PospricingController.getAllPricing);

module.exports = router;