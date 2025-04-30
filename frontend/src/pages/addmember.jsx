import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddMember() {
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    year: '',
    degree: '',
    aboutProject: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aim: '',
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      await axios.post('http://localhost:5000/api/members', data);
      alert('Member added successfully!');
      navigate('/members');
    } catch (err) {
      alert('Error adding member');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
          ✍️ Add New Team Member
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField name="name" type="text" placeholder="Full Name" handleChange={handleChange} />
          <InputField name="rollNumber" type="text" placeholder="Roll Number" handleChange={handleChange} />
          <InputField name="year" type="text" placeholder="Academic Year" handleChange={handleChange} />
          <InputField name="degree" type="text" placeholder="Degree Program" handleChange={handleChange} />
          <TextAreaField name="aboutProject" placeholder="Describe your project..." handleChange={handleChange} />
          <InputField name="hobbies" type="text" placeholder="Hobbies (comma separated)" handleChange={handleChange} />
          <InputField name="certificate" type="text" placeholder="Certificates" handleChange={handleChange} />
          <InputField name="internship" type="text" placeholder="Internships" handleChange={handleChange} />
          <TextAreaField name="aim" placeholder="Describe your aim..." handleChange={handleChange} />
          <div>
            <label className="block mb-1 font-medium text-gray-700">Upload Image</label>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
              required
              className="w-full rounded border border-gray-300 p-2 bg-white file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            ✅ Submit Member
          </button>
        </form>
      </div>
    </div>
  );
}

function InputField({ name, type, placeholder, handleChange }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      required
      className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  );
}

function TextAreaField({ name, placeholder, handleChange }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
      required
      rows="3"
      className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
    />
  );
}

export default AddMember;
