const Testimonial = require('../models/Testimonial');
const path = require('path');

// Fetch all testimonials
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch testimonials' });
  }
};

exports.createTestimonial = async (req, res) => {
  const { name, role, company, message, rating, image } = req.body;

  if (!name || !role || !company || !message || !rating || !image) {
    return res.status(400).json({ error: 'All required fields must be provided' });
  }

  try {
    const newTestimonial = new Testimonial({
      name,
      role,
      company,
      message,
      rating,
      image, // Store base64 string
    });

    await newTestimonial.save();
    res.status(201).json({ success: true, testimonial: newTestimonial });
  } catch (error) {
    console.error('Save Error:', error.message);
    res.status(500).json({ error: 'Failed to create testimonial' });
  }
};


exports.deleteTestimonial = async (req, res) => {
  const { id } = req.params; // Get the ID from the URL params

  try {
    // Check if testimonial exists in the database
    const testimonial = await Testimonial.findById(id);
    if (!testimonial) {
      return res.status(404).json({ error: 'Testimonial not found' });
    }

    // Delete the testimonial from the database
    await Testimonial.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: 'Testimonial deleted successfully' });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    res.status(500).json({ error: 'Failed to delete testimonial' });
  }
};
