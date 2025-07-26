import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../api/Auth";
import { toast, ToastContainer } from "react-toastify";
import KoalaLogo from "../src/assets/Koala-Logo.png";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token && user) {
      if (user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const res = await LoginUser(body);
      console.log("Login response", res);

      // Save token and user info
      localStorage.setItem("auth", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Login successful!", {
        autoClose: 2000,
        position: "top-right",
      });

      const isAdmin = res.data.user.isAdmin;

      // Redirect based on admin status
      setTimeout(() => {
        if (isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 2000);
    } catch (err) {
      console.error("Login error", err);
      toast.error(err.response?.data?.message || "Login failed", {
        autoClose: 2000,
        position: "top-center",
      });
    }
  };

  return (
    <div
      className="bg-gray-200"
      style={{ height: "585px", display: "flex", justifyContent: "center" }}
    >
      <div
        className="bg-white p-10 rounded-lg shadow-lg"
        style={{ width: "350px", height: "360px", marginTop: "120px" }}
      >
        <div
          style={{
            height: "120px",
            width: "120px",
            marginLeft: "75px",
            marginTop: "-20px",
            marginBottom: "30px",
          }}
        >
          <img src={KoalaLogo} alt="Koala Logo" />
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
        </div>

        <form
          className="space-y-5"
          style={{ marginTop: "-50px" }}
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              placeholder="EmailAddress"
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
              placeholder="Enter Password"
              type="password"
              name="password"
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <button
            type="submit"
            style={{ backgroundColor: "#155e75" }}
            className="w-full py-2 mt-4 text-white rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
