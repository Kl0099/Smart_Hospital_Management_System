import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";

const newsData = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dcfy1v0ab/image/upload/v1772291807/photo-1582750433449-648ed127bb54_qjkmxu.jpg",
    date: "Monday 05, September 2021",
    author: "By Author",
    title: "This Article’s Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dcfy1v0ab/image/upload/v1772291807/photo-1582750433449-648ed127bb54_qjkmxu.jpg",
    date: "Monday 05, September 2021",
    author: "By Author",
    title: "This Article’s Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dcfy1v0ab/image/upload/v1772291807/photo-1582750433449-648ed127bb54_qjkmxu.jpg",
    date: "Monday 05, September 2021",
    author: "By Author",
    title: "This Article’s Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dcfy1v0ab/image/upload/v1772291807/photo-1582750433449-648ed127bb54_qjkmxu.jpg",
    date: "Monday 05, September 2021",
    author: "By Author",
    title: "This Article’s Title goes Here, but not too long.",
    views: 68,
    likes: 86,
  },
];

const News_Section = () => {
  return (
    <section className="bg-gray-100 py-6">
      {/* Heading */}
      <div className="text-center lg:mb-12 mb-5">
        <p className="text-blue-500 tracking-widest font-semibold">
          BETTER INFORMATION, BETTER HEALTH
        </p>
        <h2 className="text-4xl font-bold text-[#1F2B6C] mt-2">News</h2>
      </div>

      {/* News Grid */}
      <div className="lg:w-[85%] p-3 mx-auto flex overflow-x-auto lg:grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-lg flex-shrink-0 overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex"
          >
            {/* Image */}
            <img
              src={news.image}
              alt="news"
              className="w-40 h-40 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <p className="text-sm text-blue-500">
                  {news.date} | {news.author}
                </p>

                <h3 className="mt-2 text-lg font-medium text-gray-800">
                  {news.title}
                </h3>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 mt-4 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <FaEye className="text-blue-500" />
                  {news.views}
                </div>

                <div className="flex items-center gap-2">
                  <FaHeart className="text-red-500" />
                  {news.likes}
                </div>
              </div>
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

export default News_Section;
