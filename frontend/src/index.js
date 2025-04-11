import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route } from "react-router-dom";
import './index.css';
import HomePage from './landing_Page/home/HomePage';
import Signup from "./landing_Page/signup/Signup";
import AboutPage from "./landing_Page/about/AboutPage";
import ProductPage from "./landing_Page/products/ProductPage";
import PricingPage from "./landing_Page/pricing/PricingPage";
import SupportPage from "./landing_Page/support/SupportPage";


import Navbar from './landing_Page/Navbar';
import Footer from './landing_Page/Footer';
import NotFound from './landing_Page/NotFound';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/about' element={<AboutPage/>}/>
       <Route path='/product' element={<ProductPage/>}/>
       <Route path='/pricing' element={<PricingPage/>}/>
       <Route path='/support' element={<SupportPage/>}/>
       <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);


