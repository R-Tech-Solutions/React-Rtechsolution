import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { backEndURL } from "../../Backendurl";

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [teamType, setTeamType] = useState('development');
  const [imageBase64, setImageBase64] = useState('');
  const [editId, setEditId] = useState(null);

  const [whatsapp, setWhatsapp] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [website, setWebsite] = useState('');

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const fileInputRef = useRef(null);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(`${backEndURL}/api/team`);
      setTeamMembers(response.data);
    } catch (error) {
      console.error('Error fetching team members:', error);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImageBase64(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, position, teamType, image: imageBase64 };
    if (teamType === 'management') {
      data.whatsapp = whatsapp;
      data.linkedin = linkedin;
      data.website = website;
    }

    try {
      if (editId) {
        await axios.patch(`${backEndURL}/api/team/update/${editId}`, data);
      } else {
        await axios.post(`${backEndURL}/api/team/create`, data);
      }
      Swal.fire('Success!', 'Team member saved successfully!', 'success');
      resetForm();
      fetchTeamMembers();
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire('Error', 'Failed to submit the team member.', 'error');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backEndURL}/api/team/delete/${id}`);
      fetchTeamMembers();
      Swal.fire('Deleted!', 'The team member has been deleted.', 'success');
    } catch (error) {
      Swal.fire('Error!', 'Failed to delete the team member.', 'error');
    }
  };

  const handleEdit = (member) => {
    setEditId(member._id);
    setName(member.name);
    setPosition(member.position);
    setTeamType(member.teamType);
    setWhatsapp(member.whatsapp || '');
    setLinkedin(member.linkedin || '');
    setWebsite(member.website || '');
    setImageBase64(member.image);
  };

  const resetForm = () => {
    setName('');
    setPosition('');
    setTeamType('development');
    setWhatsapp('');
    setLinkedin('');
    setWebsite('');
    setImageBase64('');
    setEditId(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{editId ? 'Edit' : 'Add'} Team Member</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 rounded w-full" />
        <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} className="border p-2 rounded w-full" />
        <select value={teamType} onChange={(e) => setTeamType(e.target.value)} className="border p-2 rounded w-full">
          <option value="management">Management</option>
          <option value="development">Development</option>
        </select>

        {teamType === 'management' && (
          <>
            <input type="text" placeholder="WhatsApp Link" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="border p-2 rounded w-full" />
            <input type="text" placeholder="LinkedIn Profile" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} className="border p-2 rounded w-full" />
            <input type="text" placeholder="Website URL" value={website} onChange={(e) => setWebsite(e.target.value)} className="border p-2 rounded w-full" />
          </>
        )}

        <input ref={fileInputRef} type="file" onChange={handleImageChange} className="border p-2 rounded w-full" />
        {imageBase64 && <img src={imageBase64} alt="Preview" className="w-full h-32 object-cover rounded mb-4" />}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">{editId ? 'Update' : 'Add'} Team Member</button>
      </form>
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">Team Members</h1>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member._id} className="border p-4 rounded shadow">
              <img src={member.image} alt={member.name} className="w-full h-40 object-cover mb-4 rounded" />
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p>{member.position}</p>
              <p className="italic text-sm">{member.teamType}</p>
              <div className="mt-4 flex gap-2">
                <button onClick={() => handleEdit(member)} className="bg-yellow-500 text-white px-2 py-1 rounded flex items-center gap-1">
                  <FaEdit /> Edit
                </button>
                <button onClick={() => handleDelete(member._id)} className="bg-red-500 text-white px-2 py-1 rounded flex items-center gap-1">
                  <FaTrashAlt /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
