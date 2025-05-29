import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/Koala-Logo.png";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isSofa, setisSofa] = useState(false);
  const [isbedroom, setisBedroom] = useState(false);
  const [isLroom, setisLroom] = useState(false);
  const [isoutdoor, setisoutdoor] = useState(false);
  const [sofas, setSofas] = useState([]);
  const [bedroom, setbedroom] = useState([]);
  const [Lroom, setLroom] = useState([]);
  const [outdoor, setOutdoor] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/sofaTypes").then((r) => setSofas(r.data));

    axios.get("http://localhost:5000/bedroom").then((r) => setbedroom(r.data));

    axios.get("http://localhost:5000/LivingRoom").then((r) => setLroom(r.data));

    axios.get("http://localhost:5000/outdoor").then((r) => setOutdoor(r.data));

    axios.get("http://localhost:5000/clients").then((response) => {
      setReviews(response.data);
    });

    axios.get("http://localhost:5000/sofa-collection").then((response) => {
      setCollection(response.data);
    });
  }, []);
  const navigate = useNavigate();

  return (
    <>
      {/* Header */}
      <div className="w-[100%] bg-orange-200 h-10 flex justify-between items-center">
        <p className="ml-10">About</p>
        <p className="">Free delivery on any mattress Australia-wide*</p>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginRight: "30px",
          }}
        >
          <li>FAQs</li>
          <li>Trade</li>
          <li>Manage By Orders</li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg"
              alt="Australian Flag"
              width="30"
            ></img>
          </li>
        </ul>
      </div>

      {/* Navbar */}

      <div
        className="w-[100%] h-14 flex justify-between items-center p-4 font-medium text-base"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#fff",
        }}
      >
        <Link to={"/"}>
          <img src={logo} height="100px" width="100px"></img>
        </Link>

        <ul className="flex gap-8">
          <li className="hover:underline cursor-pointer">Mattresses</li>
          <li className="hover:underline cursor-pointer">Sofa Beds</li>
          <li>
            <div
              className="group inline-flex items-center space-x-1 cursor-pointer hover:underline"
              onMouseEnter={() => setisSofa(true)}
              onMouseLeave={() => setisSofa(false)}
            >
              <span>Sofa</span>
              <span className="transition-transform transform duration-300 group-hover:rotate-180">
                <IoIosArrowDown />
              </span>
              <div
                className={`absolute left-[-4px] top-[45px] w-[100%] bg-white rounded shadow-lg z-50 transform transition-all duration-300 ease-out
                ${
                  isSofa
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <div className="flex justify-between items-center">
                  <p
                    style={{
                      marginLeft: "20px",
                      fontSize: "30px",
                      paddingTop: "30px",
                    }}
                  >
                    Sofa
                  </p>
                  <button
                    className="bg-emerald-700 mt-4"
                    style={{
                      color: "white",
                      fontSize: "20px",
                      fontWeight: "500",
                      borderRadius: "30px",
                      height: "40px",
                      width: "200px",
                    }}
                  >
                    Shop All Sofas
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-4 p-4">
                  {sofas.map((sofa, index) => {
                    const path = sofa.name.toLowerCase().replaceAll(" ", "-");
                    return (
                      <div
                        key={index}
                        className={`bg-white p-4 rounded shadow ${
                          index >= 6 ? "col-span-1" : ""
                        }`}
                      >
                        <img
                          src={sofa.image}
                          alt={sofa.name}
                          className="w-[100%] h-20 object-cover rounded cursor-pointer"
                          onClick={() => navigate(`/${path}`)}
                        />

                        <h2 className="mt-2 text-center font-semibold">
                          {sofa.name}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => setisBedroom(true)}
            onMouseLeave={() => setisBedroom(false)}
            style={{ cursor: "pointer" }}
            className="hover:underline"
          >
            <div className="group inline-flex items-center space-x-1 cursor-pointer hover:underline">
              <span>Bedroom</span>
              <span className="transition-transform transform duration-300 group-hover:rotate-180">
                <IoIosArrowDown />
              </span>
            </div>

            <div
              className={`absolute left-0 mt-4 w-[100%] bg-white rounded shadow-lg z-50 transform transition-all duration-300 ease-out
                ${
                  isbedroom
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
              <div className="flex justify-between items-center">
                <p
                  style={{
                    marginLeft: "20px",
                    fontSize: "30px",
                    paddingTop: "30px",
                  }}
                >
                  Bedroom
                </p>
                <button
                  className="bg-emerald-700 mt-4"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500",
                    borderRadius: "30px",
                    height: "40px",
                    width: "200px",
                  }}
                >
                  Shop All Bedroom
                </button>
              </div>
              <div className="grid grid-cols-5 gap-4 p-4">
                {bedroom.map((item, index) => (
                  <div
                    key={item.id}
                    className={`bg-white p-4 rounded shadow ${
                      index >= 6 ? "col-span-1" : ""
                    }`}
                  >
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="w-[100%] h-20 object-cover rounded"
                    />
                    <h2 className="mt-2 text-center font-semibold">
                      {item.name}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li
            onMouseEnter={() => setisLroom(true)}
            onMouseLeave={() => setisLroom(false)}
          >
            <div className="group inline-flex items-center space-x-1 cursor-pointer hover:underline">
              <span>Living Room</span>
              <span className="transition-transform transform duration-300 group-hover:rotate-180">
                <IoIosArrowDown />
              </span>
            </div>

            <div
              className={`absolute left-0 mt-4 w-[100%] bg-white rounded shadow-lg z-50 transform transition-all duration-300 ease-out
                ${
                  isLroom
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
              <div className="flex justify-between items-center">
                <p
                  style={{
                    marginLeft: "20px",
                    fontSize: "30px",
                    paddingTop: "30px",
                  }}
                >
                  LivingRoom
                </p>
                <button
                  className="bg-emerald-700 mt-4"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500",
                    borderRadius: "30px",
                    height: "40px",
                    width: "200px",
                  }}
                >
                  Shop All LivingRoom
                </button>
              </div>
              <div className="grid grid-cols-5 gap-4 p-4">
                {Lroom.map((items, index) => (
                  <div
                    key={items.id}
                    className={`bg-white p-4 rounded shadow ${
                      index >= 6 ? "col-span-1" : ""
                    }`}
                  >
                    <img
                      src={items.image}
                      alt={items.name}
                      className="w-[100%] h-20 object-cover rounded"
                    />
                    <h2 className="mt-2 text-center font-semibold">
                      {items.name}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </li>

          <li
            onMouseEnter={() => setisoutdoor(true)}
            onMouseLeave={() => setisoutdoor(false)}
          >
            <div className="group inline-flex items-center space-x-1 cursor-pointer hover:underline">
              <span>OutDoor</span>
              <span className="transition-transform transform duration-300 group-hover:rotate-180">
                <IoIosArrowDown />
              </span>
            </div>

            <div
              className={`absolute left-0 mt-4 w-[100%] bg-white rounded shadow-lg z-50 transform transition-all duration-300 ease-out
                ${
                  isoutdoor
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
              <div className="flex justify-between items-center">
                <p
                  style={{
                    marginLeft: "20px",
                    fontSize: "30px",
                    paddingTop: "30px",
                  }}
                >
                  OutDoor
                </p>
                <button
                  className="bg-emerald-700 mt-4"
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "500",
                    borderRadius: "30px",
                    height: "40px",
                    width: "200px",
                  }}
                >
                  Shop All OutDoor
                </button>
              </div>
              <div className="grid grid-cols-5 gap-4 p-4">
                {outdoor.map((items, index) => (
                  <div
                    key={items.id}
                    className={`bg-white p-4 rounded shadow ${
                      index >= 6 ? "col-span-1" : ""
                    }`}
                  >
                    <img
                      src={items.image}
                      alt={items.name}
                      className="w-[100%] h-20 object-cover rounded"
                    />
                    <h2 className="mt-2 text-center font-semibold">
                      {items.name}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </li>
          <li className="hover:underline" style={{ cursor: "pointer" }}>
            Clearance
          </li>
        </ul>
        <div style={{ display: "flex", gap: "20px" }}>
          <FiSearch />
          <FaUser />
          <HiOutlineShoppingCart />
        </div>
      </div>
    </>
  );
};

export default Navbar;
