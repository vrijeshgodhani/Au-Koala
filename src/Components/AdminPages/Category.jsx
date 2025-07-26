import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast,ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/image/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  const handleDelete = async (id) => {
  if (window.confirm("Are you sure you want to delete this category?")) {
    try {
      await axios.delete(`http://localhost:3000/api/image/categories/${id}`);
      setCategories((prev) => prev.filter((cat) => cat._id !== id));
      toast.success("Category deleted successfully!");
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete category.");
    }
  }
};



  return (
    <>
    <ToastContainer position="top-right" autoClose={1000} />

      <button
        style={{
          backgroundColor: "blue",
          padding: "5px",
          color: "white",
          borderRadius: "5px",
          margin: "20px",
        }}
      >
        <Link to={"/admin/addcategory"}>AddItems</Link>
      </button>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        {categories.length === 0 ? (
          <p>No categories found.</p>
        ) : (
          <ul className="space-y-4">
            {categories.map((cat, i) => (
              <li key={i} className="border p-4 rounded shadow">
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left px-4 py-2">Name</th>
                      <th className="text-center px-4 py-2">Image</th>
                      <th className="text-right px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="text-left px-4 py-2">
                        <p className="font-semibold">{cat.name}</p>
                      </td>
                      <td className="text-center px-4 py-2">
                        <img
                          src={`http://localhost:3000${cat.imageUrl}`}
                          alt={cat.name}
                          className="w-40 h-40 object-cover inline-block"
                        />
                      </td>
                      <td className="text-right px-4 py-2">
                        <button onClick={() => handleDelete(cat._id)} className="bg-red-500 text-white px-4 py-2 rounded">
                          Delete
                        </button>
                          <button className="bg-blue-500 text-white px-4 py-2 rounded m-2">
                          Edit
                        </button>
                        
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* <p className="font-semibold">{cat.name}</p>
              <img
                src={`http://localhost:3000${cat.imageUrl}`}
                alt={cat.name}
                className="mt-2 w-40 h-40 object-cover"
              /> */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Category;
