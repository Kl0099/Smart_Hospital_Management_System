import React from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className=" ">
         <div className=' bg-gray-200 h-16 flex items-center p-4'>
            <h1 className="text-3xl font-bold text-blue-900 pl-32">MED<span className=' text-blue-500'>DICAL</span></h1>
         <div className=' flex justify-between gap-12 mx-12 ml-32'>
            <div className="ml-auto flex items-center gap-4">
            <BiPhoneCall className="text-2xl text-blue-900" />
            <div className=' flex flex-col justify-center'>
                <span className=' text-md text-blue-900'>EMERGENCY</span>
            <span className="text-md text-blue-500">+1 234 567 890</span>
            </div>
         </div>
         <div className="ml-auto flex items-center gap-4">
            <MdOutlineWatchLater className="text-2xl text-blue-900" />
            <div className=' flex flex-col justify-center'>
                <span className=' text-md text-blue-900'>WORK HOUR</span>
            <span className="text-md text-blue-500">09:00 - 20:00 Everyday</span>
            </div>
         </div>
         <div className="ml-auto flex items-center gap-4">
            <IoLocationSharp className="text-2xl text-blue-900" />
            <div className=' flex flex-col justify-center'>
                <span className=' text-md text-blue-900'>LOCATION</span>
            <span className="text-md text-blue-500">123 Main Street, Ahmedabad</span>
            </div>
         </div>
         </div>
         </div>

         <div className=' flex  justify-between items-center font-semibold px-[200px] py-4 text-gray-200 bg-blue-900'>
            <div className=' '>
                <ul className=' flex gap-8'>
                    <li className=' cursor-pointer hover:text-gray-300'>Home</li>
                    <li className=' cursor-pointer hover:text-gray-300'>About us</li>
                    <li className=' cursor-pointer hover:text-gray-300'>Services</li>
                    <li className=' cursor-pointer hover:text-gray-300'>Doctors</li>
                    <li className=' cursor-pointer hover:text-gray-300'>News</li>
                    <li className=' cursor-pointer hover:text-gray-300'>Contact</li>
                </ul>                  
            </div>
            <div className=' flex items-center gap-8'>
                <div className=' cursor-pointer'>
                    <FaSearch className=' text-gray-200 text-lg' />
                </div>
                <div>
                    <button className=' bg-blue-300 text-blue-900 font-semibold px-4 py-2 rounded-full cursor-pointer'>Appointment</button>
                </div>
            </div>
         </div>
    </nav>
  );
}  
export default Navbar;