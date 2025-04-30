import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MemberDetails() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/members/${id}`)
      .then(res => setMember(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!member) return <p className="text-center mt-10 text-lg text-gray-700">Loading member details...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl max-w-2xl w-full p-8">
        <div className="flex flex-col items-center text-center">
          <img
            src={`http://localhost:5000/uploads/${member.image}`}
            alt={member.name}
            className="w-40 h-40 object-cover rounded-full shadow-md mb-4 border-4 border-indigo-300"
          />
          <h2 className="text-3xl font-bold text-indigo-700">{member.name}</h2>
          <p className="text-gray-600">{member.rollNumber} • {member.year} • {member.degree}</p>
        </div>

        <div className="mt-8 space-y-4 text-gray-800">
          <Detail label="📌 About Project" value={member.aboutProject} />
          <Detail label="🎯 Aim" value={member.aim} />
          <Detail label="🎓 Certificate" value={member.certificate} />
          <Detail label="💼 Internship" value={member.internship} />
          <Detail label="🎨 Hobbies" value={member.hobbies} />
          {member.email && <Detail label="📧 Email" value={member.email} />}
        </div>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="font-semibold text-gray-700">{label}:</p>
      <p className="pl-2 text-gray-800">{value}</p>
    </div>
  );
}

export default MemberDetails;
