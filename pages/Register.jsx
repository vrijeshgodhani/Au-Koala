import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { RegisterUser } from "../api/Auth";
import { useNavigate } from "react-router-dom";
import KoalaLogo from "../src/assets/Koala-Logo.png";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    console.log("formdata", formData);

    const body = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await RegisterUser(body);
      console.log("response", response);

      if (response?.data) {
        toast.success("Registration successful!", {
          autoClose: 2000,
          position: "top-center",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);

        form.reset();
      }
    } catch (error) {
      console.error(error);

      if (error.response?.status === 409) {
        toast.error("User already exists!", {
          autoClose: 2000,
          position: "top-center",
        });
      } else {
        toast.error("Registration failed", {
          autoClose: 2000,
          position: "top-center",
        });
      }
    }
  };

  return (
    <div
      className="bg-gray-200"
      style={{
        height: "585px",
        backgroundColor: "#06b6d4",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        className="bg-white p-10 rounded-lg shadow-lg"
        style={{
          width: "350px",
          height: "420px",
          marginTop: "90px",
        }}
      >
      
        <div style={{ height: "120px", width: "120px",marginTop:"-20px", marginLeft: "70px",marginBottom:"30px" }}>
          <img src={KoalaLogo}></img>
           <h2 className="text-xl font-bold text-center text-gray-800">
          Register
        </h2>
        </div>
         

        <form className="space-y-5 p-4" style={{marginTop:"-50px"}} onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            style={{backgroundColor:"#155e75"}}
            className="w-full py-2 mt-4 px-4 text-white rounded hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
