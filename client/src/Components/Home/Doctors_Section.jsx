import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const doctors = [
  {
    id: 1,
    name: "Doctor’s Name",
    specialty: "NEUROLOGY",
    image:
      "https://res.cloudinary.com/dcfy1v0ab/image/upload/v1772214254/Rectangle_20_1_iqcqu9.png",
  },
  {
    id: 2,
    name: "Doctor’s Name",
    specialty: "NEUROLOGY",
    image:
      "https://res.cloudinary.com/dcfy1v0ab/image/upload/v1772214254/Rectangle_20_2_asahdp.png",
  },
  {
    id: 3,
    name: "Doctor’s Name",
    specialty: "NEUROLOGY",
    image:
      "https://res.cloudinary.com/dcfy1v0ab/image/upload/v1772214254/Rectangle_20_i1gcfr.png",
  },
];

const Doctors_Section = () => {
  return (
    <section className="bg-gray-100 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-blue-500 tracking-widest font-semibold">
          TRUSTED CARE
        </p>
        <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">Our Doctors</h2>
      </div>

      {/* Cards */}
      <div className=" p-3 lg:w-[80%] mx-auto flex  overflow-x-auto lg:grid md:grid-cols-2 lg:grid-cols-3 gap-8 scrollbar-">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-white rounded-lg flex-shrink-0 overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-full  object-cover"
            />

            {/* Card Content */}
            <div className="bg-[#BFD2F8] text-center py-6">
              <h3 className="text-lg font-medium text-[#1F2B6C]">
                {doctor.name}
              </h3>
              <p className="tracking-widest text-sm font-bold text-[#1F2B6C] mt-1">
                {doctor.specialty}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4">
                <div className="bg-[#1F2B6C] text-white p-2 rounded-full cursor-pointer hover:bg-blue-700">
                  <FaLinkedinIn size={14} />
                </div>
                <div className="bg-[#1F2B6C] text-white p-2 rounded-full cursor-pointer hover:bg-blue-700">
                  <FaFacebookF size={14} />
                </div>
                <div className="bg-[#1F2B6C] text-white p-2 rounded-full cursor-pointer hover:bg-blue-700">
                  <FaInstagram size={14} />
                </div>
              </div>
            </div>

            {/* View Profile */}
            <div className="bg-[#1F2B6C] text-white text-center py-3 cursor-pointer hover:bg-blue-900 transition">
              View Profile
            </div>
          </div>
        ))}
      </div>

      {/* Slider Dots */}
      <div className="flex justify-center gap-3 mt-10">
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="w-3 h-3 bg-[#1F2B6C] rounded-full"></div>
        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default Doctors_Section;