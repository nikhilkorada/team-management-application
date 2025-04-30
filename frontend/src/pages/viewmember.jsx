import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ViewMembers() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/members')
      .then(res => setMembers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100 p-6">
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">
        👥 All Team Members
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {members.map(member => (
          <div
            key={member._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl duration-300"
          >
            <img
              src={`http://localhost:5000/uploads/${member.image}`}
              alt={member.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-indigo-700">{member.name}</h3>
              <p className="text-gray-600">{member.rollNumber} • {member.year}</p>
              <p className="text-gray-600 mb-2">{member.degree}</p>
              <Link
                to={`/members/${member._id}`}
                className="text-white bg-indigo-600 px-4 py-2 inline-block rounded hover:bg-indigo-700 transition duration-300"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMembers;
