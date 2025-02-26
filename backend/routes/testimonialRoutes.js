const express = require('express');
const { getTestimonials, createTestimonial, deleteTestimonial } = require('../controllers/testimonialController');

const router = express.Router();

// GET: Fetch all testimonials
router.get('/testimonials', getTestimonials);

// POST: Add a new testimonial with base64 image
router.post('/testimonials', createTestimonial);

router.delete('/testimonials/:id', deleteTestimonial);

module.exports = router;
