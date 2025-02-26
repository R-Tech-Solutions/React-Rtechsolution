// backend/controllers/teamController.js
const TeamMember = require('../models/TeamMember');
const path = require('path');
const fs = require('fs'); // Add this import for file system operations
// Create a new team member

const createTeamMember = async (req, res) => {
  const { name, position, teamType, linkedin, whatsapp, website, image } = req.body;

  try {
    const newMember = new TeamMember({
      name,
      position,
      image, // Store base64 image directly as string
      teamType,
      linkedin: teamType === 'management' ? linkedin : undefined,
      whatsapp: teamType === 'management' ? whatsapp : undefined,
      website: teamType === 'management' ? website : undefined
    });

    await newMember.save();
    res.status(201).json({ message: 'Team member created successfully', member: newMember });
  } catch (error) {
    console.error('Error creating team member:', error);
    res.status(500).json({ error: 'Failed to create team member' });
  }
};


const getTeamMembers = async (req, res) => {
  const { teamType } = req.query;
  
  try {
    let members;
    if (teamType) {
      members = await TeamMember.find({ teamType });
    } else {
      members = await TeamMember.find();
    }
    
    res.status(200).json(members);
  } catch (error) {
    console.error('Error fetching team members:', error);
    res.status(500).json({ error: 'Failed to fetch team members' });
  }
};


// Update team member details (including image update)
const updateTeamMember = async (req, res) => {
  const { id } = req.params;
  const { name, position, teamType, linkedin, whatsapp, website, image } = req.body; // Ensure `image` matches frontend

  try {
    const member = await TeamMember.findById(id);
    if (!member) return res.status(404).json({ error: 'Team member not found' });

    member.name = name || member.name;
    member.position = position || member.position;
    member.teamType = teamType || member.teamType;
    member.linkedin = teamType === 'management' ? linkedin : undefined;
    member.whatsapp = teamType === 'management' ? whatsapp : undefined;
    member.website = teamType === 'management' ? website : undefined;

    if (image) { // Correctly update the image
      member.image = image;
    }

    await member.save();
    res.status(200).json({ message: 'Team member updated successfully', member });
  } catch (error) {
    console.error('Error updating team member:', error);
    res.status(500).json({ error: 'Failed to update team member' });
  }
};


// Delete a team member
const deleteTeamMember = async (req, res) => {
  const { id } = req.params;
  try {
    const member = await TeamMember.findByIdAndDelete(id);
    if (!member) return res.status(404).json({ error: 'Team member not found' });

    res.status(200).json({ message: 'Team member deleted successfully' });
  } catch (error) {
    console.error('Error deleting team member:', error);
    res.status(500).json({ error: 'Failed to delete team member' });
  }
}

module.exports = { createTeamMember, getTeamMembers, updateTeamMember, deleteTeamMember };

