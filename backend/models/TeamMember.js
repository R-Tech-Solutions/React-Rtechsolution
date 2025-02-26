const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  image: { type: String }, // Store the Base64 encoded image
  teamType: { type: String, enum: ['management', 'development'], required: true },
  linkedin: { type: String }, 
  whatsapp: { type: String }, 
  website: { type: String }
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;

