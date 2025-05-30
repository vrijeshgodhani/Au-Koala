import React, { useState, useEffect, use } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import samplevideo from "../assets/video.mp4";
import { FiTruck } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Myfooter from './Myfooter'
import Navbar from "./Navbar";

const Head_nav = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [isdata, setIsdata] = useState([]);
  const [isfiltered, setIsfiltered] = useState([]);
  const [iscategories, setIscategories] = useState([]);
  const [isselectedCategory, setIsselectedCategory] = useState("All");

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Cate")
      .then((response) => {
        const jsonData = response.data;
        setData(jsonData);
        setFiltered(jsonData);
        const uniqueCategories = [
          "All",
          ...new Set(jsonData.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFiltered(data);
    } else {
      setFiltered(data.filter((item) => item.category === category));
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/mattressSize")
      .then((response) => {
        const jsonData = response.data;
        setIsdata(jsonData);
        setIsfiltered(jsonData);
        const uniqueCategories = [
          "All",
          ...new Set(jsonData.map((item) => item.category)),
        ];
        setIscategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handlFilter = (category) => {
    setIsselectedCategory(category);
    if (category === "All") {
      setIsfiltered(isdata);
    } else {
      setIsfiltered(isdata.filter((item) => item.category === category));
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/sofaTypes").then((r) => setSofas(r.data));

    axios.get("http://localhost:5000/bedroom").then((r) => setbedroom(r.data));

    axios.get("http://localhost:5000/LivingRoom").then((r) => setLroom(r.data));

    axios.get("http://localhost:5000/outdoor").then((r) => setOutdoor(r.data));

    axios.get("http://localhost:5000/clients").then((response) => {
      setReviews(response.data);
    });
  }, []);

  const whykoala = [
    {
      image:
        "//au.koala.com/cdn/shop/files/Image_Placeholder_3-1.jpg?v=1726643084&width=2500",
      title: "We are a part of 1% for the planet",
      para: "We put our money where our mouth is. We were the first Australian mattress and furniture retailer to join the 1% for the Planet movement. This means we donate one percent of sales annually for the good of our people and planet. In the last three years, we’ve given over $6.5M in cash and product to certified environmental partners.",
    },
    {
      image:
        "//au.koala.com/cdn/shop/files/Image_Placeholder_4.jpg?v=1726643084&width=2500",
      title: "We're proudly a B Corp",
      para: "We're proud to be B Corp certified, which means we meet high standards of social and environmental impact, transparency and accountability. This certification reflects our commitment to using our business a force for good.",
    },
    {
      image:
        "//au.koala.com/cdn/shop/files/Image_Placeholder_3.jpg?v=1726643084&width=2500",
      title: "Protecting our Aussie icon",
      para: "In partnership with WWF-Australia since 2017, we are working together to prevent the further decline of koala populations by restoring and reducing the loss of habitat and supporting key interventions required for sick and injured koalas.",
    },
  ];

  const aboutus = [
    {
      image : "//au.koala.com/cdn/shop/files/Thoughtful_Design_Icon_1_562a4bca-1a8a-4d73-8a20-6fa695ba8fc4.png?v=1726643398&width=140",
      title : "Thoughtful design",
      para : "Clever, comfy furniture that you're proud to show off but not precious about using everyday."
    },
    {
      image : "//au.koala.com/cdn/shop/files/KOALA_ILLUSTRATIONS_120_Day_Trial_1_115e66af-976c-4cf7-bbd0-22f7d8ac8494.png?v=1726643398&width=140",
      title : "Everyday value",
      para : "Our direct-to-consumer model cuts out the middlemen, hidden costs and showroom expenses that charge you extra."
    },
    {
      image : "//au.koala.com/cdn/shop/files/KOALA_ILLUSTRATIONS_Loaded__in_Truck_1_47a7dfdb-fe1c-46d2-8af1-f8df2a81611d.png?v=1726643398&width=140",
      title : "Effortless experiences",
      para : "Fast and flexible delivery, tool-free assembly and 120 nights to love it or return it."
    },
    {
      image : "//au.koala.com/cdn/shop/files/Sustainability_Matters_1_6e54c841-10b3-4a31-b541-afd64a506189.png?v=1726643398&width=140",
      title : "Designed with the world in mind",
      para : "Ethically made and designed to last — with a portion of our sales supporting koala conservation and the protection of endangered Australian species."
    }
  ]

  const Categories = [
    {
      name: "Mattresses",
      image:
        "https://au.koala.com/cdn/shop/collections/Queen_Plus_Mattress_11_1.webp?v=1727055087&amp;width=3840",
    },
    {
      name: "Sofa Beds",
      image:
        "//au.koala.com/cdn/shop/collections/CushyLuxe_Gumleaf_Queen_8_2.webp?v=1727055315&amp;width=3840",
    },
    {
      name: "Bed Bases",
      image:
        "//au.koala.com/cdn/shop/collections/Kirribilli_Bed_Base_Queen_10_1.webp?v=1727055189&amp;width=3840",
    },
    {
      name: "Sofas",
      image:
        "//au.koala.com/cdn/shop/collections/ModernSofa_ArvoStorm_3Seater_4_1.webp?v=1731980629&amp;width=1500",
    },
  ];
  return (
    <>
     <Navbar/>

      <div className="flex justify-center items-center bg-gray-100 h-10 gap-2">
        <div className="flex text-lg">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <p>100,000+ five star reviews</p>
      </div>

      {/* video */}
      <div>
        <div
          style={{
            position: "absolute",
            zIndex: "1",
            top: "250px",
            left: "50px",
            color: "white",
            fontSize: "50px",
            fontWeight: "800",
          }}
        >
          <p>
            Softer. Smarter.
            <br />
            Seriously stylish.
            <br />
            <span className="text-2xl" style={{ fontWeight: "400" }}>
              The Reimagined Byron Sofa Bed 3rd Gen
            </span>
          </p>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              fontSize: "20px",
              fontWeight: "500",
              borderRadius: "30px",
              height: "40px",
              width: "200px",
            }}
            className="hover:scale-125 transition-transform duration-300"
          >
            Shop Now
          </button>
        </div>
        <video
          width="100%"
          height="100px"
          autoPlay
          muted
          loop
          playsInline
          className="filter brightness-50"
        >
          <source src={samplevideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="flex items-center justify-center gap-6 h-12 bg-green-50">
          <p className="flex items-center gap-2">
            <FiTruck />
            Fast Delivery
          </p>
          <p className="flex items-center gap-2">
            <SlCalender />
            120-night trial
          </p>
          <p className="flex items-center gap-2">
            <IoShieldCheckmarkOutline />
            World-class warranty
          </p>
        </div>
      </div>

      {/* Categories */}
      <h2
        style={{
          fontSize: "40px",
          fontWeight: "600",
          marginLeft: "40px",
          marginTop: "60px",
        }}
      >
        Categories
      </h2>
      <div className="grid grid-cols-4 gap-4 p-10 ">
        {Categories.map((category, index) => (
          <div key={index} className="text-center">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-auto rounded shadow"
            />
            <h2 className="text-xl font-bold mb-2">{category.name}</h2>
          </div>
        ))}
      </div>

      {/* BestSellers */}
      <h3
        style={{
          fontSize: "40px",
          fontWeight: "600",
          marginLeft: "50px",
          marginTop: "30px",
        }}
      >
        BestSellers
      </h3>
      {/* <div className="grid grid-cols-4 gap-4 p-10">
      {cate.map((item, index) => (
        <div key={index} className="text-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-auto rounded shadow"
          />
          <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        </div>
      ))}
    </div> */}
      {/* Filter Buttons */}
      <div style={{ marginBottom: "20px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "500",
              borderRadius: "30px",
              height: "40px",
              width: "150px",
              marginLeft: "45px",
              marginTop: "20px",
              backgroundColor: selectedCategory === cat ? "#808000" : "#ccc",
              color: selectedCategory === cat ? "#fff" : "#000",
            }}
            className="hover:scale-110 transition-transform duration-300"
          >
            {cat}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          overflow: "auto",
          padding: "10px",
          scrollSnapType: "x mandatory",
        }}
      >
        {filtered.map((item, index) => (
          <div
            key={index}
            style={{
              width: "50% ",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "190px",
                objectFit: "cover",
                borderRadius: "6px",
              }}
            />
            <p>{item.rattings}</p>
            <h4 style={{ fontSize: "15px", fontWeight: "500" }}>{item.name}</h4>
            <p>{item.price}</p>
            <button
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "500",
                borderRadius: "30px",
                height: "40px",
                width: "150px",
                backgroundColor: "#808000",
                marginTop: "20px",
              }}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* single double size */}

      <div>
        <p className="font-bold text-4xl mt-16 ml-8">
          Australia's most awarded mattress brand
        </p>

        <div style={{ marginBottom: "20px" }}>
          {iscategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handlFilter(cat)}
              style={{
                color: "white",
                fontSize: "20px",
                fontWeight: "500",
                borderRadius: "30px",
                height: "40px",
                width: "150px",
                marginLeft: "35px",
                marginTop: "30px",
                backgroundColor:
                  isselectedCategory === cat ? "#808000" : "#ccc",
                color: isselectedCategory === cat ? "#fff" : "#000",
              }}
              className="hover:scale-110 transition-transform duration-300"
            >
              {cat}
            </button>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            overflow: "auto",
            padding: "10px",
            scrollSnapType: "x mandatory",
          }}
        >
          {isfiltered.map((item, index) => (
            <div
              key={index}
              style={{
                width: "50%",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "190px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />
              <p>{item.rattings}</p>
              <h4 style={{ fontSize: "15px", fontWeight: "500" }}>
                {item.name}
              </h4>
              <p>{item.size}</p>
              <p>{item.price}</p>
              <button
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "500",
                  borderRadius: "30px",
                  height: "40px",
                  width: "150px",
                  backgroundColor: "#808000",
                  marginTop: "20px",
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[150px] flex justify-center items-center">
        <div
          className="w-[90%] bg-yellow-50 flex justify-between h-32 items-center"
          style={{ borderRadius: "20px" }}
        >
          <p className="text-4xl font-bold ml-6">
            Not sure which mattress is right for
            <br />
            you?
          </p>
          <div
            className="bg-gray-100 h-[80px] w-[170px] cursor-pointer hover:scale-110 transition-transform duration-100"
            style={{
              textAlign: "center",
              paddingTop: "25px",
              border: "1px solid black",
              borderRadius: "50px",
            }}
          >
            TAKE THE QUIZ
          </div>
          <div
            className="bg-gray-100 h-[80px] w-[200px] cursor-pointer hover:scale-110 transition-transform duration-100"
            style={{
              textAlign: "center",
              paddingTop: "25px",
              border: "1px solid black",
              borderRadius: "50px",
              marginRight: "40px",
            }}
          >
            COMPARE MATTRESSES
          </div>
        </div>
      </div>

      {/* Client Review */}

      <div className="pt-8 ml-8">
        <div className="text-4xl font-bold">
          <p>★★★★★</p>
          <p>
            Over<span className="text-[#808000] font-bold"> 570,000</span>{" "}
            customers
          </p>
          <p>
            and more than{" "}
            <span className="text-[#808000] font-bold">50,000</span> five-star
            reviews globally
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-4">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-sm bg-white shadow-md rounded-2xl p-4"
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-600">{review.data}</p>
                <div className="mt-3 text-sm font-medium text-gray-800">
                  {review.customername} –{" "}
                  <span className="text-green-600">{review.buyer}</span>
                </div>
                <div className="text-xs text-blue-500 mt-1">{review.shop}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Koala */}

      <div>
        <div>
          <p className="text-center mt-8 text-[#808000]">Why Koala?</p>
          <p className="font-bold text-4xl text-center">
            We’re in the business of making things good
          </p>
        </div>

        <div className="flex">
          {whykoala.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 m-4 max-w-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[350px] h-[300px] object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4 mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center text-justify">
                {item.para}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* About us */}
      <div>
        <div className="flex justify-between p-6">
          <p className="text-4xl font-bold">A Little About Us</p>
          <button
            style={{
              border: "1px solid black",
              height: "40px",
              width: "130px",
              borderRadius: "10px",
              fontWeight: "600px",
            }}
              className="hover:scale-110 transition-transform duration-300"

          >
            LEARN MORE
          </button>
        </div>
        <div
          className="bg-cover bg-center bg-no-repeat text-white p-8 m-8 rounded flex justify-between gap-4"
          style={{
            backgroundImage:
              "url('//au.koala.com/cdn/shop/files/Forest_image_1.png?v=1732492791&width=1680')",
          }}
        >
          <p className="text-4xl font-bold w-[350px]">
            Protecting Koalas, Preserving Tomorrow. Together with WWF-Australia
          </p>
          <p className="max-w-xl text-lg mt-4">
            Together with WWF-Australia, we're on a mission to help koalas
            thrive. Through our partnership under the Koalas Forever program,
            we're working to double the koala population along Australia's east
            coast by 2050 — protecting these iconic creatures for generations to
            come.
          </p>
        </div>

        <div>
          <div className="flex p-4">
          {aboutus.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl shadow-md m-4 w-[23%] bg-[#f7f7f3] h-[330px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[100px] h-[100px] object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-4 mb-2 text-center max-w-[200px]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-center text-justify max-w-[200px]">
                {item.para}
              </p>
            </div>
          ))}
        </div>
          
        </div>
      </div>

      {/* Emails */}

      
      <Myfooter/>
    </>
  );
};

export default Head_nav;