import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from './Myfooter'
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const faqs = [
  {
    question: "How does the sofa design compare with my existing decor and space requirements?",
    answer:
      "From classic to contemporary styles, our sofa collection will complement all sorts of aesthetics and setups. Choose from a range of sizes, colours, fabrics, and modular configurations to suit your space. Whether you're working with a smaller apartment or open-plan living, it’s easy to create a look that feels right at home.",
  },
  {
    question: "What is the warranty or return policy for the sofa?",
    answer: "All Koala sofas, modular couches, and sofa beds come with a 120-night trial and a 5-year warranty. If it’s not the perfect fit or to your taste, you can return it for a full refund of the purchase price.",
  },
  {
    question: "How durable and easy to maintain is the sofa, especially regarding cleaning and wear?",
    answer: "Koala sofas and modular sofas are built for everyday life. They feature high-quality materials and practical fabric finishes, built for durability and ease. Many sofas come with removable, washable covers for easy care. Whether you're relaxing solo or entertaining guests, you’ll enjoy support that lasts—and a sofa that’s easy to keep clean.",
  },
  {
    question: "What are the dimensions and layouts available for the sofa or modular sofa?",
    answer: "Our modern sofas and modular sofas come in various sizes, shapes, and configurations. Whether you need a compact 2-seater or a generous sectional sofa with corner units and ottomans, we’ve got flexible solutions for all kinds of living spaces. Our modular couches will evolve with your lifestyle—add or remove pieces anytime.",
  }
];

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
    }
];





