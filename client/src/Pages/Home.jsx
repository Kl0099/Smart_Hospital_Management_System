import React from 'react';
import Navbar from '../Components/Home/Navbar';
import HeroSection from '../Components/Home/HeroSection';
import Welcome from '../Components/Home/Welcome';
import Service from '../Components/Home/Service';

const Home = () => {
  return (
    <div className='h-[1000vh]'>
      <Navbar/>
      <HeroSection/>
      <div className=" w-[80%]]">
        <Welcome/>
      <Service/>
      </div>
    </div>
  );
};

export default Home;
