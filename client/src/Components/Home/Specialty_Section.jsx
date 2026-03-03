import React from "react";
import { FaHeartbeat } from "react-icons/fa";


const Specialty_Section = () => {
  return (
    //Section 1 - Specialties
    <div className="">
      <div className=" w-[80%] mx-auto py-10 hidden lg:block">
        <h2 className=" text-md font-bold text-center text-blue-400">
          ALWAYS CARING
        </h2>
        <h1 className="text-2xl font-bold text-center text-purple-900">
          Our Specialties
        </h1>
        <div className=" grid grid-cols-4 pt-8">
          <div className=" flex flex-col items-center justify-center hover:bg-blue-900 transition duration-300 hover:text-white  border border-gray-300 cursor-pointer rounded-md px-15 py-6">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mt-4" />
            <span className=" text-md">Neurology</span>
          </div>
          <div className=" flex flex-col items-center justify-center hover:bg-blue-900 transition duration-300 hover:text-white  border border-gray-300 cursor-pointer rounded-md px-15 py-6">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mt-4" />
            <span className=" text-md">Bones</span>
          </div>
          <div className=" flex flex-col items-center justify-center hover:bg-blue-900 transition duration-300 hover:text-white  border border-gray-300 cursor-pointer rounded-md px-15 py-6">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mt-4" />
            <span className=" text-md">Oncology</span>
          </div>
          <div className=" flex flex-col items-center justify-center hover:bg-blue-900 transition duration-300 hover:text-white  border border-gray-300 cursor-pointer rounded-md px-15 py-6">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mt-4" />
            <span className=" text-md">Otorhinolaryngology</span>
          </div>
        </div>

        <div className=" grid grid-cols-4">
          <div className=" flex flex-col items-center justify-center hover:bg-blue-900 transition duration-300 hover:text-white  border border-gray-300 cursor-pointer rounded-md px-15 py-6">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mt-4" />
            <span className=" text-md">Ophthalmology</span>
          </div>
          <div className=" flex flex-col items-center justify-center hover:bg-blue-900 transition duration-300 hover:text-white  border border-gray-300 cursor-pointer rounded-md px-15 py-6">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mt-4" />
            <span className=" text-md">Cardiovascular</span>
          </div>
          <div className=" flex flex-col items-center justify-center hover:bg-blue-900 transition duration-300 hover:text-white  border border-gray-300 cursor-pointer rounded-md px-15 py-6">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mt-4" />
            <span className=" text-md">Pulmonology</span>
          </div>
          <div className=" flex flex-col items-center justify-center hover:bg-blue-900 transition duration-300 hover:text-white  border border-gray-300 cursor-pointer rounded-md px-15 py-6">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mt-4" />
            <span className=" text-md">Real Medicine</span>
          </div>
        </div>

        <div className=" grid grid-cols-4">
          <div className=" flex flex-col items-center justify-center hover:bg-blue-900 transition duration-300 hover:text-white  border border-gray-300 cursor-pointer rounded-md px-15 py-6">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mt-4" />
            <span className=" text-md">Gastroenterology</span>
          </div>
          <div className=" flex flex-col items-center justify-center hover:bg-blue-900 transition duration-300 hover:text-white  border border-gray-300 cursor-pointer rounded-md px-15 py-6">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mt-4" />
            <span className=" text-md">Urology</span>
          </div>
          <div className=" flex flex-col items-center justify-center hover:bg-blue-900 transition duration-300 hover:text-white  border border-gray-300 cursor-pointer rounded-md px-15 py-6">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mt-4" />
            <span className=" text-md">Dermatology</span>
          </div>
          <div className=" flex flex-col items-center justify-center hover:bg-blue-900 transition duration-300 hover:text-white  border border-gray-300 cursor-pointer rounded-md px-15 py-6">
            <FaHeartbeat className="text-4xl text-blue-500 mx-auto mt-4" />
            <span className=" text-md">Gynaecology</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialty_Section;
