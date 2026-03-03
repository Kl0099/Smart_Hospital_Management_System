import React from 'react';
import Home from './Pages/Home'
import Navbar from './Components/Home/Navbar';
import About from './Pages/About';
import Footer from './Components/Home/Footer';
import {BrowserRouter , Routes, Route} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
        <Footer/>
        </BrowserRouter>
    );
}

export default App;