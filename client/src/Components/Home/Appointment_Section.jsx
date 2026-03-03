import React from "react";

const Appointment_Section = () => {
  return (
    <div className="relative lg:h-[600px] w-full flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dcfy1v0ab/image/upload/v1772279951/Rectangle_33_tkmadg.png')] bg-cover bg-center"></div>

      {/* Overlay (controls opacity) */}
      <div className="absolute inset-0 bg-gray-300/80"></div>

      {/* Content */}
      <div className=" relative z-10 w-full text-white text-center py-5">
        <div className=" grid lg:grid-cols-2">
          <div className=" flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-blue-500">
              Book an Appointment
            </h1>
            <p className="text-sm mt-4 text-black w-[80%] mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Convallis felis vitae
              tortor augue. Velit naassa in. Consequat faucibus porttitor enim.
            </p>
          </div>

          <div className="p-4 py-6">
            <form className="bg-[#1F2B6C] lg:w-[80%] mx-auto rounded-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 p-3 bg-transparent text-white outline-none"
                />

                {/* Gender */}
                <select className="border border-gray-300 p-3 bg-transparent text-white outline-none">
                  <option className="text-black">Gender</option>
                  <option className="text-black">Male</option>
                  <option className="text-black">Female</option>
                </select>

                {/* Email */}
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 p-3 bg-transparent text-white outline-none"
                />

                {/* Phone */}
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border border-gray-300 p-3 bg-transparent text-white outline-none"
                />

                {/* Date */}
                <input
                  type="date"
                  className="border border-gray-300 p-3 bg-transparent text-white outline-none"
                  placeholder="Date"
                />

                {/* Time */}
                <input
                  type="time"
                  className="border border-gray-300 p-3 bg-transparent text-white outline-none"
                  placeholder="Time"
                  defaultValue="05:00"
                />

                {/* Doctor */}
                <select className="border border-gray-300 p-3 bg-transparent text-white outline-none">
                  <option className="text-black">Doctor</option>
                  <option className="text-black">Dr. Smith</option>
                </select>

                {/* Department */}
                <select className="border border-gray-300 p-3 bg-transparent text-white outline-none">
                  <option className="text-black">Department</option>
                  <option className="text-black">Cardiology</option>
                </select>

                {/* Message (Full Width) */}
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="col-span-1 md:col-span-2 border border-gray-300 p-3 bg-transparent text-white outline-none"
                ></textarea>

                {/* Submit Button (Full Width) */}
                <button
                  type="submit"
                  className="col-span-1 md:col-span-2 bg-[#BFD2F8] text-black font-semibold py-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment_Section;
