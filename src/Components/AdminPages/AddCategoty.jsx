import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !name) return alert('Please enter name and choose file');

    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', name);

    try {
      await axios.post('http://localhost:3000/api/image/upload', formData);
      setResponseData(res.data);
    } catch (error) {
      console.error('Upload error:', error);
    }
    navigate("/admin/categories")
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit}>
        <label className="block mb-2 text-sm font-medium text-gray-900">Category Name</label>
        <input
          type="text"
          className="mb-4 w-full p-2 border border-gray-300 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block mb-2 text-sm font-medium text-gray-900">Upload File</label>
        <input
          className="mb-4 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          id="file_input"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Category;
