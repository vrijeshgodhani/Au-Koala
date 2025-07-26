import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import KoalaLogo from "../../assets/Koala-Logo.png";

const AdminLayout = () => {
  const linkClasses = ({ isActive }) =>
    `block px-4 py-2 rounded ${isActive ? "bg-blue-500 text-white" : "hover:bg-blue-100"}`;
const handleLogout=()=>{
  localStorage.removeItem("auth");
}
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100 font-sans">
      {/* Sidebar (fixed height) */}
      <aside className="w-64 bg-white shadow-md flex-shrink-0">
        <div className="p-6">
          <img src={KoalaLogo} alt="Logo" height="100px" width="150px" />
        </div>
        <nav className="p-4 space-y-2">
          <NavLink to="/admin/dashboard" className={linkClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" className={linkClasses}>
            Users
          </NavLink>
          <NavLink to="/admin/categories" className={linkClasses}>
            Categories
          </NavLink>
          <NavLink onClick={handleLogout} to="/" className={linkClasses}>
            Logout
          </NavLink>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Header (fixed at top) */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </header>

        {/* Scrollable main content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
