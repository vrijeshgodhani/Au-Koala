// import React from "react";
// import KoalaLogo from "../../../assets/Koala-Logo.png";

// const AdminLayout = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100 font-sans">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md">
//         <div className="p-6">
//           <img src={KoalaLogo} height={"100px"} width={"150px"} />
//         </div>
//         <nav className="p-4 space-y-2">
//           <a href="/dashboard" className="block px-4 py-2 hover:bg-blue-100 rounded">
//             Dashboard
//           </a>
//           <a href="/users" className="block px-4 py-2 hover:bg-blue-100 rounded">
//             Users
//           </a>
//           <a href="/categories" className="block px-4 py-2 hover:bg-blue-100 rounded">
//             Categories
//           </a>
//           <a href="/" className="block px-4 py-2 hover:bg-blue-100 rounded">
//             Logout
//           </a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         <header className="bg-white shadow p-4 flex justify-between items-center">
//           <h1 className="text-xl font-semibold">Admin Panel</h1>
//         </header>

//         <main className="p-6">
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;


import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard</h2>
      <p>This is the admin dashboard overview page.</p>
    </div>
  );
};

export default Dashboard;
