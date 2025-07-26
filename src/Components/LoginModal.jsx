import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../api/Auth";
import { toast, ToastContainer } from "react-toastify";
import KoalaLogo from "../assets/Koala-Logo.png";
import { motion, AnimatePresence } from "framer-motion";

const LoginModal = ({ onClose }) => {
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
    const formData = new FormData(e.target);

    const body = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const res = await LoginUser(body);

      localStorage.setItem("auth", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      toast.success("Login successful!", { autoClose: 2000 });

      const isAdmin = res.data.user.isAdmin;

      setTimeout(() => {
        onClose();
        navigate(isAdmin ? "/admin" : "/");
      }, 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed", {
        autoClose: 2000,
      });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-10 rounded-lg shadow-lg w-[350px] relative"
          initial={{ y: -50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -50, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <button onClick={onClose} className="absolute top-2 right-4 text-xl">✕</button>
          <div className="text-center mb-4">
            <img src={KoalaLogo} alt="Koala Logo" className="w-24 mx-auto mb-2" />
            <h2 className="text-2xl font-bold text-gray-800">Login</h2>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input name="email" type="email" placeholder="Email" required className="w-full border px-3 py-2 rounded" />
            <input name="password" type="password" placeholder="Password" required className="w-full border px-3 py-2 rounded" />
            <button type="submit" className="w-full py-2 bg-teal-700 text-white rounded hover:bg-teal-800">Login</button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">Register</a>
          </p>
          <ToastContainer />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginModal;
