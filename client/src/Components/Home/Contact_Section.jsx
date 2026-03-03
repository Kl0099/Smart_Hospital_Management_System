import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Contact_Section = () => {
  return (
    <div>
      {/* /// Section 5 - Contact */}
      <section className="bg-gray-100 py-6">
        {/* Heading */}
        <div className="text-center lg:mb-12 mb-6">
          <p className="text-blue-500 tracking-widest font-semibold">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">Contact</h2>
        </div>

        {/* Contact Cards */}
        <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* Emergency */}
          <div className="bg-[#BFD2F8] hover:bg-[#1F2B6C] hover:text-white transition duration-500 p-8 rounded-md text-[#1F2B6C]">
            <FaPhoneAlt className="text-3xl mb-4" />
            <h3 className="font-bold mb-2">EMERGENCY</h3>
            <p>(237) 681-812-255</p>
            <p>(237) 666-331-894</p>
          </div>

          {/* Location */}
          <div className="bg-[#BFD2F8] hover:bg-[#1F2B6C] hover:text-white transition duration-500 text-[#1F2B6C] p-8 rounded-md">
            <FaMapMarkerAlt className="text-3xl mb-4" />
            <h3 className="font-bold mb-2">LOCATION</h3>
            <p>0123 Some place</p>
            <p>9876 Some country</p>
          </div>

          {/* Email */}
          <div className="bg-[#BFD2F8] hover:bg-[#1F2B6C] hover:text-white transition duration-500 p-8 rounded-md text-[#1F2B6C]">
            <FaEnvelope className="text-3xl mb-4" />
            <h3 className="font-bold mb-2">EMAIL</h3>
            <p>fildineeseo@gmail.com</p>
            <p>mybestudios@gmail.com</p>
          </div>

          {/* Working Hours */}
          <div className="bg-[#BFD2F8] hover:bg-[#1F2B6C] hover:text-white transition duration-500 p-8 rounded-md text-[#1F2B6C]">
            <FaClock className="text-3xl mb-4" />
            <h3 className="font-bold mb-2">WORKING HOURS</h3>
            <p>Mon-Sat 09:00-20:00</p>
            <p>Sunday Emergency only</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact_Section;


