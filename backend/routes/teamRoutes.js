const express = require('express');
const router = express.Router();
const { createTeamMember, getTeamMembers, updateTeamMember, deleteTeamMember } = require('../controllers/teamController');

// POST route to create a new team member (with image as Base64)
router.post('/create', createTeamMember);

// GET route to fetch team members (by teamType)
router.get('/', getTeamMembers);

// PATCH route to update team member details, including the image (Base64)
router.patch('/update/:id', updateTeamMember);

// DELETE route to delete a team member
router.delete('/delete/:id', deleteTeamMember);

module.exports = router;
