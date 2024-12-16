import React, { useEffect, useState } from 'react';
import { FaUser, FaBriefcase } from 'react-icons/fa'; // Person and position icons
import '../styles/Team.css';

const Team = () => {
  const [managementTeam, setManagementTeam] = useState([]);
  const [developmentTeam, setDevelopmentTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const managementResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/team?teamType=management`);
        const managementData = await managementResponse.json();
       

        // Fetch Development Team API
        const developmentResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/team?teamType=development`);
        const developmentData = await developmentResponse.json();
        

        setManagementTeam(managementData);
        setDevelopmentTeam(developmentData);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching team data:', error);
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading...</p>;
  }

  return (
    <section className="py-16 px-8 lg:px-24 text-white bg-[#005880]">
      {/* Management Team Section */}
      <section className="management-team">
        <h2 className="team-header text-2xl font-bold text-center">Meet Our Management Team</h2>
        <div className="team-members">
          {managementTeam.map((member, index) => (
            <div key={member._id} className={`member animate__animated animate__fadeInRight animate__delay-${index + 1}s`}>
<img
  src={member.image ? `${process.env.REACT_APP_API_URL}${member.image}` : 'images/default-avatar.png'}
  alt={member.name}
  className="aspect-square rounded-full bg-white/20"
/>

              <div className="member-info">
                <div className="flex items-center">
                  <FaUser className="icon text-4xl text-[#005880] p-2 rounded-full mr-2" />
                  <p className="font-bold">{member.name}</p>
                </div>
                <div className="flex items-center mt-2">
                  <FaBriefcase className="icon text-4xl text-[#005880] p-2 rounded-full mr-2" />
                  <p className="position">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Team Section */}
      <section className="dev-team mt-16">
        <h2 className="text-2xl font-bold text-center">Meet Our Development Team</h2><br/><br/><br/>
        <div className="team-members">
          {developmentTeam.map((member, index) => (
            <div key={member._id} className={`member animate__animated animate__fadeInRight animate__delay-${index + 1}s`}>
<img
  src={member.image ? `${process.env.REACT_APP_API_URL}${member.image}` : 'images/default-avatar.png'}
  alt={member.name}
  className="aspect-square rounded-full bg-white/20"
/>

              <div className="member-info">
                <div className="flex items-center">
                  <FaUser className="icon text-4xl text-[#005880] p-2 rounded-full mr-2" />
                  <p className="font-bold">{member.name}</p>
                </div>
                <div className="flex items-center mt-2">
                  <FaBriefcase className="icon text-4xl text-[#005880] p-2 rounded-full mr-2" />
                  <p className="position">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Team;