const Sofas = () => {
  const [collection, setCollection] = useState([]);
  const [sofadata, setSofadata] = useState([]);
 const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => {
    axios.get("http://localhost:5000/sofa-collection").then((response) => {
      setCollection(response.data);

      axios.get("http://localhost:5000/sofas-data").then((r) => {
        setSofadata(r.data);
      });
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="p-10">
        <div className="flex overflow-x-auto gap-4 pb-2">
          {collection.map((item, index) => (
            <div
              key={index}
              className="min-w-[180px] flex-shrink-0 bg-white rounded-xl shadow-md p-2"
            >
              <img
                src={`https:${item.image}`}
                alt={item.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <p className="mt-2 text-center font-medium text-gray-800 text-sm">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <h2 className=" font-bold text-4xl pl-10" style={{ color: "#808000" }}>
        Sofas
      </h2>
      <div className="flex justify-between px-10 py-4">
        <p className="text-lg">
          Our stylish and comfortable sofas, perfect for any living room.
        </p>
        <div className="flex gap-10">
          <p>Sort By:</p>
          <select className="w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none cursor-pointer mt-[-7px]">
            <option>Featured</option>
            <option>Best Selling</option>
            <option>Price,Low to High</option>
            <option>Price,High to Low</option>
          </select>
        </div>
      </div>

      {/* ---------------------------------------Main Content----------------------------------------------- */}
      <div className="p-10 flex items-start">
        <div className="w-1/4 h-auto overflow-auto" style={{position:"-webkit-sticky",position:"sticky",top:0,alignSelf:"flex-start",height:"fit-content",maxHeight:"100vh"}}>
          {/* -----------------Configuration----------------------- */}
          <div>
            <div
              className="bg-orange-50 h-[50px] font-semibold p-2 text-lg"
              style={{
                border: "3px solid rgb(163 163 163 )",
                borderRadius: "5px",
              }}
            >
              Configuration
            </div>
            <div className="px-4">
              <input
                type="checkbox"
                className="h-4 w-4"
                style={{ marginTop: "20px" }}
              />
              <span className="pl-4 font-medium">Chairs(4)</span>
              <br />
              <input
                type="checkbox"
                className="h-4 w-4"
                style={{ marginTop: "20px" }}
              />
              <span className="pl-4 font-medium">Chiars(3)</span>
              <br />
              <input
                type="checkbox"
                className="h-4 w-4"
                style={{ marginTop: "20px" }}
              />
              <span className="pl-4 font-medium">Sofa(5)</span>
            </div>
          </div>
          {/* ------------------------Size--------------------------- */}
          <div className="pt-4">
            <div
              className="bg-orange-50 h-[50px] font-semibold p-2 text-lg"
              style={{
                border: "3px solid rgb(163 163 163 )",
                borderRadius: "5px",
              }}
            >
              Size
            </div>
            <div className="px-4">
              <input
                type="checkbox"
                className="h-4 w-4"
                style={{ marginTop: "20px" }}
              />
              <span className="pl-4 font-medium">1.5 to 2.5-Seater(4)</span>
              <br />
              <input
                type="checkbox"
                className="h-4 w-4"
                style={{ marginTop: "20px" }}
              />
              <span className="pl-4 font-medium">3 to 3.5-Seater(5)</span>
              <br />
              <input
                type="checkbox"
                className="h-4 w-4"
                style={{ marginTop: "20px" }}
              />
              <span className="pl-4 font-medium">4 to 4.5-Seater(3)</span>
              <br />
              <input
                type="checkbox"
                className="h-4 w-4"
                style={{ marginTop: "20px" }}
              />
              <span className="pl-4 font-medium">5 to 5.5-Seater(3)</span>
              <br />
              <input
                type="checkbox"
                className="h-4 w-4"
                style={{ marginTop: "20px" }}
              />
              <span className="pl-4 font-medium">6-Seater(1)</span>
              <br />
              <input
                type="checkbox"
                className="h-4 w-4"
                style={{ marginTop: "20px" }}
              />
              <span className="pl-4 font-medium">7-Seater(2)</span>
              <br />
              <input
                type="checkbox"
                className="h-4 w-4"
                style={{ marginTop: "20px" }}
              />
              <span className="pl-4 font-medium">8-Seater(1)</span>
              <br />
              <input
                type="checkbox"
                className="h-4 w-4"
                style={{ marginTop: "20px" }}
              />
              <span className="pl-4 font-medium">10-Seater(1)</span>
            </div>
          </div>
          {/* ----------------------------Color------------------------ */}
          <div className="pt-4">
            <div
              className="bg-orange-50 h-[50px] font-semibold p-2 text-lg"
              style={{
                border: "3px solid rgb(163 163 163 )",
                borderRadius: "5px",
              }}
            >
              Color
            </div>
            <div className="flex justify-evenly mt-4">
              <div
                className="h-10 w-10 bg-color1"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-10 w-10 bg-black"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-10 w-10 bg-color2"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-10 w-10 bg-color3"
                style={{ borderRadius: "50%" }}
              ></div>
            </div>

            <div className="flex justify-evenly mt-6">
              <div
                className="h-10 w-10 bg-color4"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-10 w-10 bg-color5"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-10 w-10 bg-color6"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-10 w-10 bg-color7"
                style={{ borderRadius: "50%" }}
              ></div>
            </div>

            <div className="flex justify-evenly mt-6">
              <div
                className="h-10 w-10 bg-blue-400"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-10 w-10 bg-green-600"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-10 w-10 bg-blue-600"
                style={{ borderRadius: "50%" }}
              ></div>
              <div
                className="h-10 w-10 bg-purple-500"
                style={{ borderRadius: "50%" }}
              ></div>
            </div>
          </div>

          {/* -----------------------------Price------------------------------ */}

          <div className="pt-4">
            <div
              className="bg-orange-50 h-[50px] font-semibold p-2 text-lg"
              style={{
                border: "3px solid rgb(163 163 163 )",
                borderRadius: "5px",
              }}
            >
              Price
            </div>
            <div className="px-4">
              <p>The maximum price is $7362.00.</p>
              <input
                type="text"
                placeholder="From"
                style={{
                  marginTop: "20px",
                  border: "1px solid black",
                  borderRadius: "5px",
                }}
              />
              <input
                type="text"
                placeholder="To"
                style={{
                  marginTop: "20px",
                  border: "1px solid black",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>

          <button
            className="bg-orange-50 h-[50px] w-full font-semibold p-2 text-lg mt-8"
            style={{
              border: "3px solid rgb(163 163 163 )",
              borderRadius: "5px",
            }}
          >
            Apply Filter
          </button>
        </div>
        <div className="w-3/4 h-auto">
          <div className="grid grid-cols-3 gap-6 p-6 bg-gray-50">
            {sofadata.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-52 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600">{product.size}</p>
                  <p className="text-yellow-500 mt-1 text-sm">
                    {product.rattings}
                  </p>
                  <p className="text-xl font-bold text-gray-800 mt-2">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        
      <h1 className="text-center font-bold text-5xl m-3 p-6">Frequently Asked Questions</h1>
       <div className="bg-[#f8f8f4] p-6 rounded-2xl max-w-3xl mx-auto text-gray-900">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full py-5 text-left font-semibold"
          >
            <span>{faq.question}</span>
            {openIndex === index ? (
              <MdKeyboardArrowUp className="w-5 h-5" />
            ) : (
              <MdKeyboardArrowDown className="w-5 h-5" />
            )}
          </button>

            {openIndex === index && (
              
                <div className="pb-5 text-gray-700">{faq.answer}</div>
            )}
        </div>
      ))}
    </div>

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
      <Footer/>
    </>
  );
};

export default Sofas;
