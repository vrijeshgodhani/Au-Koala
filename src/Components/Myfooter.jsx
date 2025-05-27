import React from "react";
import logo from '../assets/images.png'
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Myfooter = () => {
  return (
    <>
      <div style={{ backgroundColor: "rgb(104, 108, 88)" }}>
        <div className="flex justify-between p-8">
          <div>
            <img src={logo} height={"150px"} width={"150px"} />
            <p className="max-w-[500px] mt-2 text-white">
              In the spirit of reconciliation, Koala acknowledges the
              Traditional Custodians of Country throughout Australia and their
              connections to land, sea and community
            </p>
            <p className="max-w-[500px] mt-4 text-white">
              We pay our respect to their Elders past and present and extend
              that respect to all Aboriginal and Torres Strait Islander peoples
              today.
            </p>

            <div className="flex mt-4 gap-2 text-white text-2xl mt-10">
              <BsFacebook />
              <FaInstagram />
            </div>

            <img
              src="//au.koala.com/cdn/shop/files/Award_Logos_ebe797aa-0a11-41cc-9ad6-ab446eefc622.png?v=1725507274&amp;"
              width={"300px"}
              className="mt-4"
            ></img>
          </div>

          <div className="flex gap-16 text-white">
            <div>
              <p className="font-bold">Help</p>
              <ul className="flex flex-col gap-4 mt-4 cursor-pointer max-w-[150px]">
                <li>Request Delivery Chance</li>
                <li>Contact & FAQs</li>
                <li>Finance Option</li>
                <li>My Account</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">About</p>
              <ul className="flex flex-col gap-4 mt-4 cursor-pointer max-w-[100px]">
                <li>About Us</li>
                <li>Our Impact</li>
                <li>Trade & Commercial</li>
                <li>Koala Second Home</li>
                <li>Koala Showroom</li>
                <li>Careers</li>
                <li>press@koala.com</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Resources</p>
              <ul className="flex flex-col gap-4 mt-4 cursor-pointer max-w-[150px]">
                <li>Delivery</li>
                <li>120-night Trial</li>
                <li>Warranty</li>
                <li>Treetops Blog</li>
                <li>Refer a Friend</li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Shop</p>
              <ul className="flex flex-col gap-4 mt-4 cursor-pointer max-w-[150px]">
                <li>Mattresses</li>
                <li>Sofa Beds</li>
                <li>Sofas</li>
                <li>Bedroom</li>
                <li>LivingRoom</li>
                <li>Outdoor</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-300 w-[90%] mx-auto" />
        <div className="flex w-[90%] mx-auto justify-between">       
         <ul className="flex gap-4 text-white cursor-pointer">
            <li>© 2025 Koala </li>
            <li>Private Policy</li>
            <li>Website Terms</li>
            <li>Terms of Service</li>
            <li>Promotion Terms</li>
        </ul>

        <img src="//au.koala.com/cdn/shop/files/Payment_Icons_AU.svg?v=1736813926&width=194"></img>
        </div>
        <hr className="my-4 border-gray-300 pb-10 w-[90%] mx-auto" />

      </div>
    </>
  );
};

export default Myfooter;
